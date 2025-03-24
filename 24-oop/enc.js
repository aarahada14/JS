
class reg{
     
    constructor(){
           this.name = "alishan"
            this.pass = "ali123"
            this.balance;
    }
  

    login(name, pass){
        if(this.name == name &&  this.pass == pass){
            console.log("login successfull..!")
        }
        else{
            console.log("invalid creadintial...!")
        }
    }

}

const user = new reg()

user.login("alishan", "ali12")






class Array {
    constructor(){
        return []
    }
}

let obj = new Object()

let arr = new Array()

console.log(arr)
