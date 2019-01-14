




class Arena {
    constructor(pWidth) {
        this.lanes = [];
        this.width = pWidth; // div.lane = div.arena-50 , car.width = 100px, half is 50px So, div.arena-100 = finish
    }

    getLane(index) {
        return this.lanes[index];
    }
}