// import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function About(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
    <>
        {/* <Navbar/> */}
        <div  className="flex md:flex-row flex-col-reverse justify-center">
            <div className="flex  flex-col ml-8  justify-center " data-aos="fade-right" data-aos-duration="3000">
                <h1  className="text-[rgb(165,42,42)] text-5xl font-sans pb-6 font-bold">Welcome to DOLLAR SENSE</h1>
                <p className="text-2xl text-[grey] font-sans">Here, we give customers the tools they need to take charge of their money and plan their
                 spending. Since managing personal finances can be difficult, we have created 
                 a user-friendly platform that makes tracking spending simple and aids in your achievement 
                 of financial objectives.</p>
                 <p className="text-2xl text-[grey] font-sans pt-2">Our goal is to equip people with a strong tool for tracking and managing their spending so 
                    they can make better financial decisions and enhance their overall financial well-being.</p>
                 <p className="text-2xl text-[grey] font-sans pt-2">You may easily keep track of your expenses on our website, classify them, and examine your spending trends. </p>
            </div>
            
            <img data-aos="fade-up" data-aos-duration="3000" src="https://img.freepik.com/free-vector/pay-balance-owed-abstract-concept-illustration-making-credit-payment-pay-owed-money-bank-irs-balance-due-debt-consolidation-management-taxpayer-bill_335657-1236.jpg?w=2000" 
            className=" md:h-1/2 md:w-1/2"
            alt="img"/>
           
        </div>
        </>
    )
}
export default About;