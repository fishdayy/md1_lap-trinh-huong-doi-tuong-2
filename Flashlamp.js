class Battery{
    constructor(energy) {
        this.energy = energy;
    }
    setEnergy(value){
        this.energy = value;
    }
    getEnergy(){
        return this.energy;
    }
    decreaseEnergy(){
        this.energy--;
        return this.energy
    }
}
class FlashLamp{
    constructor(status){
        this.status = status;
    }
    turnOn(){
        return this.status = true;
    }
    turnOff(){
        return this.status = false;
    }
    lightning(energy){
        if(this.status){
            console.log('den sang')
            energy.decreaseEnergy()
        }else {
            console.log('den tat')
        }
    }
}
let flashLamp = new FlashLamp(false)
let battery = new Battery(100)
battery.setEnergy(20)
for (let i = 0; i <=10; i++){
    flashLamp.turnOn()
    flashLamp.lightning(battery)
    flashLamp.turnOff()
    console.log(battery.getEnergy())
}
