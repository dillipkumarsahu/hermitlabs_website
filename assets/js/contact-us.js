
$(document).ready(function(){
	$(".contact-form").on("submit",function(e){
		e.preventDefault();

		var name = $("#contact-name").val();
		var email = $("#contact-email").val();
		var message = $("#contact-message").val();

		$.ajax({
			type:"POST",
			url:"assets/php/contact-us.php",
			data:{
				name:name,
				email:email,
				message:message
			},
			beforeSend:function(){
				$("#submit-btn").html("SENDING...");
			},
			success:function(response){
				$("#submit-btn").html("MESSAGE SEND SUCCESSFUL");
				setTimeout(function(){
					$("#submit-btn").html("SEND MESSAGE");
					$(".contact-form")[0].reset()
				},2000);
			}
		});
	});
});