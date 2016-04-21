/*
 * App Configuration File
 * Put environment-specific global variables in this file.
 *
 * In general, if you put an variable here, you will want to
 * make sure to put an equivalent variable in all three places:
 * dev.js, test.js & prod.js
 *
 */

(function (angular) {

  'use strict';

  angular.module('risevision.common.i18n.config', [])
    .constant('LOCALES_PREFIX',
      //'bower_components/rv-common-i18n/dist/locales/translation_')  //FIX TO : dist locales
      'locales/translation_')
    .constant('LOCALES_SUFIX', '.json');

  angular.module('risevision.apps.config', [])
    .value('STORAGE_API_ROOT',
      'https://storage-dot-rvaserver2.appspot.com/_ah/api')
    .value('CORE_URL', 'https://rvaserver2.appspot.com/_ah/api') // override default core value
    .value('STORE_ENDPOINT_URL',
      'https://store-dot-rvaserver2.appspot.com/_ah/api') // override default Store server value
    .value('STORE_SERVER_URL', 'https://store-dot-rvaserver2.appspot.com/')
    .value('RVA_URL', 'http://rva-test.appspot.com')
    .value('VIEWER_URL', 'http://preview.risevision.com')
    .value('ALERTS_WS_URL',
      'https://rvaserver2.appspot.com/alerts/cap')

  .value('STORAGE_ENDPOINT_URL',
    'https://storage-dot-rvaserver2.appspot.com/_ah/api');

})(angular);
