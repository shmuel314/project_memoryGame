let screen = document.getElementById("screen");//מסך משחק
screen.style.display = "none";//מוסתר בינתיים של יפריע בעיצוב
let cadrScreen = document.getElementById("window");
let openScreen = document.getElementById("openScreen");//מסך פתיחה כמות קלפים
let playerScreen = document.getElementById("playerScreen");//מסך שני בחירת כמות שחקנים
finishHeader = document.getElementById("header");

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
    choosNumberCard = event.target.id//שומר את כמות הקלפים שנבחרה.
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
        divBtnPlayer.append(btnPlayer);
        openScreen.style.display = "none"

    }
}
let divInput;
function inputName(event) {//מסך שמות ומעבר למשחק
    inputArr.push(event.target)
    if (inputArr.length > 1) {//מוחק שהאינפוטים לא יוכפלו בכל בחירה אלא תתחלף הכמות לפי הבחירה האחרונה
        // debugger
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
    choosePlayersCard = event.target.id;//שומר את כמות השחקנים שנבחרה לפי הID של הכפתור שנבחר
    let btnSubmit = document.createElement("BUTTON");
    btnSubmit.innerText = "submit";
    btnSubmit.className = "btnSubmit";
    divInput.appendChild(btnSubmit);
    btnSubmit.onclick = memory_game;
}




function memory_game() {
    screen.style.display = "grid";
    cadrScreen.style.display = "none"

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
        for (i of arrCards) {
            i.classList.add("hide_restart");//מעלים את הקלפים כדי שיחזרו בריענון מעורבבים מחדש
        }
        createDivCards(sliceArrCards)//מחזיר את הקלפים מעורבבים
        for (i of reWord) {
            i.classList.remove("success");
        } for (i of playersArr) {
            i.score = 0
        }
        let x = 0
        for (i of divArr) {
            i.innerText = `${playersArr[x].name1}:  ${playersArr[x].score}`;
            x++
        }
        finishHeader.innerText = "Memory card Game";
        finishHeader.style.background = "transparent"
        allFlipCards = [];
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
        shuffle(objCards);//ערבוב לפני חיתוך מוודא שכל פעם יחתוך קלפים אחרים
        let x = Math.floor(Math.random() * 10)
        sliceArrCards = objCards.slice(x, x + choosNumberCard / 2)
        return sliceArrCards
    }
    numberOfCards();


    let arrCards = [];
    function createDivCards(arr) {//יצירת קלף על המסך
        let boardGame = document.getElementById("game-table");
        shuffle(arr);
        let shuffleCards = [];
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
        console.log(event.target);
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
                        flipCards[1].classList.add("hide")
                        flipCards[0].classList.add("hide");
                        playersArr[count].score++
                        divArr[count].innerText = `${playersArr[count].name1}:  ${playersArr[count].score}`;
                        happyAudio.play();
                        wordTrns[event.target.id].classList.add("success");
                        reWord.push(wordTrns[event.target.id]);//מערך של המילים בצד לאיתחול משחק
                        allFlipCards.push(flipCards[0], flipCards[1]);//בדיקה למסך סיום
                        if (allFlipCards.length == choosNumberCard) {
                            winScreen()
                        }
                    }
                    else {
                        flipCards[0].classList.remove("show");
                        flipCards[1].classList.remove("show");
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
        let divPlayer = document.createElement("div")
        divPlayer.className = "divs";
        divPlayer.innerText = `${name1}: 0`
        boardDiv.appendChild(divPlayer);
        divArr.push(divPlayer);
        divArr[0].classList.add("playNow")
    }

    function flexArr() {//יצירת שחקנים וניקוד גמישים
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
    function wordList() {//בניית רשימת מילים בצד
        divWordList = document.getElementById("div-words-list");
        for (i of sliceArrCards) {
            word = document.createElement("p");
            word.className = "words"
            word.id = i.Id;
            word.innerText = `${i.English} : ${i.Hebrew}`;
            wordTrns[i.Id] = word
            divWordList.appendChild(word);
        }
    }
    wordList(objCards);

    let reWord = [];//מערך לאיפוס דיב מילים
    let allFlipCards = [];//מערך לאיפוס קלפים
    let flipCards = [];//מערך לחיצה על קלף
    let count = choosePlayersCard
    let score = 0;
    let playersArr = [];
    let divArr = [];
    flexArr();
    count = 0

    function createBtnNewGame() {
        divBtnGame = document.createElement("div");
        divBtnGame.className = "divBtnGame";
        screen.appendChild(divBtnGame);
        btnGame = document.createElement("BUTTON");
        btnGame.className = "btnGame";
        btnGame.innerText = "New game";
        btnGame.onclick = newGame;
        divBtnGame.appendChild(btnGame);
    }
    createBtnNewGame();

    function createBtnRestartGame() {
        divBtnRestartGame = document.createElement("div");
        divBtnRestartGame.className = "divBtnRestartGame";
        divBtnGame.appendChild(divBtnRestartGame);
        btnRestartGame = document.createElement("BUTTON");
        btnRestartGame.className = "btnRestartGame";
        btnRestartGame.innerText = "Restart game";
        btnRestartGame.onclick = restartGame;
        divBtnRestartGame.appendChild(btnRestartGame);
    }
    createBtnRestartGame();
    function winScreen() {
        let check = 0;
        let win = playersArr[0].name1;
        if (playersArr.length == 1) {
            finishHeader.innerText = `You won! 👑`
            finishHeader.style.background = "cadetblue"
        }
        else {
            for (i of playersArr) {
                if (i.score > check) {
                    check = i.score
                    win = i.name1;
                    finishHeader.innerText = `The winner is: ${win} 👑`
                    finishHeader.style.background = "cadetblue"
                }
                else if (i.score == check) {
                    finishHeader.innerText = "Tie 🙄";
                    finishHeader.style.background = "cadetblue"
                }
            }
        }
    }
}

