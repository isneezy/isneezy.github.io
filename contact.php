<?php
if($_POST):
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$code = 1;
	$responce_message;

	if(!filter_var($email, FILTER_VALIDATE_EMAIL)):
		$responce_message =  "Email invalido, por favor digite um email valido e tente novamente";
	elseif(!$name): $responce_message = "Pror favor preencha o seu nome e tente novamente!";
	elseif(!$message): $responce_message = "Ups, acho que se esqueceu de deixar a sua mensagem, tente novamente!";
	else:
		$responce_message = "Obrigado por me contactar, irei responde-lo dentro em breve!";
		$code = 0;
	endif;

	$responce = array(
		'code'=>$code,
		'message'=> $responce_message
	);
	echo json_encode($responce);
endif;

if($_GET):
	echo "Metodo nao suportado!";
endif;