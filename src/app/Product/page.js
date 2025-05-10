"use client"
import React from "react";
import Navbar from "../Components/Navbar";
import { useState } from "react";

const page = () => {
   
  const [count, setCount] = useState(1);
   const [selectedImage, setSelectedImage] = useState(
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-1.jpg"
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-1.jpg",
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-2.jpg",
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-3.jpg",
    "https://freshcart-next-js.vercel.app/images/products/product-single-img-4.jpg",
  ];
  return (
    <>
    <Navbar/>
      <div className="product-page">
        <div className="product-outer d-flex gap-5">
          <div className="product-image-side">
      {/* Hero Image */}
      <img src={selectedImage} className="product-img-hero" alt="Product" />

      {/* Thumbnail Images */}
      <div className="d-flex gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`product-img-small ${index === activeIndex ? "active-border" : ""}`}
            alt="Product Thumbnail"
            onClick={() => {
              setSelectedImage(img);
              setActiveIndex(index);
            }}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .product-img-small {
          transition: border 0.2s ease-in-out;
        }
        .active-border {
          border: 2px solid lightgreen;
        }
      `}</style>
    </div>
          <div className="product-details-side">
            <p className="product-category fw-bold"> Snack & Munchies</p>
            <h1 className="product-name ">Haldiram's Sev Bhujia</h1>
            <div className="product-rating d-flex gap-2">
              <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="rate"></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"  className="rate"></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"  className="rate"></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"  className="rate"></img>
              <img src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"  className="rate"></img>
              <p className="review fw-bold">(4 reviews)</p>
            </div>
            <div className="product-price d-flex gap-1">
              <p className=" fw-bold real-price mb-0">$21.6 </p> <p className="cut-price mb-0">$24</p> <p className=" text-danger mb-0">10% Off</p>
            </div>

                <hr className="hr mt-4 mb-4"></hr>

            <div className="product-quantity d-flex gap-2">
              <p>250g</p> <p>500g</p> <p>1kg</p>
            </div>

             <div className="product-count d-flex gap-1">
      <p onClick={() => setCount(count > 1 ? count - 1 : 1)} style={{ cursor: "pointer" }}>-</p>
      <p className="px-4">{count}</p>
      <p onClick={() => setCount(count + 1)} style={{ cursor: "pointer" }}>+</p>
    </div>

            <div className="d-flex gap-3 align-items-center">
                <button className="product-cart-btn d-flex gap-3">
              <img src="/assets/add-to-cart.png" ></img>
              <p className="mb-0">Add to cart</p>
            </button>
            <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" className="wishlist"></img>
            </div>

             <hr className="hr mt-4 mb-4"></hr>

            <div className="product-details d-flex ps-4">
                 <div>
                    <p>Product Code:</p>
                    <p>Availability:</p>
                    <p>Type:</p>
                    <p>Shipping:</p>
                 </div>
                 <div>
                    <p>FBB00255</p>
                    <p>In Stock</p>
                    <p>Fruits</p>
                    <p>01 day shipping.( Free pickup today)</p>
                 </div>
            </div>

            <div className="share-btn">
             <p>Share</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default page;
