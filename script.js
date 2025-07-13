const giftGrid = document.querySelector('.gift-grid');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeModal');

// Generar cajas
for (let i = 1; i <= 24; i++) {
  const box = document.createElement('div');
  box.classList.add('gift-box');
  box.innerText = i;
  box.dataset.index = i;

  box.addEventListener('click', () => {
    box.classList.add('opened');
    showModal(i);
  });

  giftGrid.appendChild(box);
}

// Mostrar modal
function showModal(index) {
  modalImage.src = `img/sorpresa${index}.png`;
  modal.style.display = 'flex';

  // Reiniciar animación de la tapa
  const lid = document.getElementById('modalLid');
  lid.style.animation = 'none';
  lid.offsetHeight; // forzar reflow
  lid.style.animation = 'flyUp 1s forwards';
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});


document.querySelectorAll('.gift-box').forEach(box => {
  box.addEventListener('click', () => {
    if (!box.classList.contains('open')) {
      box.classList.add('open');
      document.getElementById('sound').play();
    }
  });
});
