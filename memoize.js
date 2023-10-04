function memoize(fn) {
    const cache = new Map(); // Use a Map to store cached results
  
    return function (...args) {
      const key = JSON.stringify(args); // Create a unique key for each set of arguments
  
      if (cache.has(key)) {
        // If the result is cached, return it
        return cache.get(key);
      } else {
        // If the result is not cached, calculate it using the original function
        const result = fn(...args);
        cache.set(key, result); // Cache the result
        return result;
      }
    };
  }