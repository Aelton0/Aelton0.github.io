/**
 * Aelton SM — Editorial Portfolio
 * Restrained, intentional interactions inspired by Componine.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth scroll for header anchor links
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

  // 2. Interactive Discipline List in "THE WORK" Section
  const disciplineItems = document.querySelectorAll('.discipline-item');
  const previewImage = document.getElementById('discipline-preview-img');

  const previews = {
    '01': 'assets/images/projects/case-01-pipeline.svg',
    '02': 'assets/images/projects/case-02-statistical.svg',
    '03': 'assets/images/projects/flagship-warehouse.svg',
    '04': 'assets/images/hero/hero-architectural.svg'
  };

  disciplineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
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
    });
  });

  // 3. Dynamic Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
