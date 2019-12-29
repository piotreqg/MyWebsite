$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 500){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(123, 123, 123, 0.8)');
    }
});