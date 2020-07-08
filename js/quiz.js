function findNumbers(array, target) {
  let result = new Array;
  for(i = 0; i < array.length; i++) {
    for(j = i+1; j < array.length; j++){
      let sum = array[i] + array[j];
      if(sum == target) {
        result.push([i, j]);
      }
    }
  }
  console.log(result);
}