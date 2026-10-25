/**
 * PAOHIL VINERÍA ARTESANAL
 * Logica e interactividad de la tienda virtual de vinos
 */

// Catálogo de productos artesanales
const WINE_PRODUCTS = [
  {
    id: 'vino-1',
    name: 'Paohil Gran Reserva Malbec',
    category: 'tintos',
    price: 68000,
    oldPrice: 78000,
    badge: 'Más Vendido',
    badgeType: 'badge-award',
    origin: 'Valle de Leyva, Colombia',
    cepa: 'Malbec 100%',
    alcohol: '13.8% Vol.',
    temp: '16°C - 18°C',
    rating: 4.9,
    reviewsCount: 38,
    pairing: 'carnes',
    image: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?q=80&w=600&auto=format&fit=crop',
    description: 'Vino tinto artesanal de guarda con 12 meses en barrica de roble francés. Presenta notas profundas a ciruelas maduras, higos secos, chocolate amargo y un toque sutil de vainilla tostada.',
    tastingNotes: {
      vista: 'Rojo rubí profundo con reflejos violáceos.',
      nariz: 'Frutos negros maduros, cacao, café y notas a roble tostado.',
      boca: 'Cuerpo robusto, taninos sedosos y un final largo y elegante.',
      maridaje: 'Ideal para acompañar cortes de carne a la parrilla, bife de chorizo, quesos maduros y cordero.'
    }
  },
  {
    id: 'vino-2',
    name: 'Paohil Cabernet Sauvignon Selección',
    category: 'tintos',
    price: 62000,
    oldPrice: 72000,
    badge: 'Artesanal',
    badgeType: 'badge-craft',
    origin: 'Cundinamarca, Colombia',
    cepa: 'Cabernet Sauvignon',
    alcohol: '13.5% Vol.',
    temp: '16°C - 18°C',
    rating: 4.8,
    reviewsCount: 24,
    pairing: 'carnes',
    image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?q=80&w=600&auto=format&fit=crop',
    description: 'Elaborado con uvas cosechadas a mano en maduración óptima. Estructura vibrante con aromas a cassis, pimiento dulce asado y notas a pimienta negra recién molida.',
    tastingNotes: {
      vista: 'Rojo granate brillante con ribetes teja.',
      nariz: 'Grosellas, moras silvestres, madera noble y especias.',
      boca: 'Acidez balanceada, taninos firmes pero amables.',
      maridaje: 'Perfecto con asados, pastas con salsa boloñesa y embutidos artesanales.'
    }
  },
  {
    id: 'vino-3',
    name: 'Paohil Isabella Tradición Dulce',
    category: 'artesanales',
    price: 48000,
    oldPrice: 55000,
    badge: 'Tradición',
    badgeType: 'badge-craft',
    origin: 'Valle del Cauca, Colombia',
    cepa: 'Uva Isabella Criolla',
    alcohol: '11.5% Vol.',
    temp: '10°C - 12°C',
    rating: 4.9,
    reviewsCount: 52,
    pairing: 'postres',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600&auto=format&fit=crop',
    description: 'El clásico vino artesanal colombiano por excelencia. Dulzor natural armonioso con intensos aromas a mora silvestre y recuerdos frutales campesinos. Suave y reconfortante al paladar.',
    tastingNotes: {
      vista: 'Rojo púrpura intenso y vivaz.',
      nariz: 'Inconfundible aroma a uva Isabella fresca, moras y mermelada casera.',
      boca: 'Dulce equilibrado, goloso, sin hostigar, con textura aterciopelada.',
      maridaje: 'Acompañante idóneo para postres típicos, tortas de chocolate, fresas con crema o como aperitivo.'
    }
  },
  {
    id: 'vino-4',
    name: 'Paohil Sauvignon Blanc Valle Floral',
    category: 'blancos',
    price: 55000,
    oldPrice: 65000,
    badge: 'Refrescante',
    badgeType: 'badge-offer',
    origin: 'Boyacá, Colombia',
    cepa: 'Sauvignon Blanc',
    alcohol: '12.5% Vol.',
    temp: '8°C - 10°C',
    rating: 4.7,
    reviewsCount: 19,
    pairing: 'pescados',
    image: 'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=600&auto=format&fit=crop',
    description: 'Vino blanco joven, fresco y expresivo. Destaca por su refrescante acidez cítrica, toques minerales y notas herbáceas que despiertan los sentidos.',
    tastingNotes: {
      vista: 'Amarillo pajizo pálido con destellos verdosos.',
      nariz: 'Maracuyá, lima, manzana verde y flores de azahar.',
      boca: 'Crujiente, cítrico, sumamente refrescante con final persistente.',
      maridaje: 'Ceviches, pescados blancos al vapor, mariscos, ensaladas verdes y sushi.'
    }
  },
  {
    id: 'vino-5',
    name: 'Paohil Rosé Syrah Silvestre',
    category: 'rosados',
    price: 52000,
    oldPrice: 60000,
    badge: 'Favorito',
    badgeType: 'badge-award',
    origin: 'Villa de Leyva, Colombia',
    cepa: 'Syrah 100%',
    alcohol: '12.0% Vol.',
    temp: '9°C - 11°C',
    rating: 4.8,
    reviewsCount: 31,
    pairing: 'pastas',
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=600&auto=format&fit=crop',
    description: 'Elaborado mediante sangrado directo de uva Syrah. Un rosado con personalidad, cuerpo sutil, aromas a fresas frescas y un final delicadamente perfumado.',
    tastingNotes: {
      vista: 'Rosa pálido estilo provenzal brillante.',
      nariz: 'Frambuesas, cerezas frescas, pétalos de rosa y pomelo rosado.',
      boca: 'Fresco, frutal, envolvente y de acidez placentera.',
      maridaje: 'Pastas ligeras, paella de mariscos, tapas, comida mediterránea y picadas.'
    }
  },
  {
    id: 'vino-6',
    name: 'Paohil Carmenere Reserva Barrica',
    category: 'tintos',
    price: 75000,
    oldPrice: 85000,
    badge: 'Edición Limitada',
    badgeType: 'badge-award',
    origin: 'Valle de Leyva, Colombia',
    cepa: 'Carmenere 100%',
    alcohol: '14.0% Vol.',
    temp: '16°C - 18°C',
    rating: 5.0,
    reviewsCount: 15,
    pairing: 'carnes',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop',
    description: 'Nuestra cepa insignia de autor. Pasa 14 meses en barricas de roble americano aportando notas de tabaco rubio, pimiento rojo asado y chocolate blanco.',
    tastingNotes: {
      vista: 'Rojo carmín profundo y denso.',
      nariz: 'Pimienta negra, paprika dulce, cuero y ciruela negra.',
      boca: 'Aterciopelado, untuoso y con taninos dulces muy redondos.',
      maridaje: 'Goulash, lomo al trapo, carnes maduradas y quesos curados.'
    }
  },
  {
    id: 'vino-7',
    name: 'Paohil Espumoso Brut Artesanal',
    category: 'artesanales',
    price: 85000,
    oldPrice: 95000,
    badge: 'Método Champenoise',
    badgeType: 'badge-craft',
    origin: 'Cundinamarca, Colombia',
    cepa: 'Chardonnay & Pinot Noir',
    alcohol: '12.0% Vol.',
    temp: '6°C - 8°C',
    rating: 4.9,
    reviewsCount: 22,
    pairing: 'postres',
    image: 'https://images.unsplash.com/photo-1594488518001-0814f36aa636?q=80&w=600&auto=format&fit=crop',
    description: 'Elaborado bajo el método tradicional de segunda fermentación en botella. Burbuja fina, cremosa y persistente con sutiles recuerdos a levadura y brioche recién horneado.',
    tastingNotes: {
      vista: 'Dorado pálido con corona de burbujas continuas y finas.',
      nariz: 'Durazno blanco, pan tostado, almendras y toques florales.',
      boca: 'Cremoso en paladar, vibrante, seco y muy festivo.',
      maridaje: 'Brindis especiales, ostras, canapés gourmet, mariscos y celebraciones.'
    }
  },
  {
    id: 'vino-8',
    name: 'Paohil Blend Maestro Barrica 18 Meses',
    category: 'artesanales',
    price: 98000,
    oldPrice: 115000,
    badge: 'Gran Reserva Oro',
    badgeType: 'badge-award',
    origin: 'Valle de Leyva, Colombia',
    cepa: 'Malbec 50% - Cabernet 30% - Syrah 20%',
    alcohol: '14.2% Vol.',
    temp: '17°C - 19°C',
    rating: 5.0,
    reviewsCount: 41,
    pairing: 'carnes',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600&auto=format&fit=crop',
    description: 'La joya de la corona de Paohil Vinería Artesanal. Una cuidada mezcla de autor con 18 meses de crianza en barrica nueva y 6 meses de reposo en botella antes de salir al mercado.',
    tastingNotes: {
      vista: 'Capa alta, rojo violáceo impenetrable y lágrima densa.',
      nariz: 'Complejidad pura: higos, trufas, cacao, cedro y vainilla bourbon.',
      boca: 'Gran volumen y opulencia en boca, taninos maduros y postgusto inolvidable.',
      maridaje: 'Carnes de caza, cordero al horno, solomillo y chocolates con alto porcentaje de cacao.'
    }
  }
];

// Estado global de la aplicación
const AppState = {
  cart: [],
  currentCategory: 'todos',
  searchQuery: '',
  activePairing: null,
  sortBy: 'default'
};

// Formato de moneda colombiana (COP)
function formatCOP(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  loadCartFromStorage();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// ==========================================================================
// CONTROL DE MAYORÍA DE EDAD (LEY COLOMBIANA 30 DE 1986)
// ==========================================================================
function initAgeGate() {
  const ageVerified = localStorage.getItem('paohil_age_verified');
  const modal = document.getElementById('ageGateModal');
  
  if (!ageVerified && modal) {
    modal.classList.add('open');
  }

  const btnConfirm = document.getElementById('btnAgeConfirm');
  const btnReject = document.getElementById('btnAgeReject');

  if (btnConfirm) {
    btnConfirm.addEventListener('click', () => {
      localStorage.setItem('paohil_age_verified', 'true');
      modal.classList.remove('open');
      showToast('🍷 ¡Bienvenido a Paohil Vinería Artesanal!');
    });
  }

  if (btnReject) {
    btnReject.addEventListener('click', () => {
      alert('Lo sentimos. El acceso a Paohil Vinería Artesanal está restringido a mayores de 18 años según la legislación colombiana (Ley 30 de 1986).');
      window.location.href = 'https://www.google.com';
    });
  }
}

// ==========================================================================
// RENDERIZADO DE PRODUCTOS EN EL CATÁLOGO
// ==========================================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // Filtrado
  let filtered = WINE_PRODUCTS.filter(product => {
    // Filtro por categoría
    const matchCategory = AppState.currentCategory === 'todos' || product.category === AppState.currentCategory;
    
    // Filtro por búsqueda
    const query = AppState.searchQuery.toLowerCase().trim();
    const matchSearch = !query || 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.cepa.toLowerCase().includes(query) ||
      product.origin.toLowerCase().includes(query);

    // Filtro por sommelier pairing si está activo
    const matchPairing = !AppState.activePairing || product.pairing === AppState.activePairing;

    return matchCategory && matchSearch && matchPairing;
  });

  // Ordenamiento
  if (AppState.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Si no hay resultados
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 12px; border: 1px dashed var(--border-color);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🍷</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--wine-dark);">No encontramos vinos con esos criterios</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Prueba buscando otra cepa o restablece los filtros para ver nuestra selección completa.</p>
        <button class="btn-primary" onclick="resetFilters()">Ver todos los vinos</button>
      </div>
    `;
    return;
  }

  // Generación de tarjetas de producto
  grid.innerHTML = filtered.map(wine => {
    return `
      <div class="product-card" data-id="${wine.id}">
        <div class="product-badge-group">
          <span class="product-badge ${wine.badgeType}">${wine.badge}</span>
        </div>

        <div class="product-image-container">
          <img src="${wine.image}" alt="${wine.name}" loading="lazy" />
          <button class="quick-view-btn" onclick="openQuickView('${wine.id}')">Ver Ficha de Cata 👁️</button>
        </div>

        <div class="product-info">
          <span class="product-category-tag">${wine.category.toUpperCase()} • ${wine.cepa}</span>
          <h3 class="product-title" onclick="openQuickView('${wine.id}')" style="cursor: pointer;">${wine.name}</h3>
          
          <div class="product-origin">
            <span>📍 ${wine.origin}</span>
          </div>

          <div class="product-specs">
            <span class="spec-pill">🍷 ${wine.alcohol}</span>
            <span class="spec-pill">🌡️ ${wine.temp}</span>
            <span class="spec-pill">⭐ ${wine.rating}</span>
          </div>

          <div class="product-pricing">
            <span class="current-price">${formatCOP(wine.price)} COP</span>
            ${wine.oldPrice ? `<span class="old-price">${formatCOP(wine.oldPrice)}</span>` : ''}
          </div>

          <div class="product-actions">
            <button class="btn-add-cart" onclick="addToCart('${wine.id}')">
              <span>Añadir al Carrito</span> 🛒
            </button>
            <button class="btn-whatsapp-buy" title="Comprar directo por WhatsApp" onclick="buyDirectWhatsApp('${wine.id}')">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// CONFIGURACIÓN DE EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
  // Filtros de categoría
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.currentCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Buscador en vivo
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Ordenamiento
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Sommelier pairing chips
  const pairingChips = document.querySelectorAll('.pairing-chip');
  pairingChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const pairing = chip.getAttribute('data-pairing');
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        AppState.activePairing = null;
      } else {
        pairingChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        AppState.activePairing = pairing;
      }
      renderProducts();
      // Scroll suave hacia los resultados
      document.getElementById('catalogoSection').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Carrito Drawer
  const cartBtn = document.getElementById('headerCartBtn');
  const cartClose = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Formulario de Newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      if (email) {
        showToast(`🎉 ¡Gracias por unirte a Paohil! Tu cupón del 10% es: PAOHIL10`);
        document.getElementById('newsletterEmail').value = '';
      }
    });
  }

  // Checkout Buttons
  const btnWhatsAppCheckout = document.getElementById('btnWhatsAppCheckout');
  if (btnWhatsAppCheckout) {
    btnWhatsAppCheckout.addEventListener('click', checkoutWhatsApp);
  }

  const btnPSECheckout = document.getElementById('btnPSECheckout');
  if (btnPSECheckout) {
    btnPSECheckout.addEventListener('click', openPSECheckoutModal);
  }
}

function resetFilters() {
  AppState.currentCategory = 'todos';
  AppState.searchQuery = '';
  AppState.activePairing = null;
  AppState.sortBy = 'default';

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'default';

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === 'todos');
  });

  document.querySelectorAll('.pairing-chip').forEach(c => c.classList.remove('active'));

  renderProducts();
}

// ==========================================================================
// GESTIÓN DEL CARRITO DE COMPRAS
// ==========================================================================
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('paohil_cart');
    if (saved) {
      AppState.cart = JSON.parse(saved);
    }
  } catch (err) {
    AppState.cart = [];
  }
}

function saveCartToStorage() {
  localStorage.setItem('paohil_cart', JSON.stringify(AppState.cart));
}

function addToCart(productId, quantity = 1) {
  const wine = WINE_PRODUCTS.find(w => w.id === productId);
  if (!wine) return;

  const existingItem = AppState.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += quantity;
  } else {
    AppState.cart.push({
      id: wine.id,
      name: wine.name,
      price: wine.price,
      image: wine.image,
      cepa: wine.cepa,
      qty: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`🍾 Añadido al carrito: ${wine.name}`);
}

function updateItemQty(productId, delta) {
  const item = AppState.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    AppState.cart = AppState.cart.filter(i => i.id !== productId);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(productId) {
  AppState.cart = AppState.cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCartUI();
  showToast('🗑️ Producto eliminado del carrito');
}

function updateCartUI() {
  const countBadges = document.querySelectorAll('.cart-count');
  const cartItemsList = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const progressBar = document.getElementById('shippingProgressBar');
  const shippingText = document.getElementById('shippingProgressText');

  // Total de unidades
  const totalQty = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
  countBadges.forEach(b => b.textContent = totalQty);

  // Subtotal en pesos
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const freeShippingThreshold = 150000;
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 12000;
  const grandTotal = subtotal + shippingCost;

  // Barra de progreso envío gratis
  if (progressBar && shippingText) {
    const percent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
    progressBar.style.width = `${percent}%`;

    if (subtotal === 0) {
      shippingText.textContent = `Envíos GRATIS por compras superiores a ${formatCOP(freeShippingThreshold)} COP`;
    } else if (subtotal >= freeShippingThreshold) {
      shippingText.innerHTML = `🎉 ¡Felicitaciones! Tienes <strong>ENVÍO GRATIS</strong> en este pedido.`;
    } else {
      const remaining = freeShippingThreshold - subtotal;
      shippingText.innerHTML = `Agrega <strong>${formatCOP(remaining)} COP</strong> más para obtener <strong>ENVÍO GRATIS</strong>.`;
    }
  }

  if (subtotalEl) subtotalEl.textContent = `${formatCOP(subtotal)} COP`;
  if (shippingEl) shippingEl.textContent = shippingCost === 0 ? (subtotal > 0 ? 'GRATIS' : '$0 COP') : `${formatCOP(shippingCost)} COP`;
  if (totalEl) totalEl.textContent = `${formatCOP(grandTotal)} COP`;

  // Renderizar items del carrito
  if (!cartItemsList) return;

  if (AppState.cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-view">
        <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        <p>Tu carrito está vacío.<br>Descubre nuestros vinos artesanales de autor.</p>
        <button class="btn-primary" onclick="closeCart(); document.getElementById('catalogoSection').scrollIntoView({behavior: 'smooth'})">Explorar Vinos</button>
      </div>
    `;
    const checkoutActions = document.getElementById('cartCheckoutActions');
    if (checkoutActions) checkoutActions.style.display = 'none';
  } else {
    const checkoutActions = document.getElementById('cartCheckoutActions');
    if (checkoutActions) checkoutActions.style.display = 'flex';

    cartItemsList.innerHTML = AppState.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">${formatCOP(item.price)} COP</div>
          <div class="cart-item-controls">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateItemQty('${item.id}', -1)">-</button>
              <span class="qty-display">${item.qty}</span>
              <button class="qty-btn" onclick="updateItemQty('${item.id}', 1)">+</button>
            </div>
            <button class="btn-remove-item" onclick="removeFromCart('${item.id}')">
              🗑️ Quitar
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// CHECKOUT: PEDIDO POR WHATSAPP & CHECKOUT PSE SIMULADO
// ==========================================================================
function checkoutWhatsApp() {
  if (AppState.cart.length === 0) {
    showToast('⚠️ Agrega vinos al carrito antes de hacer tu pedido');
    return;
  }

  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const freeShipping = subtotal >= 150000;
  const shippingCost = freeShipping ? 0 : 12000;
  const total = subtotal + shippingCost;

  let msg = `🍷 *¡Hola Paohil Vinería Artesanal! Quiero realizar el siguiente pedido:*\n\n`;
  AppState.cart.forEach(item => {
    msg += `• *${item.qty}x* ${item.name} - ${formatCOP(item.price * item.qty)} COP\n`;
  });

  msg += `\n💵 *Subtotal:* ${formatCOP(subtotal)} COP`;
  msg += `\n🚚 *Envío:* ${freeShipping ? 'GRATIS' : formatCOP(shippingCost) + ' COP'}`;
  msg += `\n⭐ *TOTAL A PAGAR:* ${formatCOP(total)} COP\n\n`;
  msg += `📍 *Mis datos de entrega:*\n`;
  msg += `- Nombre:\n- Ciudad y Dirección:\n- Teléfono:\n- Método de pago deseado (Nequi / Daviplata / PSE / Contraentrega):\n\n¡Quedo atento a la confirmación!`;

  const phone = '573105559876'; // Número oficial de Paohil
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function buyDirectWhatsApp(productId) {
  const wine = WINE_PRODUCTS.find(w => w.id === productId);
  if (!wine) return;

  const msg = `🍷 *Hola Paohil Vinería Artesanal!* Me interesa comprar directamente el vino *${wine.name}* (${formatCOP(wine.price)} COP). ¿Tienen disponibilidad inmediata para despacho?`;
  const phone = '573105559876';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Modal Checkout Directo / PSE
function openPSECheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast('⚠️ Agrega vinos al carrito antes de pagar');
    return;
  }

  const modal = document.getElementById('pseModal');
  if (!modal) return;

  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shippingCost = subtotal >= 150000 ? 0 : 12000;
  const total = subtotal + shippingCost;

  document.getElementById('checkoutTotalDisplay').textContent = `${formatCOP(total)} COP`;
  modal.classList.add('open');
}

function closePSEModal() {
  const modal = document.getElementById('pseModal');
  if (modal) modal.classList.remove('open');
}

function processCheckoutForm(e) {
  e.preventDefault();
  const name = document.getElementById('clientName').value;
  const city = document.getElementById('clientCity').value;
  const method = document.getElementById('clientPaymentMethod').value;

  closePSEModal();
  closeCart();

  // Generar confirmación
  const orderNumber = 'PH-' + Math.floor(100000 + Math.random() * 900000);
  
  // Limpiar carrito
  AppState.cart = [];
  saveCartToStorage();
  updateCartUI();

  // Mostrar mensaje de éxito
  const successModal = document.getElementById('orderSuccessModal');
  if (successModal) {
    document.getElementById('successOrderNumber').textContent = orderNumber;
    document.getElementById('successClientName').textContent = name;
    document.getElementById('successClientCity').textContent = city;
    document.getElementById('successPayment').textContent = method;
    successModal.classList.add('open');
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('orderSuccessModal');
  if (modal) modal.classList.remove('open');
}

// ==========================================================================
// VISTA RÁPIDA / FICHA DE CATA DE VINO
// ==========================================================================
function openQuickView(productId) {
  const wine = WINE_PRODUCTS.find(w => w.id === productId);
  if (!wine) return;

  const modal = document.getElementById('quickViewModal');
  if (!modal) return;

  document.getElementById('qvWineImg').src = wine.image;
  document.getElementById('qvWineTitle').textContent = wine.name;
  document.getElementById('qvWineOrigin').textContent = `${wine.origin} • ${wine.cepa}`;
  document.getElementById('qvWinePrice').textContent = `${formatCOP(wine.price)} COP`;
  document.getElementById('qvWineDesc').textContent = wine.description;

  document.getElementById('qvVista').textContent = wine.tastingNotes.vista;
  document.getElementById('qvNariz').textContent = wine.tastingNotes.nariz;
  document.getElementById('qvBoca').textContent = wine.tastingNotes.boca;
  document.getElementById('qvMaridaje').textContent = wine.tastingNotes.maridaje;

  // Botón añadir
  const addBtn = document.getElementById('qvAddCartBtn');
  addBtn.onclick = () => {
    const qty = parseInt(document.getElementById('qvQtyInput').value) || 1;
    addToCart(wine.id, qty);
    closeQuickView();
    openCart();
  };

  modal.classList.add('open');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('open');
}

// ==========================================================================
// NOTIFICACIONES TOAST
// ==========================================================================
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
