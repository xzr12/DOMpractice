//修改的decrypt()函数
function codetest(a) {
	if (a != "" && a != null) {
		if (decryptElementId.constructor != Array) {
			decryptElementId = [decryptElementId]
		}
		var b = false;
		for (var i = 0; i < decryptElementId.length; i++) {
			var c = document.getElementById(decryptElementId[i]);
			var d = c.title;
			try {
				var e = GibberishAES.dec(d, a);
				b = true;
				c.innerHTML = e;
				c.title = ""
			} catch (err) {}
		}
		//修改判断条件
		if (b) {
			console.log(a + '，听说这货是密码');
		}
	}
}

//循环判断哪一个数是密码
for (var i = 1000; i < 10000; i++)
{
	codetest(i.toString());
}