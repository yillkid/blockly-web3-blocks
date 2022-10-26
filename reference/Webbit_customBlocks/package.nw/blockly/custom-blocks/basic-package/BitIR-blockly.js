+(function (scope, webduino) {

  'use strict';

  /**
   * 由於webduino-js版本沒有統一不好管理，新增BitIRLed取代原本的IRRecv.js
   * 
   * Bit support setting pin
   */
  scope.IrLed = (function () {
    const instances = {};

    return {
      init: function (board, pin) {
        const boardID = board._options.device || board._options.url;
        const tagetObject = `${boardID}_${pin}`;

        if (!instances[tagetObject]) {
          instances[tagetObject] = new webduino.module.BitIRLed(board, scope.bitGPIO(pin));
        }
        return instances[tagetObject];
      }
    }
  })();

  scope.IrRecv = (function () {
    const instances = {};

    return {
      init: function (board, pin) {
        const boardID = board._options.device || board._options.url;
        const tagetObject = `${boardID}_${pin}`;

        if (!instances[tagetObject]) {
          instances[tagetObject] = new webduino.module.BitIRRecv(board, scope.bitGPIO(pin));
        }
        return instances[tagetObject];
      }
    }
  })();

}(window, window.webduino));
