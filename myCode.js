$(document).ready(function() {
	
	$("p").hide();
	$("#kristenPic").hide();
	
	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});
	
	/* start of jq02 how to use buttons and selectors */
	
	$("#testbutton").click(function() {
		
		/* $("#jq02").css("background-color","#FF0000"); */
		
		$("strong").css("background-color","#FF0000");
		
	});

});



