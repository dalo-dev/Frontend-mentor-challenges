"use strict";

const questionElements = document.getElementsByClassName("question");

const accordion = function (index) {
  const accordionBtn = document.getElementById(`btn-${index}`);

  document.getElementById(`ans-${index}`).classList.toggle("hidden");
  accordionBtn.src = accordionBtn.src.includes("plus")
    ? "./assets/images/icon-minus.svg"
    : "./assets/images/icon-plus.svg";
};

for (const [index, element] of Object.entries(questionElements)) {
  element.addEventListener("click", () => accordion(index));
}
