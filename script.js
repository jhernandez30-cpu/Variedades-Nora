const WHATSAPP_MESSAGE =
  "Hola, Variedades Nora. Estoy interesado/a en conocer más sobre sus productos del catálogo.";
const WHATSAPP_NUMBER = "50582299406";
const CATALOG_PAGE_SIZE = 12;

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

  initCatalog();

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

function initCatalog() {
  const grid = document.querySelector("[data-catalog-grid]");
  const filters = document.querySelector("[data-catalog-filters]");
  const count = document.querySelector("[data-catalog-count]");
  const moreButton = document.querySelector("[data-catalog-more]");
  const lightbox = document.querySelector("[data-catalog-lightbox]");
  const lightboxImage = document.querySelector("[data-catalog-lightbox-image]");
  const lightboxTitle = document.querySelector("[data-catalog-lightbox-title]");
  const lightboxCategory = document.querySelector("[data-catalog-lightbox-category]");
  const lightboxLink = document.querySelector("[data-catalog-lightbox-link]");
  const lightboxClose = document.querySelector(".catalog-lightbox-close");
  const closeButtons = document.querySelectorAll("[data-catalog-close]");

  if (!grid || !filters) return;

  const categories = Array.isArray(window.PORTFOLIO_CATEGORIES) ? window.PORTFOLIO_CATEGORIES : [];
  const products = categories.flatMap((category) =>
    category.files.map((file, index) => {
      const itemNumber = String(index + 1).padStart(2, "0");
      return {
        id: `${category.key}-${itemNumber}`,
        name: `${category.label} ${itemNumber}`,
        category: category.label,
        categoryKey: category.key,
        path: `${category.folder}/${file}`,
      };
    })
  );

  if (!products.length) return;

  let activeCategory = "all";
  let visibleCount = CATALOG_PAGE_SIZE;
  let lastFocusedElement = null;

  const getVisibleProducts = () => {
    if (activeCategory === "all") return products;
    return products.filter((product) => product.categoryKey === activeCategory);
  };

  const getProductMessage = (product) =>
    `Hola, Variedades Nora. Quiero consultar disponibilidad y precio de ${product.name} (${product.category}).`;

  const openProduct = (product, trigger) => {
    if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxCategory || !lightboxLink) return;

    lastFocusedElement = trigger;
    lightboxImage.src = product.path;
    lightboxImage.alt = `${product.name} disponible en Variedades Nora`;
    lightboxTitle.textContent = product.name;
    lightboxCategory.textContent = product.category;
    lightboxLink.href = createWhatsAppURL(getProductMessage(product));
    lightbox.hidden = false;
    document.body.classList.add("catalog-modal-open");
    (lightboxClose || closeButtons[0])?.focus();
  };

  const closeProduct = () => {
    if (!lightbox) return;

    lightbox.hidden = true;
    document.body.classList.remove("catalog-modal-open");
    lightboxImage?.removeAttribute("src");
    lastFocusedElement?.focus();
  };

  const createProductCard = (product) => {
    const article = document.createElement("article");
    article.className = "catalog-card";

    const preview = document.createElement("button");
    preview.className = "catalog-preview";
    preview.type = "button";
    preview.setAttribute("aria-label", `Ver ${product.name}`);

    const image = document.createElement("img");
    image.src = product.path;
    image.alt = `${product.name} de Variedades Nora`;
    image.loading = "lazy";
    image.decoding = "async";

    const badge = document.createElement("span");
    badge.textContent = product.category;

    preview.append(image, badge);
    preview.addEventListener("click", () => openProduct(product, preview));

    const body = document.createElement("div");
    body.className = "catalog-card-body";

    const category = document.createElement("p");
    category.textContent = product.category;

    const title = document.createElement("h3");
    title.textContent = product.name;

    const link = document.createElement("a");
    link.href = createWhatsAppURL(getProductMessage(product));
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Consultar por WhatsApp";

    body.append(category, title, link);
    article.append(preview, body);

    return article;
  };

  const renderFilters = () => {
    const filterItems = [
      { key: "all", label: `Todo (${products.length})` },
      ...categories.map((category) => ({
        key: category.key,
        label: `${category.label} (${category.files.length})`,
      })),
    ];

    filters.replaceChildren(
      ...filterItems.map((item) => {
        const button = document.createElement("button");
        button.className = "catalog-filter";
        button.type = "button";
        button.textContent = item.label;
        button.setAttribute("aria-pressed", String(item.key === activeCategory));
        button.addEventListener("click", () => {
          activeCategory = item.key;
          visibleCount = CATALOG_PAGE_SIZE;
          renderCatalog();
          renderFilters();
        });
        return button;
      })
    );
  };

  const renderCatalog = () => {
    const filteredProducts = getVisibleProducts();
    const visibleProducts = filteredProducts.slice(0, visibleCount);

    count && (count.textContent = String(filteredProducts.length));
    grid.replaceChildren(...visibleProducts.map(createProductCard));

    if (moreButton) {
      moreButton.hidden = visibleProducts.length >= filteredProducts.length;
      moreButton.textContent = `Ver más productos (${filteredProducts.length - visibleProducts.length})`;
    }
  };

  moreButton?.addEventListener("click", () => {
    visibleCount += CATALOG_PAGE_SIZE;
    renderCatalog();
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeProduct));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox && !lightbox.hidden) {
      closeProduct();
    }
  });

  renderFilters();
  renderCatalog();
}

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
