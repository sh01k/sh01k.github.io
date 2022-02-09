$(function(){
    $('a[href^="#"]').click(function(){
        let speed = 300;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - $(".site-header").height();
        //$('body,html').animate({scrollTop:position}, speed, "swing");
        $('*').animate({scrollTop:position}, speed, "swing");
        return false;
    });
});