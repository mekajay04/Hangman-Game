// JavaScript Document


String.prototype.searchAll = function (search, computerGuess) {

	var pos = 0;
	var num = -1;
	var i = -1;
	var answer = computerGuess;


	while (pos !== -1) {
		pos = graf.indexOf(search, i + 1);
		num += 1;
		i = pos;
	}

};

var words = ["carrot", "bunny", "gray", "animal", "looney", "tweet", "jerry", "tazmanian"];

var computerGuess = words[Math.floor(Math.random() * words.length)];


//if j is less than computerGuess length (so the length of the word then run the loop)
window.onload = function () {

	for (var j = 0; j < computerGuess.length; j++) {
		var div = "<div id='letter" + j + "' style='display: inline; margin=5px'> _ </div>";
		document.getElementById("lineContainer").innerHTML += div;
	}

};

var indexS = [];

function searchAll(word, search, index, list) {

	if (word.indexOf(search, index) !== -1) {

		list.push(word.indexOf(search, index));



		if (word.indexOf(search, index) < word.length - 1 !== -1) {

			//recursive call
			searchAll(word, search, word.indexOf(search, index) + 1, list);

		}
		//Figure out why this shows even when correct letters are selected
	} else {
		//			console.log("AWW Sufferin Succotash!");
	}
	return list;


}


var guessesLeft = 14;
//This Function will run once one key is pressed
document.onkeyup = function (event) {
	console.log(event.key)
	var userGuess = event.key;

	var list = []
	var result = searchAll(computerGuess, userGuess, 0, list);

	for (j = 0; j < result.length; j++) {

		//document.getElementById grabs the name of the id you mentioned in your html. So "firstLine" is an _ underscore. Therefore, letter is equal to _. 

		var div = document.getElementById("letter" + result[j])

		div.innerHTML = userGuess;
		//innerHTML replaces whatever is in the html (the div's contents i.e. (_) with the usersGuess )
	}
	//	console.log(result);


	var wins = 0;
	var loses = 0;

	var guessedLetters = [];



	if (userGuess === computerGuess) {
		console.log('hit1')
		wins++;
		//		guessesLeft = 13;
	} else if (guessesLeft) {
		console.log('hit2')
			//		loses++;
		guessesLeft = guessesLeft - 1
		console.log(guessesLeft)
	}

	display();


	function display() {

		document.getElementById("wins").innerHTML = wins;
		//	document.getElementById("loses").innerHTML = loses;
		document.getElementById("guessLeft").innerHTML = guessesLeft;
		document.getElementById("guessedLetters").innerHTML = guessedLetters;


	}

	function win() {
		wins++;
	}

	//function lost() {
	//	loses++;
	//}


};


//	if (computerGuess.indexOf(userGuess) !== -1) {
//
//		// Determine which key was pressed
//		-1 is equal to any letter that is not in the chosen word. Any letter guessed that is in the word then that value of the letter is not equal to -1, therefore it alerts "you got it" Any key pressed is equal to the users guess
//
//	} else {
//		alert("AWW Sufferin Succotash!");
//	}



//	 any letter that is not in the word is -1 but any letter that is in the word is 
//!== not equal to 
//The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs