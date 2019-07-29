// // V1.0
var arrHewan = [
    {id: 1, nama: "Molly", usia: 2},
    {id: 2, nama: "Cimi", usia: 3},
    {id: 4, nama: "Chaos Meteor", usia: 99}
]

var login;

var inputBinatang = () => {
    // input binatang
    let aidi = parseInt(
        prompt(
            "Masukan nomor id binatang: "
        )
    )
    let neim = prompt(
        "Masukan nama binatang: "
    )
    let age = parseInt(
        prompt(
            "Masukan usia binatang: "
        )
    )
    arrHewan.push({ id: aidi, nama: neim, usia: age })
    // show list
    alert(
        "Input berhasil, data sudah diperbaharui\n\n" +
        showList(arrHewan)
    )
}

var showList = (hewan) => {
    var list = 'Daftar binatang'
    for(let i = 0; i < hewan.length; i++){
        if(hewan[i] != undefined){
            list += `\n${i}. Id: ${hewan[i].id}, Nama: ${hewan[i].nama}, Usia: ${hewan[i].usia}`
        }
    }

    return list
}

do {
    do {
        var check = true
        login = prompt(`Selamat datang di Bunbin
    Masukan username (admin/boss)`).toLowerCase()

        if (login == '') {
            alert("Mohon isi username")
        } else if (login == 'admin' || login == 'boss' || login == 'exit') {
            check = false
        }else {
            alert("Username tidak dikenali")
        }
    } while (check); // login : admin

    var lagi = true
    if (login == 'admin') {
        let lagi2 = false
        do {
            let pil = parseInt(
                prompt(
                    "Menu admin\n" +
                    "  1. Show list binatang\n" +
                    "  2. Input binatang\n" +
                    "  3. Exit"
                )
            )

            if (pil == 1) {
                // show list
                alert(showList(arrHewan))
            } else if (pil == 2) {
                inputBinatang()
            } else if (pil == 3) {
                lagi2 = confirm("Anda yakin akan keluar sebagai admin ?")
            }
        } while (!lagi2);
    } else if (login == "boss"){
        let lagi2 = false
        do {
            let pil = parseInt(
                prompt(
                    "Menu boss\n" +
                    "  1. Show list binatang\n" +
                    "  2. Input binatang\n" +
                    "  3. Edit binatang\n" +
                    "  4. Delete binatang\n" +
                    "  5. Exit"
                )
            )

            if (pil == 1) {
                alert(showList(arrHewan))
            } else if (pil == 2) {
                inputBinatang()
            } else if (pil == 3) {
                let pil, pilEdit, sure
                do {
                    sure = false
                    pil = parseInt(
                        prompt(
                            showList(arrHewan) +
                            "\n\nPilih binatang yang ingin di edit"
                        )
                    )

                    sure = confirm(
                        "Anda yakin ingin edit binatang ini ?\n\n" +
                        `${pil}. Nama: ${arrHewan[pil].nama}, Usia: ${arrHewan[pil].usia}`
                    )
                } while (!sure);

                pilEdit = parseInt(
                    prompt(
                        "Apa yang ingin anda edit:\n\n" +
                        "1. Edit id\n2. Edit nama\n3. Edit usia"
                    )
                )

                if (pilEdit == 1) {
                    arrHewan[pil].id = parseInt(
                        prompt(
                            `Masukan ID baru untuk :\n\n${arrHewan[pil].nama}`
                        )
                    )
                } else if (pilEdit == 2) {
                    arrHewan[pil].nama = prompt(`Masukan Nama baru untuk :\n\n${arrHewan[pil].nama}`)
                } else if (pilEdit == 3) {
                    arrHewan[pil].usia = parseInt(
                        prompt(
                            `Masukan Usia baru untuk :\n\n${arrHewan[pil].nama}`
                        )
                    )
                }

                alert(showList(arrHewan))

            } else if (pil == 4) {
                let pil, sure

                do {
                    sure = false
                    pil = parseInt(
                        prompt(
                            "Pilih binatang yang ingin di delete:\n\n" +
                            showList(arrHewan) + "\n"
                        )
                    )

                    sure = confirm(
                        `Anda yakin ini delete ${arrHewan[pil].nama}`
                    )
                } while (!sure);

                alert(
                    `${arrHewan[pil].nama} berhasil dihapus !!\n\n`
                )
                delete arrHewan[pil]
                alert(showList(arrHewan))
            } else if (pil == 5) {
                lagi2 = confirm("Anda yakin akan keluar sebagai boss ?")
            }
        } while (!lagi2);
    } else if(login == 'exit'){
        lagi = false
    }
} while (lagi);