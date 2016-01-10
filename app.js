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

//Eventually, each individual trait will have an array of possible functions and their mutations in order to ensure maximum variety
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
  var diet = 1; //1 = herbivore-flex, 0=herbivore, -1=carnivore flex, 3=carnivore
  var mating = function(bool) {
    //TODO: create mating function using the IDs, proximity, and sexAppeal
    if (bool) {
      var offspringAddition = numOffspring;
      for (var o = 0; o < offspringAddition; o++) {
        var name = o;
        name = new Animal();
        name = evolution(name);
        name.ID = animalArr.length + 1;
        name.age = 'young';
        animalArr.push(name);
      }
    }
  };
  var move = function() {
    //TODO: create movement function
  };
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
  var numOffspring = energy - 4;
  //TODO implement max/min speed and correspond to energy remaining/danger

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
    moveSpeed: moveSpeed,
    numOffspring: numOffspring
  }
}

function Plant() {
  var size = 15; //Out of 20?
  var healthiness = 1; //Out of -10 to 10, with -10 being lethal??
  var calories = 2;
  var color = 'green';
  var pollRange = 0;
  //For reproduction, asexual may be removed due to an overwhelming amount of plants being produced
  var asexual = false;
  var isFemale = false; //for reproduction
  var numOffspring = size/calories;
  var asexualNumOffspring = 1;
  var mating = function(bool) {
    //TODO: create mating function using the IDs, proximity, and sexAppeal
    if (bool) {
      var offspringAddition = numOffspring;
      for (var o = 0; o < offspringAddition; o++) {
        var name = o;
        name = new Plant();
        name = evolution(name);
        name.ID = plantArr.length + 1;
        plantArr.push(name);
      }
    }
  };
  var asexualMating = function(bool) {
    //TODO: create mating function using the IDs, proximity, and sexAppeal
    if (bool) {
      for (var o = 0; o < asexualNumOffspring; o++) {
        var name = o;
        name = new Plant();
        name = evolution(name);
        name.ID = plantArr.length + 1;
        plantArr.push(name);
      }
    }
  }

  return {
    size: size,
    healthiness: healthiness,
    calories: calories,
    color: color,
    isFemale: isFemale,
    mating: mating,
    numOffspring: numOffspring,
    pollRange: pollRange,
    asexual: asexual,
    asexualNumOffspring: asexualNumOffspring,
    asexualMating: asexualMating
  }

};

var animalArr = [];
var plantArr = [];
//function to create x number of animals and give them IDs
var populationSize = 5;
var foodSize = 15;
function populate() {
  for (var i = 0; i <= populationSize; i++) {
    var name = i;
    name = new Animal();
    name = evolution(name);
    name = evolution(name);
    name.ID = i;
    animalArr.push(name);
  }
  for (var j = 0; j <= foodSize; j++) {
    var name = j;
    name = new Plant();
    name = evolution(name);
    name.ID = j;
    plantArr.push(name);
  }
  console.log('PlantArr size = ' + plantArr.length);
}

//function to begin evolving and stuff
function initialEvolution() {
  for (var j = 0; j < animalArr.length; j++) {
    animalArr[j] = evolution(animalArr[j]);
  }
  for (var k = 0; k < plantArr.length; k++) {
    plantArr[k] = evolution(plantArr[k]);
  }
}

//function to see if they'll eat each other
var predatorArr = [];
function predation() {
  var counter = animalArr.length;
//TODO create function for herbivores eating plants
//TODO add functionality so that predators can eat each other
  for (var i = 0; i < animalArr.length; i++) {
    if (animalArr[i].diet <= -1) {
      predatorArr.push(animalArr[i]);
      animalArr.splice(animalArr[i], 1);
    } else if (animalArr[i].diet > 0) {
      for (var t = 0; t < plantArr.length; t++) {
        if (animalArr[i].energy > 2 && animalArr[i].size > 3 && plantArr[t].size > 0) {
          animalArr[i].energy += plantArr[t].calories;
          plantArr[t].size -= animalArr[i].attack;
        } else if (plantArr[t].size <= 0) {
          plantArr.splice(plantArr[t], 1);
        }
      }
    }
  }
  for (var l = 0; l < predatorArr.length; l++) {
    for (var m = 0; m < animalArr.length; m++) {
      if (predatorArr[l].attack > animalArr[m].defense && predatorArr[l].canMove === true && predatorArr[l].moveSpeed >= animalArr[m].moveSpeed && randomChance()) {
        predatorArr[l].energy = predatorArr[l].energy + animalArr[m].calories;
        animalArr.splice(animalArr.indexOf(animalArr[m], 1))

      }
    }
  }
}
//Test function to see if they'll mate with each other if the proximity is right
var matingTest = function() {
  //This is to give the herbivores a steady plant supply for the next predation cycle
  // console.log(plantArr.length);
  // for (var p = 0; p < plantArr.length; p++) {
  //   console.log('this is a plant');
  //   console.log('this plant has ' + plantArr[p].calories)
  //   if (plantArr.length > 2) {
  //     for (var x = 0; x < plantArr.length; x++) {
  //       if (plantArr[p].isFemale == true && plantArr[x].isFemale == false && plantArr[p].calories > 2) {
  //         plantArr[p].mating(true);
  //         console.log('plant p successfully created');
  //       } else if (plantArr[p].isFemale == false && plantArr[x].isFemale == true && plantArr[x].calories > 2) {
  //           plantArr[x].mating(true);
  //           console.log('plant x successfully created');
  //       }
  //     }
  //   } else {
  //     return plantArr[p];
  //   }
  // }

  //TODO: trying new plant mating function
  console.log('PlantArr size is now = ' + plantArr.length);
  for (var p = 0; p < plantArr.length; p++) {
    if (plantArr[p].asexual == false) {
    for (var l = 0; l < plantArr[p].pollRange; l++) {
      if (p - l > 0 && p + l < plantArr.length) {
          if (plantArr[p].isFemale && (plantArr[p + l].isFemale == false || plantArr[p - l].isFemale == false)) {
          plantArr[p].mating(true);
          }
        }
      }
    } else if (plantArr[p].asexual == true) {
      plantArr[p].asexualMating(true);
    }
  }
  //For animals
  console.log('AnimalArr size is now = ' + animalArr.length)
  for (var x = 0; x < animalArr.length; x++) {
    if (animalArr[x].isFemale == true) {
      for (var y = 0; y < animalArr.length; y++) {
        if (animalArr[x] !== animalArr[y] && animalArr[x].age !== 'young' && animalArr[y].age !== 'young') {
          if (animalArr[x].sexAppeal > animalArr[y].sexAppeal && randomChance()) {
            animalArr[x].mating(true);
            // console.log(true);
          }
        }
      }
    } else if (animalArr[x].isFemale == false) {
      for (var y = 0; y < animalArr.length; y++) {
        if (animalArr[x] !== animalArr[y] && animalArr[x].age !== 'young' && animalArr[y].age !== 'young') {
          if (animalArr[x].sexAppeal < animalArr[y].sexAppeal && randomChance()) {
            animalArr[y].mating(true);
            // console.log(false);
          }
        }
      }
    }
  }
}

//Test function to give the animals energy

populate();


initialEvolution();
initialEvolution();
initialEvolution();
initialEvolution();
console.log(plantArr);
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
// console.log(animalArr, predatorArr);
console.log(plantArr);
console.log(animalArr.length, predatorArr.length, plantArr.length);
