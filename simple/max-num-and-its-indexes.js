// const maxNumAndItsIndexes = (array) => {
//   let max = Math.max(...array);
//   let indexes = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === max) {
//       indexes.push(i);
//     }
//   }
//   //   console.log("max = ", max);
//   //   console.log("max_index = ", indexes);
//   return "max = " + max + "\nmax_index = " + indexes;
// };

const maxNumAndItsIndexes = (array) =>{
    let max = 0;
    let indexes = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] === max){
            indexes.push(i);
        }
    }
}
let arr = [
  1, 2, 22, 900, 6, 7, -1, 0, 900, 80, -20, 12, 1, 4, 5, 22, 70, 5, 2, 3,
];
console.log(maxNumAndItsIndexes(arr));
