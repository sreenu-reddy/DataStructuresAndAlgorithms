// const nemo = ["nemo"];

// const largeArr = new Array(10000).fill("nemo");
// function FindNemo(array) {
//   // let strat = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("nemo found");
//     }
//   }
//   // let end = performance.now();
//   // console.log("to Find nemo the fun took: " + (end - strat) + " milleseconds");
// }
// FindNemo(nemo);
// function funChallenge(input) {
//   let a = 10;
//   a = 50 + 3;
//   console.log(input.length);

//   for (let i = 0; i < input.length; i++) {
//     a++;
//   }
//   return a;
// }

// console.log(funChallenge([1, 2, 3]));

// log all pairs of array

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
function pairing(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(`(${i},${j})`);
    }
  }
}

pairing(arr1, arr2);
