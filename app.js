const BUSINESS = {
  name: 'Maruti Electricals',
  phone: '+91 7733934734',
  whatsapp: '+91 7733934734',
  email: 'marutielectrical16@gmail.com',
  address: 'Gangania Complex, M.G. Road, Sikanderpur, DLF, Gurugram, Haryana - 122002',
  experience: '30+ years'
};


/* =========================
   PRODUCT IMAGES
========================= */

const IMAGES = {
  wires: 'https://images.unsplash.com/photo-1761507320645-b11a00bfcc34?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  protection: 'https://images.unsplash.com/photo-1576446470246-499c738d1c8e?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  fan: 'https://images.unsplash.com/photo-1551207005-3b305412e532?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  socket: 'https://images.unsplash.com/photo-1553879449-b80070c922d2?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  lighting: 'https://images.unsplash.com/photo-1602353923226-b3c58fb179a0?auto=format&fit=crop&fm=jpg&q=80&w=1200'
};


/* =========================
   PRODUCT DATA
========================= */

const GENERIC_DETAILS = [
  'Multiple variants available',
  'Retail and bulk quantities on enquiry',
  'Current availability may vary'
];

const PRODUCTS = [
  {
    id: 1,
    name: 'House Wires',
    category: 'Wires & Cables',
    description: 'House wiring solutions from trusted electrical brands.',
    icon: '⌁',
    image: IMAGES.wires
  },
  {
    id: 2,
    name: 'Power Cables',
    category: 'Wires & Cables',
    description: 'Cable options for larger electrical loads and project requirements.',
    icon: '⌁',
    image: IMAGES.wires
  },
  {
    id: 3,
    name: 'Switches & Sockets',
    category: 'Switches & Sockets',
    description: 'Modular switches, sockets and everyday switching essentials.',
    icon: '⏻',
    image: IMAGES.socket
  },
  {
    id: 4,
    name: 'MCBs',
    category: 'MCBs & DBs',
    description: 'Circuit protection products from leading electrical brands.',
    icon: '⛨',
    image: IMAGES.protection
  },
  {
    id: 5,
    name: 'Distribution Boards',
    category: 'MCBs & DBs',
    description: 'Distribution solutions for residential and commercial installations.',
    icon: '▦',
    image: IMAGES.protection
  },
  {
    id: 6,
    name: 'Electrical Pipes & Conduits',
    category: 'Pipes & Conduits',
    description: 'Conduit and routing products for protected installations.',
    icon: '◉',
    image: IMAGES.wires
  },
  {
    id: 7,
    name: 'LEDs',
    category: 'Lighting',
    description: 'LED bulbs and LED panels from trusted brands.',
    icon: '☼',
    image: IMAGES.lighting
  },
  {
    id: 8,
    name: 'Fans',
    category: 'Fans',
    description: 'Ceiling fans and electrical accessories.',
    icon: '✣',
    image: IMAGES.fan
  },
  {
    id: 9,
    name: 'Modular Accessories',
    category: 'Accessories',
    description: 'Useful modular accessories and finishing components.',
    icon: '▤',
    image: IMAGES.socket
  },
  {
    id: 10,
    name: 'Other Electrical Materials',
    category: 'Other',
    description: 'Additional electrical essentials for projects and repairs.',
    icon: '⌘',
    image: IMAGES.protection
  }
];


/* =========================
   BRAND LOGO
========================= */

function brand(light = false) {
  return `
    <a class="brand-mark ${light ? 'brand-mark--light' : ''}" href="index.html">
      <span class="brand-script">Maruti</span>
      <span class="brand-sub">ELECTRICALS</span>
    </a>
  `;
}


/* =========================
   HEADER
========================= */

