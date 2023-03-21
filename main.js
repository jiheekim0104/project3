$(window).scroll(function(){
    var pixel = $(window).scrollTop();
    console.log(pixel);

    if(pixel > 150){
        $('#menuBar').addClass('fixed-menu');
    } else {
        $('#menuBar').removeClass('fixed-menu');
    }
    });