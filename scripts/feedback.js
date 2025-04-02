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
  let divReview = document.getElementById("starReview");
  let divFeedBack = document.getElementById("noFeedBack");

  if (nStelle === 0 && feedback === "") {
    divFeedBack.style.display = "block";
    divReview.style.display = "block";
  }

  if (feedback !== "") {
    divFeedBack.style.display = "none";
  }

  if (nStelle === 0) {
    divReview.style.display = "block";
    return;
  } else {
    divReview.style.display = "none";
  }

  if (feedback === "") {
    divFeedBack.style.display = "block";
    return;
  } else {
    divFeedBack.style.display = "none";
  }

  let main = document.getElementById("mainContent");
  main.innerHTML = "";

  let newDiv = document.createElement("div");
  newDiv.classList.add("classnewdiv");
  let newP = document.createElement("p");

  if (nStelle < 6) {
    newP.textContent = "Thanks for your feedback, you left a negative review 😢.";
  } else {
    newP.textContent = "Thanks for your feedback, you left a positive review 😊.";
  }

  newDiv.appendChild(newP);
  document.body.appendChild(newDiv);
}
