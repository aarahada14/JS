let show = document.getElementById("show")
let arr = JSON.parse(localStorage.getItem("arr")) || []


    function setLocal(array)
        {
            localStorage.setItem("arr", JSON.stringify(array))
            showItem(arr)
            location.reload()
        }

let img = document.getElementById("img")
let item = document.getElementById("item")
let price = document.getElementById("price")
let rate = document.getElementById("rate")

    function add(){
        if(document.getElementById("img").value=="") return;
        let obj ={
            id:Math.round(Math.random()*10000),
            img :img.value,
            item :item.value,
            price :price.value,
            rate :rate.value
        }
        if(img.name != "")
            {
              let newArr=  arr.map((ele) =>{
                    if(ele.id == img.name)
                    {
                        ele = obj;
                    }
                    return ele;
               })
               setLocal(newArr)
            }
            else{
                arr.push(obj)
                setLocal(arr)
            }
    }

    function del(id){
        let new_arr =  arr.filter((ele) => ele.id != id)
        setLocal(new_arr)
        
    }

    function edit(id){
        let newObj = arr.find((ele) => ele.id == id)
        console.log(newObj)
        img.value = newObj.img
        item.value = newObj.item
        price.value = newObj.price
        rate.value = newObj.rate
        img.name=id;
    }

    function showItem(){
    show.innerHTML=""
        arr.map((ele) => {
            const card =
            `<div class="col-2 g-3">
                <div class="card p-2 shadow position-relative">
                    <button onclick="del(${ele.id})" class="position-absolute btn btn-outline-danger rounded-circle btn-sm" style="right:10px;top:10px">❌</button>
                    <a onclick="edit(${ele.id})" class="btn btn-outline-danger rounded-circle btn-sm position-absolute" style="right:10px;top:50px">🖊️</a>
                    <img src=${ele.img} class="card-img-top w-100" alt="...">
                    <div class="card-body text-center">
                    <h5 class="card-title fs-4">${ele.item}</h5>
                    <b class="card-text fs-5">${ele.price}</b> &nbsp  &nbsp
                    <b class="card-text fs-5">${ele.rate}</b> <br> 
                    <a class="btn btn-primary">MORE</a>
                    </div>
                </div>
            </div>`
            show.innerHTML += card
        })     
    }
    showItem(arr)
