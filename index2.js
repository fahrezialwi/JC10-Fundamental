let myFunction = () => {
    let nama = document.getElementById("nama").value
    let usia = document.getElementById("usia").value

    // let genderArray = document.getElementsByName("gender")

    // for (i = 0; i < genderArray.length; i++) {
    //     if (genderArray[i].checked) {
    //         var gender = genderArray[i].value
    //     }
    // }

    // cara lain
    let gender = document.querySelector("input[name=gender]:checked").value

    let pekerjaan = document.getElementById("pekerjaan").value

    // let skillArray = document.getElementsByName("skill")
    // var skill = ''
    // for (i = 0; i < skillArray.length; i++) {
    //     if (skillArray[i].checked) {  
    //         skill = skill + skillArray[i].value + " "
    //     }
    // }

    // cara lain
    let skillArray = document.querySelectorAll("input[name=skill]:checked") // querySelectorAll untuk multiple checkbox
    let skill = ''
    for (let i = 0; i < skillArray.length; i++) {
            skill += skillArray[i].value + ", "     
    }

    skill = skill.slice(0,-2)

    console.log(document.getElementById("nama"))
    console.dir(document.getElementById("nama")) // melihat properti objek document di google chrome

    document.getElementById("disini").innerHTML = `Nama: ${nama}<br>Usia: ${usia}<br>Gender: ${gender}<br>Pekerjaan: ${pekerjaan}<br>Skill: ${skill}`
    // jika innerText akan mengubah kode html menjadi string
}