﻿// Main Scripts 
$(document).ready(function(){$(".cmm-tabs").simplyTab({active:1,fx:"fade",showSpeed:400,hideSpeed:400});$('.blogger-tab').append($('#comments'));$(".cmm-tabs.simplyTab .wrap-tab").wrap("<div class='cmm-tabs-header'/>");$('.cmm-tabs-header').prepend('<h3><h8>Post </h8>Comment<h9>s</h9></h3>')});$(document).ready(function(e){e("abbr.timeago").timeago()});$(document).ready(function(){$("ul#sub-menu").parent("li").addClass("hasSub");(jQuery)});$(document).ready(function(){$('a[name="ads-post-in"]').before($('#ads-post10').html());$('#ads-post10').html('')});$(document).ready(function(){$(".sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>");$(".footer-sections .widget h2").wrap("<div class='widget-title'/>");$("#menu ul li").each(function(){$(this).hoverTimeout(0,function(){$(this).children("ul").slideDown()},0,function(){$(this).children("ul").hide()})});$(".index .post-outer,.archive .post-outer").each(function(){$(this).find(".block-image .thumb a").attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$(".widget-content").each(function(){var e=$(this).text();if(e.substr(0,10).match("page")){e=e.replace("page/","");$(this).html('<center><div id="fb-root"></div><div class="fb-page" data-href="'+e+'" data-width="300" data-height="230" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"></center>')}});$(window).scroll(function(){if($(this).scrollTop()>200){$('#back-to-top').fadeIn()}else{$('#back-to-top').fadeOut()}});$('#back-to-top').hide().click(function(){$('html, body').animate({scrollTop:0},1000);return false});var search=$('.search');search.click(function(e){e.preventDefault();if(search.is('.active')&&$(e.target).is(search)){search.removeClass('active')}else{search.addClass('active');search.find('input').focus()}});$('body').click(function(e){if(search.is('.active')&&!$(e.target).is('.search, .search form, .search input')){search.removeClass('active')}});var e="[";var t="]";$(".social-widget").each(function(){var e=$(this);var t=$(this).find(".sw-item");if(t.length===0){e.remove()}$(this).find(".widget").removeClass("LinkList");$(".social-widget .sw-item.facebook").find(".sw-desc").text("Likes");$(".social-widget .sw-item.rss,.social-widget .sw-item.youtube").find(".sw-desc").text("Subscribes");var n="[";var r="]";$(".social-widget *").replaceText(n,'<span class="sw-counter">');$(".social-widget *").replaceText(r,"</span>");$(".sw-item").each(function(){var e=$(this).find(".delete-count");var t=$(this).find(".sw-counter");$(e).before($(t));$(e).remove()})});var n=$("#sidebar_tabs #tab1 .widget h2").text();$(".tab-opt .opt-1 a").text(n);var r=$("#sidebar_tabs #tab2 .widget h2").text();$(".tab-opt .opt-2 a").text(r);var i=$("#sidebar_tabs #tab3 .widget h2").text();$(".tab-opt .opt-3 a").text(i);$("#tab1 .widget h2,#tab2 .widget h2,#tab3 .widget h2,#tab1 .widget-title,#tab2 .widget-title,#tab3 .widget-title").remove();$(".sidebar_tabs").tabslet({mouseevent:"click",attribute:"href",animation:true});if($(".sidebar_tabs .widget").length===0){$(".sidebar_tabs").remove()}var s="[full_width]";var o="[left_sidebar]";var u="[right_sidebar]";$(".post *").replaceText(s,"<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;float:none!important;border-right:0!important;border-left:0!important}.item .sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}.related li {width: 31.655%;}.related-thumb,.related li .related-img{height: 150px;}}</style>");$(".post-body *").replaceText(o,"<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-right:0!important;margin-right: 0px !important;}.item .sidebar-wrapper{float:left!important;padding-left:0!important;}}</style>");$(".post-body *").replaceText(u,"<style>@media screen and (min-width: 980px){.item #main-wrapper{float:left!important;border-right:0!important;margin-right: 0px !important;}.item .sidebar-wrapper{float:right!important;padding-left:0!important;}}</style>");(function(e){var t=e("a.newer-link");var n=e("a.older-link");e.g