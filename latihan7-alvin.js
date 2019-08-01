let login = prompt(`Selamat datang di Bunbin
                    Masukan username (admin/boss)`).toLowerCase()

let username
let checkLogin = true

while (checkLogin){
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
}

let hewan = [
    {id: 1, nama: 'Gajah', usia: 7},
    {id: 2, nama: 'Merak', usia: 4},
    {id: 3, nama: 'Harimau', usia: 3}
]

let listHewan = (hewan) => {
    let list = 'Daftar binatang'
    for(let i = 0; i < hewan.length; i++){
        if(hewan[i] != undefined){
            list += `\n${i}. Id: ${hewan[i].id}, Nama: ${hewan[i].nama}, Usia: ${hewan[i].usia}`
        }
    }

    return list
}

let inputBinatang = () => {
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




if (username == 'admin'){
    let adminMenu = parseInt(
        prompt(
            "Menu admin\n" +
            "  1. Show list binatang\n" +
            "  2. Input binatang\n" +
            "  3. Exit"
        )
    )
}

else if (username == 'boss'){
    let bossMenu = parseInt(
        prompt(
            "Menu admin\n" +
            "  1. Show list binatang\n" +
            "  2. Input binatang\n" +
            "  3. Exit"
        )
    )
}