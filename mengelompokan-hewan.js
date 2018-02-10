var animals = ['cacing', 'ayam', 'kuda', 'anoa', 'kancil'];

function groupAnimals(animals) {
var arrAnimals = [];
var arr = [];
var arrResult = [];
for(var i = 0; i< animals.length; i ++) {
  arrAnimals.push(animals[i].charAt(0));
}
for(var j = 0;j < arrAnimals.length; j ++)
  if(arr.indexOf(arrAnimals[j]) == -1) {
    arr.push(arrAnimals[j]);
  }
arr.sort();

for(var k = 0; k < arr.length; k ++) {
  var arrA = [];
  for(var l = 0; l < animals.length; l++) {
   if(animals[l].charAt(0) === arr[k]) {
     arrA.push(animals[l]);
   }
  }
  arrResult.push(arrA);
}
return arrResult;
}

groupAnimals(animals);
