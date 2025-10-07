const track = document.getElementById('testimonialTrack');
const slides = Array.from(track.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.children);

function goToSlide(index) {
  currentIndex = (index + slides.length) % slides.length; // wrap around
  const offset = -currentIndex * (slides[0].offsetWidth + 48); // 48 = gap
  track.style.transform = `translateX(${offset}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

// Button event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide every 3 seconds
let autoSlide = setInterval(nextSlide, 3000);

// Pause on hover
track.addEventListener('mouseenter', () => clearInterval(autoSlide));
track.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 3000));



    
//dropdown menu in header
// script.js — safe and defensive
document.addEventListener('DOMContentLoaded', () => {
  // --- element picks (may be null if you don't include them; code will not crash) ---
  const dropdownToggle = document.getElementById('dropdownToggle'); // Services toggle
  const dropdownMenu = document.getElementById('dropdownMenu');

  const themesToggle = document.getElementById('themesToggle'); // Theme toggle in header
  const themesMenu = document.getElementById('themesMenu');

  const textSizeToggle = document.getElementById('textSizeToggle'); // optional "A" icon
  const themeOptions = document.querySelectorAll('[data-theme]'); // items with data-theme="dark" etc
  const sizeOptions = document.querySelectorAll('[data-size]'); // optional fine-grain sizes

  const aboutBtn = document.querySelector('.AboutUs'); // optional
  const contactBtn = document.querySelector('.ContactUs'); // optional

  // helper: close both menus
  function closeAllMenus() {
    if (dropdownMenu) dropdownMenu.classList.remove('show');
    if (themesMenu) themesMenu.classList.remove('show');
  }

  // Toggle helpers (guarded)
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();            // prevents immediate document click handler
      dropdownMenu.classList.toggle('show');
      if (themesMenu) themesMenu.classList.remove('show');
    });
  }

  if (themesToggle && themesMenu) {
    themesToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      themesMenu.classList.toggle('show');
      if (dropdownMenu) dropdownMenu.classList.remove('show');
    });
  }

  // Click outside -> close menus
  document.addEventListener('click', (e) => {
    const clicked = e.target;
    if (dropdownMenu && dropdownToggle) {
      if (!dropdownMenu.contains(clicked) && !dropdownToggle.contains(clicked)) {
        dropdownMenu.classList.remove('show');
      }
    }
    if (themesMenu && themesToggle) {
      if (!themesMenu.contains(clicked) && !themesToggle.contains(clicked)) {
        themesMenu.classList.remove('show');
      }
    }
  });

  // Escape key closes menus
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllMenus();
  });

  // --- Theme switching & persistence ---
  // accepted theme names should match your CSS classes:
  // e.g. for data-theme="dark" you should have `.dark-theme { ... }` in CSS
  if (themeOptions.length) {
    themeOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.preventDefault();
        const selected = opt.getAttribute('data-theme') || 'light';

        // remove known theme classes (adjust if you have different names)
        document.body.classList.remove('dark-theme', 'contrast-theme', 'reading-theme');

        if (selected !== 'light') {
          document.body.classList.add(`${selected}-theme`);
        }

        localStorage.setItem('pathfinder-theme', selected);
        if (themesMenu) themesMenu.classList.remove('show');
      });
    });
  }

  // load saved theme
  const savedTheme = localStorage.getItem('pathfinder-theme') || 'light';
  if (savedTheme && savedTheme !== 'light') {
    document.body.classList.add(`${savedTheme}-theme`);
  }

  // --- Font size control (two approaches supported) ---
  // 1) Cycle button (textSizeToggle) cycles through sizes array
  const sizes = ['0.95rem', '1rem', '1.1rem', '1.2rem']; // tweak as you like
  let sizeIndex = Number(localStorage.getItem('pathfinder-font-index')) || 1;

  function applySize(idx) {
    document.documentElement.style.fontSize = sizes[idx];
    localStorage.setItem('pathfinder-font-index', idx);
  }
  applySize(sizeIndex);

  if (textSizeToggle) {
    textSizeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      sizeIndex = (sizeIndex + 1) % sizes.length;
      applySize(sizeIndex);
    });
  }

  // 2) If you prefer explicit size options (e.g. dropdown items with data-size),
  // they should have attributes like data-size="16px" or data-size-index="2"
  if (sizeOptions.length) {
    sizeOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = opt.getAttribute('data-size-index');
        const val = opt.getAttribute('data-size');
        if (idx !== null) {
          sizeIndex = Number(idx);
          applySize(sizeIndex);
        } else if (val) {
          document.documentElement.style.fontSize = val;
          localStorage.setItem('pathfinder-font-index', 'custom');
        }
        if (themesMenu) themesMenu.classList.remove('show');
        if (dropdownMenu) dropdownMenu.classList.remove('show');
      });
    });
  }

  // --- optional nav buttons ---
  if (aboutBtn) {
    aboutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('about.html', '_blank', 'noopener,noreferrer');
    });
  }
  if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('contact.html', '_blank', 'noopener,noreferrer');
    });
  }

  // debug: (remove in production) shows which key elements exist
  console.info('pathfinder: dropdownToggle=', !!dropdownToggle, 'dropdownMenu=', !!dropdownMenu,
               'themesToggle=', !!themesToggle, 'themesMenu=', !!themesMenu,
               'textSizeToggle=', !!textSizeToggle);
});
