// --- File: script.js ---

document.addEventListener('DOMContentLoaded', () => {
    // Objek untuk menyimpan informasi toko
    const storeInfo = {
        name: "Toko Ikan Asin Jaya",
        tagline: "Ikan Asin Segar Langsung dari Nelayan!",
        address: "Jl. Laut Biru No. 10, Jakarta",
        phone: "(021) 123-4567",
        email: "info@ikanasinjaya.com",
        openingHours: {
            mondayToFriday: "08:00 - 17:00 WIB",
            saturday: "09:00 - 14:00 WIB",
            sunday: "Tutup"
        },
        products: [
            { name: "Ikan Asin Gabus", price: "Rp 50.000/kg", description: "Gurih dan renyah, cocok untuk lauk." },
            { name: "Ikan Asin Sepat", price: "Rp 45.000/kg", description: "Ukuran kecil, enak dibuat balado." },
            { name: "Cumi Asin", price: "Rp 65.000/kg", description: "Lembut dan tidak terlalu asin." },
            { name: "Terasi Udang Premium", price: "Rp 25.000/250gr", description: "Aroma kuat, cocok untuk sambal." }
        ]
    };

    // --- Fungsi untuk menampilkan informasi toko di HTML ---
    function displayStoreInfo() {
        // Ambil elemen HTML berdasarkan ID
        const storeNameElement = document.getElementById('store-name');
        const taglineElement = document.getElementById('store-tagline');
        const addressElement = document.getElementById('store-address');
        const phoneElement = document.getElementById('store-phone');
        const emailElement = document.getElementById('store-email');
        const openingHoursList = document.getElementById('opening-hours-list');
        const productList = document.getElementById('product-list');

        // Isi konten elemen HTML dengan data dari objek storeInfo
        if (storeNameElement) storeNameElement.textContent = storeInfo.name;
        if (taglineElement) taglineElement.textContent = storeInfo.tagline;
        if (addressElement) addressElement.textContent = storeInfo.address;
        if (phoneElement) phoneElement.textContent = storeInfo.phone;
        if (emailElement) emailElement.textContent = storeInfo.email;

        // Tampilkan jam buka
        if (openingHoursList) {
            openingHoursList.innerHTML = `
                <li>**Senin - Jumat:** ${storeInfo.openingHours.mondayToFriday}</li>
                <li>**Sabtu:** ${storeInfo.openingHours.saturday}</li>
                <li>**Minggu:** ${storeInfo.openingHours.sunday}</li>
            `;
        }

        // Tampilkan daftar produk
        if (productList) {
            productList.innerHTML = ''; // Bersihkan daftar produk sebelum diisi
            storeInfo.products.forEach(product => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${product.name}</h3>
                    <p><strong>Harga:</strong> ${product.price}</p>
                    <p>${product.description}</p>
                `;
                productList.appendChild(li);
            });
        }
    }

    // Panggil fungsi untuk menampilkan informasi saat DOM sudah dimuat
    displayStoreInfo();

    // --- Contoh interaktivitas: Tombol "Hubungi Kami" ---
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            alert(`Anda dapat menghubungi kami di: ${storeInfo.phone} atau email: ${storeInfo.email}`);
        });
    }

    // --- Fitur tambahan: Filter produk (opsional, bisa dikembangkan) ---
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredProducts = storeInfo.products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
            
            // Perbarui daftar produk yang ditampilkan
            const currentProductList = document.getElementById('product-list');
            if (currentProductList) {
                currentProductList.innerHTML = '';
                if (filteredProducts.length > 0) {
                    filteredProducts.forEach(product => {
                        const li = document.createElement('li');
                        li.innerHTML = `
                            <h3>${product.name}</h3>
                            <p><strong>Harga:</strong> ${product.price}</p>
                            <p>${product.description}</p>
                        `;
                        currentProductList.appendChild(li);
                    });
                } else {
                    currentProductList.innerHTML = '<p>Tidak ada produk yang cocok dengan pencarian Anda.</p>';
                }
            }
        });
    }

});