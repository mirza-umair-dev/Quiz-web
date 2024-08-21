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
}];
var questionElement = document.querySelector("#question");
var answerButtons = document.querySelector(".answerBox");
var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  showQuiz();
}

function showQuiz() {
  var currentQuestion = questions[currentQuestionIndex];
  var questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
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

  function selectAnswer(e) {
    var selectedBtn = e.target;
    var isCorrect = answer.dataset.correct === "true";

    if (isCorrect) {
      selectedBtn.classList.add("correct");
    }
  }
}

startQuiz();