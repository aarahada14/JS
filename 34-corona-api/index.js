

let url = 'https://api.rootnet.in/covid19-in/stats/latest'


fetch(url)
.then((res) => res.json())
 .then((res) => {
    console.log(res)
    showStates(res)
})

 function showStates(resp){
    resp.data.regional.map((st) =>{
        document.querySelector(".states").innerHTML += `<option value="${st.loc}" >${st.loc}</option>`
    })


    document.querySelector(".states").onchange=function(e){
console.log(e.target.value)

let data = resp.data.regional.filter((st) => st.loc == e.target.value)
console.log(data)
    }
 }






fetch(url)
.then((res)=>res.json())
.then((res)=> {
    // console.log(res)
    showdata(res)
})

cityInput.addEventListener("change",function(e){
    let city = e.target.value
    console.log(city)
})
