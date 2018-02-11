function mengelompokanAngka(arr) {
  var tampungA = [];
  var tampungB = [];
  var tampungC = [];
  var result = [];
  var finalResult = [];
  for (var i = 0; i < arr.length; i++) {
    var tampung2 = arr[i] % 2;
    if (tampung2 === 0) {
      tampungA.push(arr[i]);
    }
    if (tampung2 !== 0) {
      tampungB.push(arr[i]);
    }
    var tampungD = tampungA[i] % 3;
    if (tampungD === 0) {
      tampungA.pop(arr[i]);
      tampungC.push(arr[i]);
    }
  }
  result.push(tampungA);
  result.push(tampungB);
  result.push(tampungC);
  return result;
}

console.log(mengelompokanAngka(arr));
