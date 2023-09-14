import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {

  // const targetRef = useRef(null);

	// useEffect(() => {
	// 	const options = {
	// 	  root: null, // Use the viewport as the root
	// 	  rootMargin: '0px', // Margin around the root, in pixels
	// 	  threshold: 0.5, // The ratio of the target's visibility to trigger the callback
	// 	};
	  
	// 	const callback = (entries, observer) => {
	// 	  entries.forEach((entry) => {
	// 		if (entry.isIntersecting) {
	// 		  // Element is in the viewport
	// 		  entry.target.classList.add('section-show');
	// 		} else {
	// 		  // Element is out of the viewport
	// 		  console.log('Element is out of the viewport');
	// 		  // You can perform actions here, like removing a class or resetting animations
	// 		}
	// 	  });
	// 	};
	  
	// 	const observer = new IntersectionObserver(callback, options);
	  
	// 	if (targetRef.current) {
	// 	  observer.observe(targetRef.current);
	// 	}
	  
	// 	return () => {
	// 	  if (targetRef.current) {
	// 		observer.unobserve(targetRef.current);
	// 	  }
	// 	};
	//   }, []);

  
    
  return (
    <>
      <section className='recent padding'>
        {/* <div className='container d-flex flex-row justify-content-center flex-wrap'> */}
        <div className='container'>
          <Heading title='Latest Projects' subtitle='Recently Active or Completed Projects' />
          <div className="row">
            <RecentCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Recent
