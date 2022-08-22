class SwitchButton{
    constructor(status,lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    switchOn(){
        this.status = true
    }
    switchOff(){
        this.status = false
    }
    connectToLamp(electricLamp){
        if(electricLamp.status == true){
        }
    }

}
class ElectricLamp{
    constructor(status) {
        this.status = status;
    }
    lightning(){
        this.status = true;
    }
    noLightning(){
        this.status = false;
    }
}