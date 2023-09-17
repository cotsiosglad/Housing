import { useEffect } from 'react';

function useIntersectionObserver(options=null) {
  // //if options not passed then use the default options
  // if (!options){
  //   options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.4,
  //   };
  // }

  useEffect(() => {
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-show');
        }
      });
    }, options);

    const sectionElements = document.querySelectorAll('section');

    sectionElements.forEach(s => observer.observe(s));

    return () => {
      debugger;
      sectionElements.forEach(s => observer.unobserve(s));
      console.log(sectionElements)
    };
  //}, []);
 }, [options]);
}

export default useIntersectionObserver;
