(function ($) {
	"use strict";

	jQuery(document).ready(function($){


		$(".embed-responsive iframe").addClass("embed-responsive-item");
		$(".carousel-inner .item:first-child").addClass("active");
		
		$('[data-toggle="tooltip"]').tooltip();


		// toggle menu

		$(".toggle-btn").click(function(){
			$(this).toggleClass("active2");
			$(".navigation").toggleClass("active2");

		});

		//toggle menu on mobile device

		$("ul.navigation li").click(function(){
			$('.navbar-collapse').removeClass('in');
		});

		//change menu background

		$(window).scroll(function(){
			if($(document).scrollTop() > 200){
				$(".top-area").addClass('menu-bg');
			}else{
				$(".top-area").removeClass('menu-bg');
			}
		});

		//bootstrap scroll spy 

		$('body').scrollspy({
			target: '.navbar',
			offset: 95
		});


		//jquery smooth scroll

		$('li.smooth-menu a, .home-arrow-down a').bind('click', function (event) {
			var $anchor = $(this);
			var headerH = '63';

			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');
			//you can use any animation
			event.preventDefault();
		});

		//counter js

		$('.counter-num').counterUp();

		//mixItUp js

		$('.work-inner').mixItUp();

		//wow js

		new WOW().init();

		
        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

         var magnifPopup = function () {
         	$('.work-popup').magnificPopup({
         		type: 'image',
         		removalDelay: 300,
         		mainClass: 'mfp-with-zoom',
         		gallery: {
         			enabled: true
         		},
         		zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
         };
        // Call the functions 
        magnifPopup();


        


    });


    // jQuery(window).load(function(){

    	
    // });


}(jQuery));	