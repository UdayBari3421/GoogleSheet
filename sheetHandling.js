const sheetsContainer = document.getElementById("sheetsContainer");
const footerSheetsContainer = document.querySelector(".sheets-folder-cont");

let activeSheetIndex = 0;
const sheets = [{ state: {}, name: "Sheet 1" }];

function switchSheet(index) {
  sheets[activeSheetIndex].state = getCurrentSheetState();
  activeSheetIndex = index;
  updateUI();
}

function addSheet() {
  const newSheet = { state: {}, name: `Sheet ${sheets.length + 1}` };
  sheets.push(newSheet);
  activeSheetIndex = sheets.length - 1;
  updateUI();
}

function deleteSheet() {
  if (sheets.length > 1) {
    sheets.splice(activeSheetIndex, 1);
    if (activeSheetIndex >= sheets.length) {
      activeSheetIndex = sheets.length - 1;
    }
    updateUI();
  } else {
    alert("You can't delete the last sheet.");
  }
}

function updateUI() {
  sheetsContainer.innerHTML = "";
  sheets.forEach((sheet, index) => {
    const sheetButton = createSheetButton(sheet.name, index);
    sheetButton.classList.add("sheet-btn");
    sheetsContainer.appendChild(sheetButton);

    if (index === activeSheetIndex) {
      sheetButton.classList.add("current-sheet");
    } else {
      sheetButton.classList.remove("current-sheet");
    }
  });

  const activeSheetState = sheets[activeSheetIndex].state;
  createSheetCells(activeSheetState);
}

function createSheetButton(sheetName, index) {
  const sheetButton = document.createElement("button");
  sheetButton.textContent = sheetName;
  sheetButton.addEventListener("click", () => switchSheet(index));
  return sheetButton;
}

function createSheetCells(state) {
  mainCellContainer.innerHTML = "";
  SnoContainer.innerHTML = "";

  for (let i = 1; i <= rows; i++) {
    const snoCell = document.createElement("div");
    snoCell.innerText = i;
    snoCell.classList = "cell sno-cell";
    SnoContainer.appendChild(snoCell);
  }

  for (let row = 1; row <= rows; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("main-row");

    for (let col = 1; col <= cols; col++) {
      const cellId = String.fromCharCode(64 + col) + row;
      const cell = createCell(cellId, state[cellId]);
      rowContainer.appendChild(cell);

      cell.addEventListener("focus", onCellFocus);
      cell.addEventListener("input", onFormChange);
    }

    mainCellContainer.appendChild(rowContainer);
  }
}

function createCell(cellId, content) {
  const cell = document.createElement("div");
  cell.id = cellId;
  cell.classList = "cell main-cell";
  cell.contentEditable = true;
  cell.innerText = content || "";
  return cell;
}

function getCurrentSheetState() {
  const state = {};

  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      const cellId = String.fromCharCode(64 + col) + row;
      const cell = document.getElementById(cellId);
      state[cellId] = cell.innerText;
    }
  }

  return state;
}

updateUI();
