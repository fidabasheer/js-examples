/*
16. Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. Go to the editor
Test Data :
console.log(text_truncate('We are doing JS string exercises.')) 
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises." 
"We are doing JS ..." 
"We are doing !!"


 */

const text_truncate=(str,n,sub)=>{
  if(n==undefined)
    return str
  
  if(sub==undefined)
    {
      str=str.slice(0,n-3);
  return str.padEnd(n,'.')
    }
  let k=sub.length;
  str=str.slice(0,n-k);
  return str.padEnd(n,sub)
  
  
}
console.log(text_truncate('We are doing JS string exercises.')) 
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
