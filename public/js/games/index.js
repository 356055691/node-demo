
require('../../css/games/style.css');
var $ = require("jquery");

$(
	function (){
		$('.go').on('click', function() {
			$('#player').stop();
			$('#player').animate({'left': '+=10px'});
			set();
		});
	}
);
function set() {
	setInterval("clock()", 50);
}
function clock() {
  alert();
}