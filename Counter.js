//counter function to add one to the input every time it is called
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter = createCounter(10)
counter()
counter()
console.log(counter)