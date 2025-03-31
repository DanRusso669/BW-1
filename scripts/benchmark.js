window.onload = function () {
  console.log("caricata!");
  const h2 = document.querySelector("h2");

  const div = document.getElementById("btnArea");
  console.log(div);
  console.dir(div);

  const btn1 = document.getElementById("button1");
  const btn2 = document.getElementById("button2");
  const btn3 = document.getElementById("button3");
  const btn4 = document.getElementById("button4");
  console.dir(btn1);

  fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
    .then((response) => response.json())
    .then((data) => {
      // for (let i = 0; i<= data.response.length; i++){}
      const question = data.results[0].question;
      h2.innerText = question;
      console.log(question);
      console.log(data.results[0].incorrect_answers[0]);
      btn1.innerText = data.results[0].incorrect_answers[0];
      btn2.innerText = data.results[0].incorrect_answers[1];
      btn4.innerText = data.results[0].correct_answer;
      btn3.innerText = data.results[0].incorrect_answers[2];
    })
    .catch((error) => console.error("Errore nel caricamento:", error));
};
