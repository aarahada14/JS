// -------------------------------------------------randoumdog-----------------------------------------------------
function callRandomDog(){
    let url= 'https://dog.ceo/api/breeds/image/random'
       fetch(url)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res.message)
            randomDog(res.message)
    })
}
setInterval(callRandomDog, 5000)
function randomDog(img){
    document.querySelector(".randomDog").src=""
    document.querySelector(".randomDog").src=img
}




// -------------------------------------------------randoumdogList-----------------------------------------------------
function breedList(){
    url='https://dog.ceo/api/breeds/list/all'
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        // console.log(res)
        listDog(res.message)
    })
}
breedList()


function listDog(dog){
    for(var a in dog){
        document.querySelector(".list").innerHTML +=`<li>${a}</li>`
        document.querySelector(".selectDog").innerHTML +=`<option value=${a}>${a}</option>`
    }
}



// -------------------------------------------------search-----------------------------------------------------

document.querySelector(".search").addEventListener("change", function(e){
    let search = e.target.value;

    // console.log(search)

    url=`https://dog.ceo/api/breed/${search}/images/random`
     fetch(url)
    .then((res) => res.json())
    .then((res) =>{
        // console.log(res)
         searchDog(res.message)
        })

})

function searchDog(img){
    // document.querySelector(".searchDog").src=""
    document.querySelector(".searchDog").src = img
}





// -------------------------------------------------search-----------------------------------------------------

document.querySelector(".selectDog").addEventListener("change", function(e){
    let select= e.target.value
    url=`https://dog.ceo/api/breed/${select}/images`
     fetch(url)
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
         selectDog(res.message)
        })
})


function selectDog(images){
    console.log(images)
document.querySelector(".allDogImg").innerHTML  = ""

    images.map((img) => {
        document.querySelector(".allDogImg").innerHTML  += `
        <div class="col-4 gap-1">
            <img class="img-thumbnail" src=${img} alt="">
            </div>
            `
            })
    
}
