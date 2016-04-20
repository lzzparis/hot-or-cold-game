
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var goldenNum;
  	// var guessArray = new Array[];
  	var counter =0;
  	newGame();
  	$(".new").click(newGame);
  	$("#guessButton").click(registerGuess);

});
function newGame (){
	goldenNum = Math.floor((Math.random()*100)+1);
	console.log(goldenNum);
	counter = 0;
	$("#count").text(counter);
	$("#userGuess").val("");
	$("#guessList").text("");
	$("#feedback").text("Make your Guess!");
	
}
function registerGuess(event){
	event.preventDefault();
	var currentGuess = $(this).parent("form").children("#userGuess").val();
	$(this).parent("form").children("#userGuess").val("");
	console.log("Guess is "+currentGuess);
	counter++;
	$("#count").text(counter);
	$("#guessList").append("<li>"+currentGuess+"</li>")
	giveFeedback(currentGuess);
}

function giveFeedback(guessNum){
	var feedbackText = "freezing cold";
	var delta = Math.abs(guessNum - goldenNum);
	if (delta <= 10){
		feedbackText="boiling hot!";
	}
	else if (delta <= 20) {
		feedbackText="hot";
	}
	else if (delta <= 30) {
		feedbackText="warm";
	}
	else if(delta <= 50){
		feedbackText="cold";
	}
	else {
		feedbackText="freezing cold";
	}
	console.log(feedbackText);
	$("#feedback").text(feedbackText);
}

