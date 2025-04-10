let url = 'https://dog.ceo/api/breed/hound/images'


//-------------------------------------------------promisses-------------------------------------------------

function callapi(){
    fetch (url)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        showData(res)
    })
    .catch(()=>{
             console.log("something went wrong")
    })
}

//-------------------------------------------------ASYNC AWAIT-------------------------------------------------

getData()

async function getData(){

    try{
       let res = await fetch(url)
        let data = await res.json()

        console.log(data)  
    }
    catch(err){
        console.log(err)
    }


}


function showData(data){

}