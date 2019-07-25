var nama = prompt('Silakan ketik nama Anda:');
var bInd = parseInt(prompt('Masukkan nilai Bahasa Indonesia Anda:'));
var bIng = parseInt(prompt('Masukkan nilai Bahasa Inggris Anda:'));
var mat = parseInt(prompt('Masukkan nilai Matematika:'));
var ipa = parseInt(prompt('Masukkan nilai IPA Anda:'));

var nilaiAkhir = (bInd + bIng + mat + ipa)/4
var indexNilai
var status

if (nilaiAkhir >= 85) { 
    indexNilai = 'A'
}
else if (nilaiAkhir < 85 && nilaiAkhir >= 75 ) { 
    indexNilai = 'B'
}
else if (nilaiAkhir < 75 && nilaiAkhir >= 65 ) { 
    indexNilai = 'C'
}
else if (nilaiAkhir < 65 && nilaiAkhir >= 50) { 
    indexNilai = 'D'
}
else { 
    indexNilai = 'E'
}
 
switch (indexNilai) { //biar case insensitive
    case 'A':
        status = 'Selamat Anda dinyatakan lulus'
        break; 
    case 'B':
        status = 'Selamat Anda dinyatakan lulus'
        break; 
    case 'C':
        status = 'Selamat Anda dinyatakan lulus'
        break; 
    case 'D':
        status = 'Maaf Anda tidak lulus'
        break;
    case 'E':
        status = 'Maaf Anda tidak lulus'
        break;
    default:
        status = 'Input Error'
}

console.log('Nama: ' + nama + '\n' +
            'Dengan nilai akhir: ' + Math.round(nilaiAkhir) + '\n' +
            'Index nilai: ' + indexNilai + '\n' +
            status)


// cara di kelas

// var nama = prompt('Nama')
// var bing = parseInt(prompt('Nilai B.Inggris'))
// var bind = parseInt(prompt('Nilai B.Indonesia'))
// var mtk = parseInt(prompt('Nilai Matematika'))
// var ipa = parseInt(prompt('Nilai IPA'))

// var nilaiAkhir = (bing + bind + mtk + ipa) / 4

// var indexNilai, lulus, greet

// if(nilaiAkhir >= 85){ // lebih besar sama dengan 85
//     indexNilai = 'A'
//     lulus = true
// } else if(nilaiAkhir >= 76 && nilaiAkhir <= 84){ // 76 - 84
//     indexNilai = 'B'
//     lulus = true
// } else if(nilaiAkhir >= 66 && nilaiAkhir <= 75){ // 66 - 75
//     indexNilai = 'C'
//     lulus = true
// } else if(nilaiAkhir >= 50 && nilaiAkhir <= 65){ // 50 - 65
//     indexNilai = 'D'
//     lulus = false
// } else {
//     indexNilai = 'E'
//     lulus = false
// }

// if(lulus){
//     greet = 'Selamat, Anda lulus'
// } else {
//     greet = 'Mohon maaf, Anda tidak lulus'
// }

// console.log(
//     'Nama: ' + nama +
//     '\nDengan nilai akhir : ' + nilaiAkhir +
//     '\nIndex Nilai: ' + indexNilai + '\n' +
//     greet
// );

