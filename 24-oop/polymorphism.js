

class animal {
        
    eating(item){
        this.item = item
        console.log("eating " + this.item)
    }
}

class dog extends animal {

  
    eating(item){
        super.eating(item)
        console.log("eating " + this.item)
    }
}

let golden = new dog()
golden.eating("milk")
