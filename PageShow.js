//做一个判断，在页面width<980px，页面大小保持不变，>980px时按照真实大小。
$('#wrap').css("position", "relative");

//获取当前浏览器大小
var winWidth = document.documentElement.clientWidth;

//通过当前浏览器大小修改wrap的CSS
if (winWidth > 1000) 
{
	$('#wrap').css("width", "100%");
}
else
{
	$('#wrap').css("width", "1000px");
}

//强制浏览器刷新
window.onresize = function() 
{
	location=location
};

$(window.resize)