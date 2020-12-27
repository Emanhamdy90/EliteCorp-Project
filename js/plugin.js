/*global $,document,console*/

$(document).ready(function () {
	
	"use strict";
	
	//adjust slider height
	
	var windowH = $(window).height(),
		navbarH = $('.navbar').innerHeight(),
		upperbarH = $('.upper-bar').innerHeight();
	$('.slider, .carousel-item').height(windowH - (navbarH + upperbarH));
	
	//Featured work shuffle
	
	$('.featured-work .features-items li').on('click', function () {
		
		$(this).addClass('active').siblings().removeClass('active');
		
		//console.log($(this).data('class'));
		
		if ($(this).data('class') === 'all') {
			
			$($('.shuffle-imgs .col-md')).css('opacity', '1');
			
		} else {
			
			$($('.shuffle-imgs .col-md')).css('opacity', '.09');
			
			$($(this).data('class')).parent().css('opacity', '1');
		}
	});
	
});