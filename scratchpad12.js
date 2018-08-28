/*2.Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is -*/
const sign =(a,b,c)=>{
  let pdt=a*b*c;
  if(pdt<0)
    alert("sign is -");
  else
    alert("sign is +");
  
}
sign(-3,-2,7)



