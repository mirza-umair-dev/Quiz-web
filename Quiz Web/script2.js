let questions = [
  {
    question: "Which is the largest animal ?",
    answers: [
      { text: "BlueWhale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Camel", correct: false },
      { text: "Lion", correct: false },
    ],
  },
  {
    question: "Which is the largest City In Pakistan ?",
    answers: [
      { text: "Karachi", correct: true },
      { text: "Lahore", correct: false },
      { text: "Peshawar", correct: false },
      { text: "Multan", correct: false },
    ],
  },
  {
    question: "What is ICU ?",
    answers: [
      { text: "inner Commune Unit", correct: false },
      { text: "Intensive Care Unit", correct: true },
      { text: " Others", correct: false },
      { text: " None", correct: false },
    ],
  },
];
let questionElement = document.querySelector("#question");
let answerButtons = document.querySelector(".answerBox");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  showQuiz();
}
function showQuiz(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.classList.add("btns");
        answerButtons.appendChild(button);
        button.innerHTML = answer.text;
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
                button.addEventListener("click", selectAnswer);

    })
    function selectAnswer(e) {
        let selectedBtn = e.target;
        let isCorrect = answer.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
        }
        
    }

}
startQuiz();
