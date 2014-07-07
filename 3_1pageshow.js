$(window).resize(function() {
	//做一个判断，在页面width<980px，页面大小保持不变，>980px时按照真实大小。
	$('#wrap').css("position", "relative");
	//$('#wrap').css("min-width", "1000px");

	var width = $(window).width();
	//做一个判断，在页面width<1000px，页面宽度保持不变，为1000px，>1000px时按照真实宽度。
	if (width <= 1000) 
	{
		$('#wrap').css("width", "1000px");
	}
	else
	{
		$('#wrap').css("width", "100%");
	}
});