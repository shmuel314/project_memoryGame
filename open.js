// debugger
let screen = document.getElementById("screen");
screen.style.display = "none";
let cadrScreen = document.getElementById("window");
let openScreen = document.getElementById("openScreen");
let playerScreen = document.getElementById("playerScreen");
numberCard();

function numberCard() {//מסך בחירת קלפים ומעבר למסך שחקנים
    for (j = 12; j < 25; j += 4) {
        let divBtnCards = document.createElement("div");
        divBtnCards.className = "divBtnCards";
        openScreen.appendChild(divBtnCards);
        let btnCards = document.createElement("button");
        btnCards.innerText = `Play with ${j} cards`;
        btnCards.id = j;
        btnCards.className = "btnCards";
        btnCards.addEventListener("click", players);
        divBtnCards.append(btnCards);
    }
}
let inputArr = [];
function players(event) {//מסך שחקנים ומעבר למסך שמות
    // debugger
    noc = event.target.id
    for (r = 1; r < 5; r++) {
        let divBtnPlayer = document.createElement("div");
        divBtnPlayer.className = "divBtnPlayer";
        playerScreen.append(divBtnPlayer);
        let btnPlayer = document.createElement("button");
        if (r == 1) {
            btnPlayer.innerText = `${r} player`;
        }
        else {
            btnPlayer.innerText = `${r} players`;
        }
        btnPlayer.id = r;
        btnPlayer.className = "btnPlayer";
        btnPlayer.addEventListener("click", inputName);
        ;
        divBtnPlayer.append(btnPlayer);
        openScreen.style.display = "none"

    }
}

function inputName(event) {//מסך שמות ומעבר למשחק
    // debugger
    inputArr.push(event.target)
    console.log(inputArr);

    if (inputArr.length > 1) {
        divInput.remove();
    }
    divInput = document.createElement("div");
    divInput.className = "divInput";
    cadrScreen.appendChild(divInput);
    for (n = 1; n <= event.target.id; n++) {
        input = document.createElement("INPUT");
        input.id = n;
        input.className = "inputs";
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Enter player's name");
        inputArr[n] = input;
        divInput.appendChild(input);
    }

    nop = event.target.id;
    let btnSubmit = document.createElement("BUTTON");
    btnSubmit.innerText = "submit";
    btnSubmit.className = "btnSubmit";
    divInput.appendChild(btnSubmit);
    btnSubmit.onclick = memory_game;
    //  playerScreen.style.display = "none"
}




function memory_game(event) {
    // debugger
    cadrScreen.style.display = "none"
    screen.style.display = "grid";
    // let header = document.createElement("div");
    // header.className = "header";
    // header.innerText = "Memory-card Game";

    function createCards(English, Hebrew, Id) {// יצירת קלף כאובייקט
        return {
            English,
            Hebrew,
            Id,
        }
    }

    function newGame() {//כפתור משחק חדש
        location.reload();
    }

    function restartGame() {//כפתור ריענון משחק נוכחי
        for (i of allFlipCards) {
            i.classList.remove("hide", "show");
        }
        for (i of reWord) {
            i.classList.remove("success");
        }for(i of playersArr){
            i.score = 0
        }
        for(i of divArr){
            i.innerText = `${playersArr[count].name1}:  ${playersArr[count].score}`;
        }
        // shuffle(sliceArrCards);
        // createDivCards(sliceArrCards);
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


    let sliceArrCards = [];
    function numberOfCards() {//חיתוך כמות קלפים מהמערך
        shuffle(objCards);
        let x = Math.floor(Math.random() * 10)
        // debugger
        sliceArrCards = objCards.slice(x, x + noc / 2)
        return sliceArrCards
    }
    numberOfCards();

    function createDivCards(arr) {//יצירת קלף על המסך
        shuffle(arr);
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
                        wordTrns[event.target.id].classList.add("success");

                        reWord.push(wordTrns[event.target.id]);
                        allFlipCards.push(flipCards[0], flipCards[1]);
                        console.log(allFlipCards);
                        console.log(noc);
                        // debugger
                        screenOfFinish();


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

    let boardDiv = document.getElementById("div-table")
    function creatDivScore() {//יצירת דיב לשחקן
        // debugger
        let divPlayer = document.createElement("div")
        divPlayer.className = "divs";
        divPlayer.innerText = `${name1}: 0`
        boardDiv.appendChild(divPlayer);
        divArr.push(divPlayer);
        divArr[0].classList.add("playNow")
    }

    function flexArr() {//יצירת שחקנים וניקוד גמישים
        // debugger
        n = 1;
        for (let index = 1; index <= count; index++) {//יצירת מערכים גמישים שחקן ודיב 
            name1 = inputArr[n].value;
            n++
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
            wordTrns[i.Id] = word
            divWordList.appendChild(word);
            console.log(word);
        }
    }
    wordList(objCards);
    let reWord = [];//מערך לאיפוס דיב מילים
    let allFlipCards = [];//מערך לאיפוס קלפים
    let flipCards = [];
    let count = nop
    let score = 0;
    let playersArr = [];
    let divArr = [];
    flexArr();
    count = 0
    // debugger
    divBtnGame = document.createElement("div");
    divBtnGame.className = "divBtnGame";
    screen.appendChild(divBtnGame);
    btnGame = document.createElement("BUTTON");
    btnGame.className = "btnGame";
    btnGame.innerText = "New game";
    btnGame.onclick = newGame;
    divBtnGame.appendChild(btnGame);

    divBtnStartGame = document.createElement("div");
    divBtnStartGame.className = "divBtnStartGame";
    divBtnGame.appendChild(divBtnStartGame);
    btnStartGame = document.createElement("BUTTON");
    btnStartGame.className = "btnStartGame";
    btnStartGame.innerText = "Restart game";
    btnStartGame.onclick = restartGame;
    divBtnStartGame.appendChild(btnStartGame);

    function screenOfFinish(){
    if(allFlipCards.length==noc){
        screen.style.display = "none";
        finishScreen = document.getElementById("finishScreen");
        cong = document.createElement("p");
        cong.className="cong";
        cong.innerText = "Congratulations!!!!"
        finishScreen.appendChild(cong);
    }
    }
}







// function asd (){
//     alert("fgdfx");
//     for (i=0;i<12;i++) {
//         elem = document.createElement("div");
//         elem.innerText = `${i} card`;
//         elem.id = i;
//         elem.className = `card`;
//         // elem.onclick = chooseCard;
//         cadrScreen.append(elem);
//     }
// openScreen.style.display = "none"
//     // let header = document.getElementById("header");
//     // header.style.backgroundColor = 'blue';
// }
// // let btn12 = document.getElementById("12 cards");
// // let btn16 = document.getElementById("16 cards");
// // let btn20 = document.getElementById("20 cards");
// // let btn24 = document.getElementById("24 cards");



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