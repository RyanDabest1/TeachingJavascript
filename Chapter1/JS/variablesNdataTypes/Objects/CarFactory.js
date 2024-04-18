function Car(gasLevel, model, price, manufacturedYear, colors, passenger){
    this.gasLevel = gasLevel;
    this.isStarted = false;
    this.model = model;
    this.price = price;
    this.manufacturedYear = manufacturedYear;
    this.colors = colors;
    this.passenger = passenger;
    this.fillGas = function (gasAmt){
        this.gasLevel = this.gasLevel + gasAmt;
    };
    this.startEngine = function (){
        if(!this.isStarted){
            this.isStarted = true;
            console.log("Engine started")
        } else {
            console.log("Engine already started")
        }
    };
    this.stopEngine = function (){
        if(this.isStarted){
            this.isStarted = false;
            console.log("Engine stopped")
        }  else {
            console.log("Engine already stopped")
        }
    };
    this.drive = function (distance) {
        if(this.isStarted){
            if(distance > this.gasLevel){
                console.log("Gas not enough go wait for gas at a gas store")
            } else {
                let gasNow =this.gasLevel - distance;
                this.gasLevel = gasNow;
                console.log("Drove the distance, you look at ur gas meter : " + gasNow )
            }
        } else {
            console.log("Start your engine first!")
        }
    }

};

let BMW = new Car(0, "M3", 300000, 2004, ["red", "white", "blue", "silver"], 2);
let NewCar = new Car(0, "M4", 200000, 2005, ["white", "black"], 4)

BMW.fillGas(10);
BMW.startEngine();
BMW.drive(7);

NewCar.fillGas(10);
NewCar.startEngine();
NewCar.drive(10);