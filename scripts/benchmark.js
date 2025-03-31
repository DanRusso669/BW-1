console.log("caricata!");
const h2 = document.querySelector("h2");

fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
  .then((response) => response.json())
  .then((data) => {
    // for (let i = 0; i<= data.response.lenght; i++){

    // }
    const question = data.results[0].question;
    h2.innerText = question;
  })
  .catch((error) => console.error("Errore nel caricamento:", error));
