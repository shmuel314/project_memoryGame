let cards = ["A", "B", "C", "D", "E", "F"];
let doubleCards = cards.concat(cards);

function shuffle(arr) {//ערבוב קלפים
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
let a = shuffle(doubleCards);
console.log(a);

let flipCards = [];
const chooseCard = (event) => {
   if((flipCards.length<2)&&(flipCards[1] !=flipCards[0].title)){
   event.target.classList.add( `${event.target.id}`);
   flipCards.push(event.target);
   console.log(flipCards);
   if (flipCards.length % 2 == 0) {
      setTimeout(() => {
         if (flipCards[0].id == flipCards[1].id) {
            console.log("goooood");
            flipCards[1].classList.add("hide")
            flipCards[0].classList.add("hide")
         }
         else {
            console.log("bazzzzzz");
            flipCards[0].classList.remove(`show`, `${flipCards[0].id}`)
            flipCards[1].classList.remove(`show`, `${flipCards[1].id}`)
         }
         flipCards = []
      }, (2 * 1000));
   }
}
}
let title = 0
let elem;
let board = document.getElementById("game-table");
for (i of a) {
   let elem = document.createElement("div");
   elem.id = i
   elem.title = ++title;
   elem.className = `card`;
   elem.onclick = chooseCard;
   board.appendChild(elem)
}
// debugger
// const button = document.getElementById("button");
// button.onclick = hideCard;
// function hideCard(e){
// if (flipCards.length % 2 == 0) {
//    if (flipCards[0] == flipCards[1]) {
//       console.log("goooood");

//    }
//    else {
//       console.log("bazzzzzz");
//       flipCards[1].classList.remove("show")
//       flipCards[0].classList.remove("show")
//    }
//    return flipCards = []
// }
// }
