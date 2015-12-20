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


function evolution(species) { 
  for (var key in species) {
    species[key] = traitChange(species[key]);
    console.log(species[key]);
  }
  return species;
}

function Animal(type) {
  var canMove = true;
  var energy = 10;
  var diet = 1;
  var mating = function() {
    //TODO: create mating function
  };
  var move = function() {
    //TODO: create movement function
  };
  var isFemale = true;
  var speed = 10;
  var size = 5;
  var defense = 7;
  var attack = 2;
  var color = 'blue';

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
    color: color
  }
}

tiger = new Animal();

var testArr = [2, 5, 8, 1, 23, true]

console.log(evolution(tiger));
