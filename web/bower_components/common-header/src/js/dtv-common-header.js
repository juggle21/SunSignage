angular.module("risevision.common.header", [
  "ui.router",
  "risevision.common.userstate",
  "risevision.common.account",
  "risevision.common.gapi",
  "risevision.core.cache",
  "risevision.core.company",
  "risevision.common.company",
  "risevision.common.cookie",
  "LocalStorageModule",
  "risevision.common.header.templates",
  "risevision.common.header.directives",
  "risevision.common.loading",
  "risevision.ui-flow",
  "risevision.common.systemmessages", "risevision.core.systemmessages",
  "risevision.core.countries",
  "risevision.core.oauth2",
  "risevision.common.geodata",
  "risevision.store.data-gadgets",
  "risevision.common.util",
  "risevision.core.userprofile",
  "risevision.common.registration",
  "risevision.common.shoppingcart",
  "checklist-model",
  "ui.bootstrap", "ngSanitize", "ngCsv", "ngTouch",
  "risevision.common.components.last-modified",
  "risevision.common.components.search-filter",
  "risevision.common.components.scrolling-list",
  "risevision.common.components.stop-event",
  "risevision.common.components.analytics",
  "risevision.common.svg",
  "risevision.common.support"
])

.factory("bindToScopeWithWatch", [

  function () {
    return function (fnToWatch, scopeVar, scope) {
      scope.$watch(function () {
          return fnToWatch.call();
        },
        function (val) {
          scope[scopeVar] = val;
        });
    };
  }
])

.directive("commonHeader", ["$modal", "$rootScope", "$q", "$loading",
  "$interval", "oauth2APILoader", "$log",
  "$templateCache", "userState", "$location", "bindToScopeWithWatch",
  "$document", "cookieTester",
  function ($modal, $rootScope, $q, $loading, $interval,
    oauth2APILoader, $log, $templateCache, userState, $location,
    bindToScopeWithWatch, $document, cookieTester) {
    return {
      restrict: "E",
      template: $templateCache.get("common-header.html"),
      scope: false,
      link: function ($scope, element, attr) {
        cookieTester.checkCookies().then(function () {
          $scope.cookieEnabled = true;
        }, function () {
          $scope.cookieEnabled = false;
        });
        $scope.navCollapsed = true;
        $scope.inRVAFrame = userState.inRVAFrame();
        $scope.isSubcompanySelected = userState.isSubcompanySelected;
        $scope.isTestCompanySelected = userState.isTestCompanySelected;

        // If nav options not provided use defaults
        if (!$scope[attr.navOptions]) {
          $scope.navOptions = [{
            title: "Home",
            link: "#/"
          }, {
            title: "Store",
            link: ""
          }, {
            title: "Account",
            link: ""
          }, {
            title: "Sellers",
            link: ""
          }, {
            title: "Platform",
            link: "http://rva.risevision.com/",
            target: "_blank"
          }];
        }

        //default to true
        $scope.hideShoppingCart = attr.hideShoppingCart !== "0" &&
          attr.hideShoppingCart !== "false";
        $scope.hideHelpMenu = attr.hideHelpMenu !== "0" &&
          attr.hideHelpMenu !== "false";

        // used by userState; determines if the URL root is used for
        // Authentication redirect
        $rootScope.redirectToRoot = attr.redirectToRoot !== "0" &&
          attr.redirectToRoot !== "false";

        // disable opening home page in new tab (default true)
        $rootScope.newTabHome = attr.newTabHome !== "0" &&
          attr.newTabHome !== "false";

        bindToScopeWithWatch(userState.isRiseVisionUser,
          "isRiseVisionUser",
          $scope);

        $rootScope.$on("$stateChangeSuccess", function () {
          if ($scope.inRVAFrame) {
            $location.search("inRVA", $scope.inRVAFrame);
          }
        });

        //insert meta tag to page to prevent zooming in in mobile mode
        var viewPortTag = $document[0].createElement("meta");
        viewPortTag.id = "viewport";
        viewPortTag.name = "viewport";
        viewPortTag.content =
          "width=device-width, initial-scale=1, user-scalable=no";
        $document[0].getElementsByTagName("head")[0].appendChild(
          viewPortTag);
      }
    };
  }
])

.run(["$rootScope", "userState", "selectedCompanyUrlHandler",
  function ($rootScope, userState, selectedCompanyUrlHandler) {
    $rootScope.$on("risevision.company.selectedCompanyChanged",
      function (newCompanyId) {
        if (newCompanyId) {
          selectedCompanyUrlHandler.updateUrl();
        }
      });

    //detect selectCompany changes on route UI
    $rootScope.$on("$stateChangeSuccess", selectedCompanyUrlHandler.updateSelectedCompanyFromUrl);
    $rootScope.$on("$routeChangeSuccess", selectedCompanyUrlHandler.updateSelectedCompanyFromUrl);
    $rootScope.$on("$locationChangeSuccess", selectedCompanyUrlHandler.locationChangeSuccess);
  }
])

.run(["segmentAnalytics", "SEGMENT_API_KEY", "ENABLE_INTERCOM_MESSAGING",
    "analyticsEvents",
    function (segmentAnalytics, SEGMENT_API_KEY, ENABLE_INTERCOM_MESSAGING,
      analyticsEvents) {
      analyticsEvents.initialize();
      segmentAnalytics.load(SEGMENT_API_KEY, ENABLE_INTERCOM_MESSAGING);
    }
  ])
  .directive("ngEnter", function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        }
      });
    };
  });

angular.module("risevision.common.header.directives", []);
