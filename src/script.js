let pointsNeeded = 0;
let turns = 0;
let points = 0;
let firstCard = null;
let secondCard = null;
let time = 0;
let intervalId = 0;

startGame();

function startGame() {
  pointsNeeded = 0;
  turns = 0;
  points = 0;
  let numberCards = 0;

  while (numberCards < 4 || numberCards > 14 || numberCards % 2 === 1)
    numberCards = prompt(
      "Com quantas cartas quer jogar? Escolha um número par entre 4 e 14"
    );
  shuffleImages(numberCards);

  pointsNeeded = numberCards / 2;
}

function shuffleImages(num) {
  const images = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif",
  ];

  let handleImages = images.sort(randomShuffle);
  handleImages = handleImages.splice(0, num / 2);
  handleImages = handleImages.concat(handleImages);

  const cardImages = handleImages.sort(randomShuffle);
  renderCards(cardImages);
}

function randomShuffle() {
  return Math.random() - 0.5;
}

function renderCards(cardImages) {
  const cardsList = document.querySelector(".cards-container");
  cardsList.innerHTML = "";

  for (let i = 0; i < cardImages.length; i++) {
    cardsList.innerHTML += `
        <li data-test="card" class="card" onclick="manageGame(this)">
            <img data-test="face-down-image" class="back-face" src="./src/img/back.png" alt="back of the card">
            <img data-test="face-up-image" class="front-face" src="./src/img/${cardImages[i]}" alt="front of the card">
        </li>
        `;
  }

  time = 0;
  intervalId = setInterval(stopwatch, 1000);
}

function stopwatch() {
  time++;
  document.querySelector("h2").innerHTML = time;
}

function flipCard(card) {
  card.classList.toggle("flip");
}

function manageGame(card) {
  if (points === pointsNeeded) return;

  if (firstCard != null && secondCard != null) return;
  else if (firstCard === null) {
    flipCard(card);
    firstCard = card;
    turns++;
    return;
  } else if (firstCard === card) return;

  flipCard(card);
  secondCard = card;
  turns++;
  setTimeout(compareCards, 1000);
}

function compareCards() {
  if (firstCard.innerHTML === secondCard.innerHTML) {
    firstCard = null;
    secondCard = null;
    managePoints();
    return;
  }

  flipCard(firstCard);
  flipCard(secondCard);
  firstCard = null;
  secondCard = null;
}

function managePoints() {
  points++;

  if (points === pointsNeeded) {
    clearInterval(intervalId);
    alert(
      `Você ganhou em ${turns} jogadas! A duração do jogo foi de ${time} segundos!`
    );
    restartGame();
  }
}

function restartGame() {
  let reboot = "";

  while (reboot != "sim" && reboot != "não")
    reboot = prompt("Você gostaria de reiniciar a partida? (sim ou não)");

  if (reboot === "sim") startGame();
}