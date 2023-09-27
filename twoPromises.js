var addTwoPromises = async function(promise1,promise2){
    return Promise.all(promise1,promise2)
      .then((results) => {
        const [result1,result2] = results;
        return result1+result2
      })
}