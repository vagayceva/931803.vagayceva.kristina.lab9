var str = "";
var i;
function number(n){
	 str=str+n;
	 document.getElementById("in").value=str;
	}
function sign(n){
	console.log(str[str.length-2]);
		if ((str[str.length-2] != '+' )&&( str[str.length-2] !='.' )&&(  str[str.length-2] != '-')&& ( str[str.length-2] !='*' )&&(  str[str.length-2] !='/'))
		{
			str=str+n;
			document.getElementById("in").value=str;
		}
		else {
			str = str.substring(0,str.length-2)+n[1]+n[2];
			document.getElementById("in").value=str;
		}
 }

function Clear(){
	document.getElementById("in").value="0";
	str="";
}
function Count(){
	document.getElementById("in").value=eval(str);
	str="";
}
function Del(){
	if(str[str.length-1] == " ")
	{
		i=2;
	}
	 else {
		 i=1;
		}
	for (var j=0; j<i;j++)
	{
		str=str.substring(0, str.length - 1);
	}
	document.getElementById("in").value=str;
}