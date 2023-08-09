Array.prototype.last = function(nums) {
    if (this.length == 0){
        return -1
    }else {
        return this[this.length-1]
    }
};