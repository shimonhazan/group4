//<p>write a function that checks if a given string is a palindrome.</p>
//<p>for example, "abccba" is palindrome, but "abccb" is not palindrome.</p>

arrfromstring="";

function ispalindrome(pal){
    arrayfromstring=pal.split('');
    console.log(arrayfromstring)
    console.log(pal.length)
    if(pal.length%2===0)
    {
        j=(pal.length)-1
        for(var i=0;i<pal.length/2;i++,j--){
            if(!(arrayfromstring[i]===arrayfromstring[j]))
            return "is not pal"
        }
        return "is a pal"

}
}

console.log(ispalindrome("abba"))