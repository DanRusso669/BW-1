const sec = 15;
// const sec = 30;

const setTime = sec * 1000; // trasforma i secondi in millisec
const startTime = Date.now(); // prende i millesec dal 01/01/70
const futureTime = startTime + setTime; //somma i due valori sopra

document.addEventListener ("timerStart", (e) =>{
  console.log ("tempo iniziato")
countDownTimer();
});

const countDownTimer = function () {
  const currentTime = Date.now(); // riprende i millisec dal 01/01/70, ma essendo dentro la funzione che si ripete a loop, cambiano col passare dei secondi reali
  const remainingTime = futureTime - currentTime; // calcola la differenza col tempo che passa
  const timerText = document.getElementById("middleText"); // selezioniamo la variabile del testo
  const timerDown = new Event("timerDown");
  if (remainingTime <= 0) {
    // se i tempo rimanente è uguale a 0
    clearInterval(timerLoop); // Ferma il timer
    
    document.dispatchEvent(timerDown);

    timerText.innerText = "00"; // Timer scaduto quindi rimettiamo 00 sul testo
  } else {
    const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    timerText.innerText = secs; // Mostra il tempo rimanente
  }
};


const timerLoop = setInterval(countDownTimer);
