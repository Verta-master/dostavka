jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function(e) {
  e.stopPropagation();
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});
  
$('.top__menu-btn').click(function(e) {
  $('.header .top__list').slideToggle();
});
  
//Hide popups on escape and click outside
$("body").click(function(){
  $('.menu__list').slideUp();
  $('.menu').removeClass('menu--opened');
});

$("body").keydown(function(e) {
  if (e.keyCode == 27) {
    $('.menu__list').slideUp();
    $('.menu').removeClass('menu--opened');
  }
});

});