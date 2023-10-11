// Sum of Digits
function sumDigits(num){
    let sum=0;
    while(num>0){
        sum = sum + num%10;
        num = Math.floor(num/10);
    }
    return sum;
}
console.log(sumDigits(12564));
console.log(sumDigits(54));