const images = [ './src/img/bobrossparrot.gif', 
'./src/img/explodyparrot.gif',
'./src/img/fiestaparrot.gif',
'./src/img/metalparrot.gif',
'./src/img/revertitparrot.gif',
'./src/img/tripletsparrot.gif',
'./src/img/unicornparrot.gif' ];

let cardImages = [];
let numberCards = 0;

startGame();

function startGame() {
    numberCards = 0;
    while (numberCards < 4 || numberCards > 14 || numberCards % 2 === 1) {
        numberCards = prompt('Com quantas cartas quer jogar? Escolha um número par entre 4 e 14');
    }
    shuffleImages();
}

function shuffleImages() {
    let handleImages = images.sort(randomShuffle);
    handleImages = handleImages.splice(0, numberCards/2);
    handleImages = handleImages.concat(handleImages);
    cardImages = handleImages.sort(randomShuffle);
    renderCards();
}

function randomShuffle() { 
	return Math.random() - 0.5; 
}

function renderCards() {
    const cardsList = document.querySelector('.cards-container');
    cardsList.innerHTML = '';
    for (let i = 0; i < cardImages.length; i++) {
        cardsList.innerHTML += `<li class="card"><img class="back-face" src="./src/img/back.png" alt="back of the card">` +
        `<img class="front-face" src="${cardImages[i]}" alt="front of the card"></li>`;
    }
}