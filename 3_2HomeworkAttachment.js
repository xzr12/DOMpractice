//获取section组成的数组
var list = $('#form>.section');
//将上交作业内容这一栏提前，使得“保存”键和上传附件的位置很接近
list[2].parentNode.insertBefore(list[2], list[0]);

//想写直接点击提交，但是没法调用原本网页内部的js
//所以不知道怎么写
//只能先采取上面的方式，让保存按钮和文件附件近一些，免得忘记
/*
if ($('#cancelFile').css('display') == 'block')
{
	stuHomeworkDetail.postdata();
}
*/