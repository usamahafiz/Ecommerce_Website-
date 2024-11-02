import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CardImageSlider = () => {
  const images = [
    { src: 'https://themewagon.github.io/kaira/images/cat-item1.jpg' },
    { src: 'https://themewagon.github.io/kaira/images/cat-item2.jpg' },
    { src: 'https://themewagon.github.io/kaira/images/cat-item3.jpg' },
    { src: 'https://themewagon.github.io/kaira/images/banner-image-2.jpg' },
    { src: 'https://themewagon.github.io/kaira/images/banner-image-3.jpg' },
    { src: 'https://themewagon.github.io/kaira/images/banner-image-4.jpg' },
  ];
  
  // Render each image with a consistent style
  // images.map((image, index) => (
  //   <img key={index} src={image.src} alt={`Image ${index}`} style={{ height: '150px', width: '100px' }} />
  // ));
  
  // const images = [
  //   {
  //     src: 'https://themewagon.github.io/kaira/images/cat-item1.jpg',
  //   },
  //   {
  //     src: 'https://themewagon.github.io/kaira/images/cat-item2.jpg',
      
  //   },
  //   {
  //     src: 'https://themewagon.github.io/kaira/images/product-item-1.jpg', 
  //   
  //   },
  //   {
  //     src: 'https://themewagon.github.io/kaira/images/product-item-5.jpg',
  //   },
  //   {
  //     src: 'https://themewagon.github.io/kaira/images/cat-item3.jpg',
  //   },
  //   {
  //     src: 'https://themewagon.github.io/kaira/images/insta-item6.jpg',
  //   },
  //   {
  //     src: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/1-1-300x300.jpg',
  //   },
  //   {
  //     src: 'http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/81lH0FdWVWL.jpg',
  //   },
  // ];

  const [items, setItems] = useState([]);

  const updateItems = () => {
    const isSmallScreen = window.innerWidth <= 576; 
    const imagesPerSlide = isSmallScreen ? 2 : 3; 

    const newItems = [];
    for (let i = 0; i < images.length; i += imagesPerSlide) {
      newItems.push(images.slice(i, i + imagesPerSlide));
    }
    setItems(newItems);
  };

  useEffect(() => {
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => {
      window.removeEventListener('resize', updateItems);
    };
  }, []);

  return (
    <div className="container mt-5 mb-5 imgSlider">
      <h1 className="mb-3">@Kaira.store</h1>
      <p className='mb-5'>Follow us on Instagram</p>
      <Carousel controls={false} indicators={false}>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {item.map((image, imgIndex) => (
                <div className="col-4 col-md-3 col-sm-4" key={imgIndex}>  
                  <img
                    className="img-fluid mb-4"
                    src={image.src}
                    alt={`Slide ${index * 4 + imgIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardImageSlider;