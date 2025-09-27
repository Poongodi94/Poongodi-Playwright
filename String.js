//Example 1
let string = "Hello world"
let word = string.split(" ")
let lastword = word[word.length-1];
console.log(lastword);
console.log(`The length of the last word is ${lastword.length}`)

//Example 2
let string1 = " fly me to the moon "
let word1 = string1.trim()
let word2 = word1.split(" ")
let lastword1 = word2[word2.length-1];
console.log(lastword1);
console.log(`The length of the last word is ${lastword1.length}`)

//Example 3
function Anagram(str1, str2) 
{
    if (str1.length !== str2.length) {
        return false
        
    }
    let sortedstr1 = str1.split("").sort().join()
    let sortedstr2 = str2.split("").sort().join()
    return sortedstr1 === sortedstr2
    
}console.log(Anagram("listen", "silent"));
console.log(Anagram("hello", "world"));

