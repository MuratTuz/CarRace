

/**
 * Lane class contains Car class and order Car to move or to stop according the time of pitSoptTime and pitStopDuration
 */

class Lane {
    constructor (pCar) {
        this.car = pCar; // class Car();
        this.pitStopDuration = pCar.pitStopDuration;
        this.pitStopTime = pCar.pitStopTime;
        this.currentColor = pCar.color;
        this.pitStopCount = 0;
    }

    getCar() {
        return this.car;
    }

    run() {
        if (--this.pitStopTime < 0) {
            this.car.stop();
            this.currentColor = 'black'; // when car is at pit-stop so its color turns out black
            if (--this.pitStopDuration < 0) {
                this.pitStopTime = this.car.pitStopTime;
                this.pitStopDuration = this.car.pitStopDuration;
                this.currentColor = this.car.color; // when car turns back to the race then it gets its original color again
                this.pitStopCount++;
            }
            
        } else {
            this.car.move();
        }
    }
}