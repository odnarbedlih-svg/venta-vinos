# 🍷 Paohil Vinería Artesanal - Tienda Online de Vinos de Autor

Sitio web e-commerce moderno, responsive y personalizado para **Paohil Vinería Artesanal**, inspirado en la estructura y seriedad de *La Vinería* (lavineria.com.co).

---

## 🌟 Características Principales

1. **Cumplimiento Legal Colombiano (Ley 30 de 1986 y Ley 124 de 1994)**:
   - Advertencia legal en la barra superior.
   - Frase legal en el Hero Banner: *"Al ingresar a esta página certifico que soy mayor de edad. El exceso de alcohol es perjudicial para la salud"*.
   - **Modal de verificación de edad (+18)** al ingresar a la tienda con guardado en `localStorage`.

2. **Los 4 Pilares de Confianza (Referencia solicitada)**:
   - 🚚 **ENVÍOS A TODA COLOMBIA**: Bogotá, Medellín, Cali, Barranquilla y demás municipios con empaque antichoque para botellas de vidrio.
   - 🔒 **COMPRA SEGURA**: Certificación de seguridad SSL.
   - 💳 **PAGA COMO QUIERAS**: PSE, Nequi, Daviplata, Tarjetas y Pago Contra Entrega.
   - 📍 **PUNTOS DE VENTA & CATAS**: Visita cavas aliadas y experiencias de cata.

3. **Catálogo Dinámico e Interactivo de Vinos**:
   - Vinos tintos (Gran Reserva Malbec, Cabernet Sauvignon, Carmenere).
   - Vinos blancos (Sauvignon Blanc Valle Floral).
   - Vinos rosados (Rosé Syrah Silvestre).
   - Vinos artesanales tradicionales y dulces (Isabella Tradición Dulce, Espumoso Brut Método Tradicional, Blend Maestro 18 meses).
   - Precios en pesos colombianos (**COP**).

4. **Buscador en Vivo y Filtros**:
   - Búsqueda instantánea por nombre de vino, cepa o región.
   - Filtros por categoría y ordenamiento por precio o calificación.

5. **Asesor Sommelier Interactivo (Maridaje)**:
   - Permite al cliente seleccionar qué va a cenar (Carnes/Asados, Pastas/Quesos, Pescados/Mariscos, Postres) y filtra inmediatamente el vino ideal.

6. **Ficha Técnica de Cata (Quick View Modal)**:
   - Notas de cata completas: Vista, Nariz, Boca, Maridaje sugerido, Graduación alcohólica y Temperatura óptima de servicio.

7. **Carrito de Compras Completo**:
   - Control de cantidades (+) y (-).
   - Barra de progreso interactiva para **Envío Gratis** (compras mayores a $150.000 COP).
   - **Completar pedido por WhatsApp** con mensaje pre-armado y detalle de botellas.
   - **Checkout directo PSE / Tarjetas / Nequi** con modal y generación de recibo de compra.

8. **Botón Flotante de WhatsApp**:
   - Conexión directa con sommelier o asesor de ventas en vivo.

---

## 🚀 ¿Cómo abrir y ver la página en tu navegador?

Puedes abrir directamente el archivo `index.html` en tu navegador de preferencia (Edge, Chrome, Brave, Firefox):

- **Ruta del archivo**:
  `C:\Users\LEIDY\.gemini\antigravity\scratch\paohil-vineria\index.html`

O ejecutando en PowerShell:
```powershell
Start-Process "C:\Users\LEIDY\.gemini\antigravity\scratch\paohil-vineria\index.html"
```

---

## 🛠️ Personalización

- **Número de WhatsApp**: Puedes cambiar el número `573105559876` en `app.js` en las funciones `checkoutWhatsApp` y `buyDirectWhatsApp`, así como en los enlaces de `index.html`.
- **Precios y Productos**: Todos los productos están organizados en el arreglo `WINE_PRODUCTS` dentro de `app.js`. Puedes editar precios, fotos, descripciones o agregar nuevas botellas fácilmente.
