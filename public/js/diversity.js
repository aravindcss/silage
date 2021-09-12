$(document).ready(function() {	

var anim;
var elem = document.getElementById('bodymovin')
var animData = {
  container: document.getElementById('heart'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '../public/json/data.json' // the path to the animation json
};
anim = bodymovin.loadAnimation(animData);

	$(window).scroll(function() {
	    if ($(window).scrollTop() > 100) {
	    	// anim.play();
	    	setTimeout(function(){ anim.play(); }, 300);
	    }
	});
});