window.onload = function () {
  const h2 = document.querySelector("h2");
  const h6 = document.querySelector("h6");
  const div = document.getElementById("btnArea");
  const btn1 = document.getElementById("button1");
  const btn2 = document.getElementById("button2");
  const btn3 = document.getElementById("button3");
  const btn4 = document.getElementById("button4");

  let qstNumber = 0;
  function loadQuestion() {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
      .then((response) => response.json())
      .then((data) => {
        const question = data.results[qstNumber].question;
        h2.innerText = question;
        btn1.innerText = data.results[qstNumber].incorrect_answers[0];
        btn2.innerText = data.results[qstNumber].incorrect_answers[1];
        btn3.innerText = data.results[qstNumber].incorrect_answers[2];
        btn4.innerText = data.results[qstNumber].correct_answer;

        btn1.addEventListener("click", function () {
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
      })
      .catch((error) => console.error("Errore nel caricamento:", error));
    h6.innerText = `QUESTION ${qstNumber + 1}`;
  }
  loadQuestion();
};
