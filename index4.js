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

    funShow()
}

// render list

let funShow = () => {
    let listManusia = arrManusia.map((val) => {
        return `<tr>
                <td>${val.nama}</td>
                <td>${val.umur}</td>
                <td>${val.job}</td>
            </tr>`
    })

    let listJob = arrJob.map((val) => {
        return `<option value="${val}">${val}</option>`
       
    })

    document.getElementById('here').innerHTML = listManusia.join('');
    document.getElementById('job').innerHTML = listJob.join('');
}

let funFilterName = () => {
    // get data from user
    let filter = document.getElementById("search").value
    // filtering
    let hasilFilter = arrManusia.filter((val) => {
        return val.nama.toLowerCase().includes(filter.toLowerCase())
    })
    // renderlist
    let list = hasilFilter.map((val) => {
        return `<tr>
                <td>${val.nama}</td>
                <td>${val.umur}</td>
                <td>${val.job}</td>
            </tr>`
    })

    // munculkan hasil render
    document.getElementById('here').innerHTML = list.join('')
}

let funFilterUmur = () => {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value


    let list

    if(!(num1 == '' || num2 == '')){
        list = arrManusia.filter((val) => {
            return (val.umur >= num1 && val.umur <= num2)
        })
    }

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')

}

funShow()