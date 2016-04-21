'use strict';

angular.module('risevision.storage.services')
  .factory('XHRFactory', [function () {
    return {
      get: function () {
        return new XMLHttpRequest();
      }
    };
  }])
  .factory('FileUploader', ['$rootScope', '$q', 'XHRFactory',
    function ($rootScope, $q, XHRFactory) {
      var svc = {};

      svc.url = '/';
      svc.alias = 'file';
      svc.headers = {};
      svc.queue = [];
      svc.progress = 0;
      svc.method = 'PUT'; //'POST';
      svc.formData = [];
      svc.queueLimit = Number.MAX_VALUE;
      svc.withCredentials = false;
      svc.isUploading = false;
      svc.nextIndex = 0;

      svc.addToQueue = function (files, options) {
        var deferred = $q.defer();
        var counter = 0;

        var enqueue = function (file) {
          var deferred = $q.defer();

          // Checks it's a file and queue size is not exceeded
          if ((file.size || file.type) && svc.queue.length < svc.queueLimit) {
            var fileItem = new FileItem(svc, file, options);
            svc.queue.push(fileItem);
            svc.onAfterAddingFile(fileItem).then(deferred.resolve);
          } else {
            console.log('File not added to queue: ', file);

            deferred.resolve();
          }

          return deferred.promise;
        };

        if (counter < files.length) {
          enqueue(files[counter++])
            .then(function () {
              for (; counter < files.length; counter++) {
                enqueue(files[counter]);
              }

              svc.progress = svc.getTotalProgress();
              svc.render();

              deferred.resolve();
            });
        }

        return deferred.promise;
      };

      svc.removeFromQueue = function (value) {
        var index = svc.getIndexOfItem(value);
        var item = svc.queue[index];

        if (item && item.isUploading) {
          svc.cancelItem(item);
        }

        if (index >= 0 && index < svc.queue.length) {
          svc.queue.splice(index, 1);
        }

        svc.progress = svc.getTotalProgress();
      };

      svc.removeAll = function () {
        for (var i = svc.queue.length - 1; i >= 0; i--) {
          svc.removeFromQueue(svc.queue[i]);
        }
      };

      svc.uploadItem = function (value) {
        var index = svc.getIndexOfItem(value);
        var item = svc.queue[index];

        if (!item) {
          return;
        }

        item.index = item.index || ++svc.nextIndex;
        item.isReady = true;

        if (svc.isUploading) {
          return;
        }

        svc.isUploading = true;
        svc.xhrTransport(item);
      };

      svc.cancelItem = function (value) {
        var index = svc.getIndexOfItem(value);
        var item = svc.queue[index];
        if (item && item.isUploading) {
          item.xhr.abort();
        }
      };

      svc.retryItem = function (value) {
        var index = svc.getIndexOfItem(value);
        var item = svc.queue[index];

        if (!item) {
          return;
        }

        item.isReady = false;
        item.isUploading = false;
        item.isUploaded = false;
        item.isSuccess = false;
        item.isCancel = false;
        item.isError = false;
        item.isRetrying = true;
        item.progress = 0;

        svc.onAfterAddingFile(item);
      };

      svc.getErrorCount = function () {
        return svc.queue.filter(function (f) {
          return f.isError === true;
        }).length;
      };

      svc.getNotErrorCount = function () {
        return svc.queue.filter(function (f) {
          return f.isError === false;
        }).length;
      };

      svc.getIndexOfItem = function (value) {
        return angular.isNumber(value) ? value : svc.queue.indexOf(value);
      };

      svc.getNotUploadedItems = function () {
        return svc.queue.filter(function (item) {
          return !item.isUploaded;
        });
      };

      svc.getReadyItems = function () {
        return svc.queue
          .filter(function (item) {
            return (item.isReady && !item.isUploading);
          })
          .sort(function (item1, item2) {
            return item1.index - item2.index;
          });
      };

      svc.getTotalProgress = function (value) {
        var notUploaded = svc.getNotUploadedItems().length;
        var uploaded = notUploaded ? svc.queue.length - notUploaded : svc.queue
          .length;
        var ratio = 100 / svc.queue.length;
        var current = (value || 0) * ratio / 100;

        return Math.round(uploaded * ratio + current);
      };

      svc.render = function () {
        if (!$rootScope.$$phase) {
          $rootScope.$apply();
        }
      };

      svc.isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
      };

      svc.notifyBeforeUploadItem = function (item) {
        item.isReady = true;
        item.isUploading = true;

        svc.onBeforeUploadItem(item);
      };

      svc.notifyProgressItem = function (item, progress) {
        var total = svc.getTotalProgress(progress);
        svc.progress = total;
        item.progress = progress;

        svc.render();
      };

      svc.notifyCancelItem = function (item, status) {
        item.isReady = false;
        item.isUploading = false;
        item.isCancel = true;

        svc.onCancelItem(item, status);
      };

      svc.notifyCompleteItem = function (item, status) {
        svc.onCompleteItem(item, status);

        var nextItem = svc.getReadyItems()[0];
        svc.isUploading = false;

        if (angular.isDefined(nextItem)) {
          svc.uploadItem(nextItem);
          return;
        }

        svc.progress = svc.getTotalProgress();
        svc.render();
      };

      svc.notifySuccessItem = function (item) {
        item.isReady = false;
        item.isUploading = false;
        item.isUploaded = true;
        item.isSuccess = true;
        item.progress = 100;
      };

      svc.notifyErrorItem = function (item) {
        item.isReady = false;
        item.isUploading = false;
        item.isUploaded = true;
        item.isError = true;
      };

      svc.xhrTransport = function (item) {
        var xhr = item.xhr = XHRFactory.get();
        var form = new FormData();

        svc.notifyBeforeUploadItem(item);

        angular.forEach(item.formData, function (obj) {
          angular.forEach(obj, function (value, key) {
            form.append(key, value);
          });
        });

        form.append(item.alias, item.domFileItem, item.file.name);

        xhr.upload.onprogress = function (event) {
          var previousChunkBytes, progress;

          if (event.lengthComputable) {
            previousChunkBytes = item.chunkSize * (item.currentChunk - 1);
            progress = (event.loaded + previousChunkBytes) / item.file.size;
            progress = Math.round(progress * 100);
          } else {
            progress = 0;
          }

          svc.notifyProgressItem(item, progress);
        };

        xhr.onload = function () {
          var gist = svc.isSuccessCode(xhr.status) ? 'Success' : 'Error';
          var method = 'notify' + gist + 'Item';
          var range;

          if (xhr.status === 308) {
            try {
              range = xhr.getResponseHeader('Range');
            } catch (e) {}

            this.sendChunk(parseInt(range.split('-')[1], 10) + 1);
          } else if (xhr.status === 503) {
            xhr.requestNextStartByte();
          } else {
            svc[method](item, xhr.status);
            svc.notifyCompleteItem(item, xhr.status);
          }
        };

        xhr.onerror = function () {
          svc.notifyErrorItem(item, xhr.status);
          svc.notifyCompleteItem(item, xhr.status);
        };

        xhr.onabort = function () {
          svc.notifyCancelItem(item, xhr.status);
          svc.notifyCompleteItem(item, xhr.status);
        };

        xhr.requestNextStartByte = function () {
          xhr.open(item.method, item.url, true);
          xhr.withCredentials = item.withCredentials;
          xhr.setRequestHeader('Content-Range', 'bytes */' + item.file.size);
          xhr.send();
        };

        xhr.sendChunk = function (startByte) {
          var endByte = startByte + item.chunkSize - 1;
          var range = 'bytes ' + startByte + '-' +
            Math.min(endByte, item.file.size - 1) +
            '/' + item.file.size;
          item.currentChunk = item.currentChunk ? item.currentChunk + 1 :
            1;

          xhr.open(item.method, item.url, true);
          xhr.withCredentials = item.withCredentials;

          angular.forEach(item.headers, function (value, name) {
            xhr.setRequestHeader(name, value);
          });

          xhr.setRequestHeader('Content-Range', range);
          xhr.send(item.domFileItem.slice(startByte, startByte + item.chunkSize));
        };

        xhr.sendChunk(0);

        svc.render();
      };

      function FileItem(uploader, file, options) {
        angular.extend(this, {
          url: uploader.url,
          alias: uploader.alias,
          headers: angular.copy(uploader.headers),
          formData: angular.copy(uploader.formData),
          withCredentials: uploader.withCredentials,
          method: uploader.method
        }, options, {
          uploader: uploader,
          domFileItem: file,
          file: {
            'lastModifiedDate': angular.copy(file.lastModifiedDate),
            'size': file.size,
            'type': file.type,
            'name': file.webkitRelativePath || file.name
          },
          isReady: false,
          isUploading: false,
          isUploaded: false,
          isSuccess: false,
          isCancel: false,
          isError: false,
          progress: 0,
          index: null
        });
      }

      return svc;
    }
  ]);
