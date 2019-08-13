$(function() {
	var tab = $('a[data-toggle="tab"]');

	tab.on('click', function() {
		event.preventDefault();
		$('.submenu__list-item--current').removeClass('submenu__list-item--current');
		$(this).parent().toggleClass('submenu__list-item--current');
		var target = $(this).attr('href');
		$('.active').removeClass('active');
		$(target).toggleClass('active');
	});
    
    var block = $('a[data-toggle="block"]');
 
    block.hover(function(){

   
      var part = $(this).attr('href');
      $('.submenu__block').removeClass('active');
      $(part).addClass('active');        // навели курсор на объект (не учитываются переходы внутри элемента)         
        },
     
      //   function(){ 
      //    var part = $(this).attr('href');          
      // $(part).removeClass('active');    // отвели курсор с объекта (не учитываются переходы внутри элемента)            
      //   }
      );

    $('.news__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  // variableWidth:true,
  focusOnSelect:true
  // centerMode: true,
// centerPadding: '30px'


});
    });
$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 132) {
        $('.logo1').addClass('none');
         $('.logo2').removeClass('none');
         $('.header').addClass('header__scrolled');
          $('.header__first-work').addClass('none');
    }   
    if( scrolled <= 132) {     
       $('.logo1').removeClass('none');
         $('.logo2').addClass('none');
         $('.header').removeClass('header__scrolled');
          $('.header__first-work').removeClass('none');
    }
});