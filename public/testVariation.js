var exports = module.exports = {};

//This is to create an array for possible variations of traits to give them more realistic variation increments

//TODO: flesh out the increment array
var incrementArr = [
  //For 20 increments
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  //For 15 increments
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  //For 10 increments
  [1,2,3,4,5,6,7,8,9,10],
  //For 5 increments
  [1,2,3,4,5],
  //Colors for animals
  ['red', 'blue,', 'green', 'black'],
  //Colors for plants
  ['green', 'blue', 'turquoise'],
  //Booleans?
  [true, false, true, false, true, false]
]
module.exports = {
  incrementArr: incrementArr
}
