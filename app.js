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
var firstTest = animalArr[1];
console.log(firstTest);

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
var secondTest = animalArr[1];
console.log(secondTest);

if (firstTest === secondTest) {
  console.log("they're the same")
} else {
  console.log("they're not the same");
}
