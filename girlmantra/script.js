
$(document).ready(function() {
	$(window).on("load scroll", function() {
	  var parallaxElement = $(".logoimg"),
		parallaxQuantity = parallaxElement.length;
	  window.requestAnimationFrame(function() {
		for (var i = 0; i < parallaxQuantity; i++) {
		  var currentElement = parallaxElement.eq(i),
			windowTop = $(window).scrollTop(),
			elementTop = currentElement.offset().top,
			elementHeight = currentElement.height(),
			viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
			scrolled = windowTop - elementTop + viewPortHeight;
		  currentElement.css({
			transform: "translate3d(0," + (scrolled * -0.15 > -80 ? scrolled * -0.15<-20? scrolled * -0.15:-20 :-80 ) + "px, 0)"
		  });
		}
	  });
	});
  });