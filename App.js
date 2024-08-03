let result = document.querySelector(".hide"); 
result.textContent = ""; 

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");

const wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turnO = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.textContent = "O";
    } else {
      box.textContent = "X";
    }
    turnO = !turnO; // Toggle turnO
    box.disabled = true; // Disable clicked box
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of wins) {
    const p0val = boxes[pattern[0]].textContent;
    const p1val = boxes[pattern[1]].textContent;
    const p2val = boxes[pattern[2]].textContent;

    if (p0val === p1val && p1val === p2val && p0val !== "") {
      result.textContent = `Winner is ${p0val}! Congratulation!!! `;
      disableAllBoxes();
      break;
    }
  }
};

const disableAllBoxes = () => {
  boxes.forEach((box) => box.disabled = true);
};

reset.addEventListener("click", () => {
  result.textContent = ""; // Clear result message
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
  turnO = true; // Reset turn
});