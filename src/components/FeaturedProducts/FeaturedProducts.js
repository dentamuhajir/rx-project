import React, { useEffect, useState } from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  // useState digunakan untuk mendeklarasikan variabel state di React.
  // products adalah variabel state yang menyimpan data produk, dan setProducts adalah fungsi untuk memperbarui state ini.
  const [products, setProducts] = useState([]);

  // useEffect digunakan untuk menjalankan efek samping di komponen (misalnya, memuat data dari API) setelah render pertama kali selesai.
  useEffect(() => {
    // Fungsi asinkron untuk mengambil data produk dari API.
    const fetchProducts = async () => {
      try {
        // Melakukan fetch (pengambilan) data dari API.
        const response = await fetch('https://fakestoreapi.com/products');
        // Mengubah response JSON menjadi objek JavaScript dan menyimpannya di variabel data.
        const data = await response.json();
        // Menggunakan setProducts untuk memperbarui state dengan data yang diambil dari API.
        setProducts(data);
      } catch (error) {
        // Menangkap dan menampilkan error jika terjadi kesalahan dalam proses fetch.
        console.error('Error fetching products:', error);
      }
    };

    // Memanggil fungsi fetchProducts untuk mulai mengambil data dari API saat komponen pertama kali di-render.
    fetchProducts();
  }, []); // Array kosong [] menunjukkan bahwa efek ini hanya akan dijalankan sekali saat komponen pertama kali di-render.

  // Render komponen dengan menggunakan data yang diambil dari state products.
  return (
    <div className="featured-products">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
