/*
3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1
 */
let sorti=(a,b,c)=>{
let arr=[a,b,c];
for(let i=0;i<arr.length;i++)
   for(let j=0;j<arr.length;j++)
   if(arr[j]<arr[j+1])
     {
       temp=arr[j];
       arr[j]=arr[j+1]
       arr[j+1]=temp
     }
alert(arr.join(' '))

}

sorti(0,-1,4);




/*
Exception: SyntaxError: unterminated comment
@Scratchpad/3:23
*/