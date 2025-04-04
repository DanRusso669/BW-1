window.onload = function () {
  // fa si che lo script venga caricato Dopo l'html.
  //qui mi prelevo con il dom, tutti gli elementi che mi servono per poterli modificare
  const h1 = document.querySelector("h1");
  const h4 = document.querySelector("h4");
  const btnArea = document.getElementById("btnArea");

  let qstNumber = 0; //mi serve per avanzare correttamente nell'array
  let allQuestions = []; //array di oggetti in cui metterò le domande
  let currentQuestion; // prende la domanda corrente
  let answers = []; //prende le risposte così come sono fornite dall'api
  let mixedAnswer = []; //risposte con posizione randomizzata
  let correctAnswers = 0; //contatore di risposte corrette

  let timerTimeout; // Variabile per il setInterval del timer
  let remainingTime; // Variabile per tenere traccia del tempo rimanente
  const sec = 30; // 30 secondi
  const setTime = sec * 1000;

  fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy") //mi collego alle domande genrate dal server tramite API
    .then(response => response.json()) //converto le info json trovate nel link in formato js
    .then(data => {
      allQuestions = data.results; //metto tutte le domande del file json, con tutte le info, nell'array di oggetti creato prima

      console.log("domande raccolte: ", allQuestions); //conferma
      loadQuestion(); //carico la funzione primaria di gererazione domande
      consoleQuestion(); //carica la funzione del console log, utile per verificare quali domande compariranno.
    })
    .catch(error => console.error("Errore nel caricamento del file:", error)); //cattura l'errore in caso di fallimento con il collegamento al server

  function consoleQuestion() {
    //ci fa capire quali domande usciranno
    for (let i = 0; i < allQuestions.length; i++) {
      console.log(`tipo: ${allQuestions[i].type},  corretta: ${allQuestions[i].correct_answer} \n ${allQuestions[i].question}`);
    }
  }

  function loadQuestion() {
    //funzione principale,che si avvia quando si fetcha e poi richiamata ogni volta che si preme il bottone

    currentQuestion = allQuestions[qstNumber]; //prendo la domanda corrente
    const question = document.getElementById("question");
    question.innerText = currentQuestion.question;
    const elenco = document.getElementById("numberOfQuestion");

    answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]; //prendo tutte le risposte
    if (currentQuestion.type !== "boolean") {
      mixedAnswer = shuffleArray(answers);
    } else if (currentQuestion.correct_answer === "False") {
      //se la risposta "false" è quella vera, in automatico la metterebbe per primoe e in questo modo glielo impediamo spostandola come seconda posizione
      mixedAnswer[0] = answers[1];
      mixedAnswer[1] = answers[0];
    } else {
      //se è boolean e la risposta giusta è "true"; allora non fare alcun cambiamento sulla posizione
      mixedAnswer = answers;
    }

    elenco.innerText = `QUESTION ${qstNumber + 1} /10`;
    btnArea.innerHTML = "";

    startTimer();

    for (let i = 0; i < mixedAnswer.length; i++) {
      // i bottoni vengono creati sulla base delle risposte mischiate

      let button = document.createElement("button");
      button.innerText = mixedAnswer[i];

      button.addEventListener("click", function () {
        progressBar.style.animation = "none";

        clearTimeout(timerTimeout);

        // Forza il reflow (rende l'elemento visibile di nuovo)
        void progressBar.offsetHeight;

        setTimeout(() => {
          progressBar.style.animation = "circletimer 30s linear forwards";
        }, 50);

        let userResponse = button.innerText;
        console.log(`Risposta scelta: ${userResponse}, risposta corretta: ${currentQuestion.correct_answer}`);
        answerVerify(userResponse, currentQuestion.correct_answer);
        console.log(correctAnswers);
        qstNumber++;
        if (qstNumber < allQuestions.length) {
          loadQuestion();
        } else {
          console.log(correctAnswers);
          let trasferimento = correctAnswers;
          // Imposta una variabile";

          // Crea un URL con il parametro
          let url = "resultspages.html?risposte=" + encodeURIComponent(trasferimento);

          // Reindirizza a secondo.html con il parametro nell'URL
          window.location.href = url;
          console.log("Queste sono le risposte giuste:", trasferimento);
          setTimeout(theEnd, 5000);
        }
      });
      btnArea.appendChild(button);
    }
  }

  function startTimer() {
    // Ferma il timer precedente se c'era
    clearTimeout(timerTimeout);

    remainingTime = 30;
    const timerText = document.getElementById("middleText");

    function updateTimer() {
      // Ogni secondo aggiorna il timer
      if (remainingTime <= 0) {
        timerText.innerText = "00";
        progressBar.style.animation = "none";

        clearTimeout(timerTimeout);
        qstNumber++;
        if (qstNumber === 10) {
          let trasferimento = correctAnswers;
          // Imposta una variabile";

          // Crea un URL con il parametro
          let url = "resultspages.html?risposte=" + encodeURIComponent(trasferimento);

          // Reindirizza a secondo.html con il parametro nell'URL
          window.location.href = url;
          // window.location.href = "resultspages.html";
        }
        loadQuestion();

        // Forza il reflow (rende l'elemento visibile di nuovo)
        void progressBar.offsetHeight;

        setTimeout(() => {
          progressBar.style.animation = "circletimer 30s linear forwards";
        }, 50);
      } else {
        timerText.innerText = remainingTime.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
        remainingTime--;
        timerTimeout = setTimeout(updateTimer, 1000);
      }
    }

    updateTimer(); // Avvia il timer
  }

  function answerVerify(user, correct) {
    //controlla se le risposta è corretta
    if (user === correct) {
      correctAnswers++;
    }
  }
  function theEnd() {
    window.location.href = "./resultspages.html";
  }
  function shuffleArray(array) {
    //  Fisher-Yates Shuffle: mescola gli array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); //serve a generare un valore casuale.
      [array[i], array[j]] = [array[j], array[i]]; // destructuring assignnment: scambia i due elementi dell'array, ogni volta di un valore casuale (j)
    }
    return array;
  }

  //TO DO: collezionare il numero di risposte giuste in un array.
};
//that's all folks

// const sec = 30;

// const setTime = sec * 1000; // trasforma i secondi in millisec
// const startTime = Date.now(); // prende i millesec dal 01/01/70
// const futureTime = startTime + setTime; //somma i due valori sopra

// const countDownTimer = function () {
//   const currentTime = Date.now(); // riprende i millisec dal 01/01/70, ma essendo dentro la funzione che si ripete a loop, cambiano col passare dei secondi reali
//   const remainingTime = futureTime - currentTime; // calcola la differenza col tempo che passa
//   const timerText = document.getElementById("middleText"); // selezioniamo la variabile del testo

//   if (remainingTime <= 0) {
//     // se i tempo rimanente è uguale a 0
//     clearInterval(timerLoop); // Ferma il timer
//     timerText.innerText = "00"; // Timer scaduto quindi rimettiamo 00 sul testo
//   } else {
//     const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
//     timerText.innerText = secs; // Mostra il tempo rimanente
//   }
// };

// const timerLoop = setInterval(countDownTimer);
