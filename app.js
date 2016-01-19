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
var randomIncrementArr = functionsPage.randomIncrementArr;
var plantMating = functionsPage.plantMating;
var asexualPlantMating = functionsPage.asexualPlantMating;
//
populate();
console.log(plantArr[1].pollRange);
// console.log(plantArr);

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
console.log(plantArr[3].pollRange);

var testPlant = new Plant();
console.log(testPlant.pollRange);
