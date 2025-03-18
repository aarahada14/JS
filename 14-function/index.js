// function data (){
//     return "this is data";
// }  
// data();
// console.log(data())


// let data2 = function(){
//     return "this is data";
// }
// data2();
// console.log(data2())





// //........................................................ explicite
// let data = ()=>{
//     return "this is data"
// }
// console.log(data())


// //......................................................... implicite
// let data2 =()=>"this is data"
// console.log(data2())

// let ele = 50
// let data3 =(ele)=>50*50
// console.log(data3())





// //.......................................................... object
// function take(name){
//     return `this is ${name} wanna take selfy`;
        
// }
// let bigObj ={
//     username : "Aara hada",
//     email : "aara@gmail.com",
//     data :  take(this.username)
// }
// console.log(bigObj.data())




// let prod = {
//     name : " Ysl heels",
//     price : "1,50,000",
//     rating : "4.5",
//     emi : () => `<h1>heels: ${this.name}</h1>
//                   <b>price:$ ${this.price} </b>`   
// }
// document.write(prod.emi())



// //........................................................ forEach
let arr = [1, 2, 3, 4, 5]

// for(let i=0; i<arr.length; i++){
//     print(arr[i])                   // NORMAL FOREACH
// }

const print =(ele)=>{
    console.log(ele)
}
arr.forEach(print)

arr.forEach((ele)=> console.log(ele*ele))
