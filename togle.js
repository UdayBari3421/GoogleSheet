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
  bgColor = bgColorInput.value;
});

textColorlabel.addEventListener("click", () => {
  textColorInput.classList.toggle("disp");
});

textColorInput.addEventListener("input", () => {
  color = textColorInput.value;
});
