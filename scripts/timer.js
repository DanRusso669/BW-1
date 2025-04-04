// const sec = 3;
const sec = 30;
let futureTime;
const setTime = sec * 1000; // trasforma i secondi in millisec
const svg = document.querySelector("svg"); 


document.addEventListener ("timerStart", (e) =>{
  console.log ("tempo iniziato")
  const startTime = Date.now(); // prende i millesec dal 01/01/70
   futureTime = startTime + sec *1000; 
 
countDownTimer();
clearInterval(timerLoop); //interrompe eventuali timer precedenti
timerLoop =setInterval(countDownTimer,1000);  //e adesso lo fa ripartire con un intervallo di un secondo
});

const countDownTimer = function () {
  const currentTime = Date.now(); // riprende i millisec dal 01/01/70, ma essendo dentro la funzione che si ripete a loop, cambiano col passare dei secondi reali
  const remainingTime = futureTime - currentTime; // calcola la differenza col tempo che passa
  const timerText = document.getElementById("middleText"); // selezioniamo la variabile del testo
  const timerDown = new Event("timerDown");




  if (remainingTime <= 0) {
    // se i tempo rimanente è uguale a 0
    clearInterval(timerLoop); // Ferma il timer
    
    document.dispatchEvent( new Event ("timerDown")); //invia evento

    timerText.innerText = "00"; // Timer scaduto quindi rimettiamo 00 sul testo
  } else {
    const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    timerText.innerText = secs; // Mostra il tempo rimanente
  }
};


let timerLoop = setInterval(countDownTimer, 1000);
