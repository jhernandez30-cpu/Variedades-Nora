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
  updateHeader();

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
      element.classList.add("is-visible");
    });
    document.body.classList.add("is-ready");
    return;
  }

  createParticles();
  revealOnScroll();
  window.requestAnimationFrame(() => document.body.classList.add("is-ready"));
});

function revealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function createParticles() {
  const particleLayer = document.querySelector(".hero-particles");
  if (!particleLayer) return;

  for (let index = 0; index < 12; index += 1) {
    const particle = document.createElement("span");
    const isDot = index % 3 === 0;
    particle.className = isDot ? "decor-dot" : "particle";
    particle.style.left = `${8 + Math.random() * 84}%`;
    particle.style.top = `${18 + Math.random() * 68}%`;
    particle.style.opacity = `${0.3 + Math.random() * 0.38}`;
    particle.style.setProperty("--float-x", `${Math.round(Math.random() * 24 - 12)}px`);
    particle.style.setProperty("--float-y", `${Math.round(Math.random() * 32 - 16)}px`);
    particle.style.animationDelay = `${index * 130}ms`;
    particle.style.animationDuration = `${2800 + Math.random() * 1800}ms`;
    particleLayer.appendChild(particle);
  }
}
