import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

const PopularProducts = ({addToCart}) => {  
  const [popularProducts, setPopularProducts] = useState([]);
  return (
    <main className="text-center mb-5">
      <h1 className="text-dark mb-5 mt-5">Featured Product</h1>
      <div className="container">

      <div className="row text-center mt-3">
        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://utero-ninethemes.myshopify.com/cdn/shop/files/collection-1_360x.jpg?v=1729685453"
            alt="Logo"
            style={{ height: "200px" }}
          />
          <h5 className="text-dark mt-3">Clothes</h5>
          {/* <Link to="/products" className="btn btn-primary mt-3">
            Shop Now
          </Link> */}

        </div>

        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://utero-ninethemes.myshopify.com/cdn/shop/files/collection-2_360x.jpg?v=1729685468"
            alt="Logo"
            style={{ height: "200px" }}
          />
          <h5 className="text-dark mt-3">Shoes</h5>
         
        </div>

        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://utero-ninethemes.myshopify.com/cdn/shop/files/collection-4_360x.jpg?v=1729685498"
            alt="Logo"
            style={{ height: "200px" }}
          />
          <h5 className="text-dark mt-2">Grooming</h5>

        </div>

        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://utero-ninethemes.myshopify.com/cdn/shop/files/collection-5_360x.jpg?v=1729685511"
            alt="Logo"
            style={{ height: "200px" }}
          />
          <h5 className="text-dark mt-2">Acessories</h5>

        </div>
      </div>

      </div>

      <div className="productCard">
        {/* <section>
          <div className="container py-2">
            <div className="row justify-content-center">
       
              {popularProducts
                .filter((item, index) => index != 4)
                .map((items, i) => (
                  <div className="col-md-8 col-lg-3 col-xl-3 mb-4" key={i}>
                    <div className="card" style={{ borderRadius: "15px" }}>
                      <img
                        src={items.thumbnail}
                        style={{
                          borderTopLeftRadius: "15px",
                          borderTopRightRadius: "15px",
                        }}
                        alt="Laptop"
                      />
                      <div className="card-body pb-0">
                        <div className="d-flex justify-content-between">
                          <div>
                            <p>
                              <a to="#!" className="text-dark">
                                {items.title}
                              </a>
                            </p>
                            <p className="small text-muted">{items.category}</p>
                          </div>
                          <div>
                            <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <p className="small text-muted">Rated 4.0/5</p>
                          </div>
                        </div>
                      </div>
                      <hr className="my-0" />
                      <div className="card-body pb-0">
                        <div className="d-flex justify-content-between mb-2">
                          <p>
                            <Link to="/" className="text-dark">
                              ${items.price}
                            </Link>
                          </p>
                          <p className="text-dark">
                            Dicount: {items.discountPercentage}
                          </p>
                        </div>
                      </div>
                      <hr className="my-0" />
                      <div className="card-body">
                        <div className="d-flex justify-content-center align-items-center "> 
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section> */}
      </div>
      <div className="button">
        <Link to="#">
        <button className="btn btn-danger btn1">View More</button>
        </Link>
      </div>
    </main>
  );
};

export default PopularProducts;
