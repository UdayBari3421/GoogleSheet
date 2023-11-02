let downloadBtn = document.querySelector("#downloadBtn");
let uploadBtn = document.querySelector("#uploadBtn");

function exportData() {
  const fileData = JSON.stringify(sheets);
  const blob = new Blob([fileData], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "sheets.json";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

downloadBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior
  exportData();
});

function importData(e) {
  e.preventDefault();
  const input = document.createElement("input");
  input.type = "file";

  input.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const importedSheets = JSON.parse(e.target.result);

        // Clear existing sheets
        sheets.length = 0;

        // Copy imported sheets to the sheets array
        importedSheets.forEach((importedSheet) => {
          sheets.push(importedSheet);
        });

        // Switch to the last imported sheet
        switchSheet(sheets.length - 1);
        updateUI();
      };

      reader.readAsText(file);
    }
  });

  input.click();
}

uploadBtn.addEventListener("click", importData);
