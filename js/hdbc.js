(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 400
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

// Monatsplan Download
	// Aktuelles Jahr und Monat abrufen
	var year = new Date().getYear();
	var thisyear = 1900+year;
	var thismonth = new Date().getMonth();
	// Jahr und Monat des nächsten Monatsplans berechnen
	var nextyear, nextmonth;
	if  (thismonth == 11) {
		nextyear = thisyear+1
		nextmonth = 0; 
	} else {
		nextyear = thisyear
		nextmonth = thismonth+1;
	}
	var nextmonth;
	// Tatsächliche zweistellige Monatsnummern berechnen
	var thismonthn, thismonthfn;
	if (thismonth < 9) {
		var thismonthn = thismonth+1;
		var thismonthfn = "0"+thismonthn;
	} else {
		var thismonthfn = thismonth+1;
	}
	var nextmonthn, nextmonthfn;
	if (nextmonth < 9) {
		var nextmonthn = nextmonth+1;
		var nextmonthfn = "0"+nextmonthn;
	} else {
		var nextmonthfn = nextmonth+1;
	}
	// Monatsnamen ausgeben
	var monthnames = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]; 
	document.getElementById("thismonthname").innerHTML = monthnames[thismonth];
	document.getElementById("nextmonthname").innerHTML = monthnames[nextmonth];
	// Jahre ausgeben
	document.getElementById("thisyearname").innerHTML = thisyear;
	document.getElementById("nextyearname").innerHTML = nextyear;
	// Dateipfad berechnen und ausgeben
	document.getElementById("thismp").href= "files/Monatsplan"+thisyear+thismonthfn+".pdf";
	document.getElementById("nextmp").href= "files/Monatsplan"+thisyear+nextmonthfn+".pdf";

})(jQuery); // End of use strict
