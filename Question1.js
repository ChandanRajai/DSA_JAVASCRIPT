// Sum Of N Natural Numbers
function sumNumber(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum = sum + i;
    }
    return sum;
    // return num*(num+1)/2;
}

console.log(sumNumber(5));
console.log(sumNumber(10));