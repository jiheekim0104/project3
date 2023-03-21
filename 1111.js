$(window).scroll(function(){
    // Get number of pixels of scroll.
    var pixel = $(window).scrollTop();
    console.log(pixel);
    // When the scroll exceeds 300px, give the [fixed-menu] class.
    if(pixel > 250){
      $('.global-nav').addClass('fixed-menu');
    } else {
      $('.global-nav').removeClass('fixed-menu');
    }
  });