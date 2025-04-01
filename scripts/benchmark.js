window.onload = function () {
  // fa si che lo script venga caricato Dopo l'html.
  //qui mi prelevo con il dom, tutti gli elementi che mi servono per poterli modificare
  const h1 = document.querySelector("h1");
  const h4 = document.querySelector("h4");
  const btn1 = document.getElementById("button1");
  const btn2 = document.getElementById("button2");
  const btn3 = document.getElementById("button3");
  const btn4 = document.getElementById("button4");

  let qstNumber = 0; //mi serve per avanzare correttamente nell'array
  let allQuestions = []; //array di oggetti in cui metterò le domande

  fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy") //mi collego alle domande del server
    .then((response) => response.json()) //converto le info json trovate nel link in formato js
    .then((data) => {
      allQuestions = data.results; //metto tutte le domande del file json, con tutte le info, nell'array di oggetti creato prima

      console.log("domande raccolte: ", allQuestions); //conferma
      loadQuestion(); //carico la funzione primaria di gererazione domande (si trova sotto)
      consoleQuestion(); //carica la funzione del console log, utile per verificare quali domande compariranno.
    })
    .catch((error) => console.error("Errore nel caricamento del file json:", error)); //cattura l'errore in caso di fallimento con il collegamento al server
  function consoleQuestion() {
    //come detto prima questa funzione è utile solo per noi, per capire quali domande usciranno
    for (let i = 0; i <= allQuestions.length; i++) {
      console.log("tipo:", allQuestions[i].type, "\n", allQuestions[i].question);
    }
  }
  function loadQuestion() {
    //funzione principale,che si avvia quando si fetcha e poi richiamata ogni volta che si preme il bottone e
    h1.innerText = allQuestions[qstNumber].question;
    btn1.innerText = answers[0];
    btn2.innerText = answers[1];
    btn3.innerText = answers[2];
    btn4.innerText = answers[3];

    const currentQuestion = allQuestions[qstNumber];
    h1.innerText = currentQuestion.question;

    const answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];

    shuffleArray(answers);
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Scambia gli elementi
      }

      h4.innerText = `QUESTION ${qstNumber + 1} /10`; //questo piccolino ci dice a quale domanda siamo
    }
    //da qui partono gli event listener che si avviano al click e richiamano la funzione principale.
    //TO DO: collezionare il numero di risposte giuste in un array.
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
  }
};
//that's all folks
