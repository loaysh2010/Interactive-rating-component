let button = document.getElementsByClassName("submit")[0];
let container = document.querySelectorAll(".container");
let rates = document.querySelectorAll(".rates span");
let rate = 0;
let resultSpan = document.querySelector('.results');
rates.forEach(function (element) {
  element.addEventListener("click", function (e) {
    removeActive(rates);
    e.target.classList.add("active");
    rate = e.target.getAttribute("data-rate");
  });
});

function removeActive(elements) {
  elements.forEach(function (element) {
    element.classList.remove("active");
  });
}

button.onclick = function () {
  if (rate == 0) {
    alert("Please select your rate !");
  } else {
    resultSpan.innerHTML='You selected '+rate+' out of 5';
    container.forEach(function (ele) {
      ele.classList.toggle("active");
    });
  }
};
