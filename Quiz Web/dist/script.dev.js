"use strict";

var questionElement = document.getElementById("question");
var answerButtons = document.querySelector(".answerBox");
var questions = [{
  question: "Which is the largest animal?",
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
  question: "Which is the largest City In Pakistan?",
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
  question: "What is ICU?",
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
var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuiz();
}

function showQuiz() {
  var currentQuestion = questions[currentQuestionIndex];
  var questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
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
  var isCorrect = selectedBtn;

  if (answer.correct) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("inCorrect");
  }

  Array.from(answerButtons.children).forEach(function (button) {
    if (answer.correct === "true") {
      button.classList.add("correct");
    }

    button.disabled = "true";
  });
}

startQuiz();