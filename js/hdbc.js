!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=e(this.hash);if((n=n.length?n:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:n.offset().top-57},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:400});var n=function(){e("#mainNav").offset().top>100?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")};n(),e(window).scroll(n);var t,a,r=1900+(new Date).getYear(),o=(new Date).getMonth();if(11==o?(t=r+1,a=0):(t=r,a=o+1),o<9)var i="0"+(o+1);else i=o+1;if(a<9)var s="0"+(a+1);else s=a+1;var l=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];document.getElementById("thismonthname").innerHTML=l[o],document.getElementById("nextmonthname").innerHTML=l[a],document.getElementById("thisyearname").innerHTML=r,document.getElementById("nextyearname").innerHTML=t,document.getElementById("thismp").href="Monatsplan"+r+i+".pdf",document.getElementById("nextmp").href="Monatsplan"+t+s+".pdf"}(jQuery);