// Donut chart results page

const rightAnswers = 9; // risposte giuste
const worngAnswers = 1; // risposte sbagliate
const numberOfQuestions = 10; // numero domande

const rightAnswersSlice = Math.floor((rightAnswers / numberOfQuestions) * 100); // percentuale delle risposte giuste senza simbolo %
const wrongAnswersSlice = Math.floor((worngAnswers / numberOfQuestions) * 100); // percentuale delle risposte sbagliate senza simbolo %

console.log(wrongAnswersSlice);
console.log(rightAnswersSlice);

const percentageRightAnswers = (rightAnswers / numberOfQuestions).toLocaleString("en", {
  // percentuale delle risposte giuste con simbolo %
  style: "percent",
});
const percentageWrongAnswers = (worngAnswers / numberOfQuestions).toLocaleString("en", {
  // percentuale delle risposte sbagliate con simbolo %
  style: "percent",
});

console.log(percentageWrongAnswers);
console.log(percentageRightAnswers);

const circle = document.getElementById("donut-segment");
circle.style.strokeDasharray = `${wrongAnswersSlice} ${rightAnswersSlice}`; // cambio delle porzioni del donut chart in base alla percentuale
