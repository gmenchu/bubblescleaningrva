// --- Estimate Form Submission: Hero Section ---
document.getElementById('hero-estimate-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    this.reportValidity();
    return;
  }

  const heroFormContainer = this.parentElement;
  heroFormContainer.innerHTML = `
    <div class="checkmark"></div>
    <h2>Thank You for Choosing Bubbles Cleaning Company RVA!</h2>
    <p>Your estimate request has been submitted. We'll contact you shortly.</p>
  `;
});

// Contact form feedback
// --- Contact Form Submission ---
//document.getElementById('contact-form')?.addEventListener('submit', function(e) {
 // e.preventDefault();
  //if (!this.checkValidity()) {
  //  this.reportValidity();
  //  return;
 // }

  //const form = this;
 // const contactSection = document.getElementById('contact-section');
  //contactSection.innerHTML = `
   // <div class="checkmark"></div>
  //  <h2>Message Sent!</h2>
//    <p>Thanks for reaching out. We'll be in touch shortly.</p>
//  `;
// });

// Modal open/close
//const openModalBtn = document.getElementById('openModalBtn');
//const modalOverlay = document.getElementById('modalOverlay');
//const modalCloseBtn = document.getElementById('modalCloseBtn');

//openModalBtn?.addEventListener('click', () => modalOverlay.classList.add('active'));
//modalCloseBtn?.addEventListener('click', () => modalOverlay.classList.remove('active'));
//modalOverlay?.addEventListener('click', e => {
  //if (e.target === modalOverlay) modalOverlay.classList.remove('active');
//});

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
    modalOverlay.classList.remove('active');
  }
});

// Booking form submit
document.getElementById('booking-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('booking-status').textContent = "Thanks! We'll be in touch shortly.";
  this.reset();
  setTimeout(() => modalOverlay.classList.remove('active'), 3000);
});
function openModal(service) {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');

  const services = {
    basicCleaning: {
      title: "Basic Cleaning",
      description: "Our Basic Cleaning offers a light refresh of your home, focusing on surface-level tidying, trash removal, and general upkeep.",
      image: "https://i.imgur.com/K3Q54WX.jpeg",
      icon: "fa-solid fa-broom",
      checklist: [
        "Dust all reachable surfaces",
        "Vacuum carpets and rugs",
        "Mop hard floors",
        "Clean bathroom surfaces",
        "Empty trash bins"
      ],
      buttonLink: "https://bubblescleaningcompany.bookingkoala.com/booknow"
    },
    standardCleaning: {
      title: "Standard Cleaning",
      description: "Our Standard Cleaning keeps your home fresh and organized with essential tasks like dusting, sweeping, mopping, vacuuming, and general surface cleaning.",
      image: "https://i.imgur.com/956lJca.png",
      icon: "fa-solid fa-broom",
      checklist: [
        "Dust all reachable surfaces",
        "Vacuum carpets and rugs",
        "Mop hard floors",
        "Clean bathroom surfaces",
        "Empty trash bins"
      ],
      buttonLink: "https://www.bookingkoala.com"
    },
    deepCleaning: {
      title: "Deep Cleaning",
      description: "Our Deep Cleaning goes beyond standard services to tackle grime and buildup in hard-to-reach places for a truly spotless home.",
      image: "https://i.imgur.com/cgnYdyQ.jpeg",
      icon: "fa-solid fa-building",
      checklist: [
        "Everything in Standard Cleaning",
        "Baseboards and door frames",
        "Interior windows and sills",
        "Light fixtures and vents",
        "Detailed kitchen & bathroom cleaning"
      ],
      buttonLink: "https://www.bookingkoala.com"
    },
    moveInOutCleaning: {
      title: "Move In/Out Cleaning",
      description: "Ensure your property is ready for moving in or out with detailed cleaning of all surfaces, appliances, and corners.",
      image: "https://i.imgur.com/NdasCrK.jpeg",
      icon: "fa-solid fa-truck-moving",
      checklist: [
        "Full home cleaning",
        "Inside cabinets and drawers",
        "Inside fridge and oven",
        "Baseboards and fixtures",
        "Trash removal"
      ],
      buttonLink: "https://www.bookingkoala.com"
    }
  };

  const s = services[service];
  if (!s) return;

  const checklistItems = s.checklist.map(item => `<li><i class="fa fa-check"></i> ${item}</li>`).join("");

  modalContent.innerHTML = `
    <h2><i class="${s.icon}"></i> ${s.title}</h2>
    <img src="${s.image}" alt="${s.title}" class="modal-image"/>
    <p>${s.description}</p>
    <ul class="checklist">${checklistItems}</ul>
    <a href="${s.buttonLink}" target="_blank" class="book-now-btn">Book Now</a>
  `;

  modalOverlay.classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
document.getElementById('modalOverlay')?.addEventListener('click', e => {
  if (e.target.id === 'modalOverlay') closeModal();
});
//ABOUT US MODAL//

// MODAL ESTIMATE FORM SUBMIT
// Open and close modal
function openEstimateModal() {
  const modal = document.getElementById('estimateModalOverlay');
  modal.hidden = false;
}

document.getElementById('estimateModalCloseBtn')?.addEventListener('click', () => {
  document.getElementById('estimateModalOverlay').hidden = true;
});

document.getElementById('modal-estimate-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const form = this;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { Accept: "application/json" }
  })
    .then(response => {
      if (response.ok) {
        const modalContent = document.getElementById('estimateModalContent');
        modalContent.innerHTML = `
          <div class="checkmark" style="font-size:3rem; color:green;">✔</div>
          <h2>Thank You!</h2>
          <p>Your estimate request has been submitted. We'll be in touch shortly!</p>
          <button onclick="document.getElementById('estimateModalOverlay').hidden = true" style="margin-top: 1rem; padding: 10px 20px; background: #46c2d4; color: white; border: none; border-radius: 8px; cursor: pointer;">Close</button>
        `;
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Oops! Something went wrong. Please try again.");
    });
});


//document.getElementById('modal-estimate-form')?.addEventListener('submit', function(e) {
 // e.preventDefault();

 // const modalContent = document.getElementById('estimateModalContent');

//  modalContent.innerHTML = `
 //   <div class="checkmark"></div>
 //   <h2>Thank You for Choosing Bubbles Cleaning Company RVA!</h2>
 //   <p>Your estimate request has been received. Our team will contact you shortly to confirm details and schedule your service.</p>
//    <a href="tel:YOUR_PHONE_NUMBER" class="book-now-btn">Call Us Now</a>
//    <button onclick="closeEstimateModal()" class="book-now-btn">Close</button>
//  `;
//});
// Open modal
function openEstimateModal() {
  const modalOverlay = document.getElementById('estimateModalOverlay');
  modalOverlay.removeAttribute('hidden');
  modalOverlay.classList.add('active');
}

// Close modal function
function closeEstimateModal() {
  const modalOverlay = document.getElementById('estimateModalOverlay');
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('hidden', true);
}

// Close button listener
document.getElementById('estimateModalCloseBtn')?.addEventListener('click', closeEstimateModal);

// Close on clicking outside modal content
document.getElementById('estimateModalOverlay')?.addEventListener('click', function(e) {
  if (e.target.id === 'estimateModalOverlay') {
    closeEstimateModal();
  }
});
//Service =Area
const areaData = {
  richmond: {
    title: "Richmond Neighborhoods We Serve",
    intro: "We proudly serve homes and businesses across Richmond’s most beloved neighborhoods.",
    list: [
      "The West End – Family-friendly suburban feel within city limits.",
      "Forest Hill – Parks, farmer’s markets, and residential tranquility.",
      "The Fan District – Historic row houses, tree-lined streets, and artsy vibes.",
      "Carytown – Boutique shopping, dining, and vibrant local life.",
      "Church Hill – Classic charm with sweeping city views.",
      "Scott’s Addition – Modern lofts, breweries, and industrial revival."
    ]
  },
  chesterfield: {
    title: "Chesterfield County Areas We Serve",
    intro: "From bustling suburbs to peaceful wooded communities, we cover all of Chesterfield County.",
    list: [
      "Bon Air – Historic village atmosphere with easy city access.",
      "Midlothian – Growing residential hub with top schools.",
      "Chester – Historic small-town feel with modern amenities.",
      "Brandermill – Lakeside neighborhoods and recreational living.",
      //"Woodlake – Family-focused planned community with trails and water views.",
      "South Chesterfield – Quiet, affordable, and conveniently located."
    ]
  },
  henrico: {
    title: "Henrico County Areas We Serve",
    intro: "Henrico County offers a mix of suburban comfort and city proximity – and we’re here to keep it clean.",
    list: [
      "Short Pump – Shopping, restaurants, and modern suburban living.",
      "Glen Allen – Established neighborhoods with excellent schools.",
      "Tuckahoe – Classic Richmond suburb with mature trees and parks.",
      //"East End – Affordable housing and diverse communities.",
      "Varina – Rural charm with large properties and farmland.",
      "Highland Springs – Close-knit neighborhood with quick city access."
    ]
  }
};

function openAreaModal(areaKey) {
  const modalOverlay = document.getElementById('areaModal');
  const modalContent = document.getElementById('areaModalContent');

  if (!areaData[areaKey]) return;

  const area = areaData[areaKey];

  // Generate list HTML
  const listItems = area.list.map(item => `<li>${item}</li>`).join("");

  modalContent.innerHTML = `
    <h2>${area.title}</h2>
    <p>${area.intro}</p>
    <ul>${listItems}</ul>
  `;

  modalOverlay.removeAttribute('hidden');
  modalOverlay.classList.add('active');
}

function closeAreaModal() {
  const modalOverlay = document.getElementById('areaModal');
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('hidden', true);
}
function closeAllModals() {
  // Close service modal if open
  const serviceModal = document.getElementById('modalOverlay');
  if (serviceModal.classList.contains('active')) {
    serviceModal.classList.remove('active');
  }

  // Close area modal if open
  const areaModal = document.getElementById('areaModal');
  if (areaModal.classList.contains('active')) {
    areaModal.classList.remove('active');
    areaModal.setAttribute('hidden', true);
  }

  // Close estimate modal if open (optional, only if needed)
  const estimateModal = document.getElementById('estimateModalOverlay');
  if (estimateModal && estimateModal.classList.contains('active')) {
    estimateModal.classList.remove('active');
    estimateModal.setAttribute('hidden', true);
  }
}

// Close modal if clicking outside modal content
document.getElementById('areaModal').addEventListener('click', (e) => {
  if (e.target.id === 'areaModal') closeAreaModal();
});

// Checklist data
const checklistData = {
  kitchen: {
    standardCleaning: [
      "Dust, wipe, and clean all counter tops",
      "Dust counter top items",
      "Clean counter top appliances exterior (coffee maker, toaster)",
      "Spot clean cabinets",
      "Clean exterior of large appliances",
      "Clean and sanitize sink"
    ],
    deepCleaning: [
      "Dust, wipe, and clean all counter tops",
      "Dust counter top items",
      "Clean counter top appliances exterior (coffee maker, toaster)",
      "Spot clean cabinets",
      "Clean exterior of large appliances",
      "Clean and sanitize sink",
      "Wipe down cabinet fronts"
    ],
    moveInOutCleaning: [
      "Dust, wipe, and clean all counter tops",
      "Dust counter top items",
      "Clean counter top appliances exterior (coffee maker, toaster)",
      "Spot clean cabinets",
      "Clean exterior of large appliances",
      "Clean and sanitize sink",
      "Wipe down cabinet fronts",
      "Clean interior of cabinets and drawers",
      "Clean interior of fridge and oven"
    ]
  },
  bathrooms: {
    standardCleaning: [
      "Scrub and clean tub/shower",
      "Dust, wipe, and clean counter tops",
      "Clean and sanitize sinks",
      "Clean mirrors",
      "Clean and sanitize toilet and toilet area"
    ],
    deepCleaning: [
      "Scrub and clean tub/shower",
      "Dust, wipe, and clean counter tops",
      "Clean and sanitize sinks",
      "Clean mirrors",
      "Clean and sanitize toilet and toilet area"
    ],
    moveInOutCleaning: [
      "Scrub and clean tub/shower",
      "Dust, wipe, and clean counter tops",
      "Clean and sanitize sinks",
      "Clean mirrors",
      "Clean and sanitize toilet and toilet area",
      "Clean interior of cabinets and drawers"
    ]
  },
  bedroom: {
    standardCleaning: ["Change bed sheets (add-on)"],
    deepCleaning: ["Change bed sheets (add-on)"],
    moveInOutCleaning: ["Change bed sheets (add-on)"]
  },
  otherRooms: {
    standardCleaning: [
      "Remove cobwebs",
      "Dust ceiling fans and light fixtures (within reach)",
      "Dust wall art and decor",
      "Dust knick-knacks and lamps",
      "Dust furniture and polish wooden furniture",
      "Dust blinds",
      "Dust window sills",
      "Dust doors and door frames",
      "Empty trash",
      "Vacuum floors",
      "Mop hard surface floors"
    ],
    deepCleaning: [
      "Remove cobwebs",
      "Dust ceiling fans and light fixtures (within reach)",
      "Dust wall art and decor",
      "Dust knick-knacks and lamps",
      "Dust furniture and polish wooden furniture",
      "Dust blinds",
      "Dust window sills",
      "Dust doors and door frames",
      "Empty trash",
      "Vacuum floors",
      "Mop hard surface floors",
      "Dust and wipe down window sills, window frame, and window stool",
      "Dust and wipe/clean baseboards",
      "Dust and clean all doors and door frames"
    ],
    moveInOutCleaning: [
      "Remove cobwebs",
      "Dust ceiling fans and light fixtures (within reach)",
      "Dust wall art and decor",
      "Dust knick-knacks and lamps",
      "Dust furniture and polish wooden furniture",
      "Dust blinds",
      "Dust window sills",
      "Dust doors and door frames",
      "Empty trash",
      "Vacuum floors",
      "Mop hard surface floors",
      "Dust and wipe down window sills, window frame, and window stool",
      "Dust and wipe/clean baseboards",
      "Dust and clean all doors and door frames"
    ]
  }
};

