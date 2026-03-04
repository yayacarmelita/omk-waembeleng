// =========================================================================
// Mobile Menu Toggle
// =========================================================================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// =========================================================================
// DATA INITIALIZATION & RENDERING
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Home Page Data
    const homeData = DataManager.load(DataManager.KEYS.HOME);
    const kegiatanData = DataManager.load(DataManager.KEYS.KEGIATAN);

    if (homeData) {
        if (document.getElementById('hero-title')) document.getElementById('hero-title').textContent = homeData.hero.title;
        if (document.getElementById('hero-subtitle')) document.getElementById('hero-subtitle').textContent = homeData.hero.subtitle;
        if (document.getElementById('about-title')) document.getElementById('about-title').textContent = homeData.about.title;
        if (document.getElementById('about-content')) document.getElementById('about-content').innerHTML = `<p>${homeData.about.content}</p>`;
    }

    // 2. Render Activity Preview (Home)
    const homeKegiatanGrid = document.getElementById('home-kegiatan-grid');
    if (homeKegiatanGrid && kegiatanData) {
        homeKegiatanGrid.innerHTML = '';
        kegiatanData.slice(-3).reverse().forEach(item => {
            homeKegiatanGrid.innerHTML += `
                <div class="activity-card" onclick="openModal('${item.id}')">
                    <div class="card-img">
                        <img src="${item.image}" alt="${item.title}">
                        <span class="card-tag">${item.category}</span>
                    </div>
                    <div class="card-body">
                        <span class="card-date"><i class='bx bx-calendar'></i> ${formatDate(item.date)}</span>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.content.substring(0, 100)}...</p>
                    </div>
                </div>
            `;
        });
    }

    // 3. Render Profile Page Data
    renderProfilData();

    // 4. Mobile Menu Toggle logic
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderProfilData() {
    const profilData = DataManager.load(DataManager.KEYS.PROFIL);
    if (!profilData) return;

    if (document.getElementById('profil-history')) document.getElementById('profil-history').textContent = profilData.sejarah;
    if (document.getElementById('profil-visi')) document.getElementById('profil-visi').textContent = profilData.visi;

    const misiList = document.getElementById('profil-misi-list');
    if (misiList) {
        misiList.innerHTML = profilData.misi.map(m => `<li><i class='bx bx-check-circle'></i> <span>${m}</span></li>`).join('');
    }

    // Render Org Grid
    const orgGrid = document.getElementById('profil-org-grid');
    if (orgGrid && profilData.organisasi) {
        orgGrid.innerHTML = profilData.organisasi.map(item => `
            <div class="org-card">
                <div class="org-img">
                    <img src="${item.foto}" alt="${item.nama}">
                </div>
                <div class="org-info">
                    <h4>${item.nama}</h4>
                    <span>${item.jabatan}</span>
                </div>
            </div>
        `).join('');
    }

    // Render Contact Info if elements exist pairs with ID/Content
    const contactMap = {
        'contact-wa': profilData.kontak.wa,
        'contact-ig': profilData.kontak.ig,
        'contact-fb': profilData.kontak.fb,
        'contact-alamat': profilData.kontak.alamat
    };

    for (const [id, value] of Object.entries(contactMap)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
    }
});

const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');

        // simple active state toggling
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// =========================================================================
// Simple Routing / Section Toggling
// =========================================================================
// For a vanilla SPA, we can handle hash changes to show/hide sections
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);

function handleRouting() {
    let hash = window.location.hash || '#beranda';

    // In a real SPA, this would hide all sections and show the active one.
    // For now, it just scrolls to it if it exists or we can inject content dynamically.
    // Since we are building sections one by one, we will prepare the logic here.
}

// =========================================================================
// Modal Logic (Kegiatan Details)
// =========================================================================
const modal = document.getElementById('activityModal');
const modalContentArea = document.getElementById('modal-content-area');

window.openModal = function (id) {
    const activities = DataManager.load(DataManager.KEYS.KEGIATAN) || [];
    const data = activities.find(a => String(a.id) === String(id));

    if (data && modalContentArea) {
        modalContentArea.innerHTML = `
            <img src="${data.image}" alt="${data.title}" class="modal-header-img">
            <div class="modal-info">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <span class="card-tag" style="position: static; padding: 4px 10px;">${data.category}</span>
                    <span class="modal-date"><i class='bx bx-calendar'></i> ${formatDate(data.date)}</span>
                </div>
                <h2>${data.title}</h2>
                <p>${data.content}</p>
            </div>
        `;
        modal.classList.add('show');
    }
}

window.closeModal = function () {
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            if (modalContentArea) modalContentArea.innerHTML = '';
        }, 300);
    }
}

// Close when clicking outside modal content
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

