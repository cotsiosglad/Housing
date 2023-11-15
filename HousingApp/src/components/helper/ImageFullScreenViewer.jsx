import React, { useState, useRef, useEffect } from "react";
import FsLightbox from "fslightbox-react";

export default function ImageFullScreenViewer({
  imageList,
  toggler,
  updateToggler,
}) {
  // debugger;
  const handleUpdateToggler = () => {
    // debugger;
    updateToggler(false);
  };
  // const [toggler, setToggler] = useState(false);
  //   const [lightboxController, setLightboxController] = useState({
  //     toggler: false,
  //     slide: 1,
  //   });

  //   function openLightboxOnSlide(number) {
  //     setLightboxController({
  //       toggler: !lightboxController.toggler,
  //       slide: number,
  //     });
  //   }
  // useEffect(() => {
  //   debugger;
  //   setToggler(true);
  // }, []);
  // useEffect(() => {
  //     setImages(imageList);
  // }, []);
  //   const abc = (item) => {
  //     debugger;
  //     let itemIdx = imageList.indexOf(item) + 1;
  //     openLightboxOnSlide(itemIdx);
  //     console.log(itemIdx);
  //     //setActiveIndex(itemIdx);
  //     //setSelectedImage({ ...item, itemImageSrc: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698710400&semt=sph" });
  //     //galleria.current.show();
  //     //setActiveIndex(itemIdx);
  //     //setSelectedImage({ ...item, itemImageSrc: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698710400&semt=sph" });
  //     //galleria.current.show();
  //     // setImageIndex((itemIdx>0?itemIdx:0))
  //     // setToggler(!toggler);
  //   };
  // if (imageList.length == 0) {
  //   return <></>;
  // } else {
  return (
    <>
      <div className="overflow-hidden">
        <FsLightbox
          // toggler={lightboxController.toggler}
          toggler={toggler}
          sources={imageList}
          onClose={handleUpdateToggler}
        //source={sourceFiles}
        // sources={imageList}
        //source={sourceFiles}
        // sources={imageList}
        // slide={lightboxController.slide}
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
      </div>

    </>
  );
  // }
}
