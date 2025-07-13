const giftGrid = document.getElementById('giftGrid');
const modal = document.getElementById('modal');
const surpriseImg = document.getElementById('surpriseImg');
const closeBtn = document.getElementById('closeBtn');
const sound = document.getElementById('sound');

for (let i = 1; i <= 24; i++) {
  const box = document.createElement('div');
  box.classList.add('gift-box');
  box.innerHTML = `
    <div class="ribbon-horizontal"></div>
    <div class="ribbon-vertical"></div>
    <div class="bow"></div>
    <div class="box-number">${i}</div>
  `;

  box.addEventListener('click', () => {
    box.classList.add('opened');
    surpriseImg.src = `img/sorpresa${i}.png`;
    modal.style.display = 'flex';
    sound.currentTime = 0;
    sound.play();
    confetti({ particleCount: 100, spread: 60, origin: { y: 0.6 } });
  });

  giftGrid.appendChild(box);

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

