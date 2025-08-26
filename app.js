// Application data
const appData = {
  "collections": [
    {
      "id": 1,
      "name": "Silver Rings",
      "description": "Elegant rings crafted from 925 sterling silver",
      "image": "rings-collection.jpg",
      "count": 42
    },
    {
      "id": 2, 
      "name": "Silver Necklaces",
      "description": "Beautiful necklaces and pendants",
      "image": "necklaces-collection.jpg",
      "count": 38
    },
    {
      "id": 3,
      "name": "Silver Bracelets", 
      "description": "Stylish bracelets and bangles",
      "image": "bracelets-collection.jpg",
      "count": 28
    },
    {
      "id": 4,
      "name": "Silver Earrings",
      "description": "Stunning earrings for every occasion",
      "image": "earrings-collection.jpg", 
      "count": 45
    }
  ],
  "featured_products": [
    {
      "id": 1,
      "name": "Moonstone Elegance Ring",
      "price": 299,
      "original_price": 399,
      "rating": 4.8,
      "reviews": 127,
      "image": "moonstone-ring.jpg",
      "category": "Rings",
      "description": "925 sterling silver ring with genuine moonstone",
      "features": ["925 Sterling Silver", "Genuine Moonstone", "Adjustable Size", "Handcrafted"],
      "in_stock": true
    },
    {
      "id": 2,
      "name": "Infinity Love Necklace",
      "price": 199,
      "original_price": 249,
      "rating": 4.9,
      "reviews": 203,
      "image": "infinity-necklace.jpg",
      "category": "Necklaces", 
      "description": "Delicate infinity symbol pendant with cubic zirconia",
      "features": ["925 Sterling Silver", "Cubic Zirconia", "16-18 inch Chain", "Gift Box Included"],
      "in_stock": true
    },
    {
      "id": 3,
      "name": "Chain Link Bracelet",
      "price": 159,
      "original_price": 199,
      "rating": 4.7,
      "reviews": 89,
      "image": "chain-bracelet.jpg",
      "category": "Bracelets",
      "description": "Classic chain link bracelet with secure clasp",
      "features": ["925 Sterling Silver", "7-8 inch Length", "Secure Clasp", "Polished Finish"],
      "in_stock": true
    },
    {
      "id": 4,
      "name": "Crystal Drop Earrings",
      "price": 129,
      "original_price": 169,
      "rating": 4.6,
      "reviews": 156,
      "image": "crystal-earrings.jpg",
      "category": "Earrings",
      "description": "Elegant drop earrings with sparkling crystals",
      "features": ["925 Sterling Silver", "Austrian Crystals", "Hypoallergenic", "Gift Ready"],
      "in_stock": true
    },
    {
      "id": 5,
      "name": "Vintage Rose Ring",
      "price": 249,
      "original_price": 319,
      "rating": 4.9,
      "reviews": 91,
      "image": "vintage-rose-ring.jpg",
      "category": "Rings",
      "description": "Vintage-inspired rose design with intricate details",
      "features": ["925 Sterling Silver", "Vintage Design", "Multiple Sizes", "Oxidized Finish"],
      "in_stock": true
    },
    {
      "id": 6,
      "name": "Layered Pearl Necklace",
      "price": 279,
      "original_price": 349,
      "rating": 4.8,
      "reviews": 134,
      "image": "pearl-necklace.jpg",
      "category": "Necklaces",
      "description": "Multi-strand necklace with freshwater pearls",
      "features": ["925 Sterling Silver", "Freshwater Pearls", "Multi-Strand", "Adjustable Length"],
      "in_stock": true
    }
  ],
  "ai_features": [
    {
      "title": "AI Jewelry Designer",
      "description": "Describe your dream jewelry and our AI will create a unique design just for you",
      "icon": "✨",
      "benefits": ["Custom Designs", "Instant Visualization", "Unlimited Revisions"]
    },
    {
      "title": "Virtual Try-On",
      "description": "See how jewelry looks on you with our advanced AR technology",
      "icon": "👁️",
      "benefits": ["Real-time Preview", "Perfect Fit", "Multiple Angles"]
    },
    {
      "title": "Smart Recommendations",
      "description": "Get personalized jewelry suggestions based on your style preferences",
      "icon": "🧠",
      "benefits": ["Personalized Picks", "Style Matching", "Occasion-based"]
    },
    {
      "title": "AI Style Assistant",
      "description": "Chat with our AI to find the perfect jewelry for any occasion",
      "icon": "💬",
      "benefits": ["24/7 Support", "Style Advice", "Product Guidance"]
    }
  ],
  "testimonials": [
    {
      "name": "Sarah Johnson",
      "rating": 5,
      "comment": "The AI design feature is incredible! I described what I wanted and got exactly the ring of my dreams.",
      "location": "New York, NY"
    },
    {
      "name": "Emily Chen",
      "rating": 5,
      "comment": "Virtual try-on saved me so much time. The necklace looked perfect on me before I even ordered!",
      "location": "Los Angeles, CA"
    },
    {
      "name": "Maria Rodriguez",
      "rating": 5,
      "comment": "Outstanding quality and the AI recommendations were spot on for my style preferences.",
      "location": "Miami, FL"
    }
  ],
  "trust_indicators": [
    {
      "title": "30-Day Money Back Guarantee",
      "description": "Not satisfied? Return for a full refund",
      "icon": "🛡️"
    },
    {
      "title": "Free Shipping Worldwide",
      "description": "Free shipping on orders over $150",
      "icon": "🚚"
    },
    {
      "title": "Lifetime Warranty",
      "description": "We stand behind our craftsmanship",
      "icon": "🏆"
    },
    {
      "title": "SSL Secured Checkout",
      "description": "Your payment information is protected",
      "icon": "🔒"
    }
  ]
};

// Application state
let cart = [];
let currentFilter = 'all';

// Utility functions
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '⭐';
  }
  if (hasHalfStar) {
    stars += '⭐';
  }
  
  return stars;
}

function formatPrice(price) {
  return `$${price}`;
}

function calculateDiscount(original, current) {
  return Math.round(((original - current) / original) * 100);
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
});

function initializeApp() {
  renderCollections();
  renderAIFeatures();
  renderProducts();
  renderTrustIndicators();
  renderTestimonials();
  updateCartCount();
}

function setupEventListeners() {
  // Modal controls
  setupModalControls();
  
  // Navigation links
  setupNavigation();
  
  // Product filters
  setupProductFilters();
  
  // Search functionality
  setupSearch();
  
  // Cart functionality
  setupCart();
  
  // AI features
  setupAIFeatures();
  
  // Hero buttons
  const shopNowBtn = document.querySelector('.btn--primary');
  if (shopNowBtn) {
    shopNowBtn.addEventListener('click', () => {
      document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  const aiDesignerBtn = document.querySelector('#ai-designer-btn');
  if (aiDesignerBtn) {
    aiDesignerBtn.addEventListener('click', () => {
      openModal('ai-designer-modal');
    });
  }
}

function setupNavigation() {
  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

function setupModalControls() {
  // Close modals when clicking backdrop or close button
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__backdrop') || 
        e.target.classList.contains('modal__close')) {
      closeAllModals();
    }
  });
  
  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.add('hidden');
  });
  document.body.style.overflow = 'auto';
}

function renderCollections() {
  const container = document.getElementById('collections-grid');
  if (!container) return;
  
  const collectionIcons = ['💍', '📿', '⚡', '💎'];
  
  container.innerHTML = appData.collections.map((collection, index) => `
    <div class="collection-card" data-collection="${collection.name}">
      <div class="collection-card__image">
        ${collectionIcons[index]}
      </div>
      <h3 class="collection-card__title">${collection.name}</h3>
      <p class="collection-card__description">${collection.description}</p>
      <p class="collection-card__count">${collection.count} items</p>
    </div>
  `).join('');
  
  // Add click handlers for collections
  container.querySelectorAll('.collection-card').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.collection.replace('Silver ', '');
      filterProducts(category);
      document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderAIFeatures() {
  const container = document.getElementById('ai-features-grid');
  if (!container) return;
  
  container.innerHTML = appData.ai_features.map(feature => `
    <div class="ai-feature-card" data-feature="${feature.title}">
      <div class="ai-feature-card__icon">
        ${feature.icon}
      </div>
      <h3 class="ai-feature-card__title">${feature.title}</h3>
      <p class="ai-feature-card__description">${feature.description}</p>
      <div class="ai-feature-card__benefits">
        ${feature.benefits.map(benefit => `<span class="benefit-tag">${benefit}</span>`).join('')}
      </div>
    </div>
  `).join('');
  
  // Add click handlers for AI features
  container.querySelectorAll('.ai-feature-card').forEach(card => {
    card.addEventListener('click', () => {
      const feature = card.dataset.feature;
      if (feature === 'AI Jewelry Designer') {
        openModal('ai-designer-modal');
      } else if (feature === 'Virtual Try-On') {
        openModal('virtual-tryon-modal');
      } else if (feature === 'AI Style Assistant') {
        openModal('ai-chat-modal');
      } else if (feature === 'Smart Recommendations') {
        // Show smart recommendations
        alert('AI is analyzing your preferences to show personalized recommendations...');
      }
    });
  });
}

function renderProducts(filter = 'all') {
  const container = document.getElementById('products-grid');
  if (!container) return;
  
  let products = appData.featured_products;
  
  if (filter !== 'all') {
    products = products.filter(product => product.category === filter);
  }
  
  container.innerHTML = products.map(product => {
    const discount = calculateDiscount(product.original_price, product.price);
    const stars = generateStars(product.rating);
    
    return `
      <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
        <div class="product-card__image">
          ${discount > 0 ? `<div class="product-card__badge">-${discount}%</div>` : ''}
          <span>${product.category.slice(0, -1)} Image</span>
        </div>
        <div class="product-card__content">
          <h3 class="product-card__title">${product.name}</h3>
          <p class="product-card__description">${product.description}</p>
          <div class="product-card__rating">
            <span class="stars">${stars}</span>
            <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
          </div>
          <div class="product-card__price">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.original_price > product.price ? 
              `<span class="price-original">${formatPrice(product.original_price)}</span>` : ''}
          </div>
          <div class="product-card__actions">
            <button class="btn btn--primary btn--flex-1 add-to-cart-btn" data-product-id="${product.id}">
              Add to Cart
            </button>
            <button class="btn-icon wishlist-btn" data-product-id="${product.id}" title="Add to Wishlist">
              ❤️
            </button>
            <button class="btn-icon quick-view-btn" data-product-id="${product.id}" title="Quick View">
              👁️
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Add event listeners to product cards
  setupProductCardListeners();
}

function setupProductCardListeners() {
  // Add to cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = parseInt(btn.dataset.productId);
      addToCart(productId);
    });
  });
  
  // Wishlist buttons
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.style.color = btn.style.color === 'red' ? '' : 'red';
    });
  });
  
  // Quick view buttons
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = parseInt(btn.dataset.productId);
      showQuickView(productId);
    });
  });
}

function renderTrustIndicators() {
  const container = document.getElementById('trust-indicators-grid');
  if (!container) return;
  
  container.innerHTML = appData.trust_indicators.map(indicator => `
    <div class="trust-indicator">
      <div class="trust-indicator__icon">
        ${indicator.icon}
      </div>
      <h4 class="trust-indicator__title">${indicator.title}</h4>
      <p class="trust-indicator__description">${indicator.description}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;
  
  container.innerHTML = appData.testimonials.map(testimonial => {
    const stars = generateStars(testimonial.rating);
    
    return `
      <div class="testimonial-card">
        <div class="testimonial-card__rating">${stars}</div>
        <p class="testimonial-card__comment">"${testimonial.comment}"</p>
        <div class="testimonial-card__author">${testimonial.name}</div>
        <div class="testimonial-card__location">${testimonial.location}</div>
      </div>
    `;
  }).join('');
}

function setupProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Filter products
      const filter = btn.dataset.filter;
      filterProducts(filter);
    });
  });
}

function filterProducts(filter) {
  currentFilter = filter;
  renderProducts(filter);
  
  // Update filter button active state
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === filter || (filter !== 'all' && btn.textContent === filter)) {
      btn.classList.add('active');
    }
  });
}

function setupSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  if (!searchInput || !searchBtn) return;
  
  function performSearch() {
    const query = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(card => {
      const title = card.querySelector('.product-card__title').textContent.toLowerCase();
      const description = card.querySelector('.product-card__description').textContent.toLowerCase();
      
      if (title.includes(query) || description.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

function setupCart() {
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      renderCart();
      openModal('cart-modal');
    });
  }
  
  // Checkout button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }
      alert('Redirecting to secure checkout... (Demo)');
    });
  }
}

function addToCart(productId) {
  const product = appData.featured_products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  }
  
  updateCartCount();
  showAddToCartFeedback();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  renderCart();
}

function updateCartQuantity(productId, newQuantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      renderCart();
    }
  }
}

function updateCartCount() {
  const cartCountEl = document.querySelector('.cart-count');
  if (cartCountEl) {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountEl.textContent = count;
  }
}

function renderCart() {
  const container = document.getElementById('cart-items');
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">Your cart is empty</p>';
    updateCartTotals(0);
    return;
  }
  
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item__image">
        ${item.name.charAt(0)}
      </div>
      <div class="cart-item__details">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">${formatPrice(item.price)}</div>
      </div>
      <div class="cart-item__controls">
        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
        <button class="btn-icon" onclick="removeFromCart(${item.id})" style="margin-left: 8px;">🗑️</button>
      </div>
    </div>
  `).join('');
  
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  updateCartTotals(subtotal);
}

function updateCartTotals(subtotal) {
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  
  if (subtotalEl) subtotalEl.textContent = subtotal;
  if (totalEl) totalEl.textContent = subtotal;
}

function showAddToCartFeedback() {
  // Simple feedback - could be enhanced with a toast notification
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
      cartBtn.style.transform = 'scale(1)';
    }, 200);
  }
}

function showQuickView(productId) {
  const product = appData.featured_products.find(p => p.id === productId);
  if (!product) return;
  
  alert(`Quick View: ${product.name}\n\n${product.description}\n\nPrice: ${formatPrice(product.price)}\nRating: ${product.rating}/5 (${product.reviews} reviews)\n\nFeatures:\n${product.features.join('\n')}`);
}

function setupAIFeatures() {
  // AI Designer
  const generateBtn = document.getElementById('generate-design');
  if (generateBtn) {
    generateBtn.addEventListener('click', generateAIDesign);
  }
  
  const aiDesignerFooterBtn = document.getElementById('ai-designer-footer-btn');
  if (aiDesignerFooterBtn) {
    aiDesignerFooterBtn.addEventListener('click', () => {
      openModal('ai-designer-modal');
    });
  }
  
  // Virtual Try-On
  const virtualTryonBtn = document.getElementById('virtual-tryon-btn');
  if (virtualTryonBtn) {
    virtualTryonBtn.addEventListener('click', () => {
      openModal('virtual-tryon-modal');
    });
  }
  
  // AI Chat
  const aiChatBtn = document.getElementById('ai-chat-btn');
  if (aiChatBtn) {
    aiChatBtn.addEventListener('click', () => {
      openModal('ai-chat-modal');
    });
  }
  
  const sendChatBtn = document.getElementById('send-chat');
  const chatInput = document.getElementById('chat-input');
  
  if (sendChatBtn) {
    sendChatBtn.addEventListener('click', sendChatMessage);
  }
  
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendChatMessage();
      }
    });
  }
}

function generateAIDesign() {
  const description = document.getElementById('design-description').value;
  const style = document.getElementById('design-style').value;
  
  if (!description.trim()) {
    alert('Please describe your dream jewelry piece!');
    return;
  }
  
  // Show loading state
  const button = document.getElementById('generate-design');
  if (!button) return;
  
  const originalText = button.textContent;
  button.textContent = 'Generating...';
  button.disabled = true;
  
  // Simulate AI processing
  setTimeout(() => {
    const designResult = document.getElementById('design-result');
    const feedback = document.getElementById('design-feedback');
    
    if (feedback) {
      feedback.textContent = `Based on your ${style} style preference and description "${description}", we've created a unique ${generateRandomDesign()} with intricate details. This custom piece perfectly captures your vision with modern AI-assisted craftsmanship.`;
    }
    
    if (designResult) {
      designResult.classList.remove('hidden');
    }
    
    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
}

function generateRandomDesign() {
  const designs = [
    'silver ring with geometric patterns',
    'elegant necklace with flowing curves',
    'bracelet with intertwined elements',
    'earrings with asymmetrical beauty',
    'pendant with nature-inspired motifs'
  ];
  return designs[Math.floor(Math.random() * designs.length)];
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  
  const message = input.value.trim();
  if (!message) return;
  
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;
  
  // Add user message
  const userMessage = document.createElement('div');
  userMessage.className = 'message user-message';
  userMessage.innerHTML = `<strong>You:</strong> ${message}`;
  messagesContainer.appendChild(userMessage);
  
  // Clear input
  input.value = '';
  
  // Simulate AI response
  setTimeout(() => {
    const aiMessage = document.createElement('div');
    aiMessage.className = 'message ai-message';
    aiMessage.innerHTML = `<strong>AI Assistant:</strong> ${generateAIResponse(message)}`;
    messagesContainer.appendChild(aiMessage);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 1000);
}

function generateAIResponse(userMessage) {
  const responses = [
    "I'd recommend our Moonstone Elegance Ring - it's perfect for special occasions and has beautiful craftsmanship!",
    "For everyday wear, our Chain Link Bracelet is extremely popular. It's versatile and goes with any outfit.",
    "Based on your style, I think you'd love our vintage collection. The Vintage Rose Ring has intricate details you might appreciate.",
    "Our Crystal Drop Earrings are trending right now and would complement your style beautifully.",
    "Have you considered our AI Design feature? You can create a completely custom piece based on your preferences!",
    "Silver jewelry requires gentle care. I recommend storing it in anti-tarnish pouches and cleaning with a soft cloth.",
    "Our virtual try-on feature can help you see how any piece would look before purchasing. Would you like to try it?"
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

// Make functions available globally for onclick handlers
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;