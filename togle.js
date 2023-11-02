const bgColorlabel = document.getElementById("bgColorLabel");
const bgColorInput = document.getElementById("bgColor");

const textColorlabel = document.getElementById("textColorlabel");
const textColorInput = document.getElementById("color");

function toggleClass(element) {
  element.classList.toggle("active");
}

bgColorlabel.addEventListener("click", () => {
  bgColorInput.classList.toggle("disp");
});

bgColorInput.addEventListener("input", () => {
  // bgColorlabel.style.background = bgColorInput.value;
  bgColor = bgColorInput.value;
});

textColorlabel.addEventListener("click", () => {
  textColorInput.classList.toggle("disp");
});

textColorInput.addEventListener("input", () => {
  // textColorlabel.style.background = textColorInput.value;
  color = textColorInput.value;
});
