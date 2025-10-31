document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Inisialisasi Peta (Leaflet)
    // ===================================
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        const bojonegoroCenter = [-7.1648, 111.8703];

        // 1. NONAKTIFKAN KONTROL DEFAULT DENGAN zoomControl: false
        var map = L.map('map-container', {
            zoomControl: false // Menonaktifkan kontrol zoom default
        }).setView(bojonegoroCenter, 10);

        // Tile Layer OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // 2. TAMBAHKAN KONTROL ZOOM BARU DI POSISI BOTTOM-LEFT
        L.control.zoom({
            position: 'bottomleft' // Mengubah posisi ke bawah-kiri
        }).addTo(map);

        // 3. TAMBAHKAN KONTROL KOORDINAT/SKALA (opsional, ganti dengan tombol kustom Anda)
        // L.control.scale().addTo(map); 

        // 4. Implementasi Kontrol Kustom (Contoh: Menambah tombol kustom seperti gambar)
        // Anda harus membuat kontrol kustom sendiri untuk tombol-tombol unik seperti di gambar, 
        // menggunakan kelas kustom dan JavaScript.

        // ... (Contoh Marker Anda) ...

        // ===================================
        // Logika Lainnya (hapus offcanvas karena sudah dihapus di HTML)
        // ===================================
        
        // Hapus logika offcanvas jika tidak digunakan lagi:
        /*
        const offcanvasFilter = document.getElementById('offcanvasFilter');
        if(offcanvasFilter) {
            offcanvasFilter.addEventListener('hidden.bs.offcanvas', function () {
                console.log('Filter ditutup.');
            });
        }
        */
    }
});