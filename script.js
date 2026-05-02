function go(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

/* HERO ANIMATION */
/*gsap.from(".animate", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});*/
gsap.from(".hero h1", {
  y: 80,
  opacity: 0,
  duration: 1.2
});

gsap.from(".hero p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".subline", {
  opacity: 0,
  duration: 1,
  delay: 1
});

/* CARD ANIMATIONS */
const cards = document.querySelectorAll(".card");

/*window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.8
      });
    }
  });
});*/
window.addEventListener("scroll", () => {
  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1
      });
    }
  });
});
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
const stats = document.querySelectorAll(".stat");

let started = false;

window.addEventListener("scroll", () => {
  const section = document.getElementById("why");
  const pos = section.getBoundingClientRect().top;

  if (pos < window.innerHeight && !started) {
    stats.forEach(stat => {
      let count = 0;
      const target = +stat.getAttribute("data-target");

      const update = () => {
        count += target / 50;
        if (count < target) {
          stat.innerText = Math.floor(count) + "+";
          requestAnimationFrame(update);
        } else {
          stat.innerText = target + "+";
        }
      };

      update();
    });

    started = true;
  }
});
/*const sections = document.querySelectorAll(".section");

sections.forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});*/
