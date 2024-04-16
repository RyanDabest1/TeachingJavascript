let BMW = {
    gasLevel : 0,
    isStarted : false,
    model : "M3",
    price : 300000,
    manufacturedYear : 2004,
    colors : ["white", "red", "blue", "silver"],
    passenger : 2,
    fillGas : function (gasAmt){
        this.gasLevel = this.gasLevel + gasAmt;
    },
    startEngine : function(){
        if(!this.isStarted){
            this.isStarted = true;
            console.log("Engine started")
        } else {
            console.log("Engine already started")
        }
       
    },
    stopEngine : function(){
        if(this.isStarted){
            this.isStarted = false;
            console.log("Engine stopped")
        }  else {
            console.log("Engine already stopped")
        }
    },
    drive : function(distance){
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
}

BMW.startEngine();
BMW.fillGas(10);
BMW.drive(5)
BMW.stopEngine();
