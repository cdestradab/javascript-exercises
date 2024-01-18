const removeFromArray = function(array, ...args) {
  let newArray = array.slice();

  for (let arg of args) {
    const myIndex = newArray.findIndex((value, index, array) => value === arg);

    if (myIndex === -1) { continue; }

    newArray.splice(myIndex,1);
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
