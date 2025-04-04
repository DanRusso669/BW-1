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

  let newDiv2 = document.createElement("div");
  newDiv2.classList.add("classnewdiv2");
  let img = document.createElement("img");

  if (nStelle < 6) {
    newP.innerText = "Thanks for your feedback, you left a negative review, we will try to improve😢.";
    img.src = "../assets/fotomeno6.png";
    img.alt = "no good";
  } else if (nStelle < 9) {
    newP.innerText = "Thanks for your feedback, you left a positive review 😊.";
    img.src = "../assets/foto7-9.png";
    img.alt = "good";
  } else {
    newP.innerText = "Thanks for your feedback, you left a very positive review 🤩.";
    img.src = "../assets/foto10.png";
    img.alt = "yeah";
  }

  let newP2 = document.createElement("p");
  newP2.innerText = "What do you want to do now?";

  let divButtons = document.createElement("div");
  divButtons.id = "divButtons";

  let button1 = document.createElement("button");
  button1.classList.add("button1");
  button1.innerText = "Try the exam again";

  button1.addEventListener("click", function () {
    window.location.href = "./volevi.html";
  });

  let button2 = document.createElement("button");
  button2.classList.add("button2");
  button2.innerText = "Epicode Lms";

  button2.addEventListener("click", function () {
    window.open("https://app.epicode.com/auth/login");
  });

  newDiv.appendChild(newP);
  document.body.appendChild(newDiv);

  newDiv2.appendChild(img);
  document.body.appendChild(newDiv2);

  divButtons.appendChild(newP2);
  divButtons.appendChild(button1);
  divButtons.appendChild(button2);
  document.body.appendChild(divButtons);
}
