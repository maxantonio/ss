
// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if (navigator.appVersion.indexOf("Mac") !== -1) {
	jQuery('html').addClass('osx');
}

// When DOM is fully loaded
jQuery(document).ready(function($) {
  "use strict";


  $('.selectpicker').selectpicker();

  $(function() {
      fakewaffle.responsiveTabs(['xs', 'sm']);
  });



$(window).load(function() { 


/* --------------------------------------------------------	
	 Isotope
   --------------------------------------------------------	*/   
    $('.portfolio-masonry-container').isotope({
        itemSelector: '.portfolio-masonry-item',
        layoutMode: 'masonry',
        onLayout: function () {

        }
    });

    $('.blog-masonry-container').isotope({
        itemSelector: '.blog-masonry-post',
        layoutMode: 'masonry'
    });

    $('.filter li a').on('click', function (event) {    
        event.preventDefault();        
        var selector = $(this).attr('data-filter');
        var container = $(this).closest('.portfolio-masonry-all').find('.portfolio-masonry-container');
        container.isotope({
            filter: selector
        });
        $(this).closest('ul.filter').children('li').removeClass('active');
        $(this).parent('li').addClass('active');

    });


   $(".player").mb_YTPlayer();

 // home page slider for parallax
  $('.main-slider').flexslider({
    animation: "slide",
    slideshow: false,
    useCSS : false,
    prevText: "",
    nextText: "",    
    animationLoop: true 	
  });
  

  
  
 // owl carousel
  $('.carousel-items-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    navText: [],
    smartSpeed:650,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
  });   



  $('.carousel-single-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    navText: [],
    smartSpeed:650,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
  });

  $('.carousel-single-slider-dots').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    navText: [],
    smartSpeed:650,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
  });

  // Iona range slider
  $("#shop_price").ionRangeSlider({
    type: "double",
    min: 1,
    max: 1000,
    from: 100,
    to: 900,
    hide_min_max: true,
    hide_from_to: false,
    step: 1,
    prefix: "$",    
    grid: true,
    force_edges: true,
    prettify_enabled: true,
    prettify_separator: "."
  });
  

}); 

/* --------------------------------------------------------	
	 Fitvids
   --------------------------------------------------------	*/	

      $("body").fitVids();

/* --------------------------------------------------------	
	 External links
   --------------------------------------------------------	*/	 
			$('a[rel=external]').attr('target','_blank');	

/* --------------------------------------------------------	
	 Tooltips
   --------------------------------------------------------	*/		
    $('body').tooltip({
        delay: { show: 300, hide: 0 },
        selector: '[data-toggle=tooltip]:not([disabled])'
    });
    

/* --------------------------------------------------------	
	 Popovers
   --------------------------------------------------------	*/	
    $('body').popover({
      selector: '[data-toggle=popover]:not([disabled])'
    });
    
