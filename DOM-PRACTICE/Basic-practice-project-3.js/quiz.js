// Questions database
const quizData = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Display Object Management",
      "Digital Ordinance Model"
    ],
    answer: 0
  },
  {
    question: "Which is NOT a JavaScript framework?",
    options: [
      "React",
      "Angular",
      "Django",
      "Vue"
    ],
    answer: 2
  },
  {
    question: "Which HTML tag is used for JavaScript?",
    options: [
      "<js>",
      "<script>",
      "<javascript>",
      "<code>"
    ],
    answer: 1
  }
];


// select DOM elements
const quizEl = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");

// render quiz
function loadQuiz() {
    // For each question object in quizData
    quizData.forEach((q, index) => {
        // question text
        const qEl = document.createElement("div");
        qEl.classList.add("question");
        qEl.textContent = `${index + 1}. ${q.question}`;
        quizEl.appendChild(qEl);

        // For each option in this question
        q.options.forEach((optionText, optionIndex) => {
            const label = document.createElement("label");
            label.classList.add("options");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`;
            input.value = optionIndex;

            label.appendChild(input);
            label.appendChild(document.createTextNode(optionText));
            quizEl.appendChild(label);
            quizEl.appendChild(document.createElement("br"));


        });

    });
}

// calculate score
function getScore() {
  let score = 0;
    quizData.forEach((q, index) => {
      // Select the checked radio for this question group
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && parseInt(selected.value, 10) === q.answer) {
      score++;
    }
  });
  return score;
}

// Handle submit
submitBtn.addEventListener("click", () => {
  const score = getScore();
  resultEl.textContent = `You scored ${score} out of ${quizData.length}`;
});

// Load on page
loadQuiz();