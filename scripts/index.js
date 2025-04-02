document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const checkbox = document.getElementById("checkbox");
  const conditionError = document.getElementById("condition");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (checkbox.checked) {
      window.location.href = "./benchmark.html";
    } else {
      conditionError.style.display = "block";
    }
  });
});
