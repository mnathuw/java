const evenNumCal= (array) =>{
    let sumEven = 0;
    let sumOdd = 0;
    let index = 0;
    for (let i = 0; i < array.length; i ++){
        if(array[i] % 2 ===0){
            sumEven = sumEven + array[i];
            index = i;
        }
        if(array[i] % 2 !==0){
            sumOdd = sumOdd + array[i];
            index = i;
        }
    }
    return "sumEven: " + sumEven + "\nsumOdd: " +sumOdd;
}
let arr = [1,2,22,900,6,7,-1,0,900,80,-20,12,1,4,5,22,70,5,2,3];
console.log(evenNumCal(arr));

