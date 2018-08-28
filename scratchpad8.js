/*8.Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/


const swap=(string)=>{
  let ar=Array.from(string);
for(let i=0;i<ar.length;i++)
  {
    if (ar[i]==ar[i].toUpperCase() )
      {
      ar[i]=ar[i].toLowerCase();
        
      }
       else
      ar[i]=ar[i].toUpperCase();
}
console.log(ar.join(''))}
swap('The Quick Brown Fox ');


