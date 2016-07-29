//@prepros-prepend lib/jquery/dist/jquery.min.js
//@prepros-prepend lib/jquery-mousewheel/jquery.mousewheel.min.js
//@prepros-prepend lib/simplr-smoothscroll/lib/jquery.simplr.smoothscroll.min.js
//@prepros-prepend functions.js
//@prepros-prepend menu.js


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