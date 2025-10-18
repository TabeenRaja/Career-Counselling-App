
        function openModal(type) {
            const modalId = type + 'Modal';
            document.getElementById(modalId).style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // Close modal when clicking outside of it
        window.onclick = function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
  



const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotContainer = document.querySelector('.carousel-dots');

let index = 0;
const slideWidth = slides[0].getBoundingClientRect().width + 30; 
const totalDots = 7;

// Create exactly 7 dots
dotContainer.innerHTML = '';
for (let i = 0; i < totalDots; i++) {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dotContainer.appendChild(dot);
}
const dots = Array.from(dotContainer.children);

function updateSlidePosition() {
  // wrap around
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  // move slides
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  // update active slide
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');

  // update dots
  dots.forEach(d => d.classList.remove('active'));
  dots[index % dots.length]?.classList.add('active');
}

// Auto slide function
function nextSlide() {
  index++;
  updateSlidePosition();
}

// Next / Prev buttons
nextButton.addEventListener('click', () => {
  index++;
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  index--;
  updateSlidePosition();
});

// Dot clicks
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlidePosition();
  });
});

// Start auto scroll
setInterval(nextSlide, 3000);

// Initialize
updateSlidePosition();
