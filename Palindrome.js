function palindrome(str)
 {
    let reversed = ""
    let count = str.length-1
while (count >=0) 
    {
    reversed+=str[count]
    count--
    
}
if(reversed!==str){
   
console.log(reversed + " not a palindrome")
}
else{
    console.log(reversed + " is a palindrome") 
}

}palindrome("hello")
palindrome("madam")