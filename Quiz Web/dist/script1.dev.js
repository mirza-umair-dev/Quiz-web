"use strict";

var questions = [{
  question: "Which is the largest animal ?",
  answers: [{
    text: "BlueWhale",
    correct: true
  }, {
    text: "Elephant",
    correct: false
  }, {
    text: "Camel",
    correct: false
  }, {
    text: "Lion",
    correct: false
  }]
}, {
  question: "Which is the largest City In Pakistan ?",
  answers: [{
    text: "Karachi",
    correct: true
  }, {
    text: "Lahore",
    correct: false
  }, {
    text: "Peshawar",
    correct: false
  }, {
    text: "Multan",
    correct: false
  }]
}, {
  question: "What is ICU ?",
  answers: [{
    text: "inner Commune Unit",
    correct: false
  }, {
    text: "Intensive Care Unit",
    correct: true
  }, {
    text: " Others",
    correct: false
  }, {
    text: " None",
    correct: false
  }]
}, {
  question: "which organ is responsible for blood circulation ?",
  answers: [{
    text: "Brain",
    correct: false
  }, {
    text: "skin",
    correct: false
  }, {
    text: "lungs",
    correct: false
  }, {
    text: "heart",
    correct: true
  }]
}, {
  question: "which animal has 25000 teeth ? ",
  answers: [{
    text: "tiger",
    correct: false
  }, {
    text: "shark",
    correct: false
  }, {
    text: "crocodile",
    correct: false
  }, {
    text: "shark",
    correct: true
  }]
}, {
  question: "fastest animal on earth ? ",
  answers: [{
    text: "tiger",
    correct: false
  }, {
    text: "cheeta",
    correct: true
  }, {
    text: "lion",
    correct: false
  }, {
    text: "shark",
    correct: false
  }]
}, {
  question: "which fruit gives us oil ? ",
  answers: [{
    text: "pumpkin",
    correct: false
  }, {
    text: "onion",
    correct: false
  }, {
    text: "coconut",
    correct: true
  }, {
    text: "almond",
    correct: false
  }]
}];
var questionElement = document.querySelector("#question");
var answerButtons = document.querySelector(".answerBox");
var mainContent = document.getElementById("main");
var startMenu = document.querySelector(".start");
var startQuizBtn = document.getElementById("startQuiz");
var nextBtn = document.getElementById("nextBtn");
var section3 = document.getElementById("section3");
var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  startQuizBtn.addEventListener("click", showQuiz);
}

function showQuiz() {
  mainContent.classList.add("main");
  startMenu.classList.add("startHide");
  var currentQuestion = questions[currentQuestionIndex];
  var questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  section3.style.display = "none";
  currentQuestion.answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.classList.add("btns");
    answerButtons.appendChild(button);
    button.innerHTML = answer.text;

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  var selectedBtn = e.target;
  section3.style.display = "flex";
  isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score += 1;
  } else {
    selectedBtn.classList.add("inCorrect");
  }

  Array.from(answerButtons.children).forEach(function (button) {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }

    button.disabled = true;
  });
}

function showScore() {
  var showScoreBox = document.querySelector(".showScore");
  showScoreBox.style.display = "flex";
  mainContent.classList.remove("main");
  var scoreHeading = document.getElementById("scoreHeading");
  scoreHeading.innerHTML = 'You Scored ' + score + ' out of 7';
}

function nextQuestion() {
  answerButtons.innerHTML = "";
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuiz();
  } else {
    showScore();
    nextBtn.innerHTML = "Restart";
  }
}

startQuiz();