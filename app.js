var functionsPage = require('./public/commonFunctions');
var variation = require('./public/testVariation')

var randomChance = functionsPage.randomChance;
var addOrSubtract = functionsPage.addOrSubtract;
var traitChange = functionsPage.traitChange;
var evolution = functionsPage.evolution;
var animalArr = functionsPage.animalArr;
var plantArr = functionsPage.plantArr;
var predatorArr = functionsPage.predatorArr;
var predation = functionsPage.predation;
var matingTest = functionsPage.matingTest;
var populate = functionsPage.populate;
var foodSize = functionsPage.foodSize;
var populationSize = functionsPage.populationSize;
var Animal = functionsPage.Animal;
var Plant = functionsPage.Plant;
var initialEvolution = functionsPage.initialEvolution;
var traitIncrement = functionsPage.traitIncrement;
var incrementArr = variation.incrementArr;
var randomIncrementArr = functionsPage.randomIncrementArr
//
populate();
console.log(animalArr[1]);

initialEvolution();
initialEvolution();
initialEvolution();
initialEvolution();
matingTest();
initialEvolution();
initialEvolution();
matingTest();
initialEvolution();
matingTest();
initialEvolution();
predation();
matingTest();
initialEvolution();
// console.log(animalArr[1]);
console.log(animalArr.length, predatorArr.length, plantArr.length);
console.log(animalArr[1]);
// console.log(animalArr);
// console.log(predatorArr);
// console.log(plantArr);

// console.log(evolution(animalArr[1]));
// console.log(animalArr[1]);
// function checkKey(object) {
//   for (var key in object) {
//     // console.log(object[key]);
//   }
// }
// checkKey(animalArr[1]);
// //SUPER TEST AREA
// function createTestAnimal() {
//     return new Animal();
// }
// var testimal = createTestAnimal();
// console.log(testimal);
// evolution(testimal);
//
// var testArray = [1, 2, 3, 4, 5];
// console.log(randomIncrementArr(testArray));

// console.log(testimal);
//
// traitIncrement

if ({ canMate: true,
  canMateCounter: 6,
  canMove: true,
  canMoveCounter: 6,
  energy: 10,
  energyCounter: 0,
  diet: NaN,
  dietCounter: 3,
  attack: NaN,
  attackCounter: 1,
  animalMating: [Function],
  isFemale: true,
  isFemaleCounter: 6,
  speed: NaN,
  speedCounter: 1,
  size: 7,
  sizeCounter: 0,
  defense: NaN,
  defenseCounter: 1,
  color: 'blue',
  colorCounter: '4',
  sexAppeal: NaN,
  sexAppealCounter: 2,
  calories: NaN,
  caloriesCounter: 1,
  moveSpeed: NaN,
  moveSpeedCounter: 1,
  numOffspring: -8,
  ID: 1 } === { canMate: true,
  canMateCounter: 6,
  canMove: true,
  canMoveCounter: 6,
  energy: 10,
  energyCounter: 0,
  diet: NaN,
  dietCounter: 3,
  attack: NaN,
  attackCounter: 1,
  animalMating: [Function],
  isFemale: true,
  isFemaleCounter: 6,
  speed: NaN,
  speedCounter: 1,
  size: 7,
  sizeCounter: 0,
  defense: NaN,
  defenseCounter: 1,
  color: 'blue',
  colorCounter: '4',
  sexAppeal: NaN,
  sexAppealCounter: 2,
  calories: NaN,
  caloriesCounter: 1,
  moveSpeed: NaN,
  moveSpeedCounter: 1,
  numOffspring: -8,
  ID: 1 }) {
    console.log('same');
  } else {
    console.log('not same');
  }
