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
var initialAnimalEvolution = functionsPage.initialAnimalEvolution;
var initialPlantEvolution = functionsPage.initialPlantEvolution;
var traitIncrement = functionsPage.traitIncrement;
var incrementArr = variation.incrementArr;
var randomIncrementArr = functionsPage.randomIncrementArr;
var plantMating = functionsPage.plantMating;
var asexualPlantMating = functionsPage.asexualPlantMating;

populate();
// for (var i = 0; i < animalArr.length; i++) {
//   console.log(animalArr[i].energy);
// }
initialAnimalEvolution();
console.log(animalArr[2].energy);
initialPlantEvolution();
// for (var i = 0; i < animalArr.length; i++) {
//   console.log(animalArr[i].energy);
// }

initialAnimalEvolution();
initialPlantEvolution();
// for (var i = 0; i < animalArr.length; i++) {
//   console.log(animalArr[i].energy);
// }
console.log('animalArr.length =' +animalArr.length);
matingTest();
console.log('animalArr.length =' +animalArr.length);

matingTest();
console.log(animalArr[2].energy);
console.log('animalArr.length =' +animalArr.length);
// for (var i = 0; i < animalArr.length; i++) {
//   console.log(animalArr[i].energy);
// }
matingTest();
console.log(animalArr[2].energy);
console.log('animalArr.length =' +animalArr.length);

predation();

matingTest();

console.log(animalArr.length, predatorArr.length, plantArr.length);
