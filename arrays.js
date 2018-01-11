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
  return array
}