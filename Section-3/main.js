let user_input = parseInt(prompt("Enter a number, please:"));
var result = "";
var primeChecker = true;

for(let i = 2; i <= user_input; i++) {
    primeChecker = true;
    for(j=2; j<i; j++) {
        if(i%j === 0) {
            primeChecker = false;
        }
    }
    if(primeChecker === true) {
        result += `${i} `;
    }
}
console.log(result);