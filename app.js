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

function traitChange(array) {
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      if (randomChance()) {
        var change = (1 * randomChance()) * (addOrSubtract()) + array[i];
        return change;
      }
    } else if (array[i] == true) {
      if (randomChance()) {
        return array[i] = false;
      }
    } else if (array[i] == false) {
      if (randomChance()) {
        return array[i] = true;
      }
    } else if (typeof array[i] === 'string') {
      //TODO: make strings change, if statements for color, etc.
    }
  }
}

function evolution(species) {
  for (var key in species) {
    traitChange();
    return species;
  }
  // Object.keys(species).forEach(function (key) {
  //   traitChange(species[key]);
  // })
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
