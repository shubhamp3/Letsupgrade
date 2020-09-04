let x=prompt("enter size");
let a=new Array();
for(var i=0;i<x;i++)
{
	a[i]=prompt("enter the string");
}
 let y=prompt("enter the ele to be searched");

var k=a.indexOf(y)
if(k==-1)
	console.log(" not found ");
else 
	console.log(" found at"+k);