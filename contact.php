<?php
if($_POST):
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$responce = array(
		'code'=>1,
		'message'=>'Obrigado por me contactar, irei responde-lo dentro em breve!'
	);
	echo json_encode($responce);
endif;