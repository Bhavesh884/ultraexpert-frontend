import React, { useState } from "react";
import { Testimonial } from "../Landing/Landing";
import { PiCheckCircleLight } from "react-icons/pi";
import about_us_1 from "../../assets/images/about_us _1.png";
import about_us_mission_2 from "../../assets/images/about_us_mission_2.png";
import about_us_vision_3 from "../../assets/images/about_us_vision_3.png";
import axios from "../../axios";
const About = () => {
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const [loading, setLoading] = useState(false);
  const [writeTestimonial, setWriteTestimonial] = useState("");
  const handleTestimonialSubmit = async () => {
    const trimmedStr = writeTestimonial.trim();
    const wordsArray = trimmedStr.split(/\s+/);
    const filteredWordsArray = wordsArray.filter(word => word.length > 0);
    if(filteredWordsArray.length>40) {
      alert("Word limit exceeded, Please enter less than 40 words");
      return ; 
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "/testimonial/",
        {
          action: 1,
          content_json: `${writeTestimonial}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(response.data);
      setLoading(false);
      setWriteTestimonial("");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="mt-[70px]">
      <div className="text-center bg-[#FBFBFB] py-16 sm:py-24 px-5 ">
        <div className="text-3xl md:text-4xl font-bold text-[#2A2A2A]">
          About Us
        </div>
        <div className="mt-3 mx-auto text-sm sm:text-base text-balance md:w-[60%] ">
          Our innovative consulting and mentorship platform was born from the
          belief that everyone deserves access to expert guidance to achieve
          their goals.
        </div>
      </div>
      <div className=" flex-wrap-reverse sm:flex-nowrap flex items-center justify-center sm:justify-between mx-[7vw] md:mx-[10vw] mt-10">
        <div>
          <div className="text-xl sm:text-2xl font-bold ">What do we do?</div>
          <div className="text-sm sm:text-[1.7vw] md:text-[1.5vw] lg:text-[1.1vw] mt-3 text-balance">
            We simplify your path to success by providing a seamless platform
            that connects you with the perfect expert mentor in your desired
            field.We are a passionate team dedicated to bridging the gap between
            aspiring individuals and seasoned professionals. Our innovative
            consulting and mentorship platform was born from the belief that
            everyone deserves access to expert guidance to achieve their goals.
          </div>
        </div>
        <img
          src={about_us_1}
          alt=""
          className="h-[80vw] xs:h-[70vw] xs:w-[100vw] sm:h-[35vw] sm:w-[45vw] shrink-0 object-cover "
        />
      </div>
      <div className="flex-wrap sm:flex-nowrap flex items-center justify-center sm:justify-between px-[7vw] md:px-[10vw] py-5 my-10 bg-blue-50">
        <img
          src={about_us_mission_2}
          alt=""
          className="h-[80vw] xs:h-[70vw] xs:w-[80vw] sm:h-[30vw] sm:w-[35vw]  shrink-0 "
        />
        <div>
          <div className="text-base sm:text-lg font-bold text-sky-800 ">
            OUR MISSION
          </div>
          <div className="text-xl sm:text-2xl font-bold ">
            What do we focus on?
          </div>
          <div className="text-sm sm:text-[1.7vw] md:text-[1.5vw] lg:text-[1.1vw] mt-3 text-balance">
            By fostering a vibrant community of mentors and mentees, we strive
            to:
            <ul className="list-inside">
              <li className="mb-2">
                <span className="font-bold">Bridge the knowledge gap: </span>We
                connect aspiring individuals with experienced mentors who can
                share their expertise and insights.
              </li>
              <li className="mb-2">
                <span className="font-bold">Unlock individual potential: </span>
                We empower individuals to develop their skills, overcome
                challenges, and achieve their personal and professional goals.
              </li>
              <li>
                <span className="font-bold">Drive business growth: </span>We
                equip businesses with the expert guidance they need to thrive in
                today's competitive landscape.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-wrap-reverse sm:flex-nowrap flex items-center justify-center sm:justify-between mx-[7vw] md:mx-[10vw]">
        <div>
          <div className="text-base sm:text-lg font-bold text-sky-800 ">
            OUR VISION
          </div>
          <div className="text-xl sm:text-2xl font-bold">
            The Future of Learning - Personalized, Connected, and Empowering
          </div>
          <div className="text-sm sm:text-[1.7vw] md:text-[1.5vw] lg:text-[1.1vw] mt-3 text-balance">
            We envision a future where personalized learning is accessible to
            all, fueled by a global network of expert mentors. Imagine a world
            where individuals can readily connect with the perfect mentor,
            regardless of location, to unlock their potential and achieve their
            aspirations.In this future, our platform will be the go-to
            destination for on-demand consulting and mentorship.
          </div>
        </div>
        <img
          src={about_us_vision_3}
          alt=""
          className="h-[80vw] xs:h-[70vw] xs:w-[100vw] sm:h-[35vw] sm:w-[45vw] shrink-0 "
        />
      </div>
      <div className="border border-solid border-slate-300 flex gap-[3vw] md:gap-0 flex-col md:flex-row items-center rounded-lg py-8 mx-[7vw] md:mx-[10vw] my-20">
        <div className="md:w-[45%] px-4 md:px-[1.5vw]">
          <div className="text-xl md:text-2xl font-bold text-center">
            Special features of our website
          </div>
          <div className="text-sm md:text-base mt-2 md:mt-5 text-center">
            Our website is designed to provide a seamless and enriching learning
            experience.
          </div>
        </div>
        <div className="md:w-[55%] px-3 md:px-[1.5vw]">
          <div className="">
            <div className="flex items-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">
                  Interactive One-on-One Sessions
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Engage in productive learning experiences through secure
                  online video conferencing.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">Live Mentorship</div>
                <div className="text-sm text-gray-500 mt-1">
                  Experience the power of real-time interaction with your
                  mentor. Ask questions, receive immediate feedback, and
                  participate in dynamic discussions to accelerate your learning
                  curve.
                </div>
              </div>
            </div>
            <div className="flex item-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">Progress Tracking</div>
                <div className="text-sm text-gray-500 mt-1">
                  Monitor your progress and measure your learning outcomes
                  through an integrated progress tracking system.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">
                  Effortless Expert Matching
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Find your perfect mentor with our intuitive search and
                  filtering tools. Narrow down your options based on domain
                  expertise, experience level, location, and preferred
                  engagement model.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <div className="md:flex items-center justify-around gap-10 mx-[7vw] md:mx-[10vw] my-20">
        <div className="md:w-[40%] text-center">
          <div className=" text-2xl font-bold">
            Want to add your testimonial ?
          </div>
          <div className="mt-3 text-sm text-gray-600 text-center">
            Your story can motivate others seeking mentorship to take the first
            step towards their goals.
          </div>
        </div>
        <div className="md:w-[60%] mt-10 md:mt-0">
          <label htmlFor="textarea" className="text-red-600 font-sm">max words: 40</label>
          <textarea
            name=""
            id=""
            rows="10"
            value={writeTestimonial}
            onChange={(e) => setWriteTestimonial(e.target.value)}
            placeholder="Add your testimonial here"
            className="min-w-full max-w-full border border-solid border-slate-400 text-base rounded-md p-2"
          ></textarea>
          <div
            className={
              loading
                ? `text-gray-500 bg-gray-300 px-6 py-3 mt-3 rounded-sm w-fit ml-auto`
                : `px-6 py-2 mt-3 text-white bg-[#2A2A2A] rounded-sm w-fit ml-auto cursor-pointer`
            }
            onClick={() => handleTestimonialSubmit()}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
