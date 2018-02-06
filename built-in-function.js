var input = [
  '0001',
  'Roman Alamsyah',
  'Bandar Lampung',
  '21/05/1989',
  'Membaca',
];

function dataHandling2() {
  // Full Array
  input.splice(2, 0, 'Elsharawy', 'Provinsi');
  input.splice(7, 0, 'Pria', 'SMA Internasional Metro');
  var namaLengkap = input.slice(1, 3);
  var fullName = namaLengkap.join(' ');
  input.splice(1, 1);
  input.splice(1, 1, fullName);
  var tempatLahir = input.slice(2, 4);
  var bod = tempatLahir.join(' ');
  input.splice(2, 2);
  input.splice(2, 0, bod);
  console.log(input);

  var tanggal = input.splice(3, 1);
  var date = tanggal[0].split('/');

  for (var i = 0; i <= 2; i++) {
    var dates = parseInt(date[i]);
    var sortDate = date.sort(function(a, b) {
      return b - a;
    });
  }

  // Bulan Lahir
  var month = Number(date[2]);
  switch (month) {
    case 1: {
      console.log('Januari');
      break;
    }
    case 2: {
      console.log('Februari');
      break;
    }
    case 3: {
      console.log('Maret');
      break;
    }
    case 4: {
      console.log('April');
      break;
    }
    case 5: {
      console.log('Mei');
      break;
    }
    case 6: {
      console.log('Juni');
      break;
    }
    case 7: {
      console.log('Juli');
      break;
    }
    case 8: {
      console.log('Agustus');
      break;
    }
    case 9: {
      console.log('September');
      break;
    }
    case 10: {
      console.log('Oktober');
      break;
    }
    case 11: {
      console.log('November');
      break;
    }
    case 12: {
      console.log('Desember');
      break;
    }
    default: {
      console.log('ga jadi');
      break;
    }
  }

  // Array Tanggal Lahir Terbalik
  console.log(date);
  var tgl = date.splice(1, 1);
  var dd = date.splice(0, 0, tgl[0]);
  var bln = date.splice(2, 1);
  var mm = date.splice(1, 0, bln[0]);

  // Tanggal Lahir
  console.log(date.join('-'));

  // Nama Pendek
  var namaLeng = input.splice(1, 1);
  var namaPang = namaLeng[0].split(' ');
  var nickName = namaPang.splice(0, 2).join(' ');
  console.log(nickName);
}

dataHandling2();
