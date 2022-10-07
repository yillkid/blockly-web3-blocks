+(function (window, document) {

  'use strict';
  
  function line_notify(data) {
    console.log("hello QQQQ");
    $.post('https://script.google.com/macros/s/AKfycbx8CHul0yv0cPv-5DJLDz9hY1kZqQjm_7iLckjwKGEsjmtOuOc/exec',
      data,
      function(e){
		console.log(e);
      });
  }
  window.line_notify = line_notify;

}(window, window.document));
