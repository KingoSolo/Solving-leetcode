//given a list of numbers return a list of all the numbers that are unique within that list


function findUniqueIntegers(numbers){
  var unique = numbers.filter((value,index,self) =>{
  return  self.indexOf(value) === index} )

  return unique;
}

const numbers = [2,3,4,5,2,3,3,5,6]

const uniqueNumbers = findUniqueIntegers(numbers)

console.log(uniqueNumbers)