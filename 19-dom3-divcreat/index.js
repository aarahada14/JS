

// console.log(main.firstElementChild);


// main.firstElementChild.setAttribute("class", "box bg")

// console.log(main)


// let head = document.createElement("h2")

// console.log(head)

// head.innerText = "welc9ome horror"

// // head.textContent = "again welcome"


// // head.innerHTML = "<u>again welcome</u>"

// main.append(head)



// let it = document.getElementById("innerText")
// console.log(it.innerText)


// let tc = document.getElementById("textContent")
// console.log(tc.textContent)



let main = document.getElementById("main")

let btn = document.getElementById("btn")

btn.addEventListener("click", show)

let count = 0

console.log(main)

function show(){


    count++;
    
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let button = document.createElement("button")
    let p  = document.createElement("p");

    let b = document.createElement("b");
    let img = document.createElement("img")


    div.setAttribute("class", "box")
    b.setAttribute("class", "count")

    p.textContent = "Lorem ipsum dolor sit amet."
    h4.textContent = "this is head"
    button.textContent = "More";
    b.textContent = count;
    img.src = "https://i.pinimg.com/736x/1a/be/97/1abe975f5611c93f206205cf6d1ee202.jpg";
    img.style.width = "100%"



    button.addEventListener("click", function(){
        alert("this is count " + b.textContent )
    })

    div.append(b, img, h4, p, button)




    // console.log(div, p, h4, button)

    main.append(div)
    console.log(main)
}