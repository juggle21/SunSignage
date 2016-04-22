angular.module("risevision.common.header")
  .controller("RegistrationModalCtrl", [
    "$scope", "$modalInstance",
    "$loading", "registerAccount", "$log", "cookieStore",
    "userState", "pick", "uiFlowManager", "humanReadableError",
    "agreeToTermsAndUpdateUser", "account", "segmentAnalytics",
    "bigQueryLogging",
    function ($scope, $modalInstance, $loading, registerAccount, $log,
      cookieStore, userState, pick, uiFlowManager, humanReadableError,
      agreeToTermsAndUpdateUser, account, segmentAnalytics, bigQueryLogging) {

      var newUser = !account;

      var copyOfProfile = account ? account : userState.getCopyOfProfile() || {};

      //remove cookie so that it will show next time user refreshes page
      cookieStore.remove("surpressRegistration");


      $scope.profile = pick(copyOfProfile, "email", "mailSyncEnabled",
        "firstName", "lastName");
      $scope.registering = false;

      $scope.profile.accepted =
        angular.isDefined(copyOfProfile.termsAcceptanceDate) &&
        copyOfProfile.termsAcceptanceDate !== null;

      if (!angular.isDefined($scope.profile.mailSyncEnabled)) {
        //"no sign up" by default
        $scope.profile.mailSyncEnabled = false;
      }

      $scope.closeModal = function () {
        cookieStore.put("surpressRegistration", true);
        $modalInstance.dismiss("cancel");
      };

      // check status, load spinner, or close dialog if registration is complete
      var watch = $scope.$watch(
        function () {
          return uiFlowManager.isStatusUndetermined();
        },
        function (undetermined) {
          if (undetermined === true) {
            //start the spinner
            $loading.start("registration-modal");
          } else if (undetermined === false) {
            if (uiFlowManager.getStatus() === "registrationComplete") {
              $modalInstance.close("success");
              //stop the watch
              watch();
            }
            $loading.stop("registration-modal");
          }
        });

      $scope.save = function () {
        $scope.forms.registrationForm.accepted.$pristine = false;
        $scope.forms.registrationForm.firstName.$pristine = false;
        $scope.forms.registrationForm.lastName.$pristine = false;
        $scope.forms.registrationForm.email.$pristine = false;

        if (!$scope.forms.registrationForm.$invalid) {
          //update terms and conditions date
          $scope.registering = true;
          $loading.start("registration-modal");


          var action;
          if (newUser) {
            action = registerAccount(userState.getUsername(), $scope.profile);
          } else {
            action = agreeToTermsAndUpdateUser(userState.getUsername(),
              $scope.profile);
          }

          action.then(
            function () {
              userState.refreshProfile().then()
                .finally(function () {
                  segmentAnalytics.track("User Registered", {
                    "companyId": userState.getUserCompanyId(),
                    "companyName": userState.getUserCompanyName(),
                    "isNewCompany": newUser
                  });
                  bigQueryLogging.logEvent("User Registered");

                  $modalInstance.close("success");
                  $loading.stop("registration-modal");
                });
            },
            function (err) {
              alert("Error: " + humanReadableError(err));
              $log.error(err);
            })
            .finally(function () {
              $scope.registering = false;
              userState.refreshProfile();
            });
        }

      };
      $scope.forms = {};
    }
  ]);
