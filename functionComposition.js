/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // Check if the array of functions is empty
        if (functions.length === 0) {
            // If empty, return the identity function
            return x;
        }

        // Apply the functions in reverse order
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    };
};