/* --------------------------------------------------------	
	  superslides for fullwidth video
   --------------------------------------------------------	*/

  $('#slides').superslides();


 /* --------------------------------------------------------	
	Countdown
  --------------------------------------------------------	*/   
  $(function() {
  
    $('.countdown').countdown({
      date: "july 24, 2015 15:00:00",  /* set your date and time here */
      render: function(data) {
        var el = $(this.el);
        el.empty()
          .append("<div class=\"countdown-item item-day\">" + this.leadingZeros(data.days, 2) + "</div>")
          .append("<div class=\"countdown-item\">" + this.leadingZeros(data.hours, 2) + "</div>")
          .append("<div class=\"countdown-item\">" + this.leadingZeros(data.min, 2) + "</div>")
          .append("<div class=\"countdown-item\">" + this.leadingZeros(data.sec, 2) + "</div>");
      }
    });

  });

 
 /* --------------------------------------------------------	
	Images portfolio
  --------------------------------------------------------	*/  

  // magnific popoup 
  $('.popup-link').magnificPopup({
  		type: 'image'
  	});
    
   // magnific popoup for video 
   $('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
  
  

// image gallery
  
 $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
}); 

 
 
 /* --------------------------------------------------------	
	 Back To Top Button
   --------------------------------------------------------	*/	
  (function() {

    $('<a href="#" class="back-to-top"></a>').appendTo($('body'));
  })(); 
  
  // hide #back-top first
	$(".back-to-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1000) {
				$('.back-to-top').fadeIn("fast");
			} else {
				$('.back-to-top').fadeOut("fast");
			}
		});

	  // scroll body to 0px on click
		$('.back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});
  
 /* --------------------------------------------------------  
    Sticky for navbar
   --------------------------------------------------------	*/	

//  $('.navbar').sticky({topSpacing:0});

/* --------------------------------------------------------	
	 Move Nav
   --------------------------------------------------------	*/

  $(window).scroll(function(){ 
   if ($(this).scrollTop() >  50 ){ 
    
      $('.navbar').addClass("navbar-move");
    } 
    else{
      $('.navbar').removeClass("navbar-move");
    }
  });
  

/* --------------------------------------------------------	
	 Mobile navigation
   --------------------------------------------------------	*/	
  $('header nav').meanmenu({
        meanMenuClose: "X", // single character you want to represent the close menu button
        meanMenuCloseSize: "22px", // set font size of close button
        meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
        meanRevealPosition: "right", // left right or center positions
        meanRevealPositionDistance: "0", // Tweak the position of the menu
        meanRevealColour: "", // override CSS colours for the reveal background
        meanRevealHoverColour: "", // override CSS colours for the reveal hover
        meanScreenWidth: "991", // set the screen width you want meanmenu to kick in at
        meanNavPush: "", // set height in px, em or % if you want to budge your layout now the navigation is missing.
        meanShowChildren: true, // true to show children in the menu, false to hide them
        meanExpandableChildren: true, // true to allow expand/collapse children
        meanExpand: "+", // single character you want to represent the expand for ULs
        meanContract: "-", // single character you want to represent the contract for ULs
        meanRemoveAttrs: false // true to remove classes and IDs, false to keep them
	});

  var height = jQuery(window).height();

  jQuery('.mean-container .navbar-inner, .mean-container .mean-nav').css('max-height', height+'px');

  jQuery(window).resize(function() {
    var height = jQuery(window).height();
    jQuery('.mean-container .navbar-inner, .mean-container .mean-nav').css('max-height', height+'px');
  });

  $('.mean-container .mean-nav li > a:first-child').click(function(){
    $('.meanmenu-reveal').trigger('click');
  });



// detect mobile devices

   var detectmob = false;	
   if(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {							
      detectmob = true;
	}
  

  if (detectmob === false) {
      $('*[data-ani]').addClass('animated');
  }
  
 $('.animated').appear(function() {
  $(this).each(function(){ 
    $(this).css('visibility','visible');
    $(this).addClass($(this).data('type'));
  });
},{accY: -100});



$('.skill-shortcode').appear(function() {
  $('.progress').each(function(){ 
    $('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
  });
},{accY: -100}); 




// Parallax   
	if (detectmob === true) {
    $( '.parallax' ).each(function(){
				$(this).addClass('parallax-mobile');
		});
  }
  else {
  
  	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
      $( '#parallax-home' ).parallax("100%", 0.5,true);
      $( '#parallax-one' ).parallax("100%", 0.5,true);
      $( '#parallax-two' ).parallax("100%", 2,false); // Add more
      $( '#parallax-three' ).parallax("100%", 0.5,true); // Add more
      $( '#parallax-four' ).parallax("100%", 0.5,false); // Add more
      $( '#parallax-five' ).parallax("100%", 0.5,false); // Add more
    }


// animated counter 

$('.timer').countTo();

$('.counter-item').appear(function() {
    $('.timer').countTo();
},{accY: -100}); 

   
 
    // LayerSlider 
    $('#layerslider').layerSlider({
            pauseOnHover: false,
            firstLayer: 1,
            navButtons: false,
            navStartStop: false,
            skin: 'v5',
            skinsPath: '/layerslider/skins/'

    });


// Contact Form 		
	$('#send').click(function(){ // when the button is clicked the code executes
		$('.error').fadeOut('slow'); // reset the error messages (hides them)

		var error = false; // we will set this true if the form isn't valid

		var name = $('input#name2').val(); // get the value of the input field
		if(name == "" || name == " " || name == "Name") {
    $('#err-name').show(500);
    $('#err-name').delay(4000);
    $('#err-name').animate({
      height: 'toggle'  
    }, 500, function() {
      // Animation complete.
    }); 
      error = true; // change the error state to true
		}

		var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
		var email = $('input#email2').val().toLowerCase(); // get the value of the input field
		if (email == "" || email == " " || email == "E-mail") { // check if the field is empty
			$('#err-email').fadeIn('slow'); // error - empty
			error = true;
		}else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable

    $('#err-emailvld').show(500);
    $('#err-emailvld').delay(4000);
    $('#err-emailvld').animate({
      height: 'toggle'  
    }, 500, function() {
      // Animation complete.
    });         
			error = true;
		}
    
		var message = $('textarea#message2').val(); // get the value of the input field
		if(message == "" || message == " " || message == "Message") {

      
    $('#err-message').show(500);
    $('#err-message').delay(4000);
    $('#err-message').animate({
      height: 'toggle'  
    }, 500, function() {
      // Animation complete.
    });            
			error = true; // change the error state to true
		} 

		if(error == true) {

    $('#err-form').show(500);
    $('#err-form').delay(4000);
    $('#err-form').animate({
      height: 'toggle'  
    }, 500, function() {
      // Animation complete.
    });         
			return false;
		}

		var data_string = $('#ajax-form').serialize(); // Collect data from form
		//alert(data_string);

		$.ajax({
			type: "POST",
			url: $('#ajax-form').attr('action'),
			data: data_string,
			timeout: 6000,
			error: function(request,error) {
				if (error == "timeout") {
					$('#err-timedout').slideDown('slow');
				}
				else {
					$('#err-state').slideDown('slow');
					$("#err-state").html('An error occurred: ' + error + '');
				}
			},
			success: function() {

        
    $('#ajaxsuccess').show(500);
    $('#ajaxsuccess').delay(4000);
    $('#ajaxsuccess').animate({
      height: 'toggle'  
    }, 500, function() {
    });           

        $("#name").val('');
        $("#email").val('');
        $("#message").val('');
			}
		});

		return false; // stops user browser being directed to the php file
	}); // end click function
     


});

