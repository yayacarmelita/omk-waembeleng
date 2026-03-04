// =========================================================================
// Mobile Menu Toggle
// =========================================================================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close menu when clicking outside or on a link
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
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

// Dummy Database of Activities
const activityData = {
    'kegiatan1': {
        title: 'Bakti Sosial Lingkungan',
        date: '20 Feb 2026',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
        description: 'Kegiatan gotong royong membersihkan area gereja dan lingkungan sekitar bersama warga setempat. Kegiatan ini bertujuan untuk memupuk rasa kepedulian terhadap lingkungan dan mempererat tali kebersamaan antar anggota OMK serta masyarakat.'
    },
    'kegiatan2': {
        title: 'Latihan Kor Persiapan Paskah',
        date: '14 Feb 2026',
        image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop',
        description: 'Latihan rutin paduan suara OMK untuk mempersiapkan tugas litrugi pada perayaan Tri Hari Suci. Latihan dilakukan setiap hari Minggu sore di aula gereja.'
    },
    'kegiatan3': {
        title: 'Retret Awal Tahun',
        date: '05 Jan 2026',
        image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop',
        description: 'Pembekalan rohani dan keakraban antar anggota OMK dalam menyambut lembaran baru di tahun 2026. Diadakan selama 2 hari 1 malam, diisi dengan sesi sharing, misa, dan outbound.'
    },
    'kegiatan4': {
        title: 'Malam Keakraban OMK',
        date: '28 Des 2025',
        image: 'https://images.unsplash.com/photo-1526976663112-001555921477?q=80&w=2070&auto=format&fit=crop',
        description: 'Acara kumpul akhir tahun untuk mempererat tali persaudaraan sesama anggota. Menampilkan berbagai pertunjukan seni dari masing-masing wilayah lingkungan.'
    },
    'kegiatan5': {
        title: 'Seminar Kewirausahaan Pemuda',
        date: '15 Nov 2025',
        image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1974&auto=format&fit=crop',
        description: 'Mengundang tokoh inspiratif dan wirausahawan lokal untuk membagikan ilmu kewirausahaan kepada anggota OMK agar dapat mandiri dan berinovasi.'
    },
    'kegiatan6': {
        title: 'Porseni Tingkat Paroki',
        date: '20 Okt 2025',
        image: 'https://images.unsplash.com/photo-1540822607835-0816df989f66?q=80&w=1951&auto=format&fit=crop',
        description: 'Partisipasi aktif anggota OMK Wae Mbeleng 1 dalam Pekan Olahraga dan Seni Paroki. Kami berhasil meraih juara di cabang olahraga voli dan lomba koor.'
    }
};

window.openModal = function (id) {
    const data = activityData[id];
    if (data) {
        modalContentArea.innerHTML = `
            <img src="${data.image}" alt="${data.title}" class="modal-header-img">
            <div class="modal-info">
                <h2>${data.title}</h2>
                <span class="modal-date"><i class='bx bx-calendar'></i> ${data.date}</span>
                <p>${data.description}</p>
            </div>
        `;
        modal.classList.add('show');
    }
}

window.closeModal = function () {
    modal.classList.remove('show');
    // Clear content after animation
    setTimeout(() => {
        modalContentArea.innerHTML = '';
    }, 300);
}

// Close when clicking outside modal content
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

