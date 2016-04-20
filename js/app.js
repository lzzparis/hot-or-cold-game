
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
}
function registerGuess(event){
	event.preventDefault();
	var currentGuess = $(this).parent("form").children("#userGuess").val();
	$(this).parent("form").children("#userGuess").val("");
	console.log("Guess is "+currentGuess);
	counter++;
	$("#count").text(counter);
	$("#guessList").append("<li>"+currentGuess+"</li>")

}



