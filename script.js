/**
 * var, const and let
 */
let counter = 0;
let colors = ["red", "green", "blue", "yellow"];

// function declaration
function onClick() {
  let n = colors.length;
  // Equvalent expressions counter = counter + 1; counter += 1;
  currentColour = colors[counter % n]; // "red"
  counter++;
  document.body.style.backgroundColor = currentColour;
}
// DOM and DOM manipulation
const changeColorBtn = document.querySelector("#changeColorBtn");
const reverseColorBtn = document.querySelector("#reverseColorBtn");
changeColorBtn.addEventListener("click", onClick);
reverseColorBtn.addEventListener("click", onReverseClick);

function onReverseClick() {
  let currentColor = document.body.style.backgroundColor;
  const index = colors.indexOf(currentColor);
  document.body.style.backgroundColor =
    colors[(index - 1 + colors.length) % colors.length];
}
