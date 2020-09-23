function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
  // n := length(array)
  let lengthArray = array.length
  // repeat
  //  swapped = false
  let swapped = true;
  while (swapped) {
    swapped = false;
    // console.log("start of while loop:", array)
    //  for i := 1 to n - 1 inclusive do
    for (let i = 1; i <= lengthArray - 1; i++){
    //
    //     /* if this pair is out of order */
    //     if A[i - 1] > A[i] then
      if (array[i - 1] > array[i]){
        // console.log(`\tswapping index ${i-1} with index ${i}`)

      //
      //       /* swap them and remember something changed */
      //       swap(A[i - 1], A[i])
        swap(array, i-1, i)
      //       swapped := true
        swapped = true;
      //
      //     end if
      // console.log(`\t\tafter swap ${array}`)
      }
      //   end for
    }
  }
  // until not swapped
}

let arr = [2, -1, 4, 3, 7, 3]
bubbleSort(arr)
console.log(arr)


module.exports = {
  bubbleSort,
  swap
};
