$(document).ready(function() {

	//Carousel
  	$(".carousel").slick({
        arrows: true,
        dots: true,
        lazyLoad: 'progressive',
        autoplay: true,
        infinite: true
      });

	// //Navbar
	//Position indicator
	var setActive = function(elem) {
		$('.navopt').removeClass("active");
		elem.addClass('active');
	}
	var setNav = function() {
		var navOffset = 110;
		var introPos = $('#home').offset().top - navOffset;
		var videoPos = $('#action').offset().top - navOffset;
		var tricolumnPos = $('#process').offset().top - navOffset;
		var carouselPos = $('#crew').offset().top - navOffset;
		var navPos = $(window).scrollTop();
		if(navPos < videoPos) {
			setActive($('#homeNav'));
		}
		else if(navPos < tricolumnPos) {
			setActive($('#actionNav'));
		}
		else if(navPos < carouselPos) {
			setActive($('#processNav'));
		}
		else {
			setActive($('#crewNav'));
		}
		//Check bottom
		if(navPos + $(window).height() >= $(document).height()-5) {
			setActive($('#crewNav'));
		}
	}

	//Expand/shrink navbar
	var setBarSize = function() {
		var pos = $(window).scrollTop();
		if(pos >= 100) { //Smaller bar
			$('.top-bar').stop().animate({
				padding: '0px'
			}, {duration: 30, queue: false});
		}
		else { //Larger Bar
			$('.top-bar').stop().animate({
				padding: '20px'
			}, {duration: 30, queue: false});
		}
	}

	$(document).scroll(function() {
		setNav();
		setBarSize();
		//Hide the extension menu on scroll
		if($(window).width() < 1024) { //Medium and under
			$("#main-menu").hide(); //Hide the extension menu
		}
	});
	// set the active nav element  and bar size at the beginning
	setNav();
	setBarSize();


});