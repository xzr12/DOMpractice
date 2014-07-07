//记录哪个作业还没交
var flag = new Array();
var homeworkNum = 0;
var list = $('#homeworklist');
var info = list[0].children[0].children;

//找到需要提交的作业，然后用flag数组标记，并用homeworkNum记录数量
for (var i = 0; i < info.length; i++)
{
	if (info[i].children[7].textContent == "提交作业")
	{
		homeworkNum++;
		flag[i] = 1;
	}
	else
	{
		flag[i] = 0;
	}
}

//homeworkNum为0时不需要对作业列表进行修改
//否则将未交的作业移至列表上半部分，并保持未交作业和已交作业的这两部分的相对位置不变
if (homeworkNum != 0)
{
	var i;
	for (i = info.length-1; i >= 0; i--)
	{
		if (flag[i] == 1)
		{
			info[i].parentNode.insertBefore(info[i], info[0]);
		}
	}

	//修改序号和每行的类，白色和灰色相间
	for (i = 0; i < info.length; i+=2)
	{
		info[i].children[0].innerText = (i+1).toString();
		$(info[i]).removeClass('gray-bg');
		if (i + 1 < info.length)
		{
			info[i+1].children[0].innerText = (i+2).toString();
			$(info[i+1]).addClass('gray-bg');
		}		
	}
}