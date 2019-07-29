let hewan = [
    {id: 1, nama: 'Gajah', usia: 7},
    {id: 2, nama: 'Merak', usia: 4},
    {id: 3, nama: 'Harimau', usia: 3}
]

function listHewan(animal) {
    let list = 'Daftar binatang'
    for(let i = 0; i < animal.length; i++){
        if(animal[i] != undefined){
            list += `\n${i+1}. Id: ${animal[i].id}, Nama: ${animal[i].nama}, Usia: ${animal[i].usia}`
        }
    }
    return list
}

function inputHewan() {
    // input binatang
    let id = parseInt(prompt(
            "Masukan nomor id binatang: "
        )
    )
    let name = prompt(
        "Masukan nama binatang: "
    )
    let age = parseInt(prompt(
            "Masukan usia binatang: "
        )
    )
    hewan.push({ id: id, nama: name, usia: age })
    // show list
    alert(
        "Input berhasil, data sudah diperbarui\n\n" +
        listHewan(hewan)
    )
}

function editHewan() {
    let selection, selectionEdit, sure
    do {
        sure = false
        selection = parseInt(
            prompt(
                
                `Pilih binatang yang ingin diedit:\n\n${listHewan(hewan)}`
            )
        )

        sure = confirm(
            `Anda yakin ingin edit ${hewan[selection].nama}?`
        )
    } while (!sure);

    selectionEdit = parseInt(
        prompt(
            "Apa yang ingin anda edit:\n\n" +
            "1. Edit id\n2. Edit nama\n3. Edit usia"
        )
    )

    if (selectionEdit == 1) {
        hewan[selection].id = parseInt(
            prompt(
                `Masukan ID baru untuk ${hewan[selection].nama}`
            )
        )
    } 
    else if (selectionEdit == 2) {
        hewan[selection].nama = prompt(`Masukan Nama baru untuk ${hewan[selection].nama}`)
    } 
    else if (selectionEdit == 3) {
        hewan[selection].usia = parseInt(
            prompt(
                `Masukan Usia baru untuk ${hewan[selection].nama}`
            )
        )
    }

    alert(listHewan(hewan))
}

function deleteHewan() {
    let selection, sure

    do {
        sure = false
        selection = parseInt(
            prompt(
                "Pilih binatang yang ingin di delete:\n\n" +
                listHewan(hewan) + "\n"
            )
        )

        sure = confirm(
            `Anda yakin ini delete ${hewan[selection].nama}`
        )
    } while (!sure);

    delete hewan[selection]
    alert(
        `${hewan[selection].nama} berhasil dihapus\n\n`
    )
    alert(listHewan(hewan))
}

let username
let checkLogin = true

while (checkLogin){

    let login = prompt(`Selamat datang di Bunbin \nMasukan username (admin/boss)`).toLowerCase()

    if (login == 'admin'){
        alert('Login sukses')
        username = 'admin'
        checkLogin = false
    }
    else if (login == 'boss'){
        alert('Login sukses')
        username = 'boss'
        checkLogin = false
    }
    else {
        alert("Username tidak dikenali")
        checkLogin = true
    }


    if (username == 'admin'){
        let ulangAdminMenu = true
        while (ulangAdminMenu){
            let adminMenu = parseInt(
                prompt(
                    "Menu admin\n" +
                    "  1. Show list binatang\n" +
                    "  2. Input binatang\n" +
                    "  3. Exit"
                )
            )

            if (adminMenu == 1){
                alert(listHewan(hewan))
            }
            else if (adminMenu == 2){
                inputHewan()
            }
            else if (adminMenu == 3){
                let confirmExitAdmin = confirm("Anda yakin akan keluar sebagai admin?")
                if (confirmExitAdmin == true){
                    ulangAdminMenu = false
                    checkLogin = true
                }
                else {
                    ulangAdminMenu = true
                }
            }
        }
    }


    else if (username == 'boss'){
        let ulangBossMenu = true
        while (ulangBossMenu){
            let bossMenu = parseInt(
                prompt(
                    "Menu boss\n" +
                    "  1. Show list binatang\n" +
                    "  2. Input binatang\n" +
                    "  3. Edit binatang\n" +
                    "  4. Delete binatang\n" +
                    "  5. Exit"
                )
            )

            if (bossMenu == 1){
                alert(listHewan(hewan))
            }
            else if (bossMenu == 2){
                inputHewan()
            }
            else if (bossMenu == 3) {
                editHewan()

            } 
            else if (bossMenu == 4) {
                deleteHewan()
            }
            else if (bossMenu == 5){
                let confirmExitBoss = confirm("Anda yakin akan keluar sebagai boss?")
                if (confirmExitBoss == true){
                    ulangBossMenu = false
                    checkLogin = true
                }
                else {
                    ulangBossMenu = true
                }
            }
        }
    }


}