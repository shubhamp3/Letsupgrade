

let x;
let p=0
x = prompt("enter a string");
let y;
y =prompt("enetr a char");
	   
       for(var i=0;i<(x.length);i++)
	   {
		   if(y==x[i])
		   {
		       p=p+1;
			   console.log("position is at"+i+"");
		   }
	   }		  
       if(p==0)
	       console.log("NOT FOUND")