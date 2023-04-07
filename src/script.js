const images = [ '../images/bobrossparrot.gif', 
'../images/explodyparrot.gif',
'../images/fiestaparrot.gif',
'../images/metalparrot.gif',
'../images/revertitparrot.gif',
'../images/tirpletsparrot.gif',
'../images/unicornparrot.gif' ];

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
    alert(cardImages);
}

function randomShuffle() { 
	return Math.random() - 0.5; 
}