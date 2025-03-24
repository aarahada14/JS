


class parent {
    name = "Volkswagon"
}


class child extends parent{
    
    show(){
        console.log(this.name)
    }
}

let car = new child()

car.show()
