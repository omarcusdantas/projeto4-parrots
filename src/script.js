startGame();

function startGame() {
    let = numberCards = 0;
    while (numberCards < 4 || numberCards > 14 || numberCards % 2 === 1) {
        numberCards = prompt('Com quantas cartas quer jogar? Escolha um número par entre 4 e 14');
    }
    shuffleImages(numberCards);
}

function shuffleImages(num) {
    const images = [ 'bobrossparrot.gif', 
        'explodyparrot.gif',
        'fiestaparrot.gif',
        'metalparrot.gif',
        'revertitparrot.gif',
        'tripletsparrot.gif',
        'unicornparrot.gif' ];
    let handleImages = images.sort(randomShuffle);
    handleImages = handleImages.splice(0, num/2);
    handleImages = handleImages.concat(handleImages);
    const cardImages = handleImages.sort(randomShuffle);
    renderCards(cardImages);
}

function randomShuffle() { 
	return Math.random() - 0.5; 
}

function renderCards(cardImages) {
    const cardsList = document.querySelector('.cards-container');
    cardsList.innerHTML = '';
    for (let i = 0; i < cardImages.length; i++) {
        cardsList.innerHTML += `<li class="card" onclick="flipCard(this)"><img class="back-face" src="./src/img/back.png" alt="back of the card">` +
        `<img class="front-face" src="./src/img/${cardImages[i]}" alt="front of the card"></li>`;
    }
}

function flipCard(card) {
    card.classList.toggle('flip');
}