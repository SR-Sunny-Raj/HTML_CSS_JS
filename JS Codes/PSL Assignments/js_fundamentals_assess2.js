var fs=require('fs');
var input=fs.readFileSync('input.txt').toString().trim();
var res=(input)=>{
    let fact=1;
    while (input > 0) {
        fact = fact * input;
        input--;
    }
    return fact;
}
console.log(res(input));
