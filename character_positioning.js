// var test = "hi hi";

// // Is this what the question wants me to return?
// // https://web.compass.lighthouselabs.ca/activities/288
// var indiceObj = {
//   h : [0, 3],
//   i : [2,4]
// }


var userInput = process.argv.slice(2); // array of words
var userInputString = userInput.join();

function countLetterPos(strToCount){

  var letterCountPosObj = {};

  for (var i = 0; i < strToCount.length; i++) {
    var letter = strToCount[i];

    if (letter in letterCountPosObj) {
      // Key exists type Array
      console.log('push me onto exisiting array');
      letterCountPosObj[letter].push(i); // LAST FIX HERE
    } else {
      // Intiliaze array for key
      console.log('intialize me');
      letterCountPosObj[letter] = [i];
    }
  }
  delete letterCountPosObj[','];
  console.log(letterCountPosObj);
}

countLetterPos(userInputString);

