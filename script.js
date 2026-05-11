// LP用の最小JS: CTAクリック時に将来的な計測を差し込みやすくするためのフック
// 画像未配置でも問題なく動作する静的構成。
(function () {
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

  ctaButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.dataset.clickedAt = new Date().toISOString();
    });
  });
})();
