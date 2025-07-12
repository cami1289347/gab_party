document.querySelectorAll('.gift-box').forEach(box => {
  box.addEventListener('click', () => {
    if (!box.classList.contains('open')) {
      box.classList.add('open');
      document.getElementById('sound').play();
    }
  });
});
