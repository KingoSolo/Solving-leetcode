var createCounter = function(init) {
    let currentVal = init;

   return {
       increment: function () {
           currentVal++;
           return currentVal;
       },
       decrement: function () {
           currentVal--;
           return currentVal;
       },
       reset: function () {
           currentVal = init;
           return currentVal;
       }
   }
};