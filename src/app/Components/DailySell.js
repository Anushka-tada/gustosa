import React from 'react'

const DailySell = () => {
  return (
    <>
      <div className="daily-sells">
        <h1>Daily Best Sells</h1>
            <div className="all-sells d-flex gap-4">
             <div className="daily-sell1 daily-sell ">
                 <h3 className="text-white">100% Organic Coffee Beans.</h3>
                 <p className="text-white">Get the best deal before close.</p>
                <div className="daily-shop d-flex gap-2 align-items-center justify-content-center my-3">
            <p className="fs-5 mb-0 text-white fs-6">Shop Now</p>
            <img src="/assets/next.png" alt="Next Icon" />
          </div>
             </div>


              <div className="daily-sell">
                 <div className="daily-product-card d-flex flex-column justify-content-between" >
                <div>
                  <img src="https://freshcart-next-js.vercel.app/images/products/product-img-11.jpg"   className="product-img" />
                  <p className="category mb-0">Tea, Coffee & Drinks</p>
                  <p className="description ">Roast Ground Coffee</p>
                  <div className="wishlist-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/6051/6051092.png" />
                  </div>
                </div>
                <div>
                  <div className="price d-flex gap-1">
                       <p className="price2">$13.5</p>
                      <p className="price1"> $18</p>
                  </div>
                  <button className="addCart-btn"> + Add to Cart</button>
                </div>
              </div>
             </div>


               <div className="daily-sell">
                 <div className="daily-product-card d-flex  flex-column justify-content-between" >
                <div>
                  <img src="https://freshcart-next-js.vercel.app/images/products/product-img-12.jpg"   className="product-img" />
                  <p className="category mb-0">Fruits & Vegetables</p>
                  <p className="description ">Crushed Tomatoes</p>
                  <div className="wishlist-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/6051/6051092.png" />
                  </div>
                </div>
                <div>
                  <div className="price d-flex gap-1">
                       <p className="price2">$13.5</p>
                      <p className="price1"> $18</p>
                  </div>
                  <button className="addCart-btn"> + Add to Cart</button>
                </div>
              </div>
             </div>


              <div className="daily-sell">
                 <div className="daily-product-card d-flex flex-column justify-content-between" >
                <div>
                  <img src="https://freshcart-next-js.vercel.app/images/products/product-img-13.jpg"   className="product-img" />
                  <p className="category mb-0">Fruits & Vegetables</p>
                  <p className="description ">Golden Pineapple</p>
                  <div className="wishlist-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/6051/6051092.png" />
                  </div>
                </div>
                <div>
                  <div className="price d-flex gap-1">
                       <p className="price2">$13.5</p>
                      <p className="price1"> $18</p>
                  </div>
                  <button className="addCart-btn"> + Add to Cart</button>
                </div>
              </div>
             </div>
                   
            </div>

        </div>
    </>
  )
}

export default DailySell
