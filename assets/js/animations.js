/**
 * Antigravity Design Motion Engine: GSAP 3, Spatial Depth, 3D Isometric Tilt & Spotlight
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Ambient Cursor Spotlight Tracker
  const spotlight = document.createElement('div');
  spotlight.className = 'cursor-spotlight';
  document.body.appendChild(spotlight);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth Lerp loop for weightless cursor lighting
  function animateSpotlight() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    spotlight.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateSpotlight);
  }
  if (!prefersReducedMotion) {
    animateSpotlight();
  }

  // 2. Interactive 3D Isometric Card Tilt with Glare Tracking
  const isometricCards = document.querySelectorAll('.isometric-card');
  isometricCards.forEach(card => {
    // Inject glare element if missing
    if (!card.querySelector('.card-glare')) {
      const glare = document.createElement('div');
      glare.className = 'card-glare';
      card.appendChild(glare);
    }

    card.addEventListener('mousemove', (e) => {
      if (prefersReducedMotion) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      // Update glare gradient position
      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // 3. GSAP 3 & ScrollTrigger Advanced Spatial Choreography
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } });

    heroTl.from('.status-indicator', {
      y: -25,
      opacity: 0,
      filter: 'blur(8px)',
      delay: 0.15
    })
    .from('.hero-headline span', {
      y: 45,
      opacity: 0,
      filter: 'blur(6px)',
      stagger: 0.15
    }, '-=0.7')
    .from('.hero-subheadline', {
      y: 25,
      opacity: 0,
      filter: 'blur(4px)'
    }, '-=0.6')
    .from('.hero-ctas > *', {
      y: 20,
      opacity: 0,
      stagger: 0.12
    }, '-=0.5')
    .from('.hero-stats > div', {
      y: 20,
      opacity: 0,
      stagger: 0.1
    }, '-=0.5');

    // Smooth Parallax on Hero Kraken Backdrop
    gsap.to('.hero-kraken-backdrop', {
      y: 160,
      rotation: -3,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2
      }
    });

    // Parallax on Light Beam
    gsap.to('.light-beam', {
      y: 80,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    // Selected Works Cards Entrance with 3D Spatial Rotation
    gsap.utils.toArray('.case-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        rotateX: 8,
        opacity: 0,
        duration: 0.9,
        delay: index * 0.15,
        ease: 'power2.out'
      });
    });

    // Stack Matrix Cards Staggered Drop-in
    gsap.from('.stack-card', {
      scrollTrigger: {
        trigger: '#stack',
        start: 'top 82%'
      },
      y: 45,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // DIKW Layers Progressive Spatial Slide
    gsap.from('.dikw-layer', {
      scrollTrigger: {
        trigger: '#manifesto',
        start: 'top 78%'
      },
      x: -50,
      opacity: 0,
      duration: 0.65,
      stagger: 0.12,
      ease: 'power2.out'
    });
  }
});
