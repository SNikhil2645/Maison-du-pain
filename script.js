// ===== SCROLL PROGRESS =====
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scrollProgress').style.transform = 'scaleX(' + (scrolled / 100) + ')';
});

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => observer.observe(el));

// ===== COUNTER ANIMATION =====
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 2000;
      const start = performance.now();
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// ===== FORM SUBMISSION =====
document.getElementById('cakeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  this.style.display = 'none';
  document.querySelector('.form-card .text-center').style.display = 'none';
  document.getElementById('formThanks').classList.add('show');
});

// ===== CAKE BUILDER =====
const cakeConfig = {
  flavour: 'chocolate',
  size: '1kg',
  topping: 'none',
  layers: 3
};

const flavourColors = {
  chocolate: { base: '#4A2C2A', cream: '#6B4226', accent: '#8B5E3C', name: 'Belgian Chocolate Truffle' },
  vanilla: { base: '#F5E6C8', cream: '#FFF8E7', accent: '#D4A574', name: 'Madagascar Vanilla Bean' },
  redvelvet: { base: '#C0392B', cream: '#F5E6E6', accent: '#E74C3C', name: 'Red Velvet Cream Cheese' },
  caramel: { base: '#D4A054', cream: '#F0D9A8', accent: '#C8964E', name: 'Salted Caramel' },
  mango: { base: '#F4A940', cream: '#FFE0A0', accent: '#E89B2D', name: 'Alphonso Mango' },
  strawberry: { base: '#E8739E', cream: '#FFD1E0', accent: '#D45A8A', name: 'Wild Strawberry' }
};

const toppingDecor = {
  none: '',
  sprinkles: 'sprinkles',
  berries: 'berries',
  flowers: 'flowers',
  drip: 'drip',
  goldleaf: 'goldleaf'
};

const toppingLabels = {
  none: 'Classic Finish',
  sprinkles: 'Rainbow Sprinkles',
  berries: 'Fresh Berries',
  flowers: 'Sugar Flowers',
  drip: 'Chocolate Drip',
  goldleaf: 'Edible Gold Leaf'
};

const sizeLabels = {
  '0.5kg': '½ kg — Serves 6-8',
  '1kg': '1 kg — Serves 12-15',
  '2kg': '2 kg — Serves 25-30',
  '3kg': '3 kg — Serves 40-50'
};

