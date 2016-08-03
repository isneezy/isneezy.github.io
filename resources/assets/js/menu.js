$(".menu-mobile").click(function(){
	toggleMenu();
});

$("#menu li:not(.has-sub) a").click(function(){
	if($(".menu-mobile").css("display")!="none"){
		toggleMenu();
	}
});

$(window).scroll(function(){
	if($(window).scrollTop()>0){
		$(".menu").addClass("stiky");
		//$("body").css("margin-top","59px");
	}else{
		$(".menu").removeClass("stiky");
		//$("body").css("margin-top","0px");
	}

	if($(window).scrollTop()>200){
		showProfileInMenu();
	}
});


$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
});