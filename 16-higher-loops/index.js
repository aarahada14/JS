
let arr = [ 1, 2, 3, 4, 5 , 6, 7, 8];


// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
//     if(i == 2){
//        return
//     }
// }


// for(let x in arr){
//     console.log(x, arr[x])
// }



// for(let i=0; i<arr.length; i++){
//     every(arr[i])
// }

// for(let x in arr){
//     every(arr[x])
// }



// arr.forEach(every)

// function every(el){
//     console.log(el*el)
// }



// console.log("**************************************************")

// arr.forEach(function(ele){
//     console.log(ele*ele*ele)
// })




// console.log("**************************************************")

// arr.forEach((ele) => {
//     console.log(ele*ele*ele)
// })




// console.log("**************************************************")

// arr.forEach((ele) => console.log(ele*ele*ele))





// console.log("**************************************************")

// forEach does not return the values

// let val = arr.map((ele) =>  ele*ele*ele)

// console.log(val)








// console.log("**************************************************")


// let val = arr.map((ele) => {
//     if(ele%2 == 0){
//         return ele;
//     }
// })

// console.log(val)



//  console.log("**************************************************")


// let val = arr.map((ele) => ele%2==0 ? ele : 0)
// console.log(val)



// console.log("**************************************************")


// let val = arr.filter((ele) =>{
//     if(ele%2==1)
//     {
//         return ele;
//     }
// })
// console.log(val)




// console.log("**************************************************")


// let val = arr.filter((ele) => ele%2==0 )
// console.log(val)

 
    // for(let i=0;i<arr.length; i++)
    // {
    //    console.log(prime(arr[i])) 
    // }

//    let pr = arr.filter((ele) => prime(ele) == false)
//    console.log(pr)

// function prime(ele){
//         for(let j=2; j<ele; j++)
//         {
//            if(ele%j==0)
//             {
//             return true
//             } 
            
//         }
// }

let price = [20, 30, 40, 23]


let total = price.reduce((accu, ele) => accu+ele)
console.log(total)

// let sum =0


// for(let i=0; i<price.length; i++)
// {
//     sum = add(sum, price[i])
// }


// function add(ac, el){

//     return ac+el

// }
