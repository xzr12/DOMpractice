//修改批改状态
var list = $('#homeworklist');
var info = list[0].children[0].children;

for (var i = 0; i < info.length; i++)
{
	if (info[i].children[2].textContent != "已改批改")
	{
		//想办法改字体颜色
		$(info[i].children[8].children[0]).removeClass('review-hw');
		$(info[i].children[8].children[0]).css('color', '#949494');
		$(info[i].children[8].children[0]).css('padding-left', '25px');
		$(info[i].children[8].children[0]).css('position', 'relative');
		$(info[i].children[8].children[0]).css('float', 'left');
	}
}