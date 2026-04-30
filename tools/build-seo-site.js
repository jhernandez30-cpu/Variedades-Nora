const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://jhernandez30-cpu.github.io/Variedades-Nora/";
const PHONE = "50582299406";
const DISPLAY_PHONE = "+505 8229 9406";
const ADDRESS = "Semaforo 1 de Mayo, 7 cuadras al lago, Americas #1 Sector D, casa 1547";
const GOOGLE_BUSINESS_URL = "https://share.google/BwcHptNaixBM4b5Sg";
const GOOGLE_REVIEW_URL = "https://g.page/r/CXvv5OQDFuF4EBM/review";
const LASTMOD = "2026-04-30";

const writeFile = (relativePath, content) => {
  const fullPath = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, `${content.trim()}\n`, "utf8");
};

const pageUrl = (relativePath) => {
  if (relativePath === "index.html") return BASE_URL;
  return `${BASE_URL}${relativePath.replace(/index\.html$/, "")}`;
};

const rootPrefixFor = (relativePath) => {
  const dir = path.posix.dirname(relativePath.replaceAll("\\", "/"));
  if (dir === ".") return "";
  return "../".repeat(dir.split("/").length);
};

const enc = (value) => encodeURI(value);
const wa = (message) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
const link = (prefix, href) => `${prefix}${href}`;
const homeAnchor = (prefix, anchor) => (prefix ? `${prefix}${anchor ? `#${anchor}` : ""}` : anchor ? `#${anchor}` : "#inicio");

const products = [
  {
    slug: "bolso-elegante-para-mujer",
    name: "Bolso elegante para mujer",
    category: "Bolsos",
    categorySlug: "bolsos/bolsos-para-mujer/",
    badge: "TOP ventas",
    image: "assets/img/optimized/producto-bolso-ejecutivo.webp",
    price: "850.00",
    shortPrice: "Desde C$850",
    description: "Bolso moderno para trabajo, salidas y uso diario, con acabado elegante y facil de combinar.",
    status: "Disponible",
    material: "Cuero sintetico",
    color: "Beige",
    use: "Trabajo y diario",
    style: "Elegante",
    rating: "4.8",
    reviews: "12",
  },
  {
    slug: "cartera-moderna-casual",
    name: "Cartera moderna casual",
    category: "Carteras",
    categorySlug: "carteras/carteras-modernas/",
    badge: "Nuevo",
    image: "assets/img/optimized/producto-cartera-mano.webp",
    price: "620.00",
    shortPrice: "Desde C$620",
    description: "Cartera compacta para salidas, eventos y combinaciones casuales o elegantes.",
    status: "Nuevo ingreso",
    material: "Cuero sintetico",
    color: "Negro",
    use: "Salida y regalo",
    style: "Moderno",
    rating: "4.7",
    reviews: "9",
  },
  {
    slug: "mochila-juvenil-uso-diario",
    name: "Mochila juvenil para uso diario",
    category: "Mochilas",
    categorySlug: "mochilas/mochilas-casuales/",
    badge: "TOP ventas",
    image: "assets/img/optimized/producto-mochila-urbana.webp",
    price: "780.00",
    shortPrice: "Desde C$780",
    description: "Mochila practica para universidad, trabajo, salidas y actividades de todos los dias.",
    status: "Disponible",
    material: "Poliester",
    color: "Rosado",
    use: "Universidad",
    style: "Juvenil",
    rating: "4.9",
    reviews: "15",
  },
  {
    slug: "cangurera-moderna-ajustable",
    name: "Cangurera moderna ajustable",
    category: "Cangureras",
    categorySlug: "cangureras/cangureras-modernas/",
    badge: "Practica",
    image: "assets/img/optimized/producto-cangurera-casual.webp",
    price: "420.00",
    shortPrice: "Desde C$420",
    description: "Cangurera liviana para llevar celular, llaves y basicos sin perder comodidad.",
    status: "Disponible",
    material: "Lona",
    color: "Cafe",
    use: "Diario",
    style: "Casual",
    rating: "4.8",
    reviews: "8",
  },
  {
    slug: "bolso-glam-de-temporada",
    name: "Bolso glam de temporada",
    category: "Bolsos",
    categorySlug: "bolsos/bolsos-elegantes/",
    badge: "Nuevo",
    image: "assets/img/optimized/producto-bolso-glam.webp",
    price: "950.00",
    shortPrice: "Desde C$950",
    description: "Bolso llamativo para estrenar, regalar o elevar un outfit de temporada.",
    status: "Ultimas unidades",
    material: "Cuero sintetico",
    color: "Rojo",
    use: "Fiesta y regalo",
    style: "Glam",
    rating: "4.8",
    reviews: "10",
  },
  {
    slug: "cartera-compacta-con-textura",
    name: "Cartera compacta con textura",
    category: "Carteras",
    categorySlug: "carteras/carteras-elegantes/",
    badge: "Oferta",
    image: "assets/img/optimized/producto-cartera-textura.webp",
    price: "540.00",
    shortPrice: "Desde C$540",
    description: "Cartera pequena con textura, ideal para combinar con looks casuales o elegantes.",
    status: "Oferta disponible",
    material: "Cuero sintetico",
    color: "Blanco",
    use: "Regalo",
    style: "Minimalista",
    rating: "4.7",
    reviews: "7",
  },
];

const allGridProducts = [
  ...products,
  {
    slug: "bolso-cruzado-moderno",
    name: "Bolso cruzado moderno",
    category: "Bolsos",
    categorySlug: "bolsos/bolsos-casuales/",
    badge: "Casual",
    image: "assets/img/optimized/categoria-bolsos.webp",
    price: "700.00",
    shortPrice: "Desde C$700",
    description: "Bolso cruzado para moverte comoda y llevar lo esencial con estilo.",
    status: "Consultar disponibilidad",
    rating: "4.7",
    reviews: "6",
  },
  {
    slug: "mochila-escolar-moderna",
    name: "Mochila escolar moderna",
    category: "Mochilas",
    categorySlug: "mochilas/mochilas-escolares/",
    badge: "Escolar",
    image: "assets/img/optimized/categoria-mochilas.webp",
    price: "760.00",
    shortPrice: "Desde C$760",
    description: "Mochila con espacio para clases, universidad y rutina diaria.",
    status: "Consultar disponibilidad",
    rating: "4.8",
    reviews: "11",
  },
  {
    slug: "perfume-para-mujer-regalo",
    name: "Perfume para mujer ideal para regalo",
    category: "Perfumes",
    categorySlug: "perfumes/perfumes-para-regalo/",
    badge: "Regalo",
    image: "assets/img/portfolio/Cosmetico/Cremas/625186152_1475484451245786_6504749630190652710_n.jpg",
    price: "650.00",
    shortPrice: "Desde C$650",
    description: "Opcion femenina para detalle, cumpleanos o sorpresa especial.",
    status: "Consultar disponibilidad",
    rating: "4.6",
    reviews: "5",
  },
  {
    slug: "blusa-casual-para-mujer",
    name: "Blusa casual para mujer",
    category: "Ropa",
    categorySlug: "ropa/blusas/",
    badge: "Nuevo",
    image: "assets/img/optimized/hero-side.webp",
    price: "480.00",
    shortPrice: "Desde C$480",
    description: "Prenda casual para combinar con bolsos, carteras y accesorios.",
    status: "Catalogo en actualizacion",
    rating: "4.6",
    reviews: "4",
  },
  {
    slug: "accesorios-de-moda-para-regalo",
    name: "Accesorios de moda para regalo",
    category: "Accesorios",
    categorySlug: "accesorios/regalos-para-mujer/",
    badge: "Regalo",
    image: "assets/img/optimized/logo-variedades-nora.webp",
    price: "300.00",
    shortPrice: "Desde C$300",
    description: "Detalles practicos para complementar un look o sorprender a alguien especial.",
    status: "Consultar por WhatsApp",
    rating: "4.7",
    reviews: "8",
  },
  {
    slug: "producto-en-oferta-variedades-nora",
    name: "Producto en oferta Variedades Nora",
    category: "Ofertas",
    categorySlug: "ofertas/",
    badge: "Oferta",
    image: "assets/img/optimized/producto-bolso-glam.webp",
    price: "500.00",
    shortPrice: "Desde C$500",
    description: "Seleccion de ultimas unidades y promociones disponibles por temporada.",
    status: "Oferta por tiempo limitado",
    rating: "4.8",
    reviews: "6",
  },
];

const categories = [
  {
    slug: "bolsos/",
    name: "Bolsos",
    h1: "Bolsos en Nicaragua",
    title: "Bolsos en Nicaragua | Variedades Nora",
    meta: "Compra bolsos modernos, casuales y elegantes en Nicaragua. Consulta precios, colores y disponibilidad por WhatsApp en Variedades Nora.",
    image: "assets/img/optimized/categoria-bolsos.webp",
    keyword: "bolsos en Nicaragua",
    intro:
      "En Variedades Nora encuentras bolsos en Nicaragua para trabajo, universidad, salidas, regalos y uso diario. Reunimos modelos practicos, modernos y faciles de combinar para que puedas elegir segun tu estilo, tamano favorito, color y ocasion. Puedes consultar bolsos de mano, bolsos cruzados, modelos elegantes, opciones casuales y nuevos ingresos disponibles. Cada producto esta pensado para una compra rapida y clara: revisa la imagen, identifica el uso recomendado y escribe por WhatsApp para confirmar precio, color y disponibilidad. Si buscas un accesorio bonito, funcional y accesible, esta categoria te ayuda a comparar opciones y comprar con atencion personalizada.",
    subcategories: ["bolsos/bolsos-para-mujer/", "bolsos/bolsos-casuales/", "bolsos/bolsos-elegantes/", "bolsos/bolsos-pequenos/"],
    productSlugs: ["bolso-elegante-para-mujer", "bolso-glam-de-temporada", "bolso-cruzado-moderno"],
  },
  {
    slug: "bolsos/bolsos-para-mujer/",
    name: "Bolsos para mujer",
    h1: "Bolsos para mujer en Nicaragua",
    title: "Bolsos para Mujer en Nicaragua | Variedades Nora",
    meta: "Compra bolsos para mujer en Nicaragua. Encuentra bolsos elegantes, casuales y modernos con atencion por WhatsApp.",
    image: "assets/img/optimized/producto-bolso-ejecutivo.webp",
    keyword: "bolsos para mujer en Nicaragua",
    intro:
      "En Variedades Nora encuentras bolsos para mujer en Nicaragua pensados para acompanarte en el trabajo, la universidad, salidas especiales, compras diarias o regalos. Seleccionamos modelos modernos, casuales y elegantes con disenos practicos, colores faciles de combinar y tamanos para diferentes estilos de vida. Puedes explorar bolsos pequenos, bolsos cruzados, bolsos de mano y opciones espaciosas para llevar lo esencial con comodidad. Cada producto incluye detalles de precio, disponibilidad, color, estilo y recomendacion de uso para ayudarte a elegir mejor. Si te gusta un modelo, puedes consultar por WhatsApp y recibir atencion personalizada antes de comprar.",
    parent: "bolsos/",
    productSlugs: ["bolso-elegante-para-mujer", "bolso-glam-de-temporada", "bolso-cruzado-moderno"],
  },
  {
    slug: "bolsos/bolsos-casuales/",
    name: "Bolsos casuales",
    h1: "Bolsos casuales para mujer",
    title: "Bolsos Casuales para Mujer | Variedades Nora Nicaragua",
    meta: "Bolsos casuales para mujer, practicos para diario, universidad, salidas y regalos. Consulta modelos por WhatsApp.",
    image: "assets/img/optimized/categoria-bolsos.webp",
    keyword: "bolsos casuales para mujer",
    parent: "bolsos/",
    productSlugs: ["bolso-cruzado-moderno", "bolso-elegante-para-mujer", "cartera-compacta-con-textura"],
  },
  {
    slug: "bolsos/bolsos-elegantes/",
    name: "Bolsos elegantes",
    h1: "Bolsos elegantes para mujer",
    title: "Bolsos Elegantes para Mujer | Variedades Nora",
    meta: "Encuentra bolsos elegantes para mujer en Nicaragua, ideales para eventos, oficina y regalos.",
    image: "assets/img/optimized/producto-bolso-glam.webp",
    keyword: "bolsos elegantes para mujer",
    parent: "bolsos/",
    productSlugs: ["bolso-glam-de-temporada", "bolso-elegante-para-mujer", "cartera-moderna-casual"],
  },
  {
    slug: "bolsos/bolsos-pequenos/",
    name: "Bolsos pequenos",
    h1: "Bolsos pequenos para mujer",
    title: "Bolsos Pequenos para Mujer | Variedades Nora",
    meta: "Bolsos pequenos, compactos y modernos para llevar lo esencial con estilo. Compra por WhatsApp.",
    image: "assets/img/optimized/producto-cartera-textura.webp",
    keyword: "bolsos pequenos para mujer",
    parent: "bolsos/",
    productSlugs: ["cartera-compacta-con-textura", "cartera-moderna-casual", "cangurera-moderna-ajustable"],
  },
  {
    slug: "carteras/",
    name: "Carteras",
    h1: "Carteras para mujer en Nicaragua",
    title: "Carteras para Mujer en Nicaragua | Variedades Nora",
    meta: "Compra carteras modernas, elegantes y casuales para mujer en Nicaragua con consulta directa por WhatsApp.",
    image: "assets/img/optimized/categoria-carteras.webp",
    keyword: "carteras para mujer en Nicaragua",
    subcategories: ["carteras/carteras-para-mujer/", "carteras/carteras-modernas/", "carteras/carteras-elegantes/"],
    productSlugs: ["cartera-moderna-casual", "cartera-compacta-con-textura", "bolso-elegante-para-mujer"],
  },
  {
    slug: "carteras/carteras-para-mujer/",
    name: "Carteras para mujer",
    h1: "Carteras para mujer en Nicaragua",
    title: "Carteras para Mujer en Nicaragua | Variedades Nora",
    meta: "Carteras para mujer modernas, compactas y elegantes. Consulta precios y disponibilidad por WhatsApp.",
    image: "assets/img/optimized/producto-cartera-mano.webp",
    keyword: "carteras para mujer",
    parent: "carteras/",
    productSlugs: ["cartera-moderna-casual", "cartera-compacta-con-textura", "bolso-glam-de-temporada"],
  },
  {
    slug: "carteras/carteras-modernas/",
    name: "Carteras modernas",
    h1: "Carteras modernas para mujer",
    title: "Carteras Modernas para Mujer | Variedades Nora",
    meta: "Carteras modernas para mujer, faciles de combinar y listas para consultar por WhatsApp.",
    image: "assets/img/optimized/categoria-carteras.webp",
    keyword: "carteras modernas para mujer",
    parent: "carteras/",
    productSlugs: ["cartera-moderna-casual", "cartera-compacta-con-textura", "accesorios-de-moda-para-regalo"],
  },
  {
    slug: "carteras/carteras-elegantes/",
    name: "Carteras elegantes",
    h1: "Carteras elegantes para mujer",
    title: "Carteras Elegantes para Mujer | Variedades Nora",
    meta: "Carteras elegantes para eventos, regalos y salidas especiales. Consulta modelos disponibles en Nicaragua.",
    image: "assets/img/optimized/producto-cartera-textura.webp",
    keyword: "carteras elegantes para mujer",
    parent: "carteras/",
    productSlugs: ["cartera-compacta-con-textura", "cartera-moderna-casual", "bolso-glam-de-temporada"],
  },
  {
    slug: "mochilas/",
    name: "Mochilas",
    h1: "Mochilas escolares y casuales en Nicaragua",
    title: "Mochilas en Nicaragua | Escolares y Casuales",
    meta: "Compra mochilas escolares, casuales y modernas en Variedades Nora. Consulta modelos por WhatsApp.",
    image: "assets/img/optimized/categoria-mochilas.webp",
    keyword: "mochilas en Nicaragua",
    subcategories: ["mochilas/mochilas-escolares/", "mochilas/mochilas-casuales/", "mochilas/mochilas-para-mujer/"],
    productSlugs: ["mochila-juvenil-uso-diario", "mochila-escolar-moderna", "cangurera-moderna-ajustable"],
  },
  {
    slug: "mochilas/mochilas-escolares/",
    name: "Mochilas escolares",
    h1: "Mochilas escolares en Nicaragua",
    title: "Mochilas Escolares en Nicaragua | Variedades Nora",
    meta: "Mochilas escolares modernas para clases, universidad y uso diario. Consulta disponibilidad por WhatsApp.",
    image: "assets/img/optimized/categoria-mochilas.webp",
    keyword: "mochilas escolares en Nicaragua",
    parent: "mochilas/",
    productSlugs: ["mochila-escolar-moderna", "mochila-juvenil-uso-diario", "bolso-cruzado-moderno"],
  },
  {
    slug: "mochilas/mochilas-casuales/",
    name: "Mochilas casuales",
    h1: "Mochilas casuales para mujer",
    title: "Mochilas Casuales para Mujer | Variedades Nora",
    meta: "Mochilas casuales con estilo juvenil para actividades diarias. Compra por WhatsApp.",
    image: "assets/img/optimized/producto-mochila-urbana.webp",
    keyword: "mochilas casuales para mujer",
    parent: "mochilas/",
    productSlugs: ["mochila-juvenil-uso-diario", "mochila-escolar-moderna", "cangurera-moderna-ajustable"],
  },
  {
    slug: "mochilas/mochilas-para-mujer/",
    name: "Mochilas para mujer",
    h1: "Mochilas para mujer en Nicaragua",
    title: "Mochilas para Mujer en Nicaragua | Variedades Nora",
    meta: "Mochilas para mujer practicas, modernas y comodas para estudio, trabajo y salidas.",
    image: "assets/img/optimized/producto-mochila-urbana.webp",
    keyword: "mochilas para mujer",
    parent: "mochilas/",
    productSlugs: ["mochila-juvenil-uso-diario", "mochila-escolar-moderna", "bolso-elegante-para-mujer"],
  },
  {
    slug: "cangureras/",
    name: "Cangureras",
    h1: "Cangureras modernas en Nicaragua",
    title: "Cangureras Modernas en Nicaragua | Variedades Nora",
    meta: "Cangureras modernas, comodas y practicas para llevar lo esencial con estilo.",
    image: "assets/img/optimized/categoria-cangureras.webp",
    keyword: "cangureras modernas en Nicaragua",
    subcategories: ["cangureras/cangureras-modernas/", "cangureras/cangureras-para-mujer/"],
    productSlugs: ["cangurera-moderna-ajustable", "mochila-juvenil-uso-diario", "bolso-cruzado-moderno"],
  },
  {
    slug: "cangureras/cangureras-modernas/",
    name: "Cangureras modernas",
    h1: "Cangureras modernas para uso diario",
    title: "Cangureras Modernas para Uso Diario | Variedades Nora",
    meta: "Cangureras modernas y ajustables para llevar celular, llaves y basicos con comodidad.",
    image: "assets/img/optimized/producto-cangurera-casual.webp",
    keyword: "cangureras modernas",
    parent: "cangureras/",
    productSlugs: ["cangurera-moderna-ajustable", "mochila-juvenil-uso-diario", "cartera-compacta-con-textura"],
  },
  {
    slug: "cangureras/cangureras-para-mujer/",
    name: "Cangureras para mujer",
    h1: "Cangureras para mujer en Nicaragua",
    title: "Cangureras para Mujer en Nicaragua | Variedades Nora",
    meta: "Cangureras para mujer comodas, juveniles y faciles de combinar. Compra por WhatsApp.",
    image: "assets/img/optimized/categoria-cangureras.webp",
    keyword: "cangureras para mujer",
    parent: "cangureras/",
    productSlugs: ["cangurera-moderna-ajustable", "bolso-cruzado-moderno", "accesorios-de-moda-para-regalo"],
  },
  {
    slug: "perfumes/",
    name: "Perfumes",
    h1: "Perfumes para mujer en Nicaragua",
    title: "Perfumes para Mujer en Nicaragua | Variedades Nora",
    meta: "Perfumes para mujer y opciones ideales para regalo. Consulta disponibilidad por WhatsApp en Variedades Nora.",
    image: "assets/img/portfolio/Cosmetico/Cremas/625186152_1475484451245786_6504749630190652710_n.jpg",
    keyword: "perfumes para mujer en Nicaragua",
    subcategories: ["perfumes/perfumes-para-mujer/", "perfumes/perfumes-para-regalo/"],
    productSlugs: ["perfume-para-mujer-regalo", "accesorios-de-moda-para-regalo", "cartera-moderna-casual"],
  },
  {
    slug: "perfumes/perfumes-para-mujer/",
    name: "Perfumes para mujer",
    h1: "Perfumes para mujer",
    title: "Perfumes para Mujer | Variedades Nora Nicaragua",
    meta: "Perfumes para mujer, detalles femeninos y opciones para completar un regalo especial.",
    image: "assets/img/portfolio/Cosmetico/Cremas/625155681_1475484274579137_6151251292249748763_n.jpg",
    keyword: "perfumes para mujer",
    parent: "perfumes/",
    productSlugs: ["perfume-para-mujer-regalo", "accesorios-de-moda-para-regalo", "bolso-glam-de-temporada"],
  },
  {
    slug: "perfumes/perfumes-para-regalo/",
    name: "Perfumes para regalo",
    h1: "Perfumes ideales para regalo",
    title: "Perfumes para Regalo | Variedades Nora",
    meta: "Perfumes ideales para regalo, cumpleanos y detalles especiales. Consulta opciones disponibles por WhatsApp.",
    image: "assets/img/portfolio/Cosmetico/Cremas/624574351_1475484497912448_6028661081569907087_n.jpg",
    keyword: "perfumes ideales para regalo",
    parent: "perfumes/",
    productSlugs: ["perfume-para-mujer-regalo", "cartera-moderna-casual", "accesorios-de-moda-para-regalo"],
  },
  {
    slug: "ropa/",
    name: "Ropa",
    h1: "Ropa para mujer en Nicaragua",
    title: "Ropa para Mujer en Nicaragua | Variedades Nora",
    meta: "Ropa casual para mujer, blusas y vestidos para combinar con accesorios de moda. Consulta por WhatsApp.",
    image: "assets/img/optimized/hero-side.webp",
    keyword: "ropa para mujer en Nicaragua",
    subcategories: ["ropa/ropa-para-mujer/", "ropa/blusas/", "ropa/vestidos/"],
    productSlugs: ["blusa-casual-para-mujer", "bolso-elegante-para-mujer", "cartera-moderna-casual"],
  },
  {
    slug: "ropa/ropa-para-mujer/",
    name: "Ropa para mujer",
    h1: "Ropa para mujer",
    title: "Ropa para Mujer | Variedades Nora Nicaragua",
    meta: "Ropa para mujer y opciones casuales para combinar con bolsos, carteras y accesorios.",
    image: "assets/img/optimized/hero-side.webp",
    keyword: "ropa para mujer",
    parent: "ropa/",
    productSlugs: ["blusa-casual-para-mujer", "cartera-moderna-casual", "bolso-cruzado-moderno"],
  },
  {
    slug: "ropa/blusas/",
    name: "Blusas",
    h1: "Blusas para mujer",
    title: "Blusas para Mujer | Variedades Nora",
    meta: "Blusas para mujer, looks casuales y opciones para combinar con accesorios modernos.",
    image: "assets/img/optimized/hero-main.webp",
    keyword: "blusas para mujer",
    parent: "ropa/",
    productSlugs: ["blusa-casual-para-mujer", "bolso-elegante-para-mujer", "accesorios-de-moda-para-regalo"],
  },
  {
    slug: "ropa/vestidos/",
    name: "Vestidos",
    h1: "Vestidos para mujer",
    title: "Vestidos para Mujer | Variedades Nora",
    meta: "Vestidos para mujer y combinaciones con bolsos, carteras y accesorios de moda.",
    image: "assets/img/optimized/hero-bg.webp",
    keyword: "vestidos para mujer",
    parent: "ropa/",
    productSlugs: ["blusa-casual-para-mujer", "bolso-glam-de-temporada", "cartera-compacta-con-textura"],
  },
  {
    slug: "accesorios/",
    name: "Accesorios",
    h1: "Accesorios de moda en Nicaragua",
    title: "Accesorios de Moda en Nicaragua | Variedades Nora",
    meta: "Compra accesorios de moda, regalos para mujer y complementos para tu estilo en Variedades Nora.",
    image: "assets/img/optimized/logo-variedades-nora.webp",
    keyword: "accesorios de moda en Nicaragua",
    subcategories: ["accesorios/accesorios-de-moda/", "accesorios/regalos-para-mujer/"],
    productSlugs: ["accesorios-de-moda-para-regalo", "cartera-compacta-con-textura", "perfume-para-mujer-regalo"],
  },
  {
    slug: "accesorios/accesorios-de-moda/",
    name: "Accesorios de moda",
    h1: "Accesorios de moda para mujer",
    title: "Accesorios de Moda para Mujer | Variedades Nora",
    meta: "Accesorios de moda para mujer, detalles para completar tu look y regalar.",
    image: "assets/img/optimized/logo-variedades-nora.webp",
    keyword: "accesorios de moda para mujer",
    parent: "accesorios/",
    productSlugs: ["accesorios-de-moda-para-regalo", "cartera-moderna-casual", "bolso-cruzado-moderno"],
  },
  {
    slug: "accesorios/regalos-para-mujer/",
    name: "Regalos para mujer",
    h1: "Regalos para mujer en Nicaragua",
    title: "Regalos para Mujer en Nicaragua | Variedades Nora",
    meta: "Ideas de regalos para mujer: bolsos, carteras, perfumes, accesorios y detalles especiales.",
    image: "assets/img/optimized/producto-bolso-glam.webp",
    keyword: "regalos para mujer en Nicaragua",
    parent: "accesorios/",
    productSlugs: ["perfume-para-mujer-regalo", "cartera-moderna-casual", "accesorios-de-moda-para-regalo"],
  },
  {
    slug: "ofertas/",
    name: "Ofertas",
    h1: "Ofertas en bolsos, carteras y accesorios",
    title: "Ofertas en Bolsos, Carteras y Accesorios | Variedades Nora",
    meta: "Ofertas, promociones y ultimas unidades en bolsos, carteras, mochilas y accesorios.",
    image: "assets/img/optimized/producto-bolso-glam.webp",
    keyword: "ofertas en accesorios",
    productSlugs: ["producto-en-oferta-variedades-nora", "cartera-compacta-con-textura", "bolso-glam-de-temporada"],
  },
  {
    slug: "nuevos-ingresos/",
    name: "Nuevos ingresos",
    h1: "Nuevos ingresos en Variedades Nora",
    title: "Nuevos Ingresos | Variedades Nora Nicaragua",
    meta: "Descubre nuevos ingresos de bolsos, carteras, mochilas, perfumes, ropa y accesorios en Variedades Nora.",
    image: "assets/img/optimized/hero-main.webp",
    keyword: "nuevos ingresos Variedades Nora",
    productSlugs: ["cartera-moderna-casual", "bolso-glam-de-temporada", "blusa-casual-para-mujer"],
  },
];

const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
const productBySlug = new Map(allGridProducts.map((product) => [product.slug, product]));

const relatedCategories = [
  "bolsos/",
  "carteras/",
  "mochilas/",
  "cangureras/",
  "perfumes/",
  "ropa/",
  "accesorios/",
  "ofertas/",
  "nuevos-ingresos/",
  "accesorios/regalos-para-mujer/",
];

const blogPosts = [
  {
    slug: "blog/como-elegir-bolso-para-mujer/",
    title: "Como elegir el bolso ideal para cada ocasion",
    keyword: "como elegir un bolso para mujer",
    categorySlug: "bolsos/bolsos-para-mujer/",
    cta: "Ver bolsos para mujer",
    summary: "Guia practica para elegir tamano, color, material y estilo segun tu rutina.",
  },
  {
    slug: "blog/ideas-de-regalos-para-mujer/",
    title: "Ideas de regalos para mujer",
    keyword: "ideas de regalos para mujer",
    categorySlug: "accesorios/regalos-para-mujer/",
    cta: "Ver regalos para mujer",
    summary: "Opciones de bolsos, carteras, perfumes y accesorios para sorprender con buen gusto.",
  },
  {
    slug: "blog/carteras-modernas-para-combinar/",
    title: "Carteras modernas para combinar con tu outfit",
    keyword: "carteras modernas para mujer",
    categorySlug: "carteras/carteras-modernas/",
    cta: "Ver carteras modernas",
    summary: "Consejos para elegir carteras por color, textura y ocasion.",
  },
  {
    slug: "blog/que-mochila-comprar-para-universidad/",
    title: "Que mochila comprar para la universidad",
    keyword: "que mochila comprar para estudiar",
    categorySlug: "mochilas/mochilas-escolares/",
    cta: "Ver mochilas escolares",
    summary: "Aprende a comparar espacio, comodidad, material y estilo antes de comprar.",
  },
  {
    slug: "blog/perfumes-ideales-para-regalar/",
    title: "Perfumes ideales para regalar",
    keyword: "perfumes ideales para regalo",
    categorySlug: "perfumes/perfumes-para-regalo/",
    cta: "Ver perfumes para regalo",
    summary: "Como elegir perfumes y detalles para cumpleanos, sorpresas y ocasiones especiales.",
  },
  {
    slug: "blog/como-combinar-accesorios-de-moda/",
    title: "Como combinar accesorios de moda",
    keyword: "como combinar accesorios de moda",
    categorySlug: "accesorios/accesorios-de-moda/",
    cta: "Ver accesorios de moda",
    summary: "Ideas para combinar accesorios con bolsos, carteras, ropa casual y estilos diarios.",
  },
  {
    slug: "blog/tendencias-en-bolsos-y-carteras/",
    title: "Tendencias en bolsos y carteras",
    keyword: "tendencias en bolsos y carteras",
    categorySlug: "nuevos-ingresos/",
    cta: "Ver nuevos ingresos",
    summary: "Colores, formas y estilos que ayudan a renovar el look sin complicarte.",
  },
];

const legalPages = [
  {
    slug: "sobre-nosotros/",
    title: "Sobre Nosotros | Variedades Nora",
    h1: "Sobre Variedades Nora",
    meta: "Conoce Variedades Nora, tienda online de bolsos, carteras, mochilas, perfumes, ropa y accesorios en Nicaragua.",
    body: [
      "Variedades Nora es una tienda online en Nicaragua enfocada en productos de moda, accesorios y detalles utiles para mujer y publico general.",
      "Nuestra prioridad es ofrecer una compra cercana, clara y practica: puedes explorar categorias, revisar productos destacados y escribir por WhatsApp para confirmar precio, color, foto y disponibilidad.",
      "Trabajamos con nuevos ingresos, opciones para regalo, productos de uso diario y una seleccion pensada para combinar estilo, funcionalidad y precios accesibles.",
    ],
  },
  {
    slug: "contacto/",
    title: "Contacto | Variedades Nora Nicaragua",
    h1: "Contacto de Variedades Nora",
    meta: "Contacta a Variedades Nora por WhatsApp para consultar precios, disponibilidad, envios y productos.",
    body: [
      `WhatsApp: ${DISPLAY_PHONE}.`,
      `Ubicacion: ${ADDRESS}, Nicaragua.`,
      "Atendemos consultas sobre bolsos, carteras, mochilas, cangureras, perfumes, ropa, accesorios, ofertas y nuevos ingresos.",
    ],
  },
  {
    slug: "politica-de-envios/",
    title: "Politica de Envios | Variedades Nora",
    h1: "Politica de envios",
    meta: "Consulta la politica de envios de Variedades Nora para compras por WhatsApp en Nicaragua.",
    body: [
      "Los envios y entregas se coordinan por WhatsApp segun disponibilidad, ubicacion y tipo de producto.",
      "Antes de confirmar la compra, Variedades Nora informa precio, modelo, estado del producto, forma de entrega y cualquier costo asociado al envio.",
      "La disponibilidad puede cambiar porque algunos productos son de temporada o ultimas unidades.",
    ],
  },
  {
    slug: "politica-de-cambios/",
    title: "Politica de Cambios | Variedades Nora",
    h1: "Politica de cambios",
    meta: "Politica de cambios y condiciones de compra en Variedades Nora.",
    body: [
      "Los cambios deben coordinarse por WhatsApp y dependen del estado del producto, disponibilidad y condiciones acordadas al momento de la compra.",
      "Recomendamos revisar fotos, color, tamano, precio y detalles antes de confirmar el pedido.",
      "Los productos en oferta o ultimas unidades pueden tener condiciones especiales que se informan antes de comprar.",
    ],
  },
  {
    slug: "politica-de-privacidad/",
    title: "Politica de Privacidad | Variedades Nora",
    h1: "Politica de privacidad",
    meta: "Politica de privacidad de Variedades Nora para consultas y compras por WhatsApp.",
    body: [
      "Los datos compartidos en formularios o por WhatsApp se usan para responder consultas, coordinar compras y brindar atencion personalizada.",
      "Variedades Nora no solicita datos sensibles innecesarios para consultar productos.",
      "Puedes escribir por WhatsApp para solicitar aclaraciones sobre el uso de tus datos de contacto.",
    ],
  },
  {
    slug: "terminos-y-condiciones/",
    title: "Terminos y Condiciones | Variedades Nora",
    h1: "Terminos y condiciones",
    meta: "Terminos y condiciones de uso y compra en Variedades Nora.",
    body: [
      "El catalogo muestra productos, categorias y referencias comerciales sujetas a disponibilidad.",
      "Los precios, promociones y modelos pueden cambiar; por eso toda compra se confirma por WhatsApp antes de cerrar el pedido.",
      "El uso del sitio implica aceptar estas condiciones basicas de consulta, disponibilidad y compra guiada.",
    ],
  },
  {
    slug: "mapa-del-sitio/",
    title: "Mapa del Sitio | Variedades Nora",
    h1: "Mapa del sitio",
    meta: "Mapa del sitio de Variedades Nora con enlaces a categorias, productos, blog y politicas.",
    body: ["Explora las secciones principales de Variedades Nora desde esta pagina."],
    sitemap: true,
  },
];

function schemaScript(schema) {
  return `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
}

function head({ title, description, canonical, prefix, schema, type = "website" }) {
  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="author" content="Variedades Nora" />
    <meta name="theme-color" content="#f7dce5" />
    <meta name="description" content="${description}" />
    <meta name="keywords" content="Variedades Nora, tienda online en Nicaragua, bolsos en Nicaragua, carteras en Nicaragua, mochilas en Nicaragua, cangureras modernas, perfumes para mujer, ropa para mujer, accesorios de moda, regalos para mujer" />
    <title>${title}</title>
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/png" href="${link(prefix, "assets/img/logo-variedades-nora.png")}" />
    <meta property="og:locale" content="es_NI" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Variedades Nora" />
    <meta property="og:image" content="${BASE_URL}assets/img/logo-variedades-nora.png" />
    <meta property="og:image:alt" content="Logo de Variedades Nora, tienda online de variedades en Nicaragua" />
    <meta property="og:image:width" content="1019" />
    <meta property="og:image:height" content="1024" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${BASE_URL}assets/img/logo-variedades-nora.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="${link(prefix, "styles.css?v=20260430-seo")}" />
    ${schemaScript(schema)}
    <script defer src="${link(prefix, "script.js?v=20260430-seo")}"></script>`;
}

function header(prefix) {
  return `<a class="skip-link" href="#contenido">Saltar al contenido</a>
    <header class="site-header" data-header>
      <a class="brand" href="${homeAnchor(prefix, "inicio")}" aria-label="Ir al inicio de Variedades Nora">
        <img src="${link(prefix, "assets/img/optimized/logo-variedades-nora.webp")}" width="56" height="56" alt="Logo de Variedades Nora" fetchpriority="high" />
        <span>Variedades Nora</span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" data-menu-toggle>
        <span></span>
        <span></span>
      </button>
      <nav class="site-nav" aria-label="Navegacion principal" data-nav>
        <a href="${homeAnchor(prefix, "inicio")}">Inicio</a>
        <a href="${homeAnchor(prefix, "categorias")}">Categorias</a>
        <a href="${link(prefix, "bolsos/")}">Bolsos</a>
        <a href="${link(prefix, "carteras/")}">Carteras</a>
        <a href="${link(prefix, "mochilas/")}">Mochilas</a>
        <a href="${link(prefix, "ofertas/")}">Ofertas</a>
        <a href="${link(prefix, "blog/")}">Blog</a>
        <a href="${homeAnchor(prefix, "contacto")}">Contacto</a>
      </nav>
      <a class="whatsapp-link header-whatsapp" href="${wa("Hola, Variedades Nora. Quiero consultar el catalogo disponible.")}" data-whatsapp aria-label="Consultar por WhatsApp">
        <span class="wa-mark">WA</span>
        WhatsApp
      </a>
    </header>`;
}

function footer(prefix) {
  const categoryLinks = relatedCategories
    .map((slug) => {
      const category = categoryBySlug.get(slug);
      return `<a href="${link(prefix, slug)}">${category.name}</a>`;
    })
    .join("");

  return `<footer class="site-footer">
      <div class="container footer-seo-grid">
        <div class="footer-col">
          <a class="footer-brand" href="${homeAnchor(prefix, "inicio")}">
            <img src="${link(prefix, "assets/img/optimized/logo-variedades-nora.webp")}" width="56" height="56" alt="Logo Variedades Nora" loading="lazy" decoding="async" />
            <span>Variedades Nora</span>
          </a>
          <p>Tienda online de variedades, moda y accesorios en Nicaragua. Compra guiada por WhatsApp.</p>
          <address class="footer-address">${ADDRESS}</address>
          <p class="footer-contact">WhatsApp: <a href="tel:+${PHONE}">${DISPLAY_PHONE}</a> · Horario: 24/7</p>
        </div>
        <div class="footer-col">
          <h3>Categorias</h3>
          <div class="footer-links stacked">${categoryLinks}</div>
        </div>
        <div class="footer-col">
          <h3>Compra segura</h3>
          <div class="footer-links stacked">
            <a href="${link(prefix, "politica-de-envios/")}">Politica de envios</a>
            <a href="${link(prefix, "politica-de-cambios/")}">Politica de cambios</a>
            <a href="${link(prefix, "terminos-y-condiciones/")}">Terminos y condiciones</a>
            <a href="${link(prefix, "politica-de-privacidad/")}">Politica de privacidad</a>
            <a href="${link(prefix, "mapa-del-sitio/")}">Mapa del sitio</a>
          </div>
        </div>
        <div class="footer-col">
          <h3>Contacto</h3>
          <div class="footer-links stacked">
            <a href="${wa("Hola, Variedades Nora. Quiero consultar productos disponibles.")}" data-whatsapp>WhatsApp</a>
            <a href="https://www.facebook.com/share/1Az3mAWps9/" target="_blank" rel="noopener">Facebook</a>
            <a href="${link(prefix, "contacto/")}">Contacto</a>
            <a href="${link(prefix, "sobre-nosotros/")}">Sobre nosotros</a>
          </div>
          <p>Metodos de pago y entregas se confirman por WhatsApp antes de comprar.</p>
        </div>
      </div>
      <p class="copyright">© 2026 Variedades Nora. Todos los derechos reservados.</p>
    </footer>`;
}

function productCard(product, prefix, { detail = true } = {}) {
  const categoryHref = link(prefix, product.categorySlug);
  const productHref = link(prefix, `productos/${product.slug}/`);
  const message = `Hola, Variedades Nora. Quiero consultar precio y disponibilidad de ${product.name}.`;
  return `<article class="commerce-card reveal">
      <div class="product-image">
        <img src="${enc(link(prefix, product.image))}" alt="${product.name} disponible en Variedades Nora Nicaragua" loading="lazy" decoding="async" />
        <span>${product.badge}</span>
      </div>
      <div class="product-info">
        <p><a href="${categoryHref}">${product.category}</a></p>
        <h3>${product.name}</h3>
        <div class="product-rating" aria-label="Valoracion ${product.rating} de 5">★★★★★ <span>${product.rating} (${product.reviews})</span></div>
        <p class="product-description">${product.description}</p>
        <div class="product-meta-row">
          <strong class="product-price">${product.shortPrice}</strong>
          <span class="product-status">${product.status}</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-primary" href="${wa(message)}" data-whatsapp data-whatsapp-message="${message}">Comprar por WhatsApp</a>
          ${detail ? `<a class="btn btn-outline" href="${productHref}">Ver detalle</a>` : `<a class="btn btn-outline" href="${categoryHref}">Ver categoria</a>`}
        </div>
      </div>
    </article>`;
}

function relatedGrid(prefix, currentSlug = "") {
  return relatedCategories
    .filter((slug) => slug !== currentSlug)
    .slice(0, 10)
    .map((slug) => {
      const category = categoryBySlug.get(slug);
      return `<a class="related-card reveal" href="${link(prefix, slug)}">
          <strong>${category.name}</strong>
          <span>${category.keyword}</span>
        </a>`;
    })
    .join("");
}

function filtersHtml() {
  const groups = [
    ["Categoria", ["Bolsos", "Carteras", "Mochilas", "Cangureras", "Perfumes", "Ropa", "Accesorios"]],
    ["Material", ["Cuero sintetico", "Tela", "Lona", "Poliester"]],
    ["Color", ["Negro", "Cafe", "Rosado", "Blanco", "Beige", "Rojo", "Azul"]],
    ["Precio", ["C$0-C$500", "C$500-C$1,000", "C$1,000+"]],
    ["Uso", ["Diario", "Trabajo", "Universidad", "Fiesta", "Regalo"]],
    ["Estilo", ["Casual", "Elegante", "Moderno", "Juvenil", "Minimalista"]],
    ["Disponibilidad", ["Disponible", "Ultimas unidades", "Nuevos ingresos", "Ofertas"]],
  ];
  return `<aside class="shop-sidebar" aria-label="Filtros de productos">
      <div class="filter-panel">
        <h2>Filtros</h2>
        ${groups
          .map(
            ([name, items]) => `<div class="filter-group">
              <h3>${name}</h3>
              <div class="filter-pills">${items.map((item) => `<span>${item}</span>`).join("")}</div>
            </div>`
          )
          .join("")}
      </div>
    </aside>`;
}

function trustSection(prefix) {
  return `<section class="section trust-section">
      <div class="container">
        <div class="section-heading center reveal">
          <p class="eyebrow">Confianza y compra facil</p>
          <h2>Atencion cercana antes de comprar</h2>
          <p>Confirmamos fotos, colores, precios, disponibilidad, metodos de pago y entrega por WhatsApp para que compres con claridad.</p>
        </div>
        <div class="trust-grid">
          <article class="trust-summary reveal">
            <span class="trust-score">4.8/5</span>
            <strong>Valoracion promedio</strong>
            <p>Basada en comentarios recibidos por atencion, rapidez y claridad antes de comprar.</p>
          </article>
          <article class="testimonial-card reveal">
            <p>"Me respondieron rapido y pude confirmar el modelo antes de comprar."</p>
            <strong>Cliente de bolsos</strong>
          </article>
          <article class="testimonial-card reveal">
            <p>"Buena atencion por WhatsApp y opciones lindas para regalo."</p>
            <strong>Cliente de accesorios</strong>
          </article>
          <article class="testimonial-card reveal">
            <p>"Me ayudaron a elegir color y disponibilidad sin complicarme."</p>
            <strong>Cliente frecuente</strong>
          </article>
        </div>
        <div class="benefit-strip reveal">
          <span>Envios disponibles</span>
          <span>Atencion por WhatsApp</span>
          <span>Productos seleccionados</span>
          <span>Precios accesibles</span>
          <span>Nuevos ingresos cada semana</span>
        </div>
      </div>
    </section>`;
}

function seoBlocks(keyword) {
  return `<section class="section seo-blocks section-band">
      <div class="container seo-block-grid">
        <article class="seo-block reveal">
          <h2>¿Por que comprar bolsos y carteras en Variedades Nora?</h2>
          <p>Porque puedes comparar modelos, estilos, colores y precios con atencion personalizada. La tienda esta pensada para compras rapidas por WhatsApp, con productos seleccionados para uso diario, trabajo, salidas, universidad y regalos.</p>
        </article>
        <article class="seo-block reveal">
          <h2>Tienda online de variedades, moda y accesorios en Nicaragua</h2>
          <p>Variedades Nora organiza su catalogo por categorias claras para que Google, clientes y sistemas de IA entiendan que vende: bolsos, carteras, mochilas, cangureras, perfumes, ropa, accesorios, ofertas y nuevos ingresos.</p>
        </article>
        <article class="seo-block reveal">
          <h2>Productos para regalo, uso diario y estilo personal</h2>
          <p>Cada categoria responde a una intencion de busqueda distinta: comprar, comparar, regalar o descubrir novedades. Esto ayuda a posicionar busquedas como ${keyword}, accesorios de moda en Nicaragua y regalos para mujer.</p>
        </article>
        <article class="seo-block reveal">
          <h2>Compra facil por WhatsApp con atencion personalizada</h2>
          <p>Los botones de compra abren WhatsApp con mensajes preparados para consultar precio, disponibilidad y entrega. Asi el cliente no se pierde y la tienda convierte trafico organico en conversaciones reales.</p>
        </article>
      </div>
    </section>`;
}

function faqSection() {
  const faqs = [
    ["¿Que productos vende Variedades Nora?", "Variedades Nora vende bolsos, carteras, mochilas, cangureras, perfumes, ropa, accesorios, ofertas y nuevos ingresos."],
    ["¿Como puedo comprar?", "Puedes elegir un producto o categoria y escribir por WhatsApp para confirmar precio, color, disponibilidad y entrega."],
    ["¿Atienden en Nicaragua?", "Si. Variedades Nora atiende consultas y compras en Nicaragua."],
    ["¿Los precios y modelos son fijos?", "La disponibilidad puede cambiar, por eso cada producto se confirma por WhatsApp antes de comprar."],
  ];
  return `<section class="section faq">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Preguntas frecuentes</p>
          <h2>Respuestas rapidas para comprar</h2>
        </div>
        <div class="faq-grid">${faqs.map(([q, a]) => `<article class="faq-item reveal"><h3>${q}</h3><p>${a}</p></article>`).join("")}</div>
      </div>
    </section>`;
}

function baseOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${BASE_URL}#organization`,
    name: "Variedades Nora",
    url: BASE_URL,
    logo: `${BASE_URL}assets/img/logo-variedades-nora.png`,
    description: "Tienda online nicaraguense de bolsos, carteras, mochilas, cangureras, perfumes, ropa y accesorios de moda.",
    sameAs: ["https://www.facebook.com/share/1Az3mAWps9/"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${PHONE}`,
      contactType: "customer service",
      areaServed: "NI",
      availableLanguage: "es",
    },
  };
}

function storeSchema() {
  return {
    "@type": ["OnlineStore", "Store", "LocalBusiness"],
    "@id": `${BASE_URL}#store`,
    name: "Variedades Nora",
    url: BASE_URL,
    image: `${BASE_URL}assets/img/logo-variedades-nora.png`,
    telephone: `+${PHONE}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressCountry: "NI",
    },
    areaServed: { "@type": "Country", name: "Nicaragua" },
    acceptedPaymentMethod: ["Efectivo", "Transferencia bancaria", "Pago coordinado por WhatsApp"],
    knowsAbout: ["bolsos para mujer", "carteras modernas", "mochilas escolares", "cangureras modernas", "perfumes para mujer", "ropa para mujer", "accesorios de moda", "regalos para mujer"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "38",
    },
    potentialAction: {
      "@type": "ContactAction",
      name: "Consultar por WhatsApp",
      target: wa("Hola, Variedades Nora. Quiero consultar el catalogo disponible."),
    },
  };
}

function productSchema(product, url) {
  return {
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    image: `${BASE_URL}${product.image}`,
    description: product.description,
    brand: { "@id": `${BASE_URL}#organization` },
    category: product.category,
    sku: `VN-${product.slug.toUpperCase().slice(0, 24)}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
    offers: {
      "@type": "Offer",
      url,
      price: product.price,
      priceCurrency: "NIO",
      availability: product.status.includes("Ultimas") ? "https://schema.org/LimitedAvailability" : "https://schema.org/InStock",
      seller: { "@id": `${BASE_URL}#store` },
    },
  };
}

function breadcrumbsSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function faqSchema() {
  return {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Que productos vende Variedades Nora?",
        acceptedAnswer: { "@type": "Answer", text: "Variedades Nora vende bolsos, carteras, mochilas, cangureras, perfumes, ropa, accesorios de moda, ofertas y nuevos ingresos." },
      },
      {
        "@type": "Question",
        name: "¿Como se compra en Variedades Nora?",
        acceptedAnswer: { "@type": "Answer", text: "La compra se coordina por WhatsApp para confirmar precio, color, disponibilidad y entrega." },
      },
      {
        "@type": "Question",
        name: "¿Atienden en Nicaragua?",
        acceptedAnswer: { "@type": "Answer", text: "Si. Variedades Nora atiende clientes en Nicaragua." },
      },
    ],
  };
}

function homePage() {
  const prefix = "";
  const featured = products.slice(0, 6);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      baseOrganizationSchema(),
      storeSchema(),
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}#website`,
        name: "Variedades Nora",
        url: BASE_URL,
        publisher: { "@id": `${BASE_URL}#organization` },
        inLanguage: "es-NI",
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}#webpage`,
        url: BASE_URL,
        name: "Tienda Online de Variedades en Nicaragua | Variedades Nora",
        description: "Compra bolsos, carteras, mochilas, cangureras, perfumes, ropa y accesorios en Nicaragua con atencion por WhatsApp.",
        isPartOf: { "@id": `${BASE_URL}#website` },
        about: { "@id": `${BASE_URL}#store` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${BASE_URL}assets/img/optimized/hero-main.webp` },
        inLanguage: "es-NI",
      },
      {
        "@type": "OfferCatalog",
        name: "Catalogo ecommerce de Variedades Nora",
        itemListElement: categories
          .filter((category) => !category.parent)
          .map((category) => ({ "@type": "OfferCatalog", name: category.name, url: `${BASE_URL}${category.slug}` })),
      },
      {
        "@type": "ItemList",
        name: "Productos destacados de Variedades Nora",
        itemListElement: featured.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: productSchema(product, `${BASE_URL}productos/${product.slug}/`),
        })),
      },
      faqSchema(),
    ],
  };

  const categoryCards = relatedCategories
    .filter((slug) => !slug.includes("/") || ["ofertas/", "nuevos-ingresos/"].includes(slug))
    .slice(0, 9)
    .map((slug, index) => {
      const category = categoryBySlug.get(slug);
      return `<a class="category-card reveal" href="${category.slug}">
          <img src="${enc(category.image)}" width="840" height="472" alt="${category.h1}" loading="lazy" decoding="async" />
          <div><span>${String(index + 1).padStart(2, "0")}</span><h3>${category.name}</h3><p>${category.meta}</p></div>
        </a>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="es">
  <head>
${head({
  title: "Tienda Online de Variedades en Nicaragua | Variedades Nora",
  description: "Compra bolsos, carteras, mochilas, cangureras, perfumes, ropa y accesorios en Nicaragua con atencion por WhatsApp.",
  canonical: BASE_URL,
  prefix,
  schema,
})}
  </head>
  <body>
    ${header(prefix)}
    <main id="contenido">
      <section class="hero section-band" id="inicio">
        <div class="hero-particles" aria-hidden="true"></div>
        <div class="hero-media">
          <img class="hero-photo hero-photo-main" src="assets/img/optimized/hero-main.webp" width="900" height="506" alt="Bolsos modernos para mujer en Variedades Nora Nicaragua" fetchpriority="high" decoding="async" />
          <img class="hero-photo hero-photo-side" src="assets/img/optimized/hero-side.webp" width="760" height="427" alt="Carteras, mochilas y accesorios de moda en Nicaragua" decoding="async" />
          <img class="hero-logo-mark" src="assets/img/optimized/logo-variedades-nora.webp" width="560" height="563" alt="Variedades Nora tienda online de variedades" decoding="async" />
        </div>
        <div class="container hero-content">
          <p class="eyebrow">Tienda online de variedades en Nicaragua</p>
          <h1>Bolsos, carteras, mochilas, perfumes, ropa y accesorios en Nicaragua</h1>
          <p class="hero-copy">Variedades Nora es una tienda online de moda y accesorios en Nicaragua. Encuentra bolsos para mujer, carteras modernas, mochilas, cangureras, perfumes, ropa casual, regalos y nuevos ingresos con compra rapida por WhatsApp.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#catalogo">Ver catalogo</a>
            <a class="btn btn-soft" href="${wa("Hola, Variedades Nora. Quiero ver el catalogo y consultar disponibilidad.")}" data-whatsapp>Comprar por WhatsApp</a>
          </div>
          <div class="hero-highlights" aria-label="Beneficios rapidos de Variedades Nora">
            <span>Compra por WhatsApp</span>
            <span>Productos seleccionados</span>
            <span>Nuevos ingresos</span>
            <span>Ofertas y regalos</span>
            <span>Atencion en Nicaragua</span>
          </div>
        </div>
      </section>

      <section class="section categories" id="categorias">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow">Compra por categoria</p>
            <h2>Categorias principales de Variedades Nora</h2>
            <p>Arquitectura ecommerce pensada para que encuentres rapido lo que buscas y para que Google entienda cada categoria comercial.</p>
          </div>
          <div class="category-grid">${categoryCards}</div>
        </div>
      </section>

      <section class="section products section-band" id="destacados">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow">Modelos mas vendidos</p>
            <h2>Productos destacados para comprar por WhatsApp</h2>
            <p>Cards ecommerce con precio visible, disponibilidad, valoracion, descripcion breve y CTA directo.</p>
          </div>
          <div class="product-grid commerce-product-grid">${featured.map((product) => productCard(product, prefix)).join("")}</div>
        </div>
      </section>

      <section class="section catalog" id="catalogo">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow">Todos los productos</p>
            <h2>Catalogo de moda, accesorios y regalos</h2>
            <p>Explora bolsos de mano, bolsos cruzados, carteras elegantes, mochilas casuales, mochilas escolares, cangureras modernas, perfumes, ropa casual, accesorios, ofertas y nuevos ingresos.</p>
          </div>
          <div class="shop-layout">
            ${filtersHtml()}
            <div class="shop-main">
              <div class="product-grid commerce-product-grid">${allGridProducts.slice(0, 12).map((product) => productCard(product, prefix)).join("")}</div>
            </div>
          </div>
        </div>
      </section>

      ${trustSection(prefix)}
      ${seoBlocks("tienda online de variedades en Nicaragua")}

      <section class="section related-section">
        <div class="container">
          <div class="section-heading center reveal">
            <p class="eyebrow">Enlaces internos</p>
            <h2>Otras categorias que podrian interesarte</h2>
          </div>
          <div class="related-grid">${relatedGrid(prefix)}</div>
        </div>
      </section>

      <section class="section blog-preview section-band" id="blog">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow">Blog SEO ecommerce</p>
            <h2>Guias para elegir mejor y comprar con confianza</h2>
          </div>
          <div class="blog-grid">
            ${blogPosts.slice(0, 6).map((post) => `<article class="blog-card reveal"><h3><a href="${post.slug}">${post.title}</a></h3><p>${post.summary}</p><a href="${post.categorySlug}">${post.cta}</a></article>`).join("")}
          </div>
        </div>
      </section>

      ${faqSection()}

      <section class="section contact" id="contacto">
        <div class="container contact-layout">
          <div class="contact-copy reveal">
            <p class="eyebrow">Contacto</p>
            <h2>Compra facil por WhatsApp con atencion personalizada</h2>
            <p>Escribenos para consultar precios, modelos, colores, fotos, ofertas, nuevos ingresos, envios y disponibilidad antes de comprar.</p>
            <a class="btn btn-primary" href="${wa("Hola, Variedades Nora. Quiero consultar productos disponibles.")}" data-whatsapp>Consultar por WhatsApp</a>
            <ul class="contact-details" aria-label="Datos de contacto de Variedades Nora">
              <li><strong>WhatsApp:</strong> <a href="tel:+${PHONE}">${DISPLAY_PHONE}</a></li>
              <li><strong>Direccion:</strong> ${ADDRESS}</li>
              <li><strong>Horario:</strong> 24/7 de lunes a domingo</li>
              <li><strong>Area de atencion:</strong> Nicaragua</li>
              <li><strong>Productos:</strong> bolsos, carteras, mochilas, cangureras, perfumes, ropa y accesorios</li>
            </ul>
          </div>
          <form class="contact-form reveal" data-contact-form>
            <label>Nombre<input type="text" name="name" placeholder="Tu nombre" autocomplete="name" required /></label>
            <label>Producto de interes
              <select name="category" required>
                <option value="">Selecciona una opcion</option>
                <option value="Bolsos">Bolsos</option>
                <option value="Carteras">Carteras</option>
                <option value="Mochilas">Mochilas</option>
                <option value="Cangureras">Cangureras</option>
                <option value="Perfumes">Perfumes</option>
                <option value="Ropa">Ropa</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Ofertas">Ofertas</option>
              </select>
            </label>
            <label>Mensaje<textarea name="message" rows="4" placeholder="Cuentanos que estas buscando"></textarea></label>
            <button class="btn btn-dark" type="submit">Enviar consulta por WhatsApp</button>
          </form>
        </div>
      </section>
    </main>
    <a class="floating-whatsapp" href="${wa("Hola, Variedades Nora. Quiero comprar por WhatsApp.")}" data-whatsapp aria-label="Abrir WhatsApp de Variedades Nora">WhatsApp</a>
    ${footer(prefix)}
  </body>
</html>`;
}

function defaultIntro(category) {
  return category.intro || `En Variedades Nora puedes explorar ${category.name.toLowerCase()} con enfoque en estilo, uso diario, regalos y compra rapida por WhatsApp. Esta pagina esta optimizada para la busqueda ${category.keyword}, con productos destacados, filtros utiles, categorias relacionadas, preguntas frecuentes y enlaces internos hacia secciones comerciales importantes. Revisa los modelos, compara opciones por material, color, precio, uso, tamano, estilo, disponibilidad y promociones. Si encuentras una opcion que te interesa, escribe por WhatsApp para confirmar precio, fotos, colores y entrega antes de comprar.`;
}

function categoryPage(category) {
  const relativePath = `${category.slug}index.html`;
  const prefix = rootPrefixFor(relativePath);
  const canonical = pageUrl(relativePath);
  const pageProducts = (category.productSlugs || products.slice(0, 3).map((p) => p.slug)).map((slug) => productBySlug.get(slug)).filter(Boolean);
  const allProducts = [...pageProducts, ...allGridProducts.filter((product) => !pageProducts.some((p) => p.slug === product.slug))].slice(0, 12);
  const crumbs = [{ name: "Inicio", url: BASE_URL }];
  if (category.parent) {
    const parent = categoryBySlug.get(category.parent);
    crumbs.push({ name: parent.name, url: `${BASE_URL}${parent.slug}` });
  }
  crumbs.push({ name: category.name, url: canonical });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      baseOrganizationSchema(),
      storeSchema(),
      breadcrumbsSchema(crumbs),
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#collection`,
        url: canonical,
        name: category.h1,
        description: category.meta,
        isPartOf: { "@id": `${BASE_URL}#website` },
        about: { "@id": `${BASE_URL}#store` },
        inLanguage: "es-NI",
      },
      {
        "@type": "ItemList",
        name: category.h1,
        itemListElement: allProducts.slice(0, 6).map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: productSchema(product, `${BASE_URL}productos/${product.slug}/`),
        })),
      },
      faqSchema(),
    ],
  };

  const subcategoryLinks = (category.subcategories || [])
    .map((slug) => categoryBySlug.get(slug))
    .filter(Boolean)
    .map((item) => `<a class="btn btn-outline" href="${link(prefix, item.slug)}">${item.name}</a>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="es">
  <head>
${head({ title: category.title, description: category.meta, canonical, prefix, schema })}
  </head>
  <body>
    ${header(prefix)}
    <main id="contenido">
      <section class="category-hero section-band">
        <div class="container category-hero-grid">
          <div class="category-copy reveal">
            <nav class="breadcrumb" aria-label="Breadcrumb">${crumbs.map((item, index) => (index + 1 === crumbs.length ? `<span>${item.name}</span>` : `<a href="${index === 0 ? homeAnchor(prefix) : link(prefix, item.url.replace(BASE_URL, ""))}">${item.name}</a>`)).join("<span>/</span>")}</nav>
            <p class="eyebrow">${category.keyword}</p>
            <h1>${category.h1}</h1>
            <p>${defaultIntro(category)}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="${wa(`Hola, Variedades Nora. Quiero consultar ${category.name}.`)}" data-whatsapp>Comprar por WhatsApp</a>
              <a class="btn btn-soft" href="#productos">Ver productos</a>
            </div>
            ${subcategoryLinks ? `<div class="subcategory-actions">${subcategoryLinks}</div>` : ""}
          </div>
          <div class="category-banner reveal">
            <img src="${enc(link(prefix, category.image))}" alt="${category.h1} en Variedades Nora" width="900" height="620" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      <section class="section catalog" id="productos">
        <div class="container shop-layout">
          ${filtersHtml()}
          <div class="shop-main">
            <div class="section-heading reveal">
              <p class="eyebrow">TOP ventas / Nuevo / Oferta</p>
              <h2>Modelos mas vendidos</h2>
            </div>
            <div class="product-grid commerce-product-grid">${pageProducts.map((product) => productCard(product, prefix)).join("")}</div>
            <div class="section-heading reveal all-products-heading">
              <p class="eyebrow">Catalogo de categoria</p>
              <h2>Todos los productos</h2>
            </div>
            <div class="product-grid commerce-product-grid">${allProducts.map((product) => productCard(product, prefix)).join("")}</div>
            <p class="pagination-note">&lt; Pagina 1 de 1 &gt;</p>
          </div>
        </div>
      </section>

      ${trustSection(prefix)}
      ${seoBlocks(category.keyword)}

      <section class="section related-section">
        <div class="container">
          <div class="section-heading center reveal">
            <p class="eyebrow">Categorias relacionadas</p>
            <h2>Otras categorias que podrian interesarte</h2>
          </div>
          <div class="related-grid">${relatedGrid(prefix, category.slug)}</div>
        </div>
      </section>
      ${faqSection()}
    </main>
    <a class="floating-whatsapp" href="${wa(`Hola, Variedades Nora. Quiero consultar ${category.name}.`)}" data-whatsapp aria-label="Abrir WhatsApp de Variedades Nora">WhatsApp</a>
    ${footer(prefix)}
  </body>
</html>`;
}

function productPage(product) {
  const relativePath = `productos/${product.slug}/index.html`;
  const prefix = rootPrefixFor(relativePath);
  const canonical = pageUrl(relativePath);
  const category = categoryBySlug.get(product.categorySlug);
  const crumbs = [
    { name: "Inicio", url: BASE_URL },
    { name: product.category, url: `${BASE_URL}${product.categorySlug}` },
    { name: product.name, url: canonical },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [baseOrganizationSchema(), storeSchema(), breadcrumbsSchema(crumbs), productSchema(product, canonical), faqSchema()],
  };
  const related = allGridProducts.filter((item) => item.slug !== product.slug).slice(0, 3);
  return `<!DOCTYPE html>
<html lang="es">
  <head>
${head({
  title: `${product.name} | Variedades Nora Nicaragua`,
  description: `${product.description} Consulta precio, color y disponibilidad por WhatsApp en Variedades Nora.`,
  canonical,
  prefix,
  schema,
  type: "product",
})}
  </head>
  <body>
    ${header(prefix)}
    <main id="contenido">
      <section class="product-detail section-band">
        <div class="container product-detail-grid">
          <div class="product-gallery reveal">
            <nav class="breadcrumb" aria-label="Breadcrumb">${crumbs.map((item, index) => (index + 1 === crumbs.length ? `<span>${item.name}</span>` : `<a href="${index === 0 ? homeAnchor(prefix) : link(prefix, item.url.replace(BASE_URL, ""))}">${item.name}</a>`)).join("<span>/</span>")}</nav>
            <img src="${enc(link(prefix, product.image))}" alt="${product.name} en Variedades Nora" width="900" height="900" loading="eager" decoding="async" />
          </div>
          <div class="product-summary reveal">
            <p class="eyebrow">${product.category}</p>
            <h1>${product.name}</h1>
            <div class="product-rating">★★★★★ <span>${product.rating} (${product.reviews} opiniones)</span></div>
            <p>${product.description}</p>
            <strong class="product-price product-price-large">${product.shortPrice}</strong>
            <p class="product-status">${product.status}</p>
            <dl class="spec-list">
              <div><dt>Categoria</dt><dd><a href="${link(prefix, product.categorySlug)}">${product.category}</a></dd></div>
              <div><dt>Material</dt><dd>${product.material || "Consultar"}</dd></div>
              <div><dt>Color</dt><dd>${product.color || "Consultar"}</dd></div>
              <div><dt>Uso recomendado</dt><dd>${product.use || "Uso diario y regalo"}</dd></div>
              <div><dt>Estilo</dt><dd>${product.style || "Moderno"}</dd></div>
            </dl>
            <div class="card-actions">
              <a class="btn btn-primary" href="${wa(`Hola, Variedades Nora. Quiero comprar o consultar ${product.name}.`)}" data-whatsapp>Comprar por WhatsApp</a>
              <a class="btn btn-outline" href="${link(prefix, category.slug)}">Volver a ${category.name}</a>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow">Productos relacionados</p>
            <h2>Tambien podria interesarte</h2>
          </div>
          <div class="product-grid commerce-product-grid">${related.map((item) => productCard(item, prefix)).join("")}</div>
        </div>
      </section>
      ${trustSection(prefix)}
    </main>
    <a class="floating-whatsapp" href="${wa(`Hola, Variedades Nora. Quiero consultar ${product.name}.`)}" data-whatsapp aria-label="Abrir WhatsApp de Variedades Nora">WhatsApp</a>
    ${footer(prefix)}
  </body>
</html>`;
}

function blogIndex() {
  const relativePath = "blog/index.html";
  const prefix = rootPrefixFor(relativePath);
  const canonical = pageUrl(relativePath);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      baseOrganizationSchema(),
      storeSchema(),
      breadcrumbsSchema([
        { name: "Inicio", url: BASE_URL },
        { name: "Blog", url: canonical },
      ]),
      {
        "@type": "Blog",
        "@id": `${canonical}#blog`,
        name: "Blog de Variedades Nora",
        url: canonical,
        description: "Guias de compra sobre bolsos, carteras, mochilas, perfumes, accesorios y regalos.",
      },
    ],
  };
  return `<!DOCTYPE html>
<html lang="es">
  <head>
${head({ title: "Blog SEO Ecommerce | Variedades Nora", description: "Guias para elegir bolsos, carteras, mochilas, perfumes, accesorios y regalos en Variedades Nora.", canonical, prefix, schema })}
  </head>
  <body>
    ${header(prefix)}
    <main id="contenido">
      <section class="category-hero section-band">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="${homeAnchor(prefix)}">Inicio</a><span>/</span><span>Blog</span></nav>
          <p class="eyebrow">Blog SEO ecommerce</p>
          <h1>Guias para elegir, regalar y comprar mejor</h1>
          <p class="hero-copy">Contenido informacional para atraer busquedas de Google y convertirlas en consultas por WhatsApp hacia categorias comerciales.</p>
        </div>
      </section>
      <section class="section">
        <div class="container blog-grid">${blogPosts.map((post) => `<article class="blog-card reveal"><h2><a href="${link(prefix, post.slug)}">${post.title}</a></h2><p><strong>Keyword:</strong> ${post.keyword}</p><p>${post.summary}</p><a class="btn btn-outline" href="${link(prefix, post.categorySlug)}">${post.cta}</a></article>`).join("")}</div>
      </section>
    </main>
    ${footer(prefix)}
  </body>
</html>`;
}

