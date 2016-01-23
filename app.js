var functionsPage = require('./public/commonFunctions');
var variation = require('./public/testVariation')

var randomChance = functionsPage.randomChance;
var lowRandomChance = functionsPage.lowRandomChance;
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
var randomIncrementArr = functionsPage.randomIncrementArr;
var plantMating = functionsPage.plantMating;
var asexualPlantMating = functionsPage.asexualPlantMating;

populate();
// console.log(plantArr);
// console.log(animalArr.length);
for (var i = 0; i < animalArr.length; i++) {
  console.log(animalArr[i].size);
}
// console.log('animalArr.length =' +animalArr.length);
initialEvolution();
// console.log(animalArr.length);
for (var i = 0; i < animalArr.length; i++) {
  console.log(animalArr[i].size);
}
// console.log('animalArr.length =' +animalArr.length);
// initialEvolution();
// console.log(animalArr.length);
initialEvolution();
for (var i = 0; i < animalArr.length; i++) {
  console.log(animalArr[i].size);
}
console.log('animalArr.length =' +animalArr.length);
// console.log(animalArr.length);
matingTest();
console.log('animalArr.length =' +animalArr.length);
// console.log(animalArr.length);
// initialEvolution();
// console.log(animalArr.length);
// initialEvolution();
// console.log(animalArr.length);
matingTest();
console.log('animalArr.length =' +animalArr.length);
// console.log(animalArr.length);
// initialEvolution();
// console.log(animalArr.length);
matingTest();
console.log('animalArr.length =' +animalArr.length);
// console.log(animalArr.length);
// console.log(animalArr.length);
// console.log(plantArr)
// console.log(plantArr);
// initialEvolution();
// console.log(animalArr.length);
// console.log(animalArr);
predation();
// console.log(animalArr.length);
matingTest();
// console.log(animalArr.length);
// initialEvolution();
// console.log(animalArr.length);
// console.log(animalArr[1]);
console.log(animalArr.length, predatorArr.length, plantArr.length);
// console.log(plantArr);
// console.log(animalArr);
// console.log(incrementArr[6][randomChance()*(incrementArr[6].length-1)])