function header(active) {

  return `
  
  <div class="utility-bar">
    <div class="container utility-inner">
      <span>30+ years serving Sikanderpur</span>
      <span class="utility-location">● Gurugram, Haryana</span>
    </div>
  </div>

  <header class="site-header">

    <div class="container nav-inner">

      <div>
        ${brand()}
      </div>

      <nav class="desktop-nav">

        <a class="nav-link ${active === 'Home' ? 'active' : ''}" href="index.html">
          Home
        </a>

        <a class="nav-link ${active === 'Products' ? 'active' : ''}" href="products.html">
          Products
        </a>

        <a class="nav-link ${active === 'About Us' ? 'active' : ''}" href="about.html">
          About Us
        </a>

        <a class="nav-link ${active === 'Contact Us' ? 'active' : ''}" href="contact.html">
          Contact Us
        </a>

      </nav>

      <div class="nav-actions">

        <a class="btn btn-primary desktop-cta" href="contact.html">
          Enquire Now →
        </a>

        <button
          type="button"
          class="menu-btn"
          id="menuBtn"
          aria-label="Open menu"
          aria-expanded="false"
        >
          ☰
        </button>

      </div>

    </div>


    <div class="mobile-panel" id="mobilePanel" hidden>

      <div class="container mobile-links">

        <a
          class="mobile-link ${active === 'Home' ? 'active' : ''}"
          href="index.html"
        >
          Home
        </a>

        <a
          class="mobile-link ${active === 'Products' ? 'active' : ''}"
          href="products.html"
        >
          Products
        </a>

        <a
          class="mobile-link ${active === 'About Us' ? 'active' : ''}"
          href="about.html"
        >
          About Us
        </a>

        <a
          class="mobile-link ${active === 'Contact Us' ? 'active' : ''}"
          href="contact.html"
        >
          Contact Us
        </a>

        <a
          class="btn btn-primary mobile-enquire"
          href="contact.html"
        >
          Enquire Now
        </a>

      </div>

    </div>

  </header>

  <style>

    .menu-btn {
      display: none;
      align-items: center;
      justify-content: center;
      width: 58px;
      height: 58px;
      border: 0;
      border-radius: 18px;
      background: #4b4945;
      color: white;
      font-size: 28px;
      cursor: pointer;
      z-index: 9999;
    }

    .mobile-panel {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #ffffff;
      border-top: 1px solid #eeeeee;
      box-shadow: 0 15px 35px rgba(0,0,0,0.12);
      z-index: 9998;
    }

    .mobile-links {
      display: flex;
      flex-direction: column;
      padding: 20px;
      gap: 8px;
    }

    .mobile-link {
      display: block;
      padding: 15px 10px;
      color: #222;
      text-decoration: none;
      font-weight: 600;
    }

    .mobile-link.active {
      color: #ed6416;
    }

    .mobile-enquire {
      margin-top: 8px;
      text-align: center;
    }

    @media (max-width: 900px) {

      .desktop-nav,
      .desktop-cta {
        display: none !important;
      }

      .menu-btn {
        display: flex !important;
      }

      .nav-actions {
        display: flex;
        align-items: center;
      }

      .site-header {
        position: relative;
      }

    }

  </style>

  `;
}


/* =========================
   FOOTER
========================= */

function footer() {

  return `

  <footer class="footer">

    <div class="container footer-grid">

      <div class="footer-brand">

        ${brand(true)}

        <p>
          Trusted electrical materials and practical product support
          in Sikanderpur, Gurgaon.
        </p>

        <span class="footer-pill">
          Serving Sikanderpur for 30+ years
        </span>

      </div>


      <div>

        <h4>Quick Links</h4>

        <a href="index.html">Home</a>
        <a href="products.html">Products</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>

      </div>


      <div>

        <h4>Contact</h4>

        <p>☎ ${BUSINESS.phone}</p>
        <p>✉ ${BUSINESS.email}</p>
        <p>⌖ Sikanderpur, Gurugram, Haryana</p>

      </div>

    </div>


    <div class="container footer-bottom">

      <span>
        © 2026 Maruti Electricals. All rights reserved.
      </span>

      <span>
        Catalogue & enquiry website
      </span>

    </div>

  </footer>


  <a
    class="whatsapp-float"
    href="https://wa.me/917733934734"
    target="_blank"
    rel="noopener"
    aria-label="Chat on WhatsApp"
  >
    ◉
  </a>

  `;
}


/* =========================
   PRODUCT CARD
========================= */

function productCard(p, compact = false) {

  return `

  <article
    class="product-card ${compact ? 'product-card--compact' : ''}"
    data-product="${p.id}"
  >

    <button
      class="product-visual"
      data-open="${p.id}"
      type="button"
    >

      <span
        class="product-fallback"
        style="font-size:${compact ? 54 : 70}px"
      >
        ${p.icon}
      </span>

      <img
        src="${p.image}"
        alt="${p.name}"
        loading="lazy"
        onerror="this.style.display='none'"
      >

      <span class="visual-grid"></span>

    </button>


    <div class="product-copy">

      <span class="eyebrow">
        ${p.category}
      </span>

      <h3>
        ${p.name}
      </h3>

      <p class="${compact ? 'compact-description' : ''}">
        ${p.description}
      </p>


      <div class="product-actions">

        <button
          class="text-link"
          data-open="${p.id}"
          type="button"
        >
          View Details →
        </button>

        <button
          class="mini-enquire"
          data-enquire="${p.id}"
          type="button"
        >
          Enquire
        </button>

      </div>

    </div>

  </article>

  `;
}


/* =========================
   PRODUCT MODAL
========================= */

function modal(p) {

  return `

  <div class="modal-backdrop" id="modal">

    <div class="product-modal">

      <button
        class="modal-close"
        id="modalClose"
        type="button"
      >
        ×
      </button>


      <div class="modal-visual">

        <span
          class="product-fallback"
          style="font-size:120px"
        >
          ${p.icon}
        </span>

        <img
          src="${p.image}"
          alt="${p.name}"
          onerror="this.style.display='none'"
        >

      </div>


      <div class="modal-copy">

        <span class="eyebrow">
          ${p.category}
        </span>

        <h2>
          ${p.name}
        </h2>

        <p>
          ${p.description}
        </p>


        <div class="detail-row">

          <span>Brand</span>

          <strong>
            Multiple brands available
          </strong>

        </div>


        <div class="spec-list">

          ${GENERIC_DETAILS
            .map(item => `<div>${item}</div>`)
            .join('')
          }

        </div>


        <div class="price-note">
          Price on Enquiry
        </div>


        <button
          class="btn btn-primary"
          data-enquire="${p.id}"
          type="button"
        >
          Enquire about this product →
        </button>

      </div>

    </div>

  </div>

  `;
}


/* =========================
   MOBILE MENU + BUTTONS
========================= */

function boot() {

  /* MOBILE MENU */

  const menuBtn = document.getElementById('menuBtn');
  const mobilePanel = document.getElementById('mobilePanel');

  if (menuBtn && mobilePanel) {

    menuBtn.addEventListener('click', function () {

      const isClosed = mobilePanel.hidden;

      mobilePanel.hidden = !isClosed;

      menuBtn.setAttribute(
        'aria-expanded',
        String(isClosed)
      );

      menuBtn.innerHTML = isClosed ? '✕' : '☰';

    });

  }


  /* CLOSE MOBILE MENU AFTER CLICKING A LINK */

  document.querySelectorAll('.mobile-link').forEach(link => {

    link.addEventListener('click', function () {

      if (mobilePanel) {
        mobilePanel.hidden = true;
      }

      if (menuBtn) {
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute('aria-expanded', 'false');
      }

    });

  });


  /* PRODUCT BUTTONS */

  document.body.addEventListener('click', function (e) {

    const openButton = e.target.closest('[data-open]');

    if (openButton) {

      const product = PRODUCTS.find(
        p => p.id === Number(openButton.dataset.open)
      );

      if (!product) return;

      const modalRoot = document.getElementById('modalRoot');

      if (modalRoot) {
        modalRoot.innerHTML = modal(product);
      }

      return;
    }


    /* CLOSE MODAL */

    if (
      e.target.id === 'modalClose' ||
      e.target.id === 'modal'
    ) {

      const modalRoot = document.getElementById('modalRoot');

      if (modalRoot) {
        modalRoot.innerHTML = '';
      }

      return;
    }


    /* ENQUIRE */

    const enquireButton =
      e.target.closest('[data-enquire]');

    if (enquireButton) {

      const product = PRODUCTS.find(
        p => p.id === Number(enquireButton.dataset.enquire)
      );

      if (!product) return;

      sessionStorage.setItem(
        'marutiEnquiryProduct',
        product.name
      );

      window.location.href = 'contact.html';

    }

  });

}


/* =========================
   START WEBSITE
========================= */

document.addEventListener(
  'DOMContentLoaded',
  boot
);