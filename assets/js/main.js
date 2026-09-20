/**
 * Aelton SM — Editorial Technical Portfolio
 * Immersive Componine Hero System, Preloader, Mechanical Rolling Text & Quick Actions
 */

// ========================================================================
// 1. MECHANICAL ROLLING TEXT GENERATOR (EXPOSED GLOBALLY)
// ========================================================================
function initRollingText() {
  const rollingTextElements = document.querySelectorAll('.rolling-text');

  rollingTextElements.forEach(el => {
    const rawText = el.getAttribute('data-rolling') || el.textContent.trim();
    if (!rawText) return;

    el.innerHTML = '';
    let charIndex = 0;

    for (let i = 0; i < rawText.length; i++) {
      const char = rawText[i];
      if (char === ' ') {
        const spaceSpan = document.createElement('span');
        spaceSpan.className = 'rolling-char-space';
        spaceSpan.innerHTML = '&nbsp;';
        el.appendChild(spaceSpan);
      } else {
        const wrapper = document.createElement('span');
        wrapper.className = 'rolling-char-wrapper';
        wrapper.style.setProperty('--char-index', charIndex);

        const inner = document.createElement('span');
        inner.className = 'rolling-char-inner';

        const topChar = document.createElement('span');
        topChar.className = 'rolling-char-top';
        topChar.textContent = char;

        const bottomChar = document.createElement('span');
        bottomChar.className = 'rolling-char-bottom';
        bottomChar.setAttribute('aria-hidden', 'true');
        bottomChar.textContent = char;

        inner.appendChild(topChar);
        inner.appendChild(bottomChar);
        wrapper.appendChild(inner);
        el.appendChild(wrapper);

        charIndex++;
      }
    }
  });
}

window.initRollingText = initRollingText;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize rolling text
  initRollingText();

  // ========================================================================
  // 2. KINETIC PRELOADER (WORDS CYCLING & 16-PANEL CURTAIN RETRACT)
  // ========================================================================
  const preloader = document.getElementById('preloader');
  const percentEl = document.getElementById('loading-percent');
  const wordEls = document.querySelectorAll('.loading-word');
  const slices = document.querySelectorAll('.loading-panel-slice');

  // Stagger slice transitions so they slide up like curtain folds
  slices.forEach((slice, idx) => {
    slice.style.transitionDelay = `${idx * 24}ms`;
  });

  if (preloader && percentEl) {
    let currentPercent = 0;
    const duration = 1800; // ms
    const startTime = performance.now();
    let currentWordIdx = 0;

    function updatePreloader(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      currentPercent = Math.floor(progress * 100);
      percentEl.textContent = `${currentPercent}%`;

      // Cycle words at 0%, 25%, 50%, 75%
      let targetWordIdx = 0;
      if (currentPercent >= 75) targetWordIdx = 3;
      else if (currentPercent >= 50) targetWordIdx = 2;
      else if (currentPercent >= 25) targetWordIdx = 1;

      if (targetWordIdx !== currentWordIdx) {
        if (wordEls[currentWordIdx]) {
          wordEls[currentWordIdx].classList.remove('active');
          wordEls[currentWordIdx].classList.add('exit');
        }
        currentWordIdx = targetWordIdx;
        if (wordEls[currentWordIdx]) {
          wordEls[currentWordIdx].classList.remove('exit');
          wordEls[currentWordIdx].classList.add('active');
        }
      }

      if (progress < 1) {
        requestAnimationFrame(updatePreloader);
      } else {
        // Complete! Trigger curtain reveal
        setTimeout(() => {
          preloader.classList.add('hide-panels');
          const totalRetractTime = slices.length * 24 + 850;
          setTimeout(() => {
            preloader.classList.add('completed');
            preloader.style.display = 'none';
          }, totalRetractTime);
        }, 200);
      }
    }

    requestAnimationFrame(updatePreloader);
  }

  // ========================================================================
  // 3. SUBTLE MOUSE PARALLAX ON HERO FRESCO ARTWORK
  // ========================================================================
  const heroSection = document.getElementById('hero');
  const heroGod = document.getElementById('hero-god');
  const heroClient = document.getElementById('hero-client');
  const heroArtworkStage = document.getElementById('hero-artwork-stage');

  if (heroSection && window.innerWidth > 1024) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = normX * 24;
      mouseY = normY * 16;
    });

    heroSection.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });

    function renderParallax() {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (heroGod) {
        heroGod.style.transform = `translate3d(${currentX * -0.9}px, ${currentY * -0.9}px, 0)`;
      }
      if (heroClient) {
        heroClient.style.transform = `translate3d(${currentX * 1.1}px, ${currentY * 1.1}px, 0)`;
      }
      if (heroArtworkStage) {
        heroArtworkStage.style.transform = `translateX(-50%) translate3d(${currentX * 0.3}px, ${currentY * 0.3}px, 0)`;
      }

      requestAnimationFrame(renderParallax);
    }

    requestAnimationFrame(renderParallax);
  }

  // ========================================================================
  // 4. SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========================================================================
  // 5. INTERACTIVE DISCIPLINE LIST IN "THE WORK" SECTION
  // ========================================================================
  const disciplineItems = document.querySelectorAll('.discipline-item');
  const previewImage = document.getElementById('discipline-preview-img');

  const previews = {
    '01': 'assets/images/projects/case-01-pipeline.svg',
    '02': 'assets/images/projects/case-02-statistical.svg',
    '03': 'assets/images/projects/flagship-warehouse.svg',
    '04': 'assets/images/hero/hero-architectural.svg'
  };

  function activateDiscipline(item) {
    const num = item.getAttribute('data-num');
    if (previews[num] && previewImage) {
      previewImage.style.opacity = '0.4';
      setTimeout(() => {
        previewImage.src = previews[num];
        previewImage.style.opacity = '1';
      }, 150);
    }
    disciplineItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  }

  disciplineItems.forEach(item => {
    item.addEventListener('mouseenter', () => activateDiscipline(item));
    item.addEventListener('click', () => activateDiscipline(item));
  });

  // ========================================================================
  // 6. QUICK ACTIONS MENU & MOBILE DRAWER TOGGLE
  // ========================================================================
  const menuToggle = document.querySelector('.header-toggle-circle');
  const quickMenu = document.getElementById('quick-menu');

  if (menuToggle && quickMenu) {
    function toggleMenu(open) {
      const isExpanded = open !== undefined ? open : !quickMenu.classList.contains('is-open');
      quickMenu.classList.toggle('is-open', isExpanded);
      menuToggle.classList.toggle('active', isExpanded);
      menuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      quickMenu.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');
    }

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking on any link inside quick menu
    quickMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (quickMenu.classList.contains('is-open') && !quickMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && quickMenu.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  }

  // ========================================================================
  // 7. DYNAMIC YEAR IN FOOTER
  // ========================================================================
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
