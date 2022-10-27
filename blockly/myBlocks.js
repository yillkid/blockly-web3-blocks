+(function (window, document) {

  'use strict';

 function write_to_testnet(ip, pin, val) {
	var url = "http://"+ip+"/?digitalwrite="+pin+";"+val;
	console.log(url);
	fetch(url);
 }


  window.write_to_testnet = write_to_testnet;

}(window, window.document));
