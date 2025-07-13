document.addEventListener('DOMContentLoaded', () => {
  const giftGrid = document.querySelector('.gift-grid');
  const modal = document.getElementById('modal');
  const surpriseImg = document.getElementById('surpriseImg');
  const sound = document.getElementById('sound');
  const closeBtn = document.getElementById('closeBtn');

  for (let i = 1; i <= 24; i++) {
    const box = document.createElement('div');
    box.classList.add('gift-box');

   box.innerHTML = `
  <img src="img/caja.png" alt="Caja ${i}" class="box-img" />
  <div class="box-number">${i}</div>
`;


    box.addEventListener('click', () => {
      box.classList.add('opened');
      surpriseImg.src = `img/sorpresa${i}.png`;
      modal.style.display = 'flex';
      sound.currentTime = 0;
      sound.play();
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    });

    giftGrid.appendChild(box);
  }

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-content')) {
      modal.style.display = 'none';
    }
  });
});
