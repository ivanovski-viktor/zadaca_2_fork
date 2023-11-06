/**
 * var, const and let
 */
let counter = 0;
let colors = ["red", "green", "blue", "yellow"];

function onClick() {
  let n = colors.length;
  // Equvalent expressions counter = counter + 1; counter += 1;
  currentColour = colors[counter % n]; // "red"
  counter++;
  document.body.style.backgroundColor = currentColour;
}
// DOM and DOM manipulation
const changeColorBtn = document.querySelector("#changeColorBtn");
changeColorBtn.addEventListener("click", onClick);

// Create reverse functionality of changing colors on Reverse color button
