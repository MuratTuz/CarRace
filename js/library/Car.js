


class Car {
    constructor() {
        this.power = Math.floor(Math.random() * 100) + 50; // generate a number between 50-150;
        this.maxSpeed = Math.floor(this.power * 0.10); // generate a number between 5-15;
        this.acceleration = Math.floor(Math.random() * 4) + 1; // generate a number between 1-5;    
        this.color = COLOR[Object.keys(COLOR)[Math.floor(Math.random() * 7)]];
        this.pitStopTime = Math.floor(Math.random() * 9) + 1; // generate a number between 1-10;
        this.pitStopDuration = Math.floor(Math.random() * 4) + 1; // generate a number between 1-5;
        this.place = 0;
        this.currentSpeed = 0;
    }

    move() {
        this.accelerate();
        this.place += this.currentSpeed;

    }

    stop() {
        this.currentSpeed = 0;
    }

    accelerate() {
        if (this.currentSpeed < this.maxSpeed) {
            this.currentSpeed += this.acceleration;
        } else {
            this.currentSpeed =this.maxSpeed // not to exceed maxSpeed before moving
        }
    }

}