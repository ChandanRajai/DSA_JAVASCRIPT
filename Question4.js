// Number is palindrom or not
function isPalindrom(num){
    let copynum=num , reversenum=0;

    while(copynum>0){
        let lastdigit = copynum % 10;
        reversenum = reversenum*10+lastdigit;
        copynum=Math.floor(copynum/10);

    }
    return num === reversenum;
}

console.log(isPalindrom(121));
console.log(isPalindrom(21));