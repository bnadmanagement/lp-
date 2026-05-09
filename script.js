// LP用の最小JS: CTAクリック時に将来的な計測を差し込みやすくするためのフック
(function () {
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

  ctaButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.dataset.clickedAt = new Date().toISOString();
    });
  });
})();
