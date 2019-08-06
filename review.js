// Macam falsy value:

// false
// '' and ""
// 0
// null
// undefined
// NaN

// var teks = ''
// var angka = 0

// if (angka) {
//     console.log('Angka bernilai true')
// }
// else {
//     console.log('Angka bernilai false')
// }

// if (teks) {
//     console.log('Teks ada isinya')
// }
// else {
//     console.log('Teks kosong')
// }

// Loop
// Suatu mekanisme pada javascript yang memungkinkan
// kita untuk melakukan sebuah operasi secara berulang
// ketika suatu kondisi tertentu terpenuhi (true)


// do while
// memunculkan hai sebanyak 5 kali
// var angka = 0
// do {
//     console.log('Hai')
//     console.log(`value dari variabel nilai: ${angka}`)
//     angka += 1
//     angka++
// }
// while (angka < 5)

// while
// var angka = 0
// while (angka < 5) {
//     console.log(`value dari variable nilai: ${angka}`)
//     angka++
// }

// console.log('selesai')

// var paragraph = document.getElementById('disini')
// paragraph.innerHTML = "Mantap"

// tag break <br> untuk membuat baris baru
// paragraph.innerHTML = '<strong>Tag Strong</strong> <br> <em>Tag Emp</em>'

// Array
// let random = ['Mangga', 'Lampu', 'Mati', 'Senin']
// console.log(random)

// Menambahkan data dari belakang , menggunakan push
// random.push('Jambu')

// let hasilJoin = random.join()
// console.log(hasilJoin)
// default dari join adalah karakter koma tanpa spasi
// console.log(...random)

// mapping array
// map() sebuah function untuk mengubah bentuk data pada array ke bentuk lainnya
// let users = [
//     {name: 'Alex', job: 'Farmer', age: 45},
//     {name: 'Charlie', job: 'Magician', age: 38}
//     {name: 'Disney', job: 'Animator', age: 43}
// ]

// a: berisi element
// b: berisi index element
// c: berisi array users
// users.map((a,b,c) => {
//     console.log(a)
//     console.log("-------")
//     console.log(b)
//     console.log("-------")
//     console.log(c)
//     console.log("---end---")
// })


// let hasilButton = users.map ((obj) => {
//     return `<button>${obj.name}</button>`
// })

// console.log(hasilButton)
// document.getElementById("disini").innerHTML = hasilButton.join(' ')

// let x = `<button>Rostchild</button>
// <button>Disney</button>
// <button>Alex</button>`

// console.log(hasilButton)
// document.getElementById('asdf').innerHTML = hasilButton.join(' ')
// document.getElementById('qwerty').innerHTML = x

// // item: berisi element
// let hasilString = users.map((item) => {
//     return `${item.name}`
// })

// Filtering array
// filter() untuk memilih mana data yang akan tetap ada, mana yang akan dihilangkan
// return true: tetap ada
// return false: dihilangkan

// let numbers = [23, 12, 35, 56, 79]

// // filtering angka genap
// let hasilGenap = numbers.filter(angka => {
//     return angka % 2 == 0
// })

// console.log(hasilGenap)


// function bilanganPrima(num) {
//     for (var i = 2; i < num; i++) {
//         if(num % i === 0){
//             return false;
//         }
//         else {
//             return num > 1;
//         }
//     }
// }

// let hasilPrima = numbers.map(bilanganPrima)
// console.log(hasilPrima)

// ARRAY SORT
// mengacu pada tabel ascii
// ASC ascending rendah ke besar !@# 0-9 A-Z a-z
// DESC descending besar ke rendah z-a Z-A 9-0 #@!

// return < 0, 'a' memiliki index yang lebih kecil dari 'b'
// return 0, tidak ada perubahan posisi
// return > 0, 'b' memiliki index yang lebih kecil dari 'a'

// var name = ['Tony', 'Peter', 'Bruce', 'Thor', 'Loki']
// name.sort()
// console.log(name)

// var number = [3, 17, 9, 12, 10, 45 ,32, 3424, 432, 5, 45, 234 ,879, 87, 796875, 67576, 76574]
// console.log(number)

// // ASC
// number.sort((a,b) => {
//     return a - b // compare function
// })
// console.log(number)

// // DESC
// number.sort((a,b) => {
//     return b-a // compare function
// })

// console.log(number)

// FUNCTION
// - blok kode yang dapat diberikan nama
// - dapat digunakan secara berulang
// - dapat menerima input (tidak harus)
// - jika tidak ditentukan apa yang di return, function akan return undefined

// ES6 
// () => { return sesuatu }
// () => sesuatu
// () => { console.log(hello) ; console.log(hai) }

// let pangkat = (number, pangkat) => {
//     let hasil = Math.pow(number, pangkat)
//     console.log(hasil)
//     return 'Selesai'
// }

// let returnDaripangkat = pangkat(4,3)
// console.log(returnDaripangkat)

// let angka = [13, 56, 9, 7, 21]

// let kurangDari = (number,array) => {
//     let hasilFilter = array.filter ((element) => {
//         return element <= number
//     })

//     return hasilFilter
// }

// let hasilKurang = kurangDari(15, angka)
// console.log(hasilKurang)    


// function scope

// function scope () {
//     var didalam = 'Test'
//     let didalam2 = 'Test2'
//     const didalam3 = 'Test3'
//     didalam4 = 'Test4'
// }

// scope()

// console.log(didalam) // is not defined
// console.log(didalam2) // is not defined
// console.log(didalam3) // is not defined
// console.log(didalam4) // cuma bisa yang ini karena tanpa deklarasi, sebuah variabel bersifat global, tidak direkomendasikan untuk dipakai
