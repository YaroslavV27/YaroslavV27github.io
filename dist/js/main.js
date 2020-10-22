$(function(){

   $('.header__slider').slick ({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'header-dots',
        autoplay: 2000
   });

   // $('.open-popup-link').magnificPopup({
   //    type:'inline',
   //    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
   //  });

    
function openPopup(){
   $.magnificPopup.open({
     items: {
       src: '#test-popup',
     }, 
     mainClass: 'mfp-newspaper'
   });
   $(".open-popup-link").prop("disabled", false);
 }

    $(".open-popup-link").on("click", function(){
      setTimeout(openPopup, 100);
      $(this).prop("disabled", true);
    });
    
});

