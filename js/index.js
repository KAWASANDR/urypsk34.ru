const cardsContainer = document.querySelector('.cards-container');
const numCards = 10;
const frontImage = 'img/front.jpg';

const backImages = [];
for (let i = 0; i < numCards; i++) {
  backImages.push(`img/back${i + 1}.jpg`);
}

function createCard(backImage) {
  const card = document.createElement('div');
  card.classList.add('card');
  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');

  const cardFront = document.createElement('div');
  cardFront.classList.add('card-face', 'card-front');
  const frontImg = document.createElement('img');
  frontImg.src = frontImage;
  cardFront.appendChild(frontImg);

  const cardBack = document.createElement('div');
  cardBack.classList.add('card-face', 'card-back');
  const backImg = document.createElement('img');
  backImg.src = backImage;
  cardBack.appendChild(backImg);

  cardInner.appendChild(cardFront);  // Порядок важен!
  cardInner.appendChild(cardBack);  // Порядок важен!
  card.appendChild(cardInner);
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  return card;
}

for (let i = 0; i < numCards; i++) {
  cardsContainer.appendChild(createCard(backImages[i]));
}