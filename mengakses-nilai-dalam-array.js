var kata = "Hello";
var kataPotong = kata.slice("");


var huruf = "";
function balikString(kata) {
for(var i = kata.length - 1; i >= 0; i --) {
  huruf += kata[i];
}
return huruf;
}

console.log(balikString(kata));
