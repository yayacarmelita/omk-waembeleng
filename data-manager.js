/**
 * DATA MANAGER - Unified Storage Logic for OMK Wae Mbeleng 1
 * Handles all CRUD operations using localStorage.
 */

const DataManager = {
    // Keys for localStorage
    KEYS: {
        HOME: 'omk_home_data',
        PROFIL: 'omk_profil_data',
        KEGIATAN: 'omk_kegiatan_data',
        PENGUMUMAN: 'omk_pengumuman_data',
        PASAR: 'omk_pasar_data'
    },

    // Initial Default Data (Seed)
    DEFAULTS: {
        HOME: {
            hero: {
                title: "Menjadi Saksi Kristus di Tengah Dunia",
                subtitle: "Wadah kreativitas, persaudaraan, dan pelayanan Orang Muda Katolik Wae Mbeleng 1."
            },
            about: {
                title: "Siapa Kami?",
                content: "OMK Wae Mbeleng 1 adalah komunitas orang muda Katolik yang berpusat pada semangat pelayanan dan persaudaraan. Kami hadir sebagai wadah kembang minat, bakat, serta iman bagi generasi muda gereja."
            }
        },
        PROFIL: {
            sejarah: "OMK Wae Mbeleng 1 terbentuk atas dasar panggilan nurani kaum muda untuk mengambil peran aktif dalam kehidupan menggereja di Wae Mbeleng. Berawal dari komunitas kecil paduan suara, kini telah berkembang mencakup berbagai bidang pelayanan dan sosial kemasyarakatan.",
            visi: "Mewujudkan kaum muda Katolik yang beriman tangguh, berkarakter Kristiani, tanggap terhadap tantangan zaman, dan siap sedia melayani gereja serta masyarakat di Wae Mbeleng 1.",
            misi: [
                "Meningkatkan kualitas iman melalui kegiatan rohani.",
                "Menjalin persaudaraan yang erat antar anggota.",
                "Aktif dalam kegiatan sosial dan kemasyarakatan.",
                "Mengembangkan bakat dan kreativitas kaum muda."
            ],
            organisasi: [
                { id: 1, nama: "Cynthia Dagur", jabatan: "Ketua Team", foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" },
                { id: 2, nama: "Yohanes Bosco", jabatan: "Wakil Ketua", foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop" }
            ],
            kontak: {
                wa: "6281234567890",
                ig: "@omk_waembeleng1",
                fb: "OMK Wae Mbeleng 1",
                alamat: "Jl. Gereja No. 1, Wae Mbeleng, Manggarai Barat, NTT"
            }
        },
        KEGIATAN: [
            { id: Date.now(), title: "Bakti Sosial Lingkungan", date: "2026-03-02", category: "sosial", content: "Kegiatan rutin membersihkan area sekitar gereja dan lingkungan desa.", image: "https://images.unsplash.com/photo-1559027615-cd99c59630d6?q=80&w=2070&auto=format&fit=crop" }
        ],
        PENGUMUMAN: [
            { id: Date.now() + 1, title: "Rapat Rutin Bulanan", date: "2026-02-28", content: "Diharapkan kehadiran pengurus inti untuk membahas agenda Paskah." }
        ],
        PASAR: [
            { id: Date.now() + 2, name: "Kaos Casual OMK 2026", price: 120000, badge: "Pre-Order", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop" }
        ]
    },

    // Initialize data if empty
    init() {
        if (!localStorage.getItem(this.KEYS.HOME)) this.save(this.KEYS.HOME, this.DEFAULTS.HOME);
        if (!localStorage.getItem(this.KEYS.PROFIL)) this.save(this.KEYS.PROFIL, this.DEFAULTS.PROFIL);
        if (!localStorage.getItem(this.KEYS.KEGIATAN)) this.save(this.KEYS.KEGIATAN, this.DEFAULTS.KEGIATAN);
        if (!localStorage.getItem(this.KEYS.PENGUMUMAN)) this.save(this.KEYS.PENGUMUMAN, this.DEFAULTS.PENGUMUMAN);
        if (!localStorage.getItem(this.KEYS.PASAR)) this.save(this.KEYS.PASAR, this.DEFAULTS.PASAR);
    },

    // Save generic data
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    },

    // Load generic data
    load(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
};

// Auto initialize on load
DataManager.init();
