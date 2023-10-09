
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import FsLightbox from "fslightbox-react";

export default function ImageCarousel({ imageList }) {
    // const [toggler, setToggler] = useState(false);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });
    // const [imageIndex, setImageIndex] = useState(0);
    const responsiveOptions = [
        {
            breakpoint: '1480px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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
            slide: number
        });
    }

    const abc = (item) => {
        debugger;
        let itemIdx = imageList.indexOf(item) + 1;
        openLightboxOnSlide(itemIdx)
        console.log(itemIdx);
        // setImageIndex((itemIdx>0?itemIdx:0))
        // setToggler(!toggler);
    }

    const productTemplate = (product) => {
        return (
            <div className="m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={product.itemImageSrc} alt={product.alt} className="w-6 shadow-2" onClick={() => abc(product)} />
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

    return (
        <>

            <Carousel value={imageList} autoplayInterval={5000} showIndicators={false} numScroll={1} numVisible={3} circular responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />


            <FsLightbox
                toggler={lightboxController.toggler}
                sources={imageList.map(s => s.itemImageSrc)}
                slide={lightboxController.slide}
            // sources={[
            //   "https://i.imgur.com/fsyrScY.jpg",
            //   "https://i.imgur.com/1fOq0pJ.jpeg",
            //   "https://i.imgur.com/AqVIYir.jpeg"
            //   // "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
            //   // "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            // ]}
            />
        </>
    )
}
