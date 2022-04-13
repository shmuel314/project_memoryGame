let cards = ["A", "B", "C", "D", "E", "F"];
let dualArr = cards.concat(cards);
console.log(dualArr);
// debugger
function shuffle(arr) {
   let shuffleAmount = 30;
   for (i = 0; i < shuffleAmount; i++) {
      let x = Math.round(Math.random() * (arr.length - 1));
      let z = Math.round(Math.random() * (arr.length - 1));
      let y = arr[x];
      arr.splice(x, 1, arr[z]);
      arr.splice(z, 1, y);
   }
   return arr
}
let a = shuffle(dualArr);
console.log(a);


// console.log(shuffle(dualArr));
// let board = document.getElementById("game-table");
// let elem = document.createElement("div");
// let elem1 = document.createElement("div");
// elem.innerText = "C";
// elem1.innerText = "C";
// board.appendChild(elem)
// board.appendChild(elem1)
// console.log(board);
let elem;
let board = document.getElementById("game-table");
for (i of a) {
   let elem = document.createElement("div");
   elem.innerText = i;
   elem.className = "card";
   // Tag.className = "card card-hover"
   board.appendChild(elem)
}

console.log(board);
