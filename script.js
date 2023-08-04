const container = document.getElementById("grid-container");
const gridCells = container.querySelectorAll(".grid-cell");
let currentCell;

function createGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createGrid(16, 16);

  for (const gridCell of gridCells) {
    gridCell.addEventListener("mouseover", onGridCellMouseOver);
    gridCell.addEventListener("mouseout", onGridCellMouseOut);
  }
});

function onGridCellMouseOver(event) {
  currentCell = event.target;
  currentCell.style.backgroundImage = "repeating-linear-gradient(to bottom, #f00, #00f)";
}

function onGridCellMouseOut(event) {
  if (currentCell === event.target) {
    currentCell.style.backgroundImage = "";
  }
}