function updateCake() {
  const cakeSVG = document.getElementById('cakeSVG');
  const cakeName = document.getElementById('cakePreviewName');
  const cakeSize = document.getElementById('cakePreviewSize');
  const cakePrice = document.getElementById('cakePreviewPrice');
  const cakeServes = document.getElementById('cakePreviewServes');

  const c = flavourColors[cakeConfig.flavour];
  const sizeMap = {
    '0.5kg': { w: 160, h: 30, tierH: 24, price: 650, serves: '6–8 guests' },
    '1kg': { w: 190, h: 34, tierH: 28, price: 1100, serves: '12–15 guests' },
    '2kg': { w: 220, h: 38, tierH: 32, price: 1800, serves: '25–30 guests' },
    '3kg': { w: 250, h: 42, tierH: 36, price: 2500, serves: '40–50 guests' }
  };

  const s = sizeMap[cakeConfig.size];
  const layers = cakeConfig.layers;

  let layersHTML = '';
  const totalCakeH = s.tierH * layers + (layers - 1) * 4;
  for (let i = 0; i < layers; i++) {
    const y = 160 - (i + 1) * (s.tierH + 4);
    layersHTML += `
      <rect x="${125 - s.w / 2}" y="${y}" width="${s.w}" height="${s.tierH}" rx="4" fill="${c.base}" opacity="${1 - i * 0.05}"/>
      <rect x="${125 - s.w / 2}" y="${y + s.tierH - 4}" width="${s.w}" height="4" rx="2" fill="${c.cream}" opacity="0.6"/>
    `;
  }

  let toppingHTML = '';
  const topY = 160 - totalCakeH;
  switch (cakeConfig.topping) {
    case 'sprinkles':
      for (let i = 0; i < 30; i++) {
        const sx = 125 - s.w / 2 + Math.random() * s.w;
        const sy = topY - 4 + Math.random() * 10;
        const colors = ['#E74C3C', '#3498DB', '#2ECC71', '#F1C40F', '#9B59B6', '#E67E22'];
        toppingHTML += `<rect x="${sx}" y="${sy}" width="3" height="8" rx="1.5" fill="${colors[i % 6]}" transform="rotate(${Math.random() * 40 - 20} ${sx} ${sy})"/>`;
      }
      break;
    case 'berries':
      for (let i = 0; i < 7; i++) {
        const bx = 125 - s.w / 2 + 20 + (i * (s.w - 40) / 6);
        toppingHTML += `<circle cx="${bx}" cy="${topY - 6}" r="${6 - i % 2}" fill="${i % 2 === 0 ? '#E74C3C' : '#8B4513'}" opacity="0.9"/>`;
      }
      break;
    case 'flowers':
      for (let i = 0; i < 5; i++) {
        const fx = 125 - s.w / 2 + 25 + (i * (s.w - 50) / 4);
        toppingHTML += `
          <circle cx="${fx}" cy="${topY - 8}" r="6" fill="${i % 2 === 0 ? '#F8B4C8' : '#FFFFFF'}" opacity="0.9"/>
          <circle cx="${fx}" cy="${topY - 8}" r="2.5" fill="${i % 2 === 0 ? '#F06292' : '#F8B4C8'}"/>
        `;
      }
      break;
    case 'drip':
      for (let i = 0; i < 8; i++) {
        const dx = 125 - s.w / 2 + 8 + (i * (s.w - 16) / 7);
        const dh = 8 + Math.random() * 16;
        toppingHTML += `<path d="M${dx - 3},${topY} Q${dx},${topY + dh} ${dx + 3},${topY}" fill="${c.accent}" opacity="0.8"/>`;
      }
      break;
    case 'goldleaf':
      for (let i = 0; i < 6; i++) {
        const gx = 125 - s.w / 2 + 15 + (i * (s.w - 30) / 5);
        const gy = topY - 10 + Math.random() * 8;
        toppingHTML += `<rect x="${gx}" y="${gy}" width="${6 + Math.random() * 8}" height="${4 + Math.random() * 6}" rx="1" fill="#D4A843" opacity="0.85" transform="rotate(${Math.random() * 30 - 15} ${gx} ${gy})"/>`;
      }
      break;
  }

  cakeSVG.innerHTML = `
    <defs>
      <filter id="cakeShadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.15)"/>
      </filter>
      <linearGradient id="plateGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E8E0D6"/>
        <stop offset="100%" stop-color="#D4CFC8"/>
      </linearGradient>
    </defs>
    <ellipse cx="125" cy="170" rx="${s.w / 2 + 30}" ry="12" fill="url(#plateGrad)"/>
    <g filter="url(#cakeShadow)">
      ${layersHTML}
    </g>
    ${toppingHTML}
    <text x="125" y="${190 + 30}" text-anchor="middle" font-family="'Albert Sans',sans-serif" font-size="9" fill="#A89279" letter-spacing="1">${cakeConfig.size.toUpperCase()}</text>
  `;

  cakeName.textContent = c.name;
  cakeSize.textContent = sizeLabels[cakeConfig.size];
  cakeServes.textContent = s.serves;
  cakePrice.textContent = '\u20B9' + s.price.toLocaleString('en-IN');
}

document.querySelectorAll('.cake-builder-option').forEach(option => {
  option.addEventListener('click', function() {
    const group = this.closest('.cake-builder-group');
    group.querySelectorAll('.cake-builder-option').forEach(o => o.classList.remove('active'));
    this.classList.add('active');

    const type = group.dataset.type;
    const value = this.dataset.value;

    if (type === 'flavour') cakeConfig.flavour = value;
    if (type === 'size') cakeConfig.size = value;
    if (type === 'topping') cakeConfig.topping = value;

    updateCake();
  });
});

document.querySelectorAll('.layer-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const action = this.dataset.action;
    if (action === 'add' && cakeConfig.layers < 5) cakeConfig.layers++;
    if (action === 'remove' && cakeConfig.layers > 1) cakeConfig.layers--;
    document.getElementById('layerCount').textContent = cakeConfig.layers;
    updateCake();
  });
});

// Init cake
updateCake();