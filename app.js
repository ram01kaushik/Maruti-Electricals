const BUSINESS = {
  name: 'Maruti Electricals',
  phone: '+91 7733934734',
  whatsapp: '917733934734',
  email: 'marutielectrical16@gmail.com',
  address: 'Gangania Complex, M.G. Road, Sikanderpur, DLF, Gurugram, Haryana - 122002',
  experience: '30+ years'
};

const IMAGES = {
  wires: 'https://images.unsplash.com/photo-1761507320645-b11a00bfcc34?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  protection: 'https://images.unsplash.com/photo-1576446470246-499c738d1c8e?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  fan: 'https://images.unsplash.com/photo-1551207005-3b305412e532?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  socket: 'https://images.unsplash.com/photo-1553879449-b80070c922d2?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  lighting: 'https://images.unsplash.com/photo-1602353923226-b3c58fb179a0?auto=format&fit=crop&fm=jpg&q=80&w=1200'
};

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
    featured: false,
    image: IMAGES.wires,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 2,
    name: 'Power Cables',
    category: 'Wires & Cables',
    description: 'Cable options for larger electrical loads and project requirements.',
    icon: '⌁',
    featured: false,
    image: IMAGES.wires,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 3,
    name: 'Modular Switches',
    category: 'Switches & Sockets',
    description: 'Modern modular switches for homes, offices and commercial spaces.',
    icon: '⏻',
    featured: false,
    image: IMAGES.socket,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 4,
    name: 'Sockets',
    category: 'Switches & Sockets',
    description: 'Modular sockets and outlets for residential and commercial installations.',
    icon: '⌑',
    featured: false,
    image: IMAGES.socket,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 5,
    name: 'MCBs',
    category: 'MCBs & DBs',
    description: 'Circuit protection products from leading electrical brands.',
    icon: '⛨',
    featured: false,
    image: IMAGES.protection,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 6,
    name: 'Distribution Boards',
    category: 'MCBs & DBs',
    description: 'Distribution solutions for organized circuit protection.',
    icon: '▦',
    featured: false,
    image: IMAGES.protection,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 7,
    name: 'PVC Electrical Conduit Pipes',
    category: 'Pipes & Conduits',
    description: 'Conduit and routing products for protected electrical installations.',
    icon: '◉',
    featured: false,
    image: IMAGES.wires,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 8,
    name: 'LEDs',
    category: 'Lighting',
    description: 'LED bulbs, panels and lighting solutions for different requirements.',
    icon: '☼',
    featured: false,
    image: IMAGES.lighting,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 9,
    name: 'Ceiling Fans',
    category: 'Fans',
    description: 'Ceiling fan options for homes, offices, shops and other spaces.',
    icon: '✣',
    featured: false,
    image: IMAGES.fan,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 10,
    name: 'Modular Electrical Accessories',
    category: 'Accessories',
    description: 'Supporting electrical accessories and finishing components.',
    icon: '▤',
    featured: false,
    image: IMAGES.socket,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
  },
  {
    id: 11,
    name: 'Other Electrical Materials',
    category: 'Other',
    description: 'Additional electrical essentials for projects, repairs and maintenance.',
    icon: '⌘',
    featured: false,
    image: IMAGES.protection,
    brand: 'Multiple brands available',
    details: GENERIC_DETAILS
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
   HEADER + MOBILE MENU
========================= */

function header(active) {
  const links = [
    ['index.html', 'Home'],
    ['products.html', 'Products'],
    ['about.html', 'About Us'],
    ['contact.html', 'Contact Us']
  ];

  return `
    <div class="utility-bar">
      <div class="container utility-inner">
        <span>${BUSINESS.experience} serving Sikanderpur</span>
        <span class="utility-location">● Gurugram, Haryana</span>
      </div>
    </div>

    <header class="site-header">
      <div class="container nav-inner">

        <div>
          ${brand()}
        </div>

        <nav class="desktop-nav">
          ${links.map(x => `
            <a
              class="nav-link ${active === x[1] ? 'active' : ''}"
              href="${x[0]}"
            >
              ${x[1]}
            </a>
          `).join('')}
        </nav>

        <div class="nav-actions">

          <a class="btn btn-primary desktop-cta" href="contact.html">
            Enquire Now →
          </a>

          <button
            class="menu-btn"
            id="menuBtn"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
          >
            ☰
          </button>

        </div>
      </div>

      <div class="mobile-panel" id="mobilePanel" hidden>
        <div class="container mobile-links">

          ${links.map(x => `
            <a
              class="mobile-link ${active === x[1] ? 'active' : ''}"
              href="${x[0]}"
            >
              ${x[1]}
            </a>
          `).join('')}

          <a class="btn btn-primary mobile-enquire" href="contact.html">
            Enquire Now
          </a>

        </div>
      </div>
    </header>
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
      href="https://wa.me/${BUSINESS.whatsapp}"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
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
            <strong>${p.brand}</strong>
          </div>

          <div class="spec-list">
            ${p.details.map(x => `
              <div>${x}</div>
            `).join('')}
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
   MAIN BOOT FUNCTION
========================= */

function boot() {

  /* MOBILE MENU */

  const menuBtn = document.getElementById('menuBtn');
  const mobilePanel = document.getElementById('mobilePanel');

  if (menuBtn && mobilePanel) {

    menuBtn.addEventListener('click', function () {

      const isOpen = !mobilePanel.hidden;

      mobilePanel.hidden = isOpen;

      menuBtn.setAttribute(
        'aria-expanded',
        String(!isOpen)
      );

    });

  }


  /* CLOSE MOBILE MENU WHEN LINK IS CLICKED */

  if (mobilePanel) {

    mobilePanel.addEventListener('click', function (e) {

      const link = e.target.closest('a');

      if (link) {
        mobilePanel.hidden = true;

        if (menuBtn) {
          menuBtn.setAttribute(
            'aria-expanded',
            'false'
          );
        }
      }

    });

  }


  /* PRODUCT MODALS + ENQUIRIES */

  document.body.addEventListener('click', function (e) {

    /* OPEN PRODUCT */

    const open = e.target.closest('[data-open]');

    if (open) {

      const p = PRODUCTS.find(
        x => x.id === Number(open.dataset.open)
      );

      if (p) {

        const modalRoot =
          document.getElementById('modalRoot');

        if (modalRoot) {
          modalRoot.innerHTML = modal(p);
        }

      }

      return;
    }


    /* CLOSE MODAL */

    if (
      e.target.id === 'modalClose' ||
      e.target.id === 'modal'
    ) {

      const modalRoot =
        document.getElementById('modalRoot');

      if (modalRoot) {
        modalRoot.innerHTML = '';
      }

      return;
    }


    /* PRODUCT ENQUIRY */

    const enquire =
      e.target.closest('[data-enquire]');

    if (enquire) {

      const p = PRODUCTS.find(
        x => x.id === Number(enquire.dataset.enquire)
      );

      if (p) {

        sessionStorage.setItem(
          'marutiEnquiryProduct',
          p.name
        );

      }

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