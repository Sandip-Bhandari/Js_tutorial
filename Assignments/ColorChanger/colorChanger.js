// function makeBodyBlue() {
//   document.body.style.background = "#0f62fe";
// }
// function makeBodyPink() {
//   document.body.style.background = "#ff7eb6";
// }
// function makeBodyGreen() {
//   document.body.style.background = "#42be65";
// }

// document.querySelector("#Blue").addEventListener("click", makeBodyBlue);
// document.querySelector("#Pink").addEventListener("click", makeBodyPink);
// document.querySelector("#Green").addEventListener("click", makeBodyGreen);
//___________________________________

function changeColor(color) {
  return function () {
    document.body.style.background = color;
  };
}

const bgColorBlue = changeColor("#0f62fe");
const bgColorPink = changeColor("#ff7eb6");
const bgColorGreen = changeColor("#42be65");

document.querySelector("#Blue").addEventListener("click", bgColorBlue);
document.querySelector("#Pink").addEventListener("click", bgColorPink);
document.querySelector("#Green").addEventListener("click", bgColorGreen);
