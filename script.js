document.addEventListener("DOMContentLoaded", function (){
  const container = document.getElementById("grid-container");

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
  createGrid(16,16);
});