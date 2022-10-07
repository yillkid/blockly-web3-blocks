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
  
/*
  function line_bot(data) {
    $.post('https://script.google.com/macros/s/AKfycbz3WttppuI_dlw0vr7o6R_sJzY06kqBOjorHR1AI32sHj7gjkgP/exec',
      data,
      function(e){
		console.log(e);
      });
  }
*/

  // window.line_ifttt = line_ifttt;
  window.line_notify = line_notify;
  // window.line_bot = line_bot;

}(window, window.document));
