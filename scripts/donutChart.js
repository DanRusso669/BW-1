// SCRIPT DEL DONUT CHART
const rightAnswers = 4;
const wrongAnswers = 6; // risposte sbagliate
const numberOfQuestions = 10; // numero domande

const rightAnswersSlice = Math.floor((rightAnswers / numberOfQuestions) * 100); // percentuale delle risposte giuste senza simbolo %
const wrongAnswersSlice = Math.floor((wrongAnswers / numberOfQuestions) * 100); // percentuale delle risposte sbagliate senza simbolo %

const percentageRightAnswers = (rightAnswers / numberOfQuestions).toLocaleString("en", {
  // percentuale delle risposte giuste con simbolo %
  style: "percent",
});
const percentageWrongAnswers = (wrongAnswers / numberOfQuestions).toLocaleString("en", {
  // percentuale delle risposte sbagliate con simbolo %
  style: "percent",
});

const circle = document.getElementById("donut-segment");
circle.style.strokeDasharray = `${wrongAnswersSlice} ${rightAnswersSlice}`; // cambio delle porzioni del donut chart in base alla percentuale

// CAMBIO PERCENTUALI AI LATI DEL DONUT CHART

const percentualeCorrette = document.getElementById("percentageCorrect");
const percentualeSbagliate = document.getElementById("percentageWrong");

percentualeCorrette.innerText = percentageRightAnswers;
percentualeSbagliate.innerText = percentageWrongAnswers;

const giusteSuTutte = document.getElementById("giusteSuTot");
const sbagliateSuTutte = document.getElementById("sbagliateSuTot");

giusteSuTutte.innerText = `${rightAnswers}/${numberOfQuestions} questions`;
sbagliateSuTutte.innerText = `${wrongAnswers}/${numberOfQuestions} questions`;

const primaP = document.getElementById("firstCenterText");
const secondaP = document.getElementById("secondCenterText");
const terzaP = document.getElementById("thirdCenterText");

if (rightAnswers >= 6) {
  primaP.innerText = "Congratulations!";
  secondaP.innerText = "You passed the exam.";
} else {
  primaP.innerText = "It wasn't enough!";
  primaP.style.paddingTop = "3rem";
  primaP.style.marginRight = "-1rem";
  secondaP.innerText = "Maybe next time!";
  secondaP.style.marginLeft = "1rem";
  terzaP.innerText = "";
}
