// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   const year = new Date().getFullYear();
//   return (
//     <>
//       <footer
//         className="text-center text-lg-start text-dark"
//         style={{ backgroundColor: "#ECEFF1" }}
//       >
//         <section>
//           <div className="container text-center text-md-start mt-5">
//             <div className="row mt-3">
//               <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
//                 <img
//                   src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/elementor/thumbs/Logo-new-pludvtq5fdp2nryc52fb47i2al3kp49nz7tk4abwei.png"
//                   alt="Logo"/>
//                 <p className="mt-4">
//                   Lenox brings you timeless watches crafted for elegance and
//                   precision. Discover quality timepieces and shop confidently
//                   with our excellent service.
//                 </p>
//                 <div className="text-start social-icon">
//                   <Link
//                     to="https://www.facebook.com"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaFacebook className="social-icon" />
//                   </Link>
//                   <Link
//                     to="https://www.twitter.com"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaTwitter className="social-icon" />
//                   </Link>
//                   <Link
//                     to="https://www.instagram.com"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <FaInstagram className="social-icon" />
//                   </Link>
//                 </div>
//               </div>

//               <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//                 <h6 className="text-uppercase fw-bold">Categories</h6>
//                 <hr
//                   className="mb-4 mt-0 d-inline-block mx-auto"
//                   style={{
//                     width: "60px",
//                     backgroundColor: "#7c4dff",
//                     height: "2px",
//                   }}
//                 />
//                 <p>
//                   <Link to="category/smart-watches" className="text-dark">
//                     Smart Watches
//                   </Link>
//                 </p>
//                 <p>
//                   <Link to="category/stop-watch" className="text-dark">
//                     Stop Watch
//                   </Link>
//                 </p>
//                 <p>
//                   <Link to="category/wall-clocks" className="text-dark">
//                     Wall Clock
//                   </Link>
//                 </p>
//                 <p>
//                   <Link to="category/alarm-clock" className="text-dark">
//                     Alarm Clock
//                   </Link>
//                 </p>
//                 <p></p>
//               </div>
//               <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
//                 <h6 className="text-uppercase fw-bold">Useful links</h6>
//                 <hr
//                   className="mb-4 mt-0 d-inline-block mx-auto"
//                   style={{
//                     width: "60px",
//                     backgroundColor: "#7c4dff",
//                     height: "2px",
//                   }}
//                 />
//                 <p>
//                   <Link to="/products" className="text-dark">
//                     Shop
//                   </Link>
//                 </p>
//                 <p>
//                   <Link to="/about" className="text-dark">
//                     About Us
//                   </Link>
//                 </p>
//                 <p>
//                   <Link to="/contact" className="text-dark">
//                     Contact
//                   </Link>
//                 </p>
//                 <p>
//                   <Link to="/help" className="text-dark">
//                     Help
//                   </Link>
//                 </p>
//               </div>
//               <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
//                 <h6 className="text-uppercase fw-bold">Contact</h6>
//                 <hr
//                   className="mb-4 mt-0 d-inline-block mx-auto"
//                   style={{
//                     width: "60px",
//                     backgroundColor: "#7c4dff",
//                     height: "2px",
//                   }}
//                 />
//                 <p>
//                   <Link to="tel:3075501821">+307 550 1821</Link>
//                 </p>
//                 <p className="mt-2">283 N. Glenwood Street, Levittown, NY</p>
//                 <p>
//                   <Link to="mailto:muneeb.dev@gmail.com">
//                     muneeb.dev@gmail.com
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div
//           className="row text-center p-3 foot2"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
//         >
//          <div className="col-md-6 ">  Copyright © {year}. All Rights Reserved.</div>
//          <div className="col-md-6 img">
//           <img src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/Group-2.png" alt="" />
//          </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;





import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        className="text-center text-lg-start text-dark" // Adjusted padding-top
        style={{ backgroundColor: "#ECEFF1" }}
      >
        <section>
          <div className="container text-center text-md-start pt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img
                  src="https://themewagon.github.io/kaira/images/main-logo.png"
                  alt="Logo"
                />
                <p className="mt-4">
                From chic casuals to elegant evening wear, the Kaira Collection outlet offers a stunning array of pieces that redefine contemporary fashion. Loved by all, it’s a true icon in the world of designer wear.
                </p>
                <div className="text-start social-icon">
                  <Link
                    to="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="social-icon" />
                  </Link>
                  <Link
                    to="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="social-icon" />
                  </Link>
                  <Link
                    to="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="social-icon" />
                  </Link>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Categories</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="#" className="text-dark">
                    Men ware
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-dark">
                    Women Ware
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-dark">
                    Shoes
                  </Link>
                </p>
                <p>
                  <Link to="#" className="text-dark">
                    Acessories
                  </Link>
                </p>
                <p></p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="/buyer-dashboard" className="text-dark">
                    Shop
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="text-dark">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="text-dark">
                    Contact
                  </Link>
                </p>
                <p>
                  <Link to="/seller-dashboard" className="text-dark">
                    Seller Dasboard
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to="tel:3075501821">+305 556 5721</Link>
                </p>
                <p className="mt-2">283 N. Glenwood Street, Levittown, NY</p>
                <p>
                  <Link to="mailto:hafizmuhammadusama664@gmail.com">
                    hafizmuhammadusama664@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="row text-center p-3 foot2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
         <div className="col-md-6 ">  Copyright © {year}. All Rights Reserved.</div>
         <div className="col-md-6 img">
          <img src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/Group-2.png" alt="" />
         </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
