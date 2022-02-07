jQuery(document).ready(function($){
    var flag = false;
    var pagetop = jQuery('.pagetop');
    jQuery(window).scroll(function(){
	if(jQuery(this).scrollTop() > 300){
	    if(flag == false){
		flag = true;
		pagetop.stop().animate({
		    'bottom': '0'
		}, 200);
	    }
	}else{
	    if(flag){
		flag = false;
		pagetop.stop().animate({
		    'bottom': '-40px'
		}, 200);
	    }
	}
    });
    pagetop.click(function(){
	jQuery('body, html').animate({scrollTop: 0}, 500);
	return false;
    });
});