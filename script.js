const topContainer = document.querySelector(".top");
const mainCellContainer = document.querySelector(".right");
const SnoContainer = document.querySelector(".sno");
const cols = 26;
const rows = 100;

function createTopCells() {
  for (let i = 0; i <= cols; i++) {
    const cell = document.createElement("div");
    if (i !== 0) {
      cell.innerText = String.fromCharCode(64 + i);
    }
    cell.classList = "cell top-cell";
    topContainer.appendChild(cell);
  }
}

function createSnoCells() {
  for (let i = 1; i <= rows; i++) {
    const snoCell = document.createElement("div");
    snoCell.innerText = i;
    snoCell.classList = "cell sno-cell";
    SnoContainer.appendChild(snoCell);
  }
}

function createRow(rowNumber) {
  const row = document.createElement("div");
  for (let i = 0; i < cols; i++) {
    const cell = document.createElement("div");
    cell.classList = "cell main-cell";
    cell.contentEditable = true;
    row.appendChild(cell);

    cell.id = String.fromCharCode(64 + i + 1) + rowNumber;
    cell.addEventListener("focus", onCellFocus);
    cell.addEventListener("input", onCellFocus);
  }
  row.classList = "main-row";
  mainCellContainer.appendChild(row);
}

for (let i = 1; i <= rows; i++) {
  createRow(i);
}

createSnoCells();
createTopCells();
