const giftGrid = document.querySelector('.gift-grid');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeModal');
const sound = document.getElementById('sound');

// Generar cajas con evento
for (let i = 1; i <= 24; i++) {
  const box = document.createElement('div');
  box.classList.add('gift-box');
  box.innerText = i;
  box.dataset.index = i;

  box.addEventListener('click', () => {
    box.classList.add('opened');
    showModal(i);
    sound.currentTime = 0; // Reinicia sonido si se repite
    sound.play();
  });

  giftGrid.appendChild(box);
}

// Mostrar modal
function showModal(index) {
  modalImage.src = `img/sorpresa${index}.png`;
  modal.style.display = 'flex';

  const lid = document.getElementById('modalLid');
  lid.style.animation = 'none';
  lid.offsetHeight; // forzar reflow
  lid.style.animation = 'flyUp 1s forwards';
}

// Cerrar modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

