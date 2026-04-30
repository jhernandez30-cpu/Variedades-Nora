# Implementacion SEO Variedades Nora

Fecha: 2026-04-30

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
