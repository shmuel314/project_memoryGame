function createCards(English, Hebrew, Id) {// יצירת קלף כאובייקט
    return {
        English,
        Hebrew,
        Id,
    }
}

let objCards = [//מערך קלפים 
    createCards("Renowned", "מפורסם", "A"),
    createCards("Replica", "העתק", "B"),
    createCards("Reliable", "אמין", "C"),
    createCards("Movement", "תנועה", "D"),
    createCards("Mortgage", "משכנתא", "E"),
    createCards("Muffled", "מעומעם", "F"),
    createCards("Label", "תווית", "G"),
    createCards("Labor", "עבודה", "H"),
    createCards("Implement", "ליישם", "I"),
    createCards("Overload", "עומס יתר", "J"),
    createCards("Misuse", "שימוש לרעה", "K"),
    createCards("Customer", "צַרְכָן", "L"),
    createCards("Footer", "כותרת תחתונה", "M"),
    createCards("Access", "גִישָׁה", "N"),
    createCards("Exercise", "תרגיל", "O"),
    createCards("Demonstration", "הפגנה", "P"),
    createCards("Fade", "לִדעוֹך", "Q"),
    createCards("Import", "יְבוּא", "R"),
    createCards("Path", "נָתִיב", "S"),
    createCards("Salary", "שָׂכָר", "T"),
    createCards("Vertical", "אֲנָכִי", "U"),
    createCards("Template", "תַּבְנִית", "V"),
    createCards("Consists", "מורכב מ, מכיל", "W"),
    createCards("Gutter", "מַרְזֵב", "X"),
    createCards("Collapse", "הִתְמוֹטֵט", "Y"),
    createCards("Average", "ממוצע", "Z"),

]

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

// let num = Number(prompt(`If you want 12 cards, choose: 1. \nIf you want 16 cards, choose: 2.
// If you want 20 cards, choose: 3. \nIf you want 24 cards, choose: 4.`));
// switch(num){
//     case 1:
//         num = 6
//         break;
//     case 2:
//         num = 8
//         break;
//     case 3:
//         num = 10
//         break;
//     case 4:
//         num = 12
//         break;
// }

let sliceArrCards = [];
function numberOfCards() {//חיתוך כמות קלפים מהמערך
    shuffle(objCards);
    let x =Math.floor(Math.random() * 10)
  sliceArrCards = objCards.slice(x, x+ 10)
    return sliceArrCards
}
numberOfCards();

    function createDivCards(arr) {//יצירת קלף על המסך
        shuffle(arr);
        console.log(arr);
        let shuffleCards = [];
        let arrCards = [];
        let boardGame = document.getElementById("game-table");
        for (i of arr) {
            elem = document.createElement("div");
            elem1 = document.createElement("div");
            elem.innerText = `${i.English}`;
            elem1.innerText = `${i.Hebrew}`;
            elem.id = `${i.Id}`;
            elem1.id = `${i.Id}`;
            elem.className = `card`;
            elem1.className = `card`;
            elem.onclick = chooseCard;
            elem1.onclick = chooseCard;
            arrCards.push(elem, elem1);
        }
        shuffleCards = shuffle(arrCards);
        for (i of shuffleCards) {
            boardGame.appendChild(i);
        }
    }
    createDivCards(sliceArrCards);



    function chooseCard(event) {//לחיצה על קלף
        let sadAudio = document.getElementById("sadAudio")
        let happyAudio = document.getElementById("happyAudio")
        if ((flipCards.length < 2)) {
            event.target.classList.add("show");
            flipCards.push(event.target);
            if (flipCards.length == 2) {
                if (flipCards[0].innerText == flipCards[1].innerText) {
                    flipCards.splice(1, 1)
                }
            }
            if (flipCards.length == 2) {
                setTimeout(() => {
                    if (flipCards[0].id == flipCards[1].id) {
                        console.log("goooood");
                        flipCards[1].classList.add("hide")
                        flipCards[0].classList.add("hide");
                        playersArr[count].score++
                        divArr[count].innerText = `${playersArr[count].name1}:  ${playersArr[count].score}`;
                        happyAudio.play();
                        wordTrns[event.target.id].classList.add("success")
                      

                    }
                    else {
                        console.log("bazzzzzz");
                        flipCards[0].classList.remove(`show`);
                        flipCards[1].classList.remove(`show`);
                        divArr[count].classList.remove("playNow")
                        count++
                        sadAudio.play()

                        if (count == playersArr.length) {
                            count = 0;
                        }
                        divArr[count].classList.add("playNow")
                    }
                    flipCards = []
                }, (1 * 1000));
            }
        }
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

    function flexArr() {//יצירת שחקנים וניקוד גמישים
        for (let index = 1; index <= count; index++) {//יצירת מערכים גמישים שחקן ודיב 
            // name1 = prompt("enter your name");
            name1 = "shmuel"
            let player = creatPlayers(name1, score)
            playersArr.push(player);
            creatDivScore();
        }
    }
let wordTrns = []; 
    function wordList() {
        divWordList = document.getElementById("div-words-list");
        for (i of sliceArrCards) {
            word = document.createElement("p");
            word.className = "words"
            word.id = i.Id;
            word.innerText = `${i.English} : ${i.Hebrew}`;
            wordTrns[i.Id]=word
            divWordList.appendChild(word);
            console.log(word);
        }
    }
    wordList(objCards);

    let flipCards = [];
    let count = 3
    let score = 0
    let playersArr = [];
    let divArr = [];
    flexArr();
    count = 0

