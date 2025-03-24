


// let obj = {
//     name : "mehul",
//     post : "manager",
//     age : 20
// }

// // console.log(obj)


// // let obj1 = new Object("pradip", "director", 32)



// // console.log(obj1.name, obj1.post, obj1.age)



// class Object {
//     constructor(name, post, age){
//         this.name= name
//         this.post = post 
//         this.age = age 
//     }
// }


// let obj = new Object("mohit", "faculty", 28)

// console.log(obj)

// let obj1 = new Object("prasant", "conselor", 28)

// console.log(obj1)



// let bigObj = {
//     one: 1
// }


// let smallObj =  bigObj;

// smallObj.one = 2;
// console.log(smallObj)



// let str = "alishan"

// str.includes("l")


class includ{
    constructor(str){
     return  this.str = str;
    }

    includes(char){
        for(let i=0; i<this.str.length; i++){
            if(this.str[i] == char)
            {
                return true;
            }
          
        }
        return false
    }


    charAt(index){
            return this.str[index]
    }

}

let inc = new includ("alishan")


console.log(inc.includes("z"))


console.log(inc.charAt(2))
