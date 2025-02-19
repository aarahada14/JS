
// let obj = new Object();

// let obj2 = {};

// obj.name = "amruta";
// obj.email = "amtruta@gmail.com"
// obj.subject = "math"
// // console.log(obj)
// // console.log(obj.email)

// obj2.name1 = "Pratic"
// obj2.email1 ="pratic@gmail.com"
// obj2.subject = "science"
// // console.log(obj2);


let obj3 = {
    name: "amit",
    email: "amit@gmail.com",
    status : {
        first: {
            second: {
                thrid :true
            }
        }
    },
    hobbies : ["cricket", "hocky", "running"]
}


// // console.log(obj3.hobbies)

// let obj4 = {obj, obj2}

// // console.log(obj4.obj.name)


// let obj5 = Object.assign(obj, obj2)

// console.log(obj5)


// let obj6 ={
//     "first name" : "vaishali",
//     email : "vashali@gmail.com"
// }

// console.log(obj6["first name"])


// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))

// console.log(obj3.hasOwnProperty("last"))




// for(let key in obj3){
//     console.log(obj3[key])
// }

main()
function main(){
    let user1 = {
        login: "rwbn9890",
        id: 170520766,
        node_id: "U_kgDOCinwvg",
        avatar_url: "https://avatars.githubusercontent.com/u/170520766?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/rwbn9890",
        html_url: "https://github.com/rwbn9890",
        followers_url: "https://api.github.com/users/rwbn9890/followers",
        following_url:
          "https://api.github.com/users/rwbn9890/following{/other_user}",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        name: "Alishan Shaikh ",}

    submain(user1)
}


function submain({name, id, type}){
    // const {name, id, type}  = user
    console.log(name,id, type)
}