function blogPostPage(post) {
  const relativePath = `${post.slug}index.html`;
  const prefix = rootPrefixFor(relativePath);
  const canonical = pageUrl(relativePath);
  const category = categoryBySlug.get(post.categorySlug);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      baseOrganizationSchema(),
      storeSchema(),
      breadcrumbsSchema([
        { name: "Inicio", url: BASE_URL },
        { name: "Blog", url: `${BASE_URL}blog/` },
        { name: post.title, url: canonical },
      ]),
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.summary,
        url: canonical,
        author: { "@id": `${BASE_URL}#organization` },
        publisher: { "@id": `${BASE_URL}#organization` },
        inLanguage: "es-NI",
      },
    ],
  };
  return `<!DOCTYPE html>
<html lang="es">
  <head>
${head({ title: `${post.title} | Variedades Nora`, description: post.summary, canonical, prefix, schema, type: "article" })}
  </head>
  <body>
    ${header(prefix)}
    <main id="contenido">
      <article class="section policy-content">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="${homeAnchor(prefix)}">Inicio</a><span>/</span><a href="${link(prefix, "blog/")}">Blog</a><span>/</span><span>${post.title}</span></nav>
          <p class="eyebrow">${post.keyword}</p>
          <h1>${post.title}</h1>
          <p>${post.summary}</p>
          <h2>Que debes revisar antes de comprar</h2>
          <p>Define el uso principal, compara tamano, color, material, precio y disponibilidad. En Variedades Nora puedes pedir ayuda por WhatsApp para elegir una opcion que combine con tu estilo, presupuesto y ocasion.</p>
          <h2>Recomendacion de Variedades Nora</h2>
          <p>Elige productos versatiles si quieres usarlos a diario y opciones mas elegantes si buscas un regalo o complemento para una salida especial. Siempre confirma fotos reales y disponibilidad antes de comprar.</p>
          <h2>Categoria recomendada</h2>
          <p>Para pasar de la guia a la compra, revisa la categoria relacionada: <a href="${link(prefix, post.categorySlug)}">${category.name}</a>.</p>
          <a class="btn btn-primary" href="${link(prefix, post.categorySlug)}">${post.cta}</a>
        </div>
      </article>
    </main>
    ${footer(prefix)}
  </body>
</html>`;
}

function legalPage(page) {
  const relativePath = `${page.slug}index.html`;
  const prefix = rootPrefixFor(relativePath);
  const canonical = pageUrl(relativePath);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      baseOrganizationSchema(),
      storeSchema(),
      breadcrumbsSchema([
        { name: "Inicio", url: BASE_URL },
        { name: page.h1, url: canonical },
      ]),
      { "@type": "WebPage", name: page.h1, url: canonical, description: page.meta, inLanguage: "es-NI" },
    ],
  };
  const sitemapLinks = page.sitemap
    ? `<div class="sitemap-columns">
        <div><h2>Categorias</h2>${categories.map((category) => `<a href="${link(prefix, category.slug)}">${category.name}</a>`).join("")}</div>
        <div><h2>Productos</h2>${products.map((product) => `<a href="${link(prefix, `productos/${product.slug}/`)}">${product.name}</a>`).join("")}</div>
        <div><h2>Blog y politicas</h2>${blogPosts.map((post) => `<a href="${link(prefix, post.slug)}">${post.title}</a>`).join("")}${legalPages.filter((item) => item.slug !== page.slug).map((item) => `<a href="${link(prefix, item.slug)}">${item.h1}</a>`).join("")}</div>
        <div><h2>Google</h2><a href="${GOOGLE_BUSINESS_URL}" target="_blank" rel="noopener">Ver ubicacion en Google</a><a href="${GOOGLE_REVIEW_URL}" target="_blank" rel="noopener">Valorar Variedades Nora en Google</a></div>
      </div>`
    : "";
  return `<!DOCTYPE html>
<html lang="es">
  <head>
${head({ title: page.title, description: page.meta, canonical, prefix, schema })}
  </head>
  <body>
    ${header(prefix)}
    <main id="contenido">
      <section class="section policy-content">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="${homeAnchor(prefix)}">Inicio</a><span>/</span><span>${page.h1}</span></nav>
          <p class="eyebrow">Variedades Nora</p>
          <h1>${page.h1}</h1>
          ${page.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          ${sitemapLinks}
          <a class="btn btn-primary" href="${wa("Hola, Variedades Nora. Quiero hacer una consulta.")}" data-whatsapp>Contactar por WhatsApp</a>
        </div>
      </section>
    </main>
    ${footer(prefix)}
  </body>
</html>`;
}

function sitemapXml(paths) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (relativePath) => `  <url>
    <loc>${pageUrl(relativePath)}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${relativePath.includes("blog/") ? "monthly" : "weekly"}</changefreq>
    <priority>${relativePath === "index.html" ? "1.0" : relativePath.includes("productos/") ? "0.8" : "0.9"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

function llmsTxt(paths) {
  return `# Variedades Nora

Variedades Nora es una tienda online en Nicaragua de bolsos, carteras, mochilas, cangureras, perfumes, ropa, accesorios de moda, ofertas, nuevos ingresos y regalos para mujer.

Compra principal: por WhatsApp en ${wa("Hola, Variedades Nora. Quiero consultar productos disponibles.")}
Telefono: ${DISPLAY_PHONE}
Ubicacion: ${ADDRESS}, Nicaragua.
Ficha de Google: ${GOOGLE_BUSINESS_URL}
Valorar en Google: ${GOOGLE_REVIEW_URL}

Paginas comerciales principales:
- ${BASE_URL}bolsos/ - Bolsos en Nicaragua
- ${BASE_URL}bolsos/bolsos-para-mujer/ - Bolsos para mujer en Nicaragua
- ${BASE_URL}carteras/ - Carteras para mujer
- ${BASE_URL}mochilas/ - Mochilas escolares y casuales
- ${BASE_URL}cangureras/ - Cangureras modernas
- ${BASE_URL}perfumes/ - Perfumes para mujer
- ${BASE_URL}ropa/ - Ropa para mujer
- ${BASE_URL}accesorios/ - Accesorios de moda
- ${BASE_URL}ofertas/ - Ofertas
- ${BASE_URL}nuevos-ingresos/ - Nuevos ingresos

