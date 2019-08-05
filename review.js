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

let numbers = [23, 12, 35, 56, 79]

// filtering angka genap
let hasilGenap = numbers.filter(angka => {
    return angka % 2 == 0
})

console.log(hasilGenap)


function bilanganPrima(num) {
    for (var i = 2; i < num; i++) {
        if(num % i === 0){
            return false;
        }
        else {
            return num > 1;
        }
    }
}

let hasilPrima = numbers.map(bilanganPrima)
console.log(hasilPrima)