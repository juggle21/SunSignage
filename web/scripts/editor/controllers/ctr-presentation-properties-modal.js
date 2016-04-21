'use strict';

angular.module('risevision.editor.controllers')
  .controller('PresentationPropertiesModalController', ['$scope',
    '$modalInstance', 'presentationPropertiesFactory', 'editorFactory',
    'placeholdersFactory', 'userState', '$modal', '$templateCache',
    function ($scope, $modalInstance, presentationPropertiesFactory,
      editorFactory, placeholdersFactory, userState, $modal, $templateCache) {

      $scope.presentationProperties = presentationPropertiesFactory.getPresentationProperties();
      $scope.companyId = userState.getSelectedCompanyId();
      $scope.placeholders = placeholdersFactory.getPlaceholders();

      $scope.copy = function () {
        editorFactory.copyPresentation();
        $scope.dismiss();
      };

      $scope.apply = function () {
        if (!$scope.presentationPropertiesDetails.$invalid) {
          presentationPropertiesFactory.setPresentationProperties($scope.presentationProperties);
          $scope.dismiss();
        }
      };

      $scope.dismiss = function () {
        $modalInstance.dismiss();
      };

      $scope.confirmDelete = function () {
        $scope.modalInstance = $modal.open({
          template: $templateCache.get(
            'confirm-instance/confirm-modal.html'),
          controller: 'confirmInstance',
          windowClass: 'modal-custom',
          resolve: {
            confirmationTitle: function () {
              return 'editor-app.details.deleteTitle';
            },
            confirmationMessage: function () {
              return 'editor-app.details.deleteWarning';
            },
            confirmationButton: function () {
              return 'common.delete-forever';
            },
            cancelButton: null
          }
        });

        $scope.modalInstance.result.then(function () {
          $modalInstance.dismiss();
          editorFactory.deletePresentation();
        });
      };
    }
  ]); //ctr
