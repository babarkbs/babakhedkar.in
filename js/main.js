$(function(){$(".chart").easyPieChart({easing:"easeOutBounce",barColor:"#9300ff",onStep:function(t,e,a){$(this.el).find(".percent").text(Math.round(a))}});window.chart=$(".chart").data("easyPieChart")}),function(t){"use strict";var e=Math.floor(2*Math.random())+0,a="img/face"+e+".jpg";t(".face-img").attr("src",a),t(".up").click(function(){t("html, body").animate({scrollTop:0},1e3)}),t(".top-contact").click(function(){t("html, body").animate({scrollTop:t("#contact").offset().top},1e3)}),t(".top-menu").click(function(){t("nav").fadeToggle(300)}),t(".top-dark").click(function(){t(".settings").css("left","-200"),t(this).hasClass("active")||(t("head").append("<link class='dark-theme' href='css/dark.css' type='text/css' rel='stylesheet' />"),t(".settings .btn").removeClass("active"),t(".top-dark").addClass("active"))}),t(".top-white").click(function(){t(".settings").css("left","-200"),t(this).hasClass("active")||(t(".dark-theme").remove(),t(".settings .btn").removeClass("active"),t(".top-white").addClass("active"))}),t(".settings.min-nav .btn").click(function(){var e=t(this).attr("href"),a="#"===e?0:t(e).offset().top+1;t("html, body").stop().animate({scrollTop:a},1e3)}),t('[data-toggle="tooltip"]').tooltip("hide"),t(".progress .progress-bar").progressbar(),t("#submitBtn").on("click",function(e){e.preventDefault();var a=t("#inputname").val(),s=t("#inputemail").val(),n=t("#inputmessage").val();!n||n.length<4;var o={yourname:a,email:s,comments:n};t.ajax({url:"contact.php",type:"get",data:o,success:function(){ga&&ga("send","pageview"),alert("Your Note has been submitted successfully"),t("#login_form").get(0).reset()},error:function(){alert("There is an error while submitting your Note,please try later")}})}),t("#login_form").on("submit",function(t){t.preventDefault()});var s=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0;s&&(t(".settings").hide(),t("#mini-nav").css("display","none !important")),e=Math.floor(2*Math.random())+0;var n=[".top-dark",".top-white"],o=n[e];t(o).click()}(jQuery);