var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, e) {
  array = [e, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, e) {
  array.unshift(e);
  return array;
}

function addElementToEndOfArray(array, e) {
  array = [...array, e];
  return array;
}

function destructivelyAddElementToEndOfArray(array, e) {
  array.push(e);
  return array;
}

function accessElementInArray(array, i) {
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
  return array;
}


