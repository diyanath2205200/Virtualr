import React, { useEffect, useState } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHeading(true);
    }, 100); // slight delay for animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="hero" className="flex flex-col items-center mt-1 lg:mt-20">
      {/* Animated Heading */}
      <h1 className="text-center font-semibold">
        <span
          className={`block text-4xl sm:text-6xl lg:text-7xl transition-all duration-700 ease-out ${
            showHeading
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Develop Smarter.
        </span>
        <span
          className={`block text-4xl sm:text-6xl lg:text-7xl transition-all delay-200 duration-700 ease-out ${
            showHeading
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Deploy Faster.
        </span>
        <span
          className={`block text-4xl sm:text-6xl lg:text-7xl font-bold leading-snug transition-all delay-500 duration-1000 ease-out ${
            showHeading
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-95"
          } bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text`}
        >
          Dream Bigger.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower Your Creativity & Bring Your VR App Ideas to Life With Our
        Intuitive Development Tools. Get Started Today & Turn Your Imagination
        Into Immersive Reality!
      </p>

      {/* Buttons */}
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-4 mx-3 rounded-md text-white"
        >
          Start for Free
        </a>
        <a
          href="#"
          className="py-3 px-4 rounded-md border border-orange-700 text-white transition duration-300 hover:bg-gradient-to-r hover:from-orange-600 hover:to-black"
        >
          Documentation
        </a>
      </div>

      {/* Videos */}
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
