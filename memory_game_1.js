
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

function creatPlayers(name1, score) {//יצירת שחקן במערך
   return {
      name1,
      score,
   }
}

function creatDivScore() {//יצירת דיב לשחקן
   let boardDiv = document.getElementById("div-table")
   let divPlayer = document.createElement("div")
   divPlayer.className = "divs";
   divPlayer.innerText = `${name1}: 0`
   boardDiv.appendChild(divPlayer);
   divArr.push(divPlayer);
   divArr[0].classList.add("playNow")
}

function flexArr() {
   for (let index = 1; index <= count; index++) {//יצירת מערכים גמישים שחקן ודיב 
      name1 = prompt("enter your name");
      let player = creatPlayers(name1, score)
      playersArr.push(player);
      creatDivScore();


   }
}


function chooseCard(event) {
   let x = document.getElementById("myAudio")
   let happyAudio = document.getElementById("happyAudio")
   if ((flipCards.length < 2)) {
      flipCards.push(event.target);
      if (flipCards.length == 2) {
         if (flipCards[0].title == flipCards[1].title) {
            flipCards.splice(1, 1)
         }
      }
      console.log(flipCards);
      event.target.classList.add(`${event.target.id}`);
      if (flipCards.length % 2 == 0) {
         setTimeout(() => {
            if (flipCards[0].id == flipCards[1].id) {
               console.log("goooood");
               flipCards[1].classList.add("hide")
               flipCards[0].classList.add("hide");
               //  debugger
               playersArr[count].score++
               divArr[count].innerText = `${playersArr[count].name1}: \n ${playersArr[count].score}`;
               happyAudio.play()

            }
            else {

               console.log("bazzzzzz");
               flipCards[0].classList.remove(`show`, `${flipCards[0].id}`);
               flipCards[1].classList.remove(`show`, `${flipCards[1].id}`);
               divArr[count].classList.remove("playNow")
               count++
               x.play()

               if (count == playersArr.length) {
                  count = 0;
               }
               divArr[count].classList.add("playNow")



            }
            flipCards = []
         }, (2 * 1000));
      }
   }
}
function createCards() {
   for (i of a) {
      elem = document.createElement("div");
      elem.id = (i + 10).toString(36)
      console.log(elem.id);
      elem.title = ++title;
      elem.className = `card`;
      elem.onclick = chooseCard;
      boardGame.appendChild(elem)
   }
}
let numberOfCarda = prompt("choose how many cards you want")
let cards = [];
let doubleCards = [];
for (i = 0; i < (numberOfCarda / 2); i++) {
   cards.push(i);
   doubleCards = cards.concat(cards);
}
console.log(doubleCards);

// let cards = ["A", "B", "C", "D", "E", "F"];//מערך הקלפים

let boardGame = document.getElementById("game-table");
let divArr = [];
let playersArr = [];
let divPlayer;

let name1 = "";//שם השחקן
let count = prompt("choose number of players");//מספר שחקנים ומעביר תור
let score = 0;//ניקוד שחקן
let flipCards = [];//מערך קלפים שנלחצו
let title = 37
let elem;
// debugger
flexArr();
count = 0

let a = shuffle(doubleCards)
createCards();


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

// let plr1 = document.getElementById("plr1");
// let plr2 = document.getElementById("plr2");
// let plr3 = document.getElementById("plr3");
// let plr4 = document.getElementById("plr4");
// divArr.push(plr1, plr2, plr3, plr4);
// divArr[0].innerText = `${playersArr[0].name}:\n ${playersArr[0].score}`;
// divArr[1].innerText = `${playersArr[1].name}:\n ${playersArr[1].score}`;
// divArr[2].innerText = `${playersArr[2].name}:\n ${playersArr[2].score}`;
// divArr[3].innerText = `${playersArr[3].name}:\n ${playersArr[3].score}`;
