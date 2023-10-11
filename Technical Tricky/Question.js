// Checking sum zero problem 
// [-5,-4,-2,0,1,4] ===>INPUT
// [-4,4] ====>OUTPUT because {-4+4=0}
function sumOfZero(array){
    for(let number of array){
        for(let j=1;j<array.length;j++){
            if(number+array[j]===0){
                return [number,array[j]];
            }
        }
    }
}
const result = sumOfZero([-5,-4,-2,0,1,4]);
console.log(result);