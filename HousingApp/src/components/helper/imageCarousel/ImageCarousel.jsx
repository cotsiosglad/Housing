import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Galleria } from "primereact/galleria";
import { Tag } from "primereact/tag";
import FsLightbox from "fslightbox-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ImageCarousel({ imageList }) {
  // const [toggler, setToggler] = useState(false);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const galleria = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState({});
  const [currentPosition, setCurrectPosition] = useState({ x: 0, y: 0 });
  // const [images, setImages] = useState(null);
  // const [imageIndex, setImageIndex] = useState(0);
  const itemTemplate = (item) => {
    debugger;
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };
  // const responsiveOptions = [
  //     {
  //         breakpoint: '1480px',
  //         numVisible: 3,
  //         numScroll: 1
  //     },
  //     {
  //         breakpoint: '991px',
  //         numVisible: 1,
  //         numScroll: 1
  //     },
  //     {
  //         breakpoint: '200px',
  //         numVisible: 1,
  //         numScroll: 1
  //     }
  // ];

  //http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--vertical
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const getSeverity = (product) => {
  //     switch (product.inventoryStatus) {
  //         case 'INSTOCK':
  //             return 'success';

  //         case 'LOWSTOCK':
  //             return 'warning';

  //         case 'OUTOFSTOCK':
  //             return 'danger';

  //         default:
  //             return null;
  //     }
  // };

  // useEffect(() => {
  //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
  // }, []);

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  // useEffect(() => {
  //     setImages(imageList);
  // }, []);
  // useEffect(() => {
  //     setImages(imageList);
  // }, []);
  const abc = (e, item) => {
    debugger;
    e.preventDefault();
    let itemIdx = imageList.indexOf(item) + 1;
    openLightboxOnSlide(itemIdx);
    // console.log("x:" + window.scrollX + " y:" + window.scrollY)
    setCurrectPosition({ x: window.scrollX, y: window.scrollY })
    //setActiveIndex(itemIdx);
    //setSelectedImage({ ...item, itemImageSrc: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698710400&semt=sph" });
    //galleria.current.show();
    //setActiveIndex(itemIdx);
    //setSelectedImage({ ...item, itemImageSrc: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698710400&semt=sph" });
    //galleria.current.show();
    // setImageIndex((itemIdx>0?itemIdx:0))
    // setToggler(!toggler);
  };

  const productTemplate = (product, index) => {
    return (
      <div className="m-2 text-center py-5 px-3" key={index}>
        <div className="mb-3">
          {/* <img src={product.itemImageSrc} alt={product.alt} className="w-6 shadow-2" onClick={() => abc(product)} /> */}
          {/* <img src={product.itemImageSrc} alt={product.alt} className="w-6 shadow-2" onClick={() => abc(product)} /> */}
          <img
            src={product.itemImageSrc}
            alt={product.alt}
            className=" shadow-2"
            onClick={(e) => abc(e, product)}
          />
        </div>
        {/* <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div> */}
      </div>
    );
  };

  const onViewerClosed = () => {
    //console.log("x:" + window.scrollX + " y:" + window.scrollY)

    //console.log("position" + currentPosition)

    window.scrollTo(currentPosition.x, currentPosition.y);
  }

  return (
    <>
      {/* <Carousel
        value={imageList}
        autoplayInterval={5000}
        showIndicators={false}
        numScroll={1}
        numVisible={1}
        circular
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      /> */}
      <Slider {...settings}>
        {imageList.map((image, index) => {
          return productTemplate(image, index);
        })}
      </Slider>

      {/* <Galleria ref={galleria} value={imageList} numVisible={7} style={{ maxWidth: '850px' }}
                activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                circular fullScreen showItemNavigators showThumbnails={false} item={(itemm) => { itemTemplate(selectedImage) }} thumbnail={thumbnailTemplate} /> */}
      {/* <Galleria ref={galleria} value={imageList} numVisible={7} style={{ maxWidth: '850px' }}
                activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                circular fullScreen showItemNavigators showThumbnails={false} item={(itemm) => { itemTemplate(selectedImage) }} thumbnail={thumbnailTemplate} /> */}

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={imageList.map((s) => s.itemImageSrc)}
        onClose={onViewerClosed}
        //source={sourceFiles}
        // sources={imageList}
        //source={sourceFiles}
        // sources={imageList}
        slide={lightboxController.slide}
      // source={[
      //     "https://firebasestorage.googleapis.com/v0/b/housing-app-628b7.appspot.com/o/projects%2Fab%2FprojectImages%2F1b6ed9d8-e7a7-4e9e-bb15-863d6106370c_%CE%99%CE%A3%CE%9F%CE%93%CE%95%CE%99%CE%9F.png?alt=media&token=b01462e5-f832-4695-962b-65c89b427726"
      //     ,
      //     "https://firebasestorage.googleapis.com/v0/b/housing-app-628b7.appspot.com/o/projects%2Fab%2FprojectImages%2F69abfa7e-349f-434e-aecb-16bca2d5891f_2.png?alt=media&token=ff3ae818-17fd-4215-be3f-3d88ec3f0040"
      //     ,
      //     "https://firebasestorage.googleapis.com/v0/b/housing-app-628b7.appspot.com/o/projects%2Fab%2FprojectImages%2Fbbd0ab13-cfce-47db-9768-586025b28135_3.png?alt=media&token=3b43b308-3b88-40fd-9b44-87a30bc07ab2"
      // ]}
      // source={[
      //     "https://firebasestorage.googleapis.com/v0/b/housing-app-628b7.appspot.com/o/projects%2Fab%2FprojectImages%2F1b6ed9d8-e7a7-4e9e-bb15-863d6106370c_%CE%99%CE%A3%CE%9F%CE%93%CE%95%CE%99%CE%9F.png?alt=media&token=b01462e5-f832-4695-962b-65c89b427726"
      //     ,
      //     "https://firebasestorage.googleapis.com/v0/b/housing-app-628b7.appspot.com/o/projects%2Fab%2FprojectImages%2F69abfa7e-349f-434e-aecb-16bca2d5891f_2.png?alt=media&token=ff3ae818-17fd-4215-be3f-3d88ec3f0040"
      //     ,
      //     "https://firebasestorage.googleapis.com/v0/b/housing-app-628b7.appspot.com/o/projects%2Fab%2FprojectImages%2Fbbd0ab13-cfce-47db-9768-586025b28135_3.png?alt=media&token=3b43b308-3b88-40fd-9b44-87a30bc07ab2"
      // ]}
      // sources={[
      //   "https://i.imgur.com/fsyrScY.jpg",
      //   "https://i.imgur.com/1fOq0pJ.jpeg",
      //   "https://i.imgur.com/AqVIYir.jpeg"
      //   // "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
      //   // "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      // ]}
      />
    </>
  );
}
