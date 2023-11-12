const cellNamePlaceHolder = document.querySelector("#activeElement");
const form = document.querySelector("#form");
const fontSizeInput = document.querySelector("#font-size");
const fontFamilyInput = document.querySelector("#font-family");

let activeElement = null;

const state = {};

const defaultProp = {
  fontSize: 16,
  fontFamily: "sans",
  color: "#000000",
  textAlign: "left",
  bgColor: "#ffffff",
  bold: false,
  italic: false,
  underline: false,
  value: "",
};

function onCellFocus(event) {
  const elementId = event.target.id;
  cellNamePlaceHolder.value = elementId;
  activeElement = event.target;
  if (state[activeElement.id]) {
    resetOptions(state[elementId]);
  } else {
    resetOptions(defaultProp);
  }
}

function resetOptions(optionState) {
  form.fontFamily.value = optionState.fontFamily;
  form.fontSize.value = optionState.fontSize;
  form.textAlign.value = optionState.textAlign;
  form.color.value = optionState.color;
  form.bgColor.value = optionState.bgColor;
  form.bold.value = optionState.bold;
  form.italic.value = optionState.italic;
  form.underline.value = optionState.underline;
}

function onFormChange(event) {
  if (!activeElement) {
    alert("please Select cell to make changes");
    form.reset();
    return;
  }
  let currentState = {
    fontFamily: form.fontFamily.value,
    fontSize: form.fontSize.value,
    textAlign: form.textAlign.value,
    color: form.color.value,
    bgColor: form.bgColor.value,
    bold: form.bold.checked,
    italic: form.italic.checked,
    underline: form.underline.checked,
  };
  applyStyleToCell(currentState);
  state[activeElement.id] = { ...currentState, value: activeElement.innerText };
}

function applyStyleToCell(styleObject) {
  activeElement.style.fontSize = `${styleObject.fontSize}px`;
  activeElement.style.fontFamily = styleObject.fontFamily;
  activeElement.style.color = styleObject.color;
  activeElement.style.backgroundColor = styleObject.bgColor;
  activeElement.style.textAlign = styleObject.textAlign;
  activeElement.style.fontWeight = styleObject.bold ? "bold" : "normal";
  activeElement.style.fontStyle = styleObject.italic ? "italic" : "normal";
  activeElement.style.textDecoration = styleObject.underline
    ? "underline"
    : "none";
}

form.addEventListener("input", onFormChange);
form.addEventListener("submit", (event) => event.preventDefault());
