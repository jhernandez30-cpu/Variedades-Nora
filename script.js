const WHATSAPP_MESSAGE =
  "Hola, Variedades Nora. Estoy interesado/a en conocer más sobre sus bolsos, carteras, mochilas y cangureras.";
const WHATSAPP_NUMBER = "50582299406";

const createWhatsAppURL = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const whatsappLinks = document.querySelectorAll("[data-whatsapp]");
  const contactForm = document.querySelector("[data-contact-form]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  whatsappLinks.forEach((link) => {
    const message = link.dataset.whatsappMessage || WHATSAPP_MESSAGE;
    link.setAttribute("href", createWhatsAppURL(message));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  let ticking = false;
  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    },
    { passive: true }
  );

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const composedMessage = [
      WHATSAPP_MESSAGE,
      name && `Mi nombre es ${name}.`,
      category && `Me interesa la categoría: ${category}.`,
      message && `Mensaje: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(createWhatsAppURL(composedMessage), "_blank", "noopener");
    contactForm.reset();
  });

  if (reduceMotion) {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "none";
    });
    return;
  }

  createParticles();
  runGSAPAnimations();
  runAnimeDetails();
});

function createParticles() {
  const particleLayer = document.querySelector(".hero-particles");
  if (!particleLayer) return;

  for (let index = 0; index < 12; index += 1) {
    const particle = document.createElement("span");
    particle.className = index % 3 === 0 ? "decor-dot" : "particle";
    particle.style.left = `${8 + Math.random() * 84}%`;
    particle.style.top = `${18 + Math.random() * 68}%`;
    particle.style.opacity = `${0.3 + Math.random() * 0.38}`;
    particleLayer.appendChild(particle);
  }
}

function runGSAPAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTimeline
    .from(".site-header", { y: -24, opacity: 0, duration: 0.7 })
    .from(".hero .eyebrow", { y: 16, opacity: 0, duration: 0.45 }, "-=0.25")
    .from(".hero h1", { y: 28, opacity: 0, duration: 0.7 }, "-=0.2")
    .from(".hero-copy", { y: 22, opacity: 0, duration: 0.55 }, "-=0.3")
    .from(".hero-actions .btn", { y: 18, opacity: 0, stagger: 0.07, duration: 0.45 }, "-=0.24")
    .from(".hero-highlights span", { y: 14, opacity: 0, stagger: 0.06, duration: 0.38 }, "-=0.18")
    .from(
      ".hero-photo, .hero-logo-mark",
      { y: 34, opacity: 0, rotate: 1.5, stagger: 0.07, duration: 0.65 },
      "-=0.55"
    );

  gsap.utils.toArray(".reveal").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
        toggleActions: "play none none reverse",
      },
      y: 28,
      opacity: 0,
      duration: 0.62,
      ease: "power3.out",
    });
  });
}

function runAnimeDetails() {
  if (!window.anime) return;

  anime({
    targets: ".particle",
    translateY: () => anime.random(-18, 18),
    translateX: () => anime.random(-12, 12),
    scale: () => anime.random(8, 13) / 10,
    easing: "easeInOutSine",
    duration: () => anime.random(2800, 4600),
    delay: anime.stagger(130),
    direction: "alternate",
    loop: true,
  });

  anime({
    targets: ".decor-dot",
    translateY: () => anime.random(-14, 14),
    opacity: [0.2, 0.62],
    easing: "easeInOutQuad",
    duration: 3400,
    delay: anime.stagger(180),
    direction: "alternate",
    loop: true,
  });
}
