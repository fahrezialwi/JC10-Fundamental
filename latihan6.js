/*

1. munculkan daftar menu 
 - ayam @25000, ikan @50000, sapi @75000
 - salah input tidak dihandle

2 minta input quantity dari menu yg dipilih tadi

3 tanyakan apakah ingin menambahkan menu
 - pakai confirm, bukan prompt
 - jika pilih ya, balik ke langkah 1, jika tidak, ke langkah 4
 - dobel input tidak dihandle, malah nimpa

4 tampilkan rincian dan total belanjaan, dan meminta inputan jumlah uang
 - jika uang yang dimasukkan kurang, ulangi langkah 4 menampilkan pesan error
 - jika sama atau lebih dari, lanjut step 5

5 terakhir munculkan total belanja, uang yg dibayar, dan kembalian jika ada

*/

var jumlahMenu = [0,0,0]
var ulang = true

while (ulang) {

    var inputMenu = prompt("Daftar Menu \n 1. ayam @25000 \n 2. ikan @50000 \n 3. sapi @75000")

    if (inputMenu == '1') {
        jumlahMenu[0] += parseInt(prompt("Masukkan jumlah ayam: "))
    }

    else if (inputMenu == '2') {
        jumlahMenu[1] += parseInt(prompt("Masukkan jumlah ikan: "))
    }

    else if (inputMenu == '3') {
        jumlahMenu[2] += parseInt(prompt("Masukkan jumlah sapi: "))
    }

    var tambah = confirm("apakah ingin mau tambah lagi?");

    if (tambah == true) {
        ulang = true

    } else {
        ulang = false
    }
   
}

var totalPerBarang = [(25000*jumlahMenu[0]),
                      (50000*jumlahMenu[1]),
                      (75000*jumlahMenu[2])
                     ]

var totalBelanja = totalPerBarang[0]+totalPerBarang[1]+totalPerBarang[2] 

var ulangBayar = true

while (ulangBayar){
    var uangMasukan = prompt("Anda memilih" +  
                        "\n ayam x " + jumlahMenu[0] + " = " + totalPerBarang[0] +
                        "\n ikan x " + jumlahMenu[1] + " = " + totalPerBarang[1] +
                        "\n sapi x " + jumlahMenu[2] + " = " + totalPerBarang[2] +
                        "\n total " + totalBelanja +
                        "\n" +
                        "\nMasukkan jumlah uang:"
                        )

    var statement
    var selisih = Math.abs(uangMasukan-totalBelanja)

    if (uangMasukan<totalBelanja ){
        alert("Jumlah Uang yang Anda Masukkan kurang Rp." + selisih +
            "\nTotal Belanja Anda Rp." + totalBelanja +
            "\nUang yang Anda masukkan Rp." + uangMasukan
            )
        ulangBayar = true
        statement = "Kurang Rp." + selisih 
    }
    else if(uangMasukan>totalBelanja){
        alert("Anda menerima kembalian Rp." + selisih +
        "\nTotal Belanja Anda Rp." + totalBelanja +
        "\nUang yang Anda masukkan Rp." + uangMasukan
        )
        ulangBayar = false
        statement = "Kembalian Rp." + selisih
    }
    else {
        alert("Uang yang Anda masukkan Pas" +
        "\nTotal Belanja Anda Rp." + totalBelanja +
        "\nUang yang Anda masukkan Rp." + uangMasukan
        )
        ulangBayar = false
        statement = "uang anda pas"
    }
}

console.log("Data Belanja" +  
            "\n ayam x " + jumlahMenu[0] + " = Rp." + totalPerBarang[0] +
            "\n ikan x " + jumlahMenu[1] + " = Rp." + totalPerBarang[1] +
            "\n sapi x " + jumlahMenu[2] + " = Rp." + totalPerBarang[2] +
            "\n total Rp." + totalBelanja +
            "\n jumlah uang = Rp." + uangMasukan +
            "\n " + statement +
            "\n Terima kasih"
            )


