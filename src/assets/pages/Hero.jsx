import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faSnapchat, faGithub } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef();
  const textRefs = useRef([]);
  const imgRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRefs.current, 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
    // gsap.fromTo(
    //   imgRef.current, 
    //   { scale: 0.8, opacity: 0 }, 
    //   { scale: 1, opacity: 1, duration: 1, delay: 1 }
    // );
  }, []);

  return (
    <section id="hero" className="bg-black " ref={heroRef}>
      <div className="md:grid md:mx-20 p-10 grid-cols-2">
        <div className="flex mt-4 md:mt-0 justify-center md:items-start items-center flex-col">
          <h1 className="text-2xl text-white md:text-3xl" ref={el => textRefs.current[0] = el}>Hello..!</h1>
          <h2 className="text-2xl text-white md:text-5xl" ref={el => textRefs.current[1] = el}>I'm Shubham Mali</h2>
          <h2 className="text-2xl text-white md:text-5xl" ref={el => textRefs.current[2] = el}>
             <span className="text-blue-500">A Web Developer</span>
          </h2>
          <p className="mt-4 text-sm-2 text-white p-2" ref={el => textRefs.current[3] = el}>
            As a web developer, my objective is to make a positive impact on client, co-workers, and Internet using my skills and experience to design attractive websites.
          </p>
          <div className="mt-5" ref={el => textRefs.current[4] = el}>
            <a
              href="https://api.whatsapp.com/send?phone=918805601826&text=Hello%20%2C%20I%20want%20to%20hire%20you%20for%20my%20Website%20%2C%20can%20you%20schedule%20some%20dates%20%3F"
              className="md:p-3 p-2 bg-blue-500 rounded text-white"
            >
              Chat With Me
            </a>
            <a
              href="../public/img/Shubham CV.pdf"
              download="Shubham-CV"
              className="md:p-3 p-2 w-20border border-dark-400 bg-green-400 rounded-lg text-dark ml-3"
            >
              Download CV
            </a>
            <div className="links flex justify-center items-center mt-8 space-x-5 text-2xl">
              <a href="https://www.linkedin.com/in/shubham-mali-6874242a2" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/its_shubham.23_?igsh=MTNjNm9qcmNxNmJ1Nw==" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.snapchat.com/add/shubhya.0723?share_id=P_cqSxzReM4&locale=en-US" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faSnapchat} />
              </a>
              <a href="https://github.com/shubham1563" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        <div className="md:ml-60 hidden md:block md:w-72">
          <img src="../public/img/pic.png" className='rounded-lg  h-96 w-auto' alt="Profile" ref={imgRef} />
        </div>
      </div>
      <hr className='md:mt-25' />
    </section>
  );
};

export default Hero;
