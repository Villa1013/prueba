// Autor: William Villalba
// Email:williamvillalba_@hotmail.com, williamvillalba13@gmail.com


$(window).load(function(){ 
	//LOADER
    $('.loader').fadeOut();
});

$(document).ready(function() {
	//NAV
	$('nav li ul').hide();
	$('nav li').hover(function() {
		$(this).find('ul').slideDown('fast');
	}, function() {
		$(this).find('ul').slideUp('fast');
	});	

	//CARRUSEL
	$('.carrusel').owlCarousel({
      loop:true,
      margin:7,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });
});

$(function(){
});	