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
    newP.innerText = "Thanks for your feedback, you left a negative review, we will try to improve😢.";
  } else if (nStelle < 9) {
    newP.innerText = "Thanks for your feedback, you left a positive review 😊.";
  } else {
    newP.innerText = "Thanks for your feedback, you left a very positive review 🤩.";
  }

  let newP2 = document.createElement("p");
  newP2.innerText = "What do you want to do now?";

  let divButtons = document.createElement("div");
  divButtons.id = "divButtons";

  let button1 = document.createElement("button");
  button1.classList.add("button1");
  button1.innerText = "Try the exam again";

  button1.addEventListener("click", function () {
    window.location.href = "./index.html";
  });

  let button2 = document.createElement("button");
  button2.classList.add("button2");
  button2.innerText = "Epicode Courses";

  button2.addEventListener("click", function () {
    window.open("https://epicode.com/it/corsi/", "_blank");
  });

  newDiv.appendChild(newP);
  document.body.appendChild(newDiv);

  divButtons.appendChild(newP2);
  divButtons.appendChild(button1);
  divButtons.appendChild(button2);
  document.body.appendChild(divButtons);
}
