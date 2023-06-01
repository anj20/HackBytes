import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function F404(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <div data-aos="zoom-in" data-aos-duration="3000" className="flex  justify-center">
        <img src="https://www.dishtv.in/images/404-img.png" alt="img" className="transform transition-transform duration-500 ease-in-out hover:scale-110
         md:h-1/2 md:w-1/2 "/>
        </div>
        <div data-aos="zoom-in" data-aos-duration="3000" className="flex  justify-center" >
        <h1 className="text-4xl text-[brown] w-3/4 text-center">We apologize for the mishap. The page you seek is currently experiencing an identity crisis.</h1>
        </div>
        </>
    )
}
export default F404;