const testimonials = [
  {
    quote: `"Kilroy Home Services was quick, clean, and professional. Our insulation upgrade made a huge difference!"`,
    author: "- Sarah T.",
  },
  {
    quote: `"I wasn’t sure what to expect, but the team walked me through every step. My AC works like new!"`,
    author: "- Alex R.",
  },
  {
    quote: `"Great customer service and even better results. The new windows look amazing!"`,
    author: "- James C.",
  },
  {
    quote: `"Honest, affordable, and the job was done ahead of schedule. Highly recommend!"`,
    author: "- Maria G.",
  }
];

let current = 0;
let autoRotateInterval;

function showTestimonial(index) {
  const testimonial = document.getElementById("testimonial");
  if (!testimonial) return;

  testimonial.style.opacity = 0;

  setTimeout(() => {
    testimonial.innerHTML = `
      <p>${testimonials[index].quote}</p>
      <h4>${testimonials[index].author}</h4>
    `;
    testimonial.style.opacity = 1;
  }, 200);
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

// Auto-rotate every 6 seconds
function startAutoRotate() {
  autoRotateInterval = setInterval(() => {
    nextTestimonial();
  }, 6000);
}

// Mobile nav toggle
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  const burger = document.getElementById("hamburger");

  const isOpen = nav.classList.toggle("show");
  burger.classList.toggle("open", isOpen);
  burger.setAttribute("aria-expanded", isOpen);
}

function closeMenu() {
  const nav = document.getElementById("nav-menu");
  const burger = document.getElementById("hamburger");

  nav.classList.remove("show");
  burger.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}

// Scroll-triggered animations
function setupFadeInOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-section").forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  showTestimonial(current);
  startAutoRotate();
  setupFadeInOnScroll();
});
