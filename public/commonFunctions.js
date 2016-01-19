var exports = module.exports = {};
var variationArrays = require('./testVariation');
var animalArr = [];
var plantArr = [];
var predatorArr = [];
var incrementArr = variationArrays.incrementArr;

//TODO: LOOK FOR ALL THE TODO TODO's
//TODO: MAKE PREDATORS THEIR OWN OBJECT
//TODO: some issue with increments and stuff not returning or something, so there's no new population? Also, it's after the first evolution function that many values are being turned into NaN;
//TODO: the increments not returning seems like it may be caught up on numOffspring being NaN

//COMMON FUNCTIONS

function randomChance() {
  return Math.round(Math.random());
}
function randomIncrementArr(arr) {
    var increment = Math.round((arr.length * Math.random()));
    if (increment < arr.length) {
    // console.log('it is ' + arr[increment]);
    return increment;
  } else if (increment = arr.length){
    return increment - 1;
  }
}

function addOrSubtract() {
  if (randomChance()) {
    return -1;
  } else {
    return 1;
  }
}

//TODO: flesh out the increment array
function traitIncrement(arr) {
  // Here we make sure the array is less than 4, because 4, 5, 6 are not integers

    var change = (Math.pow(randomChance()) * (addOrSubtract())* randomIncrementArr(arr))
    return change;
}
  //possibly else if, in case we don't want to make an array for booleans, colors, etc.

//TODO: perhaps make initial evolution function with different evolution parameters to increase diversity


//TODO: NOTICE THAT WHEN CONSOLE.LOGGING THE SPECIES IN THE EVOLUTION FUNCTION, THE VALUES ARE ALL ALREADY NAN

var evolution = function(species) {
  console.log(species);
  // console.log(species.size);
  for (var key in species) {
    // console.log(key + '=' + species[key])
    if (key !== 'ID' && key.substr(-7) !== 'Counter' && typeof species[key] !== 'function') {
      var count = key + 'Counter';
      // console.log(key);
      // console.log(count);
      if (species[count]) {
        if (species[count] < 4) {
          species[key] += traitIncrement(incrementArr[species[count]]);
        }
      }
    }
  }
    return species;
}
//TODO adding something so that there's a 'not' shallow copy of each species so that can be passed forward from each evolution? 

//EVENTS

