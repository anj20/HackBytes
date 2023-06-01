import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const postFeedback = (e) => {
    e.preventDefault();
    alert("Feedback Submitted");
    fetch("http://localhost:5001/api/v1/add-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const [feedbacks, setFeedbacks] = useState([]);
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  const getFeedback = () => {
    fetch("http://localhost:5001/api/v1/get-feedbacks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  };
  useEffect(() => {
    getFeedback();
  }, []);
  useEffect(() => {
    console.log(feedbacks);
    if (feedbacks.length > 0)
      setMessage(feedbacks[feedbacks.length - 1].message);
    if (feedbacks.length > 1)
      setMessage1(feedbacks[feedbacks.length - 2].message);
    if (feedbacks.length > 2)
      setMessage2(feedbacks[feedbacks.length - 3].message);
  }, [feedbacks]);

  return (
    <>
      <div className="flex md:flex-row flex-col justify-around ">
        <img
          src="https://www.encyb.in/wp-content/uploads/2021/07/contact-us-page.png"
          alt="img"
          data-aos="fade-down-right"
          data-aos-duration="3000"
          className=" mt-3 md:w-1/2"
        />
        <div
          data-aos="fade-down-left"
          data-aos-duration="3000"
          className="flex flex-col justify-center"
        >
          <h1 className="md:text-7xl text-5xl  mb-6 text-[brown]">Feedback</h1>
          <form method="POST" className=" flex flex-col gap-5 p-2 md:p-0">
            <div className="flex flex-col">
              <label>Name:</label>
              <input
                id="name"
                className="border-2 border-solid pl-2 text-[#616060] border-[black] h-8 rounded-md"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="flex flex-col">
              <label>Email:</label>
              <input
                id="email"
                className="border-2 border-solid pl-2 text-[#616060] border-[black] h-8 rounded-md"
                type="email"
                placeholder="email"
              />
            </div>
            <div className="flex flex-col">
              <label>Message:</label>
              <textarea
                id="message"
                className="border-2 border-solid pl-2 text-[#616060] border-[black] resize-none h-24 rounded-md "
                placeholder="message"
              />
            </div>
            <button
              type="submit"
              className="bg-[#b02e2e] text-white p-3 rounded-md hover:bg-[#ef5b5b]"
              onClick={postFeedback}
            >
              Submit
            </button>
          </form>
        </div>
        {/* </div> */}
      </div>

      <div className="flex flex-col mt-8 mb-8 ">
        <h1 className="text-5xl flex justify-center text-[brown] font-semibold ">
          Users Feedback
        </h1>
        <div className="ml-4 mr-4 md:flex-row flex-col mt-6 flex gap-12  justify-around">
          <p
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="bg-[#00c8ff] w-1/3 hover:bg-[#00a6ff] rounded-3xl p-4 border-r-4 shadow-2xl border-[gray]"
          >
            {message}
          </p>
          <p
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="bg-[yellow] w-1/4 hover:bg-[#ffd900] rounded-3xl p-4 border-r-4 shadow-2xl border-[gray]"
          >
            {message1}
          </p>
          <p
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="bg-[#3cff00] w-1/3 rounded-3xl p-4 hover:bg-[#88e50d] border-r-4 shadow-2xl border-[gray]"
          >
            {message2}
          </p>
        </div>
      </div>
    </>
  );
}
export default Contact;