const serviceTitles = {
  basicCleaning: "Basic Cleaning",
  standardCleaning: "Standard Cleaning",
  deepCleaning: "Deep Cleaning",
  moveInOutCleaning: "Move In/Out Cleaning"
};

function formatArea(area) {
  return area.charAt(0).toUpperCase() + area.slice(1).replace(/([A-Z])/g, ' $1');
}

function createChecklistItems(tasks) {
  if (!tasks || tasks.length === 0) return "<em>No tasks listed.</em>";
  return tasks.map(task => `<div class="checklist-item"><i class="fa-solid fa-check"></i> ${task}</div>`).join("");
}

function generateChecklistTable() {
  const container = document.getElementById('checklistTableContainer');
  container.innerHTML = "";

  const table = document.createElement('table');
  table.id = 'checklistTable';

  // Header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const thArea = document.createElement('th');
  thArea.textContent = "Area";
  headerRow.appendChild(thArea);

  for (const serviceKey in serviceTitles) {
    const th = document.createElement('th');
    th.textContent = serviceTitles[serviceKey];
    headerRow.appendChild(th);
  }

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Body
  const tbody = document.createElement('tbody');
  for (const area in checklistData) {
    const tr = document.createElement('tr');

    const tdArea = document.createElement('td');
    tdArea.classList.add('area-name');
    tdArea.textContent = formatArea(area);
    tr.appendChild(tdArea);

    for (const serviceKey in serviceTitles) {
      const td = document.createElement('td');
      td.innerHTML = createChecklistItems(checklistData[area][serviceKey]);
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  container.appendChild(table);
}

window.addEventListener('DOMContentLoaded', generateChecklistTable);

document.addEventListener("DOMContentLoaded", function() {
  const serviceLinks = {
    "basic-cleaning": "basicCleaning",
    "standard-cleaning": "standardCleaning",
    "deep-cleaning": "deepCleaning",
    "move-in-cleaning": "moveInOutCleaning",
    "move-out-cleaning": "moveInOutCleaning"
  };

  document.querySelectorAll('.services-dropdown a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const hash = this.getAttribute('href').replace('#', '');
      const modalKey = serviceLinks[hash];

      document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
      });

      setTimeout(() => {
  closeAllModals(); // Close any open modal first
  openModal(modalKey);
}, 500);
    });
  });
});
// Dropdown menu scroll to service area + open area modal
document.addEventListener("DOMContentLoaded", function() {
  const areaLinks = {
    "richmond": "richmond",
    "chesterfield": "chesterfield",
    "henrico": "henrico"
  };

  document.querySelectorAll('.areas-dropdown a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const hash = this.getAttribute('href').replace('#', '');

      document.getElementById('service-areas').scrollIntoView({
        behavior: 'smooth'
      });

      setTimeout(() => {
  closeAllModals(); // Close any open modal first
  openAreaModal(areaLinks[hash]);
}, 500);
    });
  });
});
//contact

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const successMessage = contactForm.querySelector('.form-success');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Submit form data via fetch API to Formspree
    fetch(contactForm.action, {
      method: contactForm.method,
      body: new FormData(contactForm),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        contactForm.reset();
        successMessage.style.display = 'block';
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    })
    .catch(() => {
      alert('Oops! There was a problem submitting your form.');
    });
  });
});
