$('section.hero a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        targetOffset -= 30;
    $('html, body').animate({
        scrollTop: targetOffset
    },500)  
}); 