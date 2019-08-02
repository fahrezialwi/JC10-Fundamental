let arrManusia = [
    {nama: 'Alex', umur: 22, job: 'Dev'},
    {nama: 'Alicia', umur: 32, job: 'Dev'},
    {nama: 'Alona', umur: 26, job: 'Dev'},
    {nama: 'Batios', umur: 33, job: 'CEO'},
    {nama: 'Bakhti', umur: 38, job: 'PM'},
    {nama: 'Charlee', umur: 27, job: 'CTO'}
];

let arrJob = [
    'All' ,'Dev', 'CEO', 'PM', 'CTO'
];

let remove = (element) => {
    arrManusia.splice(element,1)
    funShow(arrManusia)
}

// // function remove cara lain
// let remove = (removeIndex) => {
//     let arrayDelete = arrManusia.filter((val, index) => {
//         return index != removeIndex
//     })
//     arrManusia = arrayDelete
//     funShow(arrManusia)
// }

let funShow = (array) => {
    let listManusia = array.map((val, index) => {
        return `<tr>
                <td>${val.nama}</td>
                <td>${val.umur}</td>
                <td>${val.job}</td>
                <td><input type="button" value="Delete" onclick="remove(${index})"</td>
            </tr>`
    })

    let listJob = arrJob.map((val) => {
        return `<option value="${val}">${val}</option>`
       
    })

    document.getElementById('here').innerHTML = listManusia.join('');
    document.getElementById('job').innerHTML = listJob.join('');
}

let funInputData = () => {
    // get data
    let nama = document.getElementById("nama").value
    let umur = document.getElementById("umur").value
    let job = document.getElementById("jobInput").value

    // push data
    arrManusia.push({
        nama, umur, job
    })

    // check job
    let ada = arrJob.includes(job)
    if (!ada){
        arrJob.push(job)
    }

    funShow(arrManusia)
}

// FILTER NAMA

let funFilterName = () => {
    // get data from user
    let filter = document.getElementById("search").value
    // filtering
    let hasilFilterName = arrManusia.filter((val) => {
        return val.nama.toLowerCase().includes(filter.toLowerCase())
    })
    // renderlist
    funShow(hasilFilterName)
  
}

// FILTER UMUR

let funFilterUmur = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    let hasilFilterUmur = arrManusia

    if(!(num1 == '' || num2 == '')){
        hasilFilterUmur = arrManusia.filter((val) => {
            return (val.umur >= num1 && val.umur <= num2)
        })
    }

    funShow(hasilFilterUmur)

}

// FILTER JOB

let funFilterJob = () => {
    let selectedJob = document.getElementById('job').value
    let hasilFilterJob = []
    
    if (selectedJob == 'All'){
        hasilFilterJob = arrManusia
    }
    else {
        hasilFilterJob = arrManusia.filter((val) => {
            return val.job == selectedJob
        })
    }

    funShow(hasilFilterJob)
}

funShow(arrManusia)