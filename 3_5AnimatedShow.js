$("body").fadeOut(function() {
	$("body").fadeIn(5000);
 });

//test一段
/*
$('[class="center_module"]').click(function() {
	$('[class="center_module mt10"]').slideUp("slow");
});*/

$('h3').click(function() {
	if ($(this).nextAll().css("display") == "none")
	{
		$(this).nextAll().slideDown("3000");
		$(this).nextAll().css("display") = "block";
	}
	else
	{
		$(this).nextAll().slideUp("3000");
		$(this).nextAll().css("display", "none");
	}
});