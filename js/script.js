
// Testimonial Rotator
const testimonials = [
  {
    quote: "Kilroy Home Services was quick, clean, and professional. Our insulation upgrade made a huge difference!",
    author: "- Sarah T.",
  },
  {
    quote: "I wasn’t sure what to expect, but the team walked me through every step. My AC works like new!",
    author: "- Alex R.",
  },
  {
    quote: "Great customer service and even better results. The new windows look amazing!",
    author: "- James C.",
  },
  {
    quote: "Honest, affordable, and the job was done ahead of schedule. Highly recommend!",
    author: "- Maria G.",
  }
];

let current = 0;

function showTestimonial(index) {
  const testimonial = document.getElementById("testimonial");
  if (testimonial) {
    testimonial.style.opacity = 0;
    setTimeout(() => {
      testimonial.innerHTML = `
        <p>"${testimonials[index].quote}"</p>
        <h4>${testimonials[index].author}</h4>
      `;
      testimonial.style.opacity = 1;
    }, 200);
  }
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

document.addEventListener("DOMContentLoaded", () => {
  showTestimonial(current);

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
