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
                title: "Judul Hero Banner",
                subtitle: "Sub-judul atau deskripsi singkat mengenai OMK."
            },
            about: {
                title: "Tentang Kami",
                content: "Isi dengan deskripsi singkat mengenai OMK Wae Mbeleng 1."
            }
        },
        PROFIL: {
            sejarah: "Isi dengan sejarah singkat OMK Wae Mbeleng 1.",
            visi: "Isi dengan visi organisasi.",
            misi: [
                "Contoh misi 1",
                "Contoh misi 2"
            ],
            organisasi: [],
            kontak: {
                wa: "",
                ig: "",
                fb: "",
                alamat: ""
            }
        },
        KEGIATAN: [],
        PENGUMUMAN: [],
        PASAR: []
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
