const reverseString = function(text) {
  newText = [];

  if (text === "") {
    return "";
  } else {

    let i = text.length;
    for (i; i >= 0; i--) {
      newText.push(text[i]);
    }

    return newText.join("");
  }
};

// Do not edit below this line
module.exports = reverseString;
