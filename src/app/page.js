"use client";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const products = [
    {
      id: 1,
      image:
        "https://gustosafoods.com/wp-content/uploads/2024/10/4-plus-300x300.png",
      description: "4 Suta Plus Makhana| (12mm and above)| 200gm",
      price1: "₹300.00",
      price2: "₹299.00",
    },
    {
      id: 2,
      image:
        "https://gustosafoods.com/wp-content/uploads/2024/10/6-plus-hp-600x600.png",
      description: "S6.5 Suta Plus(20.7mm above)| Handpicked Makhana|200gm",
      price1: "₹499.00",
      price2: "₹499.00",
    },
    {
      id: 3,
      image:
        "	https://gustosafoods.com/wp-content/uploads/2024/10/5-plus-Handpicked-300x300.jpg",
      description: "5 Suta Plus Handpicked Makhana(15.8mm and above)| 200gm",
      price1: "₹349.00 ",
      price2: "₹299.00",
    },
    {
      id: 4,
      image:
        "https://gustosafoods.com/wp-content/uploads/2024/10/2-300x300.png",
      description: "Yogibhog Makhana 500gm (250gm x 2)",
      price1: "₹1,400.00",
      price2: "₹799.00",
    },
    {
      id: 5,
      image:
        "https://gustosafoods.com/wp-content/uploads/2024/10/3-300x300.png",
      description: "Yogibhog | Premium Makhana Big Size 250gm",
      price1: "₹700.00",
      price2: "₹499.00",
    },
    {
      id: 6,
      image:
        "https://gustosafoods.com/wp-content/uploads/2024/02/Peri-Peri-a--300x300.png",
      description: "Frisky Roasted Makhana(Fox Nut), Peri Peri, jar - 70gm",
      price1: "₹199.00",
      price2: "₹198.00",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const images = [
    "/assets/hero-section.jpg",
    "https://gustosafoods.com/wp-content/uploads/2024/03/2-1.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images[0] ? images[1] : images[0]
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Navbar />

      {/* hero section */}

      <div
        className="hero-section d-flex flex-column justify-content-center"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-section1">
          <h1>
            Say goodbye to bland makhanas; it's time to savor the flavors.
          </h1>
          <p className="fs-5 mb-4">Get extra 5% off on flavoured makhanas.</p>
          <div className="shop-now d-flex gap-2 align-items-center justify-content-center my-3">
            <p className="fs-5 mb-0 text-white">Shop Now</p>
            <img src="/assets/next.png" alt="Next Icon" />
          </div>
        </div>
      </div>

      {/* most popular section */}

      <div className="most-popular d-flex flex-column align-items-center">
        <p className="mb-0">Most Popular</p>
        <h1>Discover flavours in demand</h1>
        <div className="carousel-container">
          <button onClick={prevSlide} className="carousel-btn">
            <img src="/assets/back.png"></img>
          </button>

          <div className="products-grid">
            {products
              .slice(startIndex, startIndex + 4)
              .concat(
                products.slice(0, Math.max(0, startIndex + 4 - products.length))
              )
              .map((product) => (
                <div key={product.id} className="product-card d-flex flex-column justify-content-between">
                 <div>
                 <img
                    src={product.image}
                    alt={product.description}
                    className="product-img"
                  />
                  <p className="product-descrip">{product.description} </p>
                  <div class="wishlist-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/6051/6051092.png"></img>
                  </div>
                  </div>
                  <div className="">
                  <div className="price d-flex gap-1">
                    <p className="price1">{product.price1}</p>
                    <p className="price2">{product.price2}</p>
                  </div>
                    <button className="add-to-cart">Add to Cart + </button>
                  </div>
                </div>
              ))}
          </div>

          <button onClick={nextSlide} className="carousel-btn">
            <img src="/assets/next2.png"></img>
          </button>
        </div>
      </div>
    </>
  );
}
