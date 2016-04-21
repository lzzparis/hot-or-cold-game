
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var goldenNum =1;
  	var counter =0;
  	newGame();
  	$(".new").click(newGame);
  	$("#guessButton").click(registerGuess);

});
function newGame (){
	goldenNum = Math.floor((Math.random()*100)+1);
	counter = 0;
	
	$("#feedback").text("Make your Guess!");
	$("#count").text(counter);
	$("#userGuess").val("");
	$("#guessList").text("");

}
function registerGuess(event){
	event.preventDefault();
	var currentGuess = $("#userGuess").val();
	$("#userGuess").val("");
	currentGuess = parseInt(currentGuess);

	if(isNaN(currentGuess)){
		alert("That's not a number, silly. Please enter a NUMBER");
	}
	else if((currentGuess<1) || (currentGuess>100)){
		alert("Please choose a number between 1 and 100 (inclusive)");
	}	
	else{
		counter++;
		$("#count").text(counter);
		$("#guessList").append("<li>"+currentGuess+"</li>")
		giveFeedback(currentGuess);
	}
}

function giveFeedback(guessNum){
	var feedbackText = "freezing cold";
	var delta = Math.abs(guessNum - goldenNum);
	if (delta ==0 ){
		feedbackText="hooray you won!!";
	}
	else if (delta <= 10){
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
	$("#feedback").text(feedbackText);
}

