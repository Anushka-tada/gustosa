import React, { useState } from "react";

const products = [
  { id: 1, name: "Baby Care", image: "https://freshcart-next-js.vercel.app/images/category/category-baby-care.jpg" },
  { id: 2, name: "Chicken, Meat & Fish", image: "https://freshcart-next-js.vercel.app/images/category/category-chicken-meat-fish.jpg" },
  { id: 3, name: "Cleaning Essentials", image: "https://freshcart-next-js.vercel.app/images/category/category-cleaning-essentials.jpg" },
  { id: 4, name: "Pet Care", image: "https://freshcart-next-js.vercel.app/images/category/category-pet-care.jpg" },
  { id: 5, name: "Fruits & Vegetables", image: "https://freshcart-next-js.vercel.app/images/category/category-fruits-vegetables.jpg" },
  { id: 6, name: "Cold Drink Juices", image: "https://freshcart-next-js.vercel.app/images/category/category-cold-drinks-juices.jpg" },
  { id: 7, name: "Instant Food", image: "https://freshcart-next-js.vercel.app/images/category/category-instant-food.jpg" },
  { id: 8, name: "Tea Coffee & Drinks", image: "https://freshcart-next-js.vercel.app/images/category/category-tea-coffee-drinks.jpg" },
  { id: 9, name: "Snacks & Munchies", image: "https://freshcart-next-js.vercel.app/images/category/category-snack-munchies.jpg" },
  { id: 10, name: "Bakery & Buiscuits", image: "https://freshcart-next-js.vercel.app/images/category/category-bakery-biscuits.jpg" },
  { id: 11, name: "Dairy, Bread & Eggs", image: "https://freshcart-next-js.vercel.app/images/category/category-dairy-bread-eggs.jpg" },
  { id: 12, name: "Atta, Rice & Dal", image: "https://freshcart-next-js.vercel.app/images/category/category-atta-rice-dal.jpg" },
];

const FeaturedCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;
  const step = 2;

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - step + products.length) % products.length
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + step) % products.length);
  };

  const getVisibleProducts = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex <= products.length) {
      return products.slice(startIndex, endIndex);
    } else {
      // Wrap around
      return [
        ...products.slice(startIndex),
        ...products.slice(0, endIndex - products.length),
      ];
    }
  };

  const visibleProducts = getVisibleProducts();

  return (
    <div className="featured">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>Featured Categories</h3>
        <div className="d-flex gap-3"> 
          <button onClick={handlePrev} className="carousel-btn2">
          <img src="/assets/back.png" alt="Previous" />
          </button>
          <button onClick={handleNext} className="carousel-btn2">
          <img src="/assets/next2.png" alt="Next" />
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {visibleProducts.map((product) => (
          <div key={product.id} style={{ textAlign: "center" }} className=" border feature-product">
            <img src={product.image} alt={product.name} width="100" height="100" />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
