let nStelle = 0;

document.addEventListener("DOMContentLoaded", function () {
  const tutteLeStelle = document.querySelectorAll(".star");

  function aggiornaStelle(nStellaCliccata) {
    nStelle = nStellaCliccata;
    tutteLeStelle.forEach((stella, indice) => {
      if (indice < nStellaCliccata) {
        stella.classList.remove("spenta");
        stella.classList.add("accesa");
      } else {
        stella.classList.remove("accesa");
        stella.classList.add("spenta");
      }
    });
  }

  tutteLeStelle.forEach((stella) => {
    stella.addEventListener("click", function () {
      const indiceCliccato = parseInt(stella.getAttribute("data-index"));
      aggiornaStelle(indiceCliccato);
    });
  });
});

function submitFeedBack() {
  let feedback = document.getElementById("feedback").value.trim();

  if (feedback === "") {
    alert("Per favore, scrivi un feedback.");
    return;
  } else if (nStelle === 0) {
    alert("Per favore, lasciaci un voto.");
    return;
  }

  let main = document.getElementById("mainContent");
  main.innerHTML = "";

  let newDiv = document.createElement("div");
  newDiv.classList.add("classnewdiv");
  let newP = document.createElement("p");

  if (nStelle < 6) {
    newP.textContent = "Grazie per il tuo feedback, hai lasciato una recensione insufficiente 😢.";
  } else {
    newP.textContent = "Grazie per il tuo feedback, hai lasciato una recensione sufficiente 😊.";
  }

  newDiv.appendChild(newP);
  document.body.appendChild(newDiv);
}
