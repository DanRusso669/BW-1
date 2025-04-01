window.onload = function () {
  const h1 = document.querySelector("h1");
  const h4 = document.querySelector("h4");
  const div = document.getElementById("btnArea");
  const btn1 = document.getElementById("button1");
  const btn2 = document.getElementById("button2");
  const btn3 = document.getElementById("button3");
  const btn4 = document.getElementById("button4");

  let qstNumber = 0;
  let allQuestions = [];

  fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
    .then((response) => response.json())
    .then((data) => {
      allQuestions = data.results;

      console.log("domande raccolte: ", allQuestions);
      loadQuestion();
      consoleQuestion();
    })
    .catch((error) => console.error("Errore nel caricamento del file json:", error));
  function consoleQuestion() {
    for (let i = 0; i <= allQuestions.length; i++) {
      console.log(allQuestions[i].question);
    }
  }
  function loadQuestion() {
    h1.innerText = allQuestions[qstNumber].question;
    btn1.innerText = allQuestions[qstNumber].incorrect_answers[0];
    btn2.innerText = allQuestions[qstNumber].incorrect_answers[1];
    btn3.innerText = allQuestions[qstNumber].incorrect_answers[2];
    btn4.innerText = allQuestions[qstNumber].correct_answer;

    h4.innerText = `QUESTION ${qstNumber + 1}`;
  }

  btn1.addEventListener("click", function () {
    console.log("ho premuto");
    qstNumber++;
    loadQuestion();
  });
  btn2.addEventListener("click", function () {
    qstNumber++;
    loadQuestion();
  });
  btn3.addEventListener("click", function () {
    qstNumber++;
    loadQuestion();
  });
  btn4.addEventListener("click", function () {
    qstNumber++;
    loadQuestion();
  });
};
