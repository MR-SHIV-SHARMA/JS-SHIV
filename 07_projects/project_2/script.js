const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const Guide = document.querySelector("#Guide");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `plese give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `plese give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.6) {
      Guide.innerHTML = `Less than 18.6`;
    } else if (bmi <= 18.6 || bmi <= 24.9) {
      Guide.innerHTML = `normal range 18.6 and 24,9`;
    } else {
      bmi <= 24.9;
      Guide.innerHTML = `Greater than 24.9`;
    }
  }
});
