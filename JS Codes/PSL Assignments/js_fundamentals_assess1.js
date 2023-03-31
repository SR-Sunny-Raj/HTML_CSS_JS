var fs = require('fs');
var input = fs.readFileSync('input.txt').toString();
//fill your code

var str = input.trim().split(" ").join("").toLowerCase();

var fp=0;
var lp=str.length-1;

function palindrome(str1){
    while(fp<=lp){
        if(str1.charAt(fp)!=str1.charAt(lp)){
            return false;
        }
        fp++;
        lp--;
    }
}

if(palindrome(str)==false){
    console.log(input+" is not a palindrome");
}else{
    console.log(input+" is a palindrome");
}
