// myPanel = new jsgl.Panel(document.getElementById('panel'));

function randomChance() {
  return Math.round(Math.random());
}
function addOrSubtract() {
  if (randomChance()) {
    return -1;
  } else {
    return 1;
  }
}

function traitChange(key) {
  if (Number.isInteger(key)) {
    if (randomChance()) {
      var change = (1 * randomChance()) * (addOrSubtract()) + key;
      return change;
    } else {
      return key;
    }
  } else if (key == true) {
      if (randomChance()) {
        return key = false;
      } else {
        return key;
      }
  } else if (key == false) {
      if (randomChance()) {
        return key = true;
      } else {
        return key;
      }
  } else if (typeof key === 'string') {
      //TODO: make strings change, if statements for color, etc.
      return key;
  } else if (typeof key === 'function') {
    return key;
  }
}

function move() {
  //TODO: make them move
}

function mate() {
  //TODO: make them mate, use the IDs
}

var evolution = function(species) {
  for (var key in species) {
    if (key !== 'ID') {
      species[key] = traitChange(species[key]);
  }
}
  return species;
}

function Animal(type) {
  var canMove = true;
  var energy = 10; //Out of 20 total?
  var diet = 1; //1 = herbivore-flex, 0=herbivore, 2=carnivore flex, 3=carnivore
  var mating = function() {
    //TODO: create mating function using the IDs, proximity, and sexAppeal
  };
  var move = function() {
    //TODO: create movement function
  };
  // var id = 0;
    //TODO: make id unique for each species
  var isFemale = true; //Can change to create male vs. female
  var speed = 10; //Out of 25?
  var size = 5; //Out of 20?
  var defense = 4; //Out of 20?
  var attack = 4; //Out of 20?
  var color = 'blue'; //String perhaps interpreted in jQuery?
  var attackSpeed = 2; //How often they attack, out of 10?
  var sexAppeal = 3; //How likely they are to mate with another animal
  var calories = 2; //How much energy is gained from eating this animal
  var moveSpeed = 3; //Out of 15?


  return {
    canMove: canMove,
    energy: energy,
    diet: diet,
    attack: attack,
    mating: mating,
    move: move,
    isFemale: isFemale,
    speed: speed,
    size: size,
    defense: defense,
    attack: attack,
    color: color,
    sexAppeal: sexAppeal,
    calories: calories,
    moveSpeed: moveSpeed
  }
}

var animalArr = [];
//function to create x number of animals and give them IDs
var populationSize = 5;
function populate() {
  for (var i = 0; i <= populationSize; i++) {
    var name = i;
    name = new Animal();
    name = evolution(name);
    name = evolution(name);
    name.ID = i;
    animalArr.push(name);
    //move push up beneath 'new animal' and call evolution on array[i]
    // console.log(animalArr[i]);
  }
}

//function to begin evolving and shit
function initialEvolution() {
  for (var j = 0; j < animalArr.length; j++) {
    animalArr[j] = evolution(animalArr[j]);
  }
}

//function to see if they'll eat each other
// function predation() {
//   var counter = animalArr.length;
//   for (var k = 0; k < counter; k++) {
//     if ((animalArr[k].diet) <= 0) {
//       for (var l = 0; l < counter; l++) {
//         if (animalArr[k].attack > animalArr[l].defense) {
//           console.log(true);
//           if (animalArr[k] !== animalArr[l]) {
//             animalArr[k].energy = animalArr[k].energy + animalArr[l].calories;
//             animalArr.splice(animalArr[l], 1);
//             counter = counter - 1;
//           }
//         }
//       }
//     }
//   }
// }
var predatorArr = [];
function predation() {
  var counter = animalArr.length;

  for (var i = 0; i < animalArr.length; i++) {
    if (animalArr[i].diet <= 0) {
      predatorArr.push(animalArr[i]);
      animalArr.splice(animalArr[i], 1);

    }
  }
  for (var l = 0; l < predatorArr.length; l++) {
    for (var m = 0; m < animalArr.length; m++) {
      if (predatorArr[l].attack > animalArr[m].defense && predatorArr[l].canMove === true && predatorArr[l].moveSpeed >= animalArr[m].moveSpeed) {
        predatorArr[l].energy = predatorArr[l].energy + animalArr[m].calories;
        animalArr.splice(animalArr.indexOf(animalArr[m], 1))

      }
    }
  }
}

populate();


initialEvolution();
initialEvolution();
initialEvolution();
initialEvolution();
predation();
// console.log(predatorArr);
// console.log(animalArr);
console.log(animalArr, predatorArr);