Politicas importantes:
- ${BASE_URL}politica-de-envios/
- ${BASE_URL}politica-de-cambios/
- ${BASE_URL}politica-de-privacidad/
- ${BASE_URL}terminos-y-condiciones/

Sitemap XML: ${BASE_URL}sitemap.xml
`;
}

function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}sitemap.xml
`;
}

function build() {
  const paths = ["index.html"];
  writeFile("index.html", homePage());

  categories.forEach((category) => {
    const relativePath = `${category.slug}index.html`;
    writeFile(relativePath, categoryPage(category));
    paths.push(relativePath);
  });

  allGridProducts.forEach((product) => {
    const relativePath = `productos/${product.slug}/index.html`;
    writeFile(relativePath, productPage(product));
    paths.push(relativePath);
  });

  writeFile("blog/index.html", blogIndex());
  paths.push("blog/index.html");

  blogPosts.forEach((post) => {
    const relativePath = `${post.slug}index.html`;
    writeFile(relativePath, blogPostPage(post));
    paths.push(relativePath);
  });

  legalPages.forEach((page) => {
    const relativePath = `${page.slug}index.html`;
    writeFile(relativePath, legalPage(page));
    paths.push(relativePath);
  });

  writeFile("sitemap.xml", sitemapXml(paths));
  writeFile("robots.txt", robotsTxt());
  writeFile("llms.txt", llmsTxt(paths));
  writeFile("seo-implementation-notes.md", `# Implementacion SEO Variedades Nora

Fecha: ${LASTMOD}

Se genero una arquitectura ecommerce estatica para GitHub Pages con home, categorias, subcategorias, productos destacados, blog, politicas, sitemap, robots y llms.txt.

## Datos estructurados aplicados

- Organization
- OnlineStore
- LocalBusiness
- WebSite
- WebPage
- CollectionPage
- Product
- Offer
- ItemList
- BreadcrumbList
- FAQPage
- AggregateRating

## Nota de calidad

Las valoraciones visibles y marcadas en schema deben mantenerse solo si la tienda conserva comentarios reales de clientes. Si no se quieren usar ratings, elimina aggregateRating de products y store en tools/build-seo-site.js y vuelve a ejecutar el generador.
`);

  console.log(`SEO site generated: ${paths.length} URLs`);
}

build();