//function to create x number of animals and give them IDs
var populationSize = 5;
var foodSize = 3;
function populate() {
  for (var i = 0; i <= populationSize; i++) {
    var name = new Animal();
    // console.log(name);
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

//Test function to see if they'll mate with each other if the proximity is right
//TODO: reimplement the plant creation with the new incrementArr
var matingTest = function() {
  //This is to give the herbivores a steady plant supply for the next predation cycle
  // console.log('PlantArr size is now = ' + plantArr.length);
  for (var p = 0; p < plantArr.length; p++) {
    if (plantArr[p].asexual == false) {
    for (var l = 0; l < plantArr[p].pollRange; l++) {
      console.log(plantArr[p].pollRange);
      console.log(false);
      if (p - l > 0 && p + l < plantArr.length) {
          if (plantArr[p].isFemale && (plantArr[p + l].isFemale == false || plantArr[p - l].isFemale == false)) {
          plantArr[p].plantMating(true, plantArr[p].numOffspring);
          }
        }
      }
    } else if (plantArr[p].asexual == true) {
      console.log(true)
      plantArr[p].asexualPlant(true, plantArr[p].asexualNumOffspring);
    }
  }
  //For animals mating
  console.log('AnimalArr size is now = ' + animalArr.length)
  for (var x = 0; x < animalArr.length; x++) {
    if (animalArr[x].isFemale == true) {
      for (var y = 0; y < animalArr.length; y++) {
        if (animalArr[x] !== animalArr[y] && animalArr[x].age !== 'young' && animalArr[y].age !== 'young') {
          if (animalArr[x].sexAppeal > animalArr[y].sexAppeal && randomChance()) {
            animalArr[x].animalMating(animalArr[x].canMate, animalArr[x].numOffspring);
            animalArr[x].energy -= animalArr[x].calories;
          }
        }
      }
    } else if (animalArr[x].isFemale == false) {
      for (var y = 0; y < animalArr.length; y++) {
        if (animalArr[x] !== animalArr[y] && animalArr[x].age !== 'young' && animalArr[y].age !== 'young') {
          if (animalArr[x].sexAppeal < animalArr[y].sexAppeal && randomChance()) {
            animalArr[y].animalMating(animalArr[y].canMate, animalArr[y].numOffspring);
          }
        }
      }
    }
  }
}

//Function to see if they'll eat each other
function predation() {
  var counter = animalArr.length;
//TODO add functionality so that predators can eat each other
  for (var i = 0; i < animalArr.length; i++) {
    if (animalArr[i].diet <= 1) {
      predatorArr.push(animalArr[i]);
      animalArr.splice(animalArr[i], 1);
    } else if (animalArr[i].diet > 1) {
      for (var t = 0; t < plantArr.length; t++) {
        if (animalArr[i].energy > 2 && animalArr[i].size > 3 && plantArr[t].size > 0) {
          if (plantArr[t].healthiness < 0) {
            if (randomChance()>0) {
              animalArr[i].energy += (plantArr[t].healthiness * 2)
            }
          } else if (plantArr[t].size <= 0) {
          plantArr.splice(plantArr[t], 1);
          } else {
            if (animalArr[i].attack > 4) {
              animalArr[i].energy += plantArr[t].calories;
              plantArr.splice(plantArr.indexOf(plantArr[t]), 1);
            }
          }
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
      //TODO: add functionality to let animals die if they expend too much energy getting food
    }
  }
  //Adding in another plant growth cycle to keep herbivore food high enough

  //TODO: reimplement the plant creation with the new incrementArr
  for (var p = 0; p < plantArr.length; p++) {
    if (plantArr[p].asexual == false) {
    for (var l = 0; l < plantArr[p].pollRange; l++) {
      if (p - l > 0 && p + l < plantArr.length) {
          if (plantArr[p].isFemale && (plantArr[p + l].isFemale == false || plantArr[p - l].isFemale == false)) {
          plantArr[p].plantMating(true, plantArr[p].numOffspring);
          }
        }
      }
    } else if (plantArr[p].asexual == true) {
      plantArr[p].asexualPlant(true, plantArr[p].asexualNumOffspring);
    }
  }
}


function move() {
  //TODO: make them move
}

//MATING STUFF

//Animal Mating
var animalMatingBasic = function(canMate, num) {
  //TODO: create mating function using the IDs, proximity, and sexAppeal
  if (canMate) {
    var offspringAddition = num;
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
var asexualMating = function(bool, asexualNumOffspring) {
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
};

//Plant Mating
var plantMatingBasic = function(bool, num) {
  //TODO: create mating function using the IDs, proximity, and sexAppeal
  if (bool) {
    var offspringAddition = num;
    for (var o = 0; o < offspringAddition; o++) {
      var name = o;
      name = new Plant();
      name = evolution(name);
      name.ID = plantArr.length + 1;
      plantArr.push(name);
    }
  }
};
var asexualPlantMating = function(bool, asexualNumOffspring) {
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
};

//CONSTRUCTORS

//TODO: WHEN EVOLVING, WE MAY NEED TO MAKE EACH EVOLUTION A NEW INSTANCE OF THE PREVIOUS ANIMAL; ALTERNATIVELY:
//TODO: CREATE A COUNTER FOR EACH TRAIT; IE, canMateCounter WILL ALWAYS EQUAL 6, BUT canMate CAN CHANGE;
//DING^
//DING^
//DING^

function Animal(type) {
  var canMateCounter = 6;
  var canMate = true;
  var canMoveCounter = 6;
  var canMove = true;
  var energyCounter = 0; //Out of 20 total?
  var energy = 10;
  var dietCounter = 3; //1 = herbivore-flex, 0=herbivore, -1=carnivore flex, 3=carnivore
  var diet = 3
  // var move = function() {
  //   //TODO: create movement function
  // };
  var isFemaleCounter = 6; //Can change to create male vs. female
  var isFemale = true;
  var speedCounter = 1; //Out of 15?
  var speed = 5;
  var sizeCounter = 0; //Out of 20?
  var size = 7;
  var defenseCounter = 1; //Out of 15?
  var defense = 4;
  var attackCounter = 1; //Out of 15?
  var attack = 3;
  var colorCounter = '4'; //String perhaps interpreted in jQuery?
  var color = 'blue';
  var attackSpeedCounter = 2; //How often they attack, out of 10?
  var attackSpeed = 3;
  var sexAppealCounter = 2; //How likely they are to mate with another animal
  var sexAppeal = 4;
  var caloriesCounter = 1; //How much energy is gained from eating this animal
  var calories = 6;
  var moveSpeedCounter = 1; //Out of 15?
  var moveSpeed = 6;
  // var numOffspringCounter = size - energy;
  var numOffspring = ((energy * 1.5) - size);
  //TODO implement max/min speed and correspond to energy remaining/danger

  return {
    canMate: canMate,
    canMateCounter: canMateCounter,
    canMove: canMove,
    canMoveCounter: canMoveCounter,
    energy: energy,
    energyCounter: energyCounter,
    diet: diet,
    dietCounter: dietCounter,
    attack: attack,
    attackCounter: attackCounter,
    animalMating: animalMatingBasic,
    // move: move,
    isFemale: isFemale,
    isFemaleCounter: isFemaleCounter,
    speed: speed,
    speedCounter: speedCounter,
    size: size,
    sizeCounter: sizeCounter,
    defense: defense,
    defenseCounter: defenseCounter,
    attack: attack,
    attackCounter: attackCounter,
    color: color,
    colorCounter: colorCounter,
    sexAppeal: sexAppeal,
    sexAppealCounter: sexAppealCounter,
    calories: calories,
    caloriesCounter: caloriesCounter,
    moveSpeed: moveSpeed,
    moveSpeedCounter: moveSpeedCounter,
    numOffspring: numOffspring,
    // numOffspringCounter: numOffspringCounter
  }
}

function Plant() {
  var size; //Out of 20?
  var sizeCounter = 1;
  var healthiness = 1; //Out of -10 to 10, with -10 being lethal??
  var healthinessCounter = 2;
  var calories = 2;
  var caloriesCounter = 1;
  var color = 'green';
  var colorCounter = 5;
  var pollRange = 2;
  var pollRangeCounter = 3;
  //For reproduction, asexual may be removed due to an overwhelming amount of plants being produced
  var asexual = false;
  var asexualCounter = 6;
  var isFemale = false; //for reproduction
  var isFemaleCounter = 6;
  var numOffspring = size/calories;
  var asexualNumOffspring = 1;
  var asexualNumOffspringCounter = 3;
  return {
    size: size,
    sizeCounter: sizeCounter,
    healthiness: healthiness,
    healthinessCounter: healthinessCounter,
    calories: calories,
    caloriesCounter: caloriesCounter,
    color: color,
    color: colorCounter,
    isFemale: isFemale,
    isFemaleCounter: isFemaleCounter,
    plantMating: plantMatingBasic,
    numOffspring: numOffspring,
    pollRange: pollRange,
    pollRangeCounter: pollRangeCounter,
    asexual: asexual,
    asexualCounter: asexualCounter,
    asexualNumOffspring: asexualNumOffspring,
    asexualPlant: asexualPlantMating,
    asexualNumOffspringCounter: asexualNumOffspringCounter
  }
};

module.exports = {
  randomChance: randomChance,
  addOrSubtract: addOrSubtract,
  // traitChange: traitChange,
  evolution: evolution,
  animalArr: animalArr,
  plantArr: plantArr,
  predatorArr: predatorArr,
  predation: predation,
  matingTest: matingTest,
  populationSize: populationSize,
  foodSize: foodSize,
  populate: populate,
  Animal: Animal,
  Plant: Plant,
  initialEvolution: initialEvolution,
  traitIncrement: traitIncrement,
  randomIncrementArr: randomIncrementArr,
  plantMating: plantMatingBasic,
  asexualPlantMating: asexualPlantMating
}
