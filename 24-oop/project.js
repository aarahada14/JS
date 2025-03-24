
class bank{
    constructor(username, password){
        this.username = username
        this.password = password 
        this.balance = 0
    }


    deposite(username, password, balance){
            if(this.username==username && this.password ==password)
            {
                this.balance += balance
            }
            else{
                console.log("invalide creadinal..1")
            }
    }


    show(username, password){
            if(this.username==username && this.password ==password)
            {
                console.log("balance: ", this.balance)
            }
            else{
                console.log("invalide creadinal..1")
            }
    }

    widraw(username, password, balance){
            if(this.username==username && this.password ==password)
            {

                if(this.balance < balance){
                    console.log("inserficiant balance..1")
                }
                else{
                    this.balance -= balance
                    console.log("widrawal : ", balance)
                    console.log("current bal : ", this.balance)
                }
               
            }
            else{
                console.log("invalide creadinal..1")
            }
    }




}
let User1 = new bank("amit", 123)


User1.deposite("amit", 123, 1500)
User1.deposite("amit", 123, 100)


// User1.show("amit", 123)


User1.widraw("amit", 123, 1800)


let User2 = new bank("vaishali", 456)

User2.show("vaishali", 456)
User2.deposite("vaishali", 456, 10000)
User2.show("vaishali", 456)
