'use strict';
(() => {
  const loader = document.getElementById('siteLoader');
  const bar = document.getElementById('loaderProgress');
  const percent = document.getElementById('loaderPercent');
  const brand = document.getElementById('loaderBrand');
  const logo = loader.querySelector('.loader-logo');
  const product = loader.querySelector('.loader-product');
  if (!loader || !bar || !percent) return;

  const supported = ['ar', 'fr', 'en', 'es'];
  let language = navigator.language?.slice(0, 2).toLowerCase() || 'ar';
  try { language = localStorage.getItem('raunaqLang') || language; } catch {}
  if (!supported.includes(language)) language = 'ar';
  brand.textContent = language === 'ar' ? 'رونق' : 'RAUNAQ';
  loader.dir = language === 'ar' ? 'rtl' : 'ltr';

  logo?.addEventListener('error', () => logo.classList.add('asset-error'), { once: true });
  product?.addEventListener('error', () => loader.classList.add('product-error'), { once: true });

  const startedAt = performance.now();
  let progress = 0;
  let ready = document.readyState === 'complete';
  let finished = false;

  function paint(value) {
    progress = Math.min(100, Math.max(progress, Math.round(value)));
    bar.style.transform = `scaleX(${progress / 100})`;
    percent.value = `${progress}%`;
  }

  function finish() {
    if (finished) return;
    finished = true;
    paint(100);
    const minimumDisplay = Math.max(0, 850 - (performance.now() - startedAt));
    setTimeout(() => {
      document.body.classList.remove('is-loading');
      document.body.classList.add('site-ready');
      loader.classList.add('loader-exit');
      setTimeout(() => loader.remove(), 750);
    }, minimumDisplay + 180);
  }

  const timer = setInterval(() => {
    if (ready) {
      paint(progress + Math.max(4, (100 - progress) * 0.28));
      if (progress >= 98) { clearInterval(timer); finish(); }
      return;
    }
    const ceiling = progress < 55 ? 72 : 90;
    paint(progress + Math.max(1, (ceiling - progress) * 0.08));
  }, 90);

  window.addEventListener('load', () => { ready = true; }, { once: true });
  window.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement) event.target.classList.add('asset-error');
  }, true);
  setTimeout(() => { ready = true; }, 7000);
})();