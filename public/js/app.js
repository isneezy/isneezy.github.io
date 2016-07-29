var toggleMenu =  function () {
	$(".menu-mobile img:first-child").toggle(500);
	$(".menu-mobile img:last-child").toggle(500);
	$("#menu").toggle(500);
}

var closeMenu =  function () {
	$(".menu-mobile img:first-child").show(500);
	$(".menu-mobile img:last-child").hide(500);
	$("#menu").hide(500);
}

var showProfileInMenu = function(){
	
}
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
$(function () {
  $.srSmoothscroll({
    // defaults
    step: 55,
    speed: 400,
    ease: 'swing',
    target: $('body'),
    container: $(window)
  })
});

$(document).ready(function(){
	$('#contact-form').submit(function(e){
		var error_message = "Ocorreu um erro ao enviar a mensagem, por favor tente novamente";
		$(this).addClass('sending');
		var postData = $(this).serialize();
		var formUrl = $(this).attr('action');
		$.ajax({
			url: formUrl,
			data: postData,
			type: 'POST',
			success:function(data){
				setTimeout(function() {
				    data = JSON.parse(data);
				    if(data.code==0){
				    	$('#contact-form').removeClass('error');
						$('#contact-form').removeClass('sending');
						$('#contact-form').addClass('success');
				    }else{
				    	error(data.message);
				    }
				}, 2000);
			},
			error: function(){
				error(error_message);
			}
		});
		e.preventDefault(); //STOP default action
    	//e.unbind(); //unbind. to stop multiple form submit.
	});

	function error(message){
		$('#contact-form >p').text(message);
		$('#contact-form').removeClass('sending');
		$('#contact-form').addClass('error');
	}
});
//# sourceMappingURL=app.js.map
