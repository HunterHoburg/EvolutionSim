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
  console.log(true);
  for (var key in species) {
      species[key] = traitChange(species[key]);
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
  var defense = 7; //Out of 20?
  var attack = 2; //Out of 20?
  var color = 'blue'; //String perhaps interpreted in jQuery?
  var attackSpeed = 2; //How often they attack, out of 10?
  var sexAppeal = 3; //How likely they are to mate with another animal
  var calories = 2; //How much energy is gained from eating this animal


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
    calories: calories
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
function predation() {
  // console.log(animalArr);
}

populate();


initialEvolution();
initialEvolution();
initialEvolution();
initialEvolution();
// console.log(animalArr);
console.log(animalArr)
predation();
