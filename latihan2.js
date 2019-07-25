// no. 1
// var x = 4
// var y = 3
// var z = 2
// var w
// w = ((x + y * z)/(x * y)) ** z
// console.log (w)

// no. 2 
// var input = prompt("Silahkan masukkan angka")
// var kuadrat = input * input
// alert("Kuadrat dari " + input + " adalah " + kuadrat)

// no. 3
// var a = Math.cbrt(8)
// console.log (a)

// no. 4
// var jumlahHari = 485
// var tahun, bulan, minggu, hari

// tahun = Math.floor(jumlahHari / 360) // Cari berapa tahun
// jumlahHari = jumlahHari % 360 // Cari sisa hari setelah tahun

// bulan = Math.floor(jumlahHari / 30)
// jumlahHari = jumlahHari % 30

// minggu = Math.floor(jumlahHari / 7)

// hari = jumlahHari % 7

// console.log (tahun + " tahun, " + bulan + " bulan, " + minggu + " minggu, " + hari + " hari")

// no. 5

// a + b = 49
// rasio = 0.4 -> 4/10 -> 2/5 -> 2 : 5
// var totalUmur = 49
// var rasioAndi = 2
// var rasioBudi = 5
// var totalRasio = 7
// var usiaAndi, usiaBudi, usiaAndiNext, usiaBudiNext
// var pertambahan = 2

// usiaAndi = totalUmur * (rasioAndi / totalRasio)
// usiaBudi = totalUmur * (rasioBudi / totalRasio)
// usiaAndiNext = usiaAndi + pertambahan
// usiaBudiNext = usiaBudi + pertambahan


// console.log ("usia andi setelah 2 tahun " + usiaAndiNext + ", usia budi setelah 2 tahun " + usiaBudiNext)


// no .6
// var today = new Date()
// var yesterday = new Date()
// var tomorrow = new Date()

// tomorrow.setDate(today.getDate()+1)
// yesterday.setDate(today.getDate()-1)

// console.log ("Hari ini tanggal " + today.getDate() +  "-" + today.getMonth() + "-" + today.getFullYear() + "\n" + 
//              "Besok tanggal " + tomorrow.getDate() +  "-" + tomorrow.getMonth() + "-" + tomorrow.getFullYear() + "\n" + 
//              "Kemarin tanggal " + yesterday.getDate() +  "-" + yesterday.getMonth() + "-" + yesterday.getFullYear()
//             )


// no. 7
// var karakter = "Halo Dunia"
// var jumlahKarakter = karakter.replace(/[^a]/g, "").length // pakai regex
// console.log(jumlahKarakter)

// no. 8
// var a = 60
// var b = 40
// var jarak = 120
// var waktu = jarak / (a+b)
// var jam = Math.floor(waktu)
// var menit = (waktu * 60) % 60
// var tabrakan = 9 + jam + ':' + menit
// console.log (tabrakan)

// no. 9
// var pertama = Math.random() * 100
// var nilaiRandom = (Math.floor(pertama))
// var final = nilaiRandom + 1

// document.getElementById('angka').innerHTML = final

