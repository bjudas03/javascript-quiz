/*
* Your names
*/
// $(function() {

// console.log("JS file is linked up!");



// var questions = [
// 	{	question: "what is 1 + 1?",
// 		choices: ["one", "two", "three", "four"],
// 		correctAnswer: 1 
		// name: "one"},
// 	{
// 		question: "what is 4 + 3?",
// 		choices: ["five", "six", "seven", "eight"],
// 		correctAnswer: 2 
		// name: "two"},
// 	{
// 		question: "what is 0 + 0?",
// 		choices: ["zero", "two", "three", "four"],
// 		correctAnswer: 0 
		// name: "three"},
// 	{
// 		question: "what is 10 + 0?",
// 		choices: ["five", "six", "seven", "ten"],
// 		correctAnswer: 3 
		// name: "four"}
// ];


// var submitButton = $("#submitButton");
// var currentScore = 0;
// var questionsAnswered = 0;
// var counter = 0
//var choices = nextQuestionArr[counter].choices


// var loadQuestion = function() {
// 	$("#question").append.nextQuestionArr[counter].question;
// 	for (i=0; i < choices.length; i++) {
// 		$("#c1").append(choices[i]);
// 		$("#c2").append(choices[i]);
// 		$("#c3").append(choices[i]);
// 		$("#c4").append(choices[i]);
// 	}
// 	counter += 1;
// }
// loadQuestion();


//put check correct score function here:  	if (questions.choices === questions.correctAnswer) { next 4 lines }
//put this next:  							questionsAnswered += 1;
//put this next: 							$(XXXXX).remove();
//put this next: 							loadQuestion();
//put this next: 			currentScore += 1;

// function checkWin () {
// 	var check1 = 
// 	$('.radiocheck').click.setAttribute('value', "true"); 
// 	console.log("is true"); // not console.logging
// 	// var clicked = document.querySelectorAll('.radiocheck').value();
// 	// console.log(clicked);
// 	var check1 = $('.radiocheck').value("true");
// 	console.log(check1);
// 	for (var i = 0; i <= check1.length; i++) {
// 		(check1.indexOf[i] === questions('correctAnswer', [i])) {
// 		console.log("you got it right!");
// 	}
// }

// $('#submitButton').on('click', function() {
// 	var clicked = document.querySelectorAll('.radiocheck').value();
// 	console.log(clicked);
// 	for (var i = 0; i <= clicked.length; i++) {
// 		(clicked.indexOf[i] === questions('correctAnswer', [i])) {
// 		console.log("you got it right!");
// 	}
// 		// if (clicked.indexOf[i] === questions('correctAnswer', [i])) {
// 		// 	console.log("you got it right!");
// 		// }
// }

// var lastQuestionCheck = function() {
// 	if (questionsAnswered === questions.length) {
// 		$("#question").append(currentScore);
// 	} else {
// 		console.log("Not last question, yet");
// 	}
// }


/*
* Jenna Badanowski and Lauren Perez
*/
// to do:
//add reset button to end
var score = 0 //starting score
var input = $('input type:"radio" name='+questions[counter].name+'>' //variable to pull the info from current radio (based on the name and the counter #) of the question in the array (i named them with numbers sequentially)
function answerChecker(){
	var answer-index = questions.[counter]correctAnswer; //puts the correct answer in the variable
	if(!$('input:checked').val()) {
		$("#score").text("Please select an Answer"); //returns text if no answer selected
	}else if ($('input:checked'.val() == answer-index) { //adds one to score if answer is correct
		score++;
		$("#score").text("");
		//run the function to change questions here//
	}else {. //adds nothing to score if incorrect
		score++;
		$("#score").text("");
		//insert the function to change questions here//
	}

)};







var allQuestions = [
{
  question: "How many feet are there in a fathom?", 
  choices: ["4", "5", "6"], 
  correctAnswerIndex:2,
  name: "one"
},
{
  question: "What type of animal is a kolinsky?", 
  choices: ["weasel", "muskrat", "bear"], 
  correctAnswerIndex:0,
  name: "two"
},
{
  question: "Which of these colors does not appear on the Italian flag?", 
  choices: ["green", "red", "blue"], 
  correctAnswerIndex:2,
  name:"three"
}
]; 
var score = 0; 
var counter = 0; 
var numberQuestions = 3; 
$(document).ready(changeQuestion());
function changeQuestion(){
    if(counter < 3){
      $("form").empty();
      var label = document.createElement("p");
      label.append(allQuestions[counter].question);
      $('form').append(label);
      for (var j = 0; j < allQuestions[counter].choices.length; j++) {
        var input = $('<input type="radio" name='+allQuestions[counter].name+'>');
        var text = allQuestions[counter].choices[j]; 
        $(input).val(j);
        $('form').append(input);
        $('form').append(text + '<br>');
          }
      counter++; 
  }else{
    $("form").empty();
    $("#submit").toggle();
    $("#score").text("You got "+score+" out of 3 questions correct!");
  }
 } 
function checkAnswer(){
  var answerIndex = allQuestions[counter-1].correctAnswerIndex;
  if (!$("input:checked").val()) {
   $("#score").text("Please select an answer.");
  }else if($('input:checked').val() == answerIndex) { 
    score++;
    $("#score").text("");
    changeQuestion();
   }else{
    $("#score").text("");
    changeQuestion();
   }
}




