// 1 Input
// - nama
// - usia
// - level(1-7)

// 2 Jika level selain 1 sampai 7 akan diminta input Data
// - alert level hanya 1 - 7
// - diminta input ulang

// 3 Input status (single/taken/complicated)
// - jika status complicated, isi ulang kembali
// - jika single, alert you are welcome
// - jika taken, alert kami tidak menanggung resikonya

// 4 print biaya yang harus dibayar
// - 0 - 18 tahun gratis
// - 19 - 25 bayar 50000
// - 26 - 40  gratis
// - >40 kasih uang 100000

var nama = prompt('Silakan ketik nama Anda:');
var usia = parseInt(prompt('Ketik usia Anda:'));
var level = parseInt(prompt('Ketik level:'));

while (level <1 || level >7){
    level = parseInt(prompt('Silakan ulang lagi:'));
}

var status =  prompt('Ketik status single/taken/complicated:');

while (true) {
    if (status == 'single') { 
        alert ("You are welcome")
        break;   
    }
   
    else if (status == 'taken') {
        alert ("Tidak menanggung resikonya")
        break;  
    }

    else if (status == 'complicated') {
        status = prompt('Silakan ulangi lagi:')
    }

    else {
        status = prompt('Salah ketik, silakan ulangi lagi:')
    }
}

if (usia >= 0 && usia <=18) {
    alert ("Gratis, tidak usah bayar")
}

else if (usia > 18 && usia < 26) {
    alert ("Bayar Rp50.000")
}

else if (usia >= 26 && usia <=40) {
    alert ("Gratis, tidak usah bayar")
}

else {
    alert ("Dikasih Rp100.000")
}

// console.log (nama, usia, level, status)

// pembahasan di kelas


// var nama = prompt('Silakan ketik nama Anda:');
// var usia = parseInt(prompt('Ketik usia Anda:'));

// do {
//     var ulang
//     var level = parseInt(prompt('Masukkan level:'))

//     if (level >=1 && level <=7){
//         ulang = false
//     }
//     else {
//         ulang = true
//         alert ('Mohon masukkan level dari 1-7:')
//     }
// } while (ulang); // akan mengulang jika variable ulang bernilai true


// do {
//     var again //variabel penentu perulangan
//     var status =  prompt('Ketik status single/taken/complicated:').toLowerCase();

//     if (status == 'single') { 
//         again = false
//         alert ("You are welcome")  
//     }

//     else if (status == 'taken') {
//         again = false
//         alert ("Tidak menanggung resikonya")
//     }
//     else {
//         again = true
//         alert('Tidak diterima, silakan ulangi lagi:')
//     }
// } while (again);

// // biaya atau hadiah
// if (usia >= 19 && usia <= 25){
//     // biaya 50000
//     alert('Karena umur Anda : '+ usia +' biaya yang harus dibayar Rp 50000')
// } else if (usia >= 41){
//     // hadiah 100000
//     alert('Karena umur Anda : '+ usia +' Anda mendapatkan uang Rp.100000')
// } else {
//     // Gratis
//     alert('Karena umur Anda : '+ usia +' Anda tidak dikenakan biaya apapun')
// }


