const WHATSAPP_MESSAGE =
  "Hola, Variedades Nora. Estoy interesado/a en conocer más sobre sus productos.";
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
    link.setAttribute("href", createWhatsAppURL());
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

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
  });

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const composedMessage = [
      WHATSAPP_MESSAGE,
      name && `Mi nombre es ${name}.`,
      category && `Me interesa: ${category}.`,
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

  for (let index = 0; index < 18; index += 1) {
    const particle = document.createElement("span");
    particle.className = index % 3 === 0 ? "decor-dot" : "particle";
    particle.style.left = `${8 + Math.random() * 84}%`;
    particle.style.top = `${18 + Math.random() * 68}%`;
    particle.style.opacity = `${0.34 + Math.random() * 0.42}`;
    particleLayer.appendChild(particle);
  }
}

function runGSAPAnimations() {
  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTimeline
    .from(".site-header", { y: -24, opacity: 0, duration: 0.8 })
    .from(".hero .eyebrow", { y: 18, opacity: 0, duration: 0.55 }, "-=0.35")
    .from(".hero h1", { y: 34, opacity: 0, duration: 0.8 }, "-=0.2")
    .from(".hero-copy", { y: 26, opacity: 0, duration: 0.65 }, "-=0.35")
    .from(".hero-actions .btn", { y: 22, opacity: 0, stagger: 0.08, duration: 0.55 }, "-=0.32")
    .from(".hero-highlights span", { y: 18, opacity: 0, stagger: 0.08, duration: 0.45 }, "-=0.24")
    .from(
      ".hero-photo, .hero-logo-mark",
      { y: 44, opacity: 0, rotate: 2, stagger: 0.08, duration: 0.8 },
      "-=0.72"
    );

  gsap.utils.toArray(".reveal").forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
      y: 34,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
    });
  });

  gsap.utils.toArray(".category-card, .product-card, .benefit-card").forEach((card) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.55,
      },
      y: -14,
      ease: "none",
    });
  });
}

function runAnimeDetails() {
  if (!window.anime) return;

  anime({
    targets: ".particle",
    translateY: () => anime.random(-22, 22),
    translateX: () => anime.random(-14, 14),
    scale: () => anime.random(8, 14) / 10,
    easing: "easeInOutSine",
    duration: () => anime.random(2600, 4600),
    delay: anime.stagger(120),
    direction: "alternate",
    loop: true,
  });

  anime({
    targets: ".decor-dot",
    translateY: () => anime.random(-16, 16),
    opacity: [0.22, 0.68],
    easing: "easeInOutQuad",
    duration: 3200,
    delay: anime.stagger(180),
    direction: "alternate",
    loop: true,
  });

  anime({
    targets: ".hero-logo-mark",
    translateY: [-5, 8],
    rotate: [-1.2, 1.2],
    easing: "easeInOutSine",
    duration: 4200,
    direction: "alternate",
    loop: true,
  });
}
