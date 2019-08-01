let arrayHuman = []

var fun1 = () => {

    let dataNama = document.getElementById("name").value
    let dataUsia = document.getElementById("age").value
    let dataGender = document.querySelector("input[name=sex]:checked").value
    let dataPekerjaan = document.getElementById("job").value

    arrayHuman.push(
        {
            name: dataNama,
            age: dataUsia,
            gender: dataGender,
            job: dataPekerjaan
        }
    )
    showTable1()
}

var showTable1 = () => {
    let list = arrayHuman.map((human) => {
        return `<tr>
        <td>${human.name}</td>
        <td>${human.age}</td>
        <td>${human.gender}</td>
        <td>${human.job}</td>
        </tr>`
    })
    document.getElementById("mans").innerHTML = list.join('')
}


let arrayHewan = []

var fun2 = () => {

    let dataNama = document.getElementById("nameH").value
    let dataUsia = document.getElementById("ageH").value
    let dataGender = document.querySelector("input[name=sex]:checked").value
    let dataStatus = document.querySelector("input[name=stat]:checked").value

    arrayHewan.push(
        {
            name: dataNama,
            age: dataUsia,
            gender: dataGender,
            job: dataStatus
        }
    )
    showTable2()
}

var showTable2 = () => {
    let list = arrayHewan.map((hewan) => {
        return `<tr>
        <td>${hewan.name}</td>
        <td>${hewan.age}</td>
        <td>${hewan.gender}</td>
        <td>${hewan.job}</td>
        </tr>`
    })
    document.getElementById("hews").innerHTML = list.join('')
}