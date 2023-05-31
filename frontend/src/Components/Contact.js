import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Contact(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <Navbar/>

        <div className="flex md:flex-row flex-col justify-around ">
        
        <img src="https://www.encyb.in/wp-content/uploads/2021/07/contact-us-page.png" alt="img" 
        data-aos="fade-down-right" data-aos-duration="3000"
        className=" mt-3 md:w-1/2"
        />
        <div data-aos="fade-down-left" data-aos-duration="3000" className="flex flex-col justify-center">
            <h1 className="md:text-7xl text-5xl  mb-6 text-[brown]">Feedback</h1>
        <form className=" flex flex-col gap-5 p-2 md:p-0">
            <div className="flex flex-col">
            <label >Name:</label>
            <input className="border-2 border-solid pl-2 text-[#616060] border-[black] h-8 rounded-md" type="text" placeholder="name"/>
            </div>
            <div className="flex flex-col">
                <label>Email:</label>
            <input className="border-2 border-solid pl-2 text-[#616060] border-[black] h-8 rounded-md"type="email" placeholder="email"/>
            </div>
            <div className="flex flex-col">
                <label>Message:</label>
            <textarea className="border-2 border-solid pl-2 text-[#616060] border-[black] resize-none h-24 rounded-md " placeholder="message"/>
            </div>
            <button type="submit" className="bg-[#b02e2e] text-white p-3 rounded-md hover:bg-[#ef5b5b]">Submit</button>
        </form>
        </div>
        {/* </div> */}
        </div>
        <div className="flex flex-col mt-8 mb-8 ">
        <h1 className="text-5xl flex justify-center text-[brown] font-semibold ">Users Feedback</h1>
        <div className="ml-4 mr-4 md:flex-row flex-col mt-6 flex gap-12  justify-around">
            <p data-aos="zoom-out" data-aos-duration="3000" className="bg-[#00c8ff] hover:bg-[#00a6ff] rounded-3xl p-4 border-r-4 shadow-2xl border-[gray]">
                DollarSense has truly transformed the way I manage my finances. The expense tracking feature is intuitive and easy to use, and the
                 budgeting tools have helped me stay on track with my spending goals. Highly recommended!"
            </p>
            <p data-aos="zoom-in" data-aos-duration="3000" className="bg-[yellow] hover:bg-[#ffd900] rounded-3xl p-4 border-r-4 shadow-2xl border-[gray]">"I've never been good at budgeting, but Dollar Sense has made it so much simpler. The interface is clean and intuitive, and I love the flexibility it offers in customizing my budget
                 categories. It's a game-changer for anyone who wants to take control of their spending."

            </p>
            <p data-aos="zoom-out" data-aos-duration="3000" className="bg-[#3cff00] rounded-3xl p-4 hover:bg-[#88e50d] border-r-4 shadow-2xl border-[gray]">
            "I appreciate the mobile accessibility of Dollar Sense. Being able to access my financial information on my phone is incredibly convenient. Whether I'm at the grocery store
             or reviewing my expenses on the go, Dollar Sense keeps me in control of my finances wherever I am."

            </p>
        </div>
        </div>
        </>
    )
}
export default Contact;