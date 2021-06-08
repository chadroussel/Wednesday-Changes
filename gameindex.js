//Runs once at the beginning
function setup() {
  var googleSheetLink =
    "https://docs.google.com/spreadsheets/d/1VK7aLodSHQ35D7cyQqS79WFeB6mFfpsqugYD-1Knm6g/edit?usp=sharing";
  trivia.loadGoogleSheet(googleSheetLink).then(displayWelcome);
}

//Loops continously for background effects and animations. (p5.js)
function draw() {
  if (trivia.state == "welcome") background("black");
  else if (trivia.state == "question") background("black");
  else if (trivia.state == "correct") background("White");
  else if (trivia.state == "incorrect") background("red");
  else if (trivia.state == "thankyou") background("black");
}

function displayWelcome() {
  $(".screen").hide();
  $("#welcome-screen").show();
}

function displayQuestion() {
  $(".screen").hide();
  $("#question-screen").show();
  $("#correctAnswer").removeClass("highlight");
  $("#feedback").hide();
  trivia.insertQuestionInfo();
  trivia.shuffleAnswers();
}

function displayThankyou() {
  $(".screen").hide();
  $("#thankyou-screen").show();
  $("#game-results").html(
    `You got ${trivia.totalCorrect} of ${trivia.totalAnswered} correct.`
  );
}

function onClickedAnswer(isCorrect) {
  if (isCorrect) $("#feedback").html(`OH-KAY!`).show();
  else $("#feedback").html(`Almost had it, gotta be quicker than that.`).show();
  $("#correctAnswer").addClass("highlight"); //highlight right answer
  setTimeout(trivia.gotoNextQuestion, 3000); //wait 3 secs...next question
}

function onClickedStart() {
  displayQuestion();
}
