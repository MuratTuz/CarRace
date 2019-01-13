




class Arena {
    constructor(pWidth) {
        this.lanes = [];
        this.width = pWidth;
    }

    getLane(index) {
        return this.lanes[index];
    }
}