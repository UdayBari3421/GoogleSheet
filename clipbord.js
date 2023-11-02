const copyBtn = document.querySelector("#copyBtn");
const cutBtn = document.querySelector("#cutBtn");
const pasteBtn = document.querySelector("#pasteBtn");

copyBtn.addEventListener("click", copyContent);
cutBtn.addEventListener("click", cutContent);
pasteBtn.addEventListener("click", pasteContent);

let clipboard = { content: "", action: "" };

function copyContent() {
  clipboard.content = activeElement.innerText;
  clipboard.action = "copy";
}

function cutContent() {
  clipboard.content = activeElement.innerText;
  clipboard.action = "cut";
  activeElement.innerText = "";
}

function pasteContent() {
  if (clipboard.action === "copy" || clipboard.action === "cut") {
    activeElement.innerText = clipboard.content;
    if (clipboard.action === "cut") {
      clipboard.content = "";
      clipboard.action = "";
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey === "c") {
    copyContent();
  } else if (event.ctrlKey === "v") {
    pasteContent();
  } else if (event.ctrlKey === "x") {
    cutContent();
  }
});
