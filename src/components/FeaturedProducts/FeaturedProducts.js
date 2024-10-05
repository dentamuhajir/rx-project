import React from 'react'

const FeaturedProducts = () => {
    const products = [
      { id: 1, title: 'Product 1', price: '$29.99', image: 'path/to/product1.jpg' },
      { id: 2, title: 'Product 2', price: '$39.99', image: 'path/to/product2.jpg' },
      { id: 3, title: 'Product 3', price: '$49.99', image: 'path/to/product3.jpg' },
      { id: 4, title: 'Product 4', price: '$19.99', image: 'path/to/product4.jpg' },
    ];
  
    return (
      <div className="featured-products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };
  
export default FeaturedProducts;