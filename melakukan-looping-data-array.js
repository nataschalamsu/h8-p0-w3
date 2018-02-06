var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

var data = ["Nomor ID", "Nama", "TTL", "Hobi"];

function dataHandling(input) {
for(var i = 0; i < input.length; i ++) {
  var ttl = input[i].slice(2, 4).join(" ");
  var hasil = input[i].splice(2, 2, ttl);
}
for(var x = 0; x < input.length; x ++) {
  for(var y = 0; y < input[x].length;y ++) {
    console.log(data[y] + ": " + input[x][y]);
  }
}
}

console.log(dataHandling(input));
