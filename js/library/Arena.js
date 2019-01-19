


/**
 * Main class which contains lane and car classes. It holds width to calculate finish point of length.
 */

class Arena {
    constructor(pWidth) {
        this.lanes = [];
        this.width = pWidth; // div.lane = div.arena-50px , car.width = 100px, half is 50px So, div.arena-100px = finish
    }

    getLane(index) {
        return this.lanes[index];
    }

    addLane(lane) {
        this.lanes.push(lane);
    }

    getWidth() {
        return this.width;
    }
}