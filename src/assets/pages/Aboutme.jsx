import React from 'react';

const Aboutme = () => {
  return (
    <section id="experience" className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl underline font-semibold text-blue-500 mb-10">About Me</h2>
        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:mx-20 ml-3">
            {/* Image */}
            <img src="../public/img/shubham.img.jpg" className="rounded-lg  h-96 w-auto" alt="Skills" />

            {/* Introduction */}
            {/* <h2 className="text-center md:text-left text-2xl md:text-4xl font-semibold text-white mb-6">
              Hello, I'm Shubham Mali, a passionate and dedicated software developer specializing in both frontend and backend development. My journey in the tech world is driven by deep curiosity and an insatiable desire to create impactful digital solutions.
            </h2> */}
          </div>
          <div className='mt-5'>
            {/* Details */}
            <h5 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mx-5 mx-4">Having good experience in Web development..!</h5>
            <p className="text-lg text-white md:mx-5 mx-4">
              As a web developer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design attractive websites.
            </p>
            <div id="details" className="text-white mt-6">
              <div className="ml-5 md:ml-1 md:text-xl md:gap-5 mt-6">
                <div className="py-2">
                  <span className="font-bold">Name:</span> Shubham Mali
                </div>
                <div className="py-2">
                  <span className="font-bold">Birth Date:</span> 23-July-2002
                </div>
                <div className="py-2">
                  <span className="font-bold">Address:</span> Kalika Devi Chauk, Pandharpur.
                </div>
                <div className="py-2">
                  <a href="mailto:shubhammali1563@gmail.com" className="font-bold">Email:</a> shubhammali1563@gmail.com
                </div>
                <div className="py-2">
                  <a href="tel:+918805601819" className="font-bold">Contact:</a> +918805601816
                </div>
              </div>
              <div className="flex justify-start mt-4">
                <a
                  href="../public/img/Shubham CV.pdf"
                  className="p-2 bg-blue-500 rounded-lg mx-4 md:mx-10 text-white"
                  download="Shubham-CV"
                >
                  Download CV
                </a>
                <div className="flex items-center space-x-4 md:mx-10 mt-4 md:mt-0">
                  <a href="https://www.linkedin.com/in/shubham-mali-6874242a2">
                    <i className="fab fa-linkedin text-white text-2xl"></i>
                  </a>
                  <a href="https://www.instagram.com/its_shubham.23_?igsh=MTNjNm9qcmNxNmJ1Nw==">
                    <i className="fab fa-instagram text-white text-2xl"></i>
                  </a>
                  <a href="https://www.snapchat.com/add/shubhya.0723?share_id=P_cqSxzReM4&locale=en-US">
                    <i className="fab fa-snapchat text-white text-2xl"></i>
                  </a>
                  <a href="https://github.com/shubham1563">
                    <i className="fab fa-github text-white text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-12' />
    </section>
  );
};

export default Aboutme;
