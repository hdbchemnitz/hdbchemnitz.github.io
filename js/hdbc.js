(function($){"use strict";$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:(target.offset().top-57)},1000,"easeInOutExpo");return!1}}});$('.js-scroll-trigger').click(function(){$('.navbar-collapse').collapse('hide')});$('body').scrollspy({target:'#mainNav',offset:400});var navbarCollapse=function(){if($("#mainNav").offset().top>100){$("#mainNav").addClass("navbar-shrink")}else{$("#mainNav").removeClass("navbar-shrink")}};navbarCollapse();$(window).scroll(navbarCollapse);var year=new Date().getYear();var thisyear=1900+year;var thismonth=new Date().getMonth();var nextyear,nextmonth;if(thismonth==11){nextyear=thisyear+1
nextmonth=0}else{nextyear=thisyear
nextmonth=thismonth+1}
var nextmonth;var thismonthn,thismonthfn;if(thismonth<9){var thismonthn=thismonth+1;var thismonthfn="0"+thismonthn}else{var thismonthfn=thismonth+1}
var nextmonthn,nextmonthfn;if(nextmonth<9){var nextmonthn=nextmonth+1;var nextmonthfn="0"+nextmonthn}else{var nextmonthfn=nextmonth+1}
var monthnames=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];document.getElementById("thismonthname").innerHTML=monthnames[thismonth];document.getElementById("nextmonthname").innerHTML=monthnames[nextmonth];document.getElementById("thisyearname").innerHTML=thisyear;document.getElementById("nextyearname").innerHTML=nextyear;document.getElementById("thismp").href="files/Monatsplan"+thisyear+thismonthfn+".pdf";document.getElementById("nextmp").href="files/Monatsplan"+thisyear+nextmonthfn+".pdf"})(jQuery)