



class Lane {
    constructor (pCar) {
        this.car = pCar; // class Car();
        this.pitStopDuration = pCar.pitStopDuration;
        this.pitStopTime = pCar.pitStopTime;
        //this.pitStopStatus = false;
        this.currentColor = pCar.color;
    }

    getCar() {
        return this.car;
    }

    run() {
        if (--this.pitStopTime < 0) {
            this.car.stop();
            this.currentColor = 'black';
            if (--this.pitStopDuration < 0) {
                this.pitStopTime = this.car.pitStopTime;
                this.pitStopDuration = this.car.pitStopDuration;
                this.currentColor = this.car.color;
            }
            
        } else {
            this.car.move();
        }
    }
}