//no 1

// var bintang = '' // harus masukkan nilai string kosong, kalau nggak, nanti undefined ikut keprint
// var angka = 5

// for(var i = 0; i < angka ; i++){
    
//     for(var j = 0; j <= i; j++){
//         bintang += ' * '
//     }
//     bintang += '\n'
// }

// console.log(bintang)


// no 2

// var bintang = '' // harus masukkan nilai string kosong, kalau nggak, nanti undefined ikut keprint
// var angka = 5

// for(var i = 0; i < angka ; i++){
    
//     for(var j = angka; j > i; j--){
//         bintang += ' * '
//     }
//     bintang += '\n'
// }

// console.log(bintang)

// no 2 pembahasan

// var bintang = '' // harus masukkan nilai string kosong, kalau nggak, nanti undefined ikut keprint
// var angka = 5

// for(var i = angka; i >= 1; i--){
    
//     for(var j = 1; j <= i; j++){
//         bintang += ' * '
//     }
//     bintang += '\n'
// }

// console.log(bintang)

// no 3

// var bintang = '' // harus masukkan nilai string kosong, kalau nggak, nanti undefined ikut keprint
// var angka = 5

// for(var i = 0; i < angka ; i++){
    
//     for(var j = angka; j > i; j--){
//         bintang += ' * '
//     }
//     bintang += '\n'
// }

// for(var i = 1; i < angka ; i++){
    
//     for(var j = 0; j <= i; j++){
//         bintang += ' * '
//     }
//     bintang += '\n'
// }

// console.log(bintang)

// no 4

// var bintang = '' // harus masukkan nilai string kosong, kalau nggak, nanti undefined ikut keprint
// var angka = 5

// for (var i=1; i<10; i +=2)
// {
//     for (var k=1; k < (angka - i / 2); k++)
//     {
//         bintang += ' . '
//     }
//     for (var j=1; j<=i; j++)
//     {
//         bintang += ' * '
//     }
//     bintang += '\n'
// }

// console.log(bintang)

// no 4 ALTERNATE 1

// var bintang = '' // harus masukkan nilai string kosong, kalau nggak, nanti undefined ikut keprint
// var angka = 5

// for (var i=1; i<= angka; i ++)
// {
//     for (var k=1; k <= (angka-i); k++)
//     {
//         bintang += ' . '
//     }
//     for (var j=1; j<= (2 * i-1); j++)
//     {
//         bintang += ' * '
//     }
//     bintang += '\n'
// }

// console.log(bintang)

// no 4 ALTERNATE 2

// var bintang = '' // harus masukkan nilai string kosong, kalau nggak, nanti undefined ikut keprint
// var angka = 5

// for (var i=1; i<= angka; i ++)
// {
//     for (var k=1; k <= (angka-i); k++)
//     {
//         bintang += ' . '
//     }
//     for (var j=1; j<= (2*i - 1); j++)
//     {
//         bintang += ' * '
//     }
//     bintang += '\n'
// }

// console.log(bintang)

// no 4 ALTERNATE 3

// var bintang = ""
// var angka = 5

// for(var i=0;i<angka;i++){
//     for(var k=i;k<angka;k++){
//         bintang += '   '
//     }
//     for(var j=0;j<=i;j++){
//         bintang += " * "
//     }
//     for(var j=0;j<i;j++){
//         bintang += " * "
//     }
//     bintang += '\n'
// }

// console.log(bintang)

// no 5
var bintang = ""
var n = 5

for (var i = 0 ; i<n ; i++){
    for (var j = 0 ; j<(n-i-1) ; j++){
        bintang += "   "
    }
    for (var k = 1 ; k <= 2*i+1 ; k++){
        bintang += " * "
    }
    bintang += "\n"
}

for (var i = n-1 ; i>=0 ; i--){
    for (var j = 0 ; j<(n-i-1) ; j++){
        bintang += "   "
    }
    for (var k = 1 ; k <= 2*i+1 ; k++){
        bintang += " * " 
    }
    bintang += "\n"
}