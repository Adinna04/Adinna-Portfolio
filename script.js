// ============ LOADER ============
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1200);
});

// ============ CUSTOM CURSOR ============
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
  }, 80);
});

document.querySelectorAll('a, button, .project-card, .about-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    follower.style.transform = 'translate(-50%,-50%) scale(1.5)';
    follower.style.opacity = '0.8';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    follower.style.transform = 'translate(-50%,-50%) scale(1)';
    follower.style.opacity = '0.5';
  });
});

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============ HAMBURGER ============
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ============ SCROLL REVEAL ============
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ============ SKILL BARS ============
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      const width = fill.dataset.width;
      fill.style.width = width + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-item').forEach(el => skillObserver.observe(el));

// ============ TESTIMONIAL SLIDER ============
let currentSlide = 0;
const track = document.getElementById('testimonialTrack');
const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % 3;
  goToSlide(currentSlide);
}, 4000);

// ============ CONTACT FORM ============
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.classList.add('show');
  e.target.reset();
  setTimeout(() => success.classList.remove('show'), 4000);
});

// ============ ACTIVE NAV LINK ============
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

/* ======================================
PREMIUM JS UPGRADE
====================================== */

/* Typing Animation */

const typingElement = document.getElementById("typing-text");

if (typingElement) {

const words = [
"AI & Web Development Enthusiast",
"NLP Developer",
"Generative AI Explorer",
"Full Stack Creator",
"Problem Solver"
];

let wordIndex = 0;

setInterval(() => {

```
typingElement.style.opacity = 0;

setTimeout(() => {

  wordIndex = (wordIndex + 1) % words.length;

  typingElement.textContent = words[wordIndex];

  typingElement.style.opacity = 1;

}, 300);
```

}, 2500);
}

/* Back To Top */

const backToTop =
document.getElementById("backToTop");

if(backToTop){

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

backToTop.style.display="block";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

/* Theme Toggle */

const themeToggle =
document.getElementById("themeToggle");

if(themeToggle){

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(
document.body.classList.contains("light-mode")
){

themeToggle.innerHTML="☀️";

}else{

themeToggle.innerHTML="🌙";

}

});

}

/* Counter Animation */

const stats =
document.querySelectorAll(".stat span");

const animateValue=(el,end)=>{

let start=0;

const duration=1500;

const increment=end/60;

const timer=setInterval(()=>{

start+=increment;

if(start>=end){

el.textContent=end;
clearInterval(timer);

}else{

el.textContent=
Math.floor(start);

}

},duration/60);

};

const statObserver=
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const el=
entry.target;

const num=
parseInt(el.textContent);

if(!isNaN(num)){

animateValue(el,num);

}

}

});

},{threshold:0.5});

stats.forEach(stat=>{

statObserver.observe(stat);

});

/* Floating Animation */

document.querySelectorAll(
".about-card,.project-card"
).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=
card.getBoundingClientRect();

const x=
e.clientX-rect.left;

const y=
e.clientY-rect.top;

card.style.transform=
`rotateX(${(y-rect.height/2)/20}deg)
 rotateY(${-(x-rect.width/2)/20}deg)
 translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"rotateX(0deg) rotateY(0deg)";

});

});
