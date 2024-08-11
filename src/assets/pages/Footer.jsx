import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faSnapchat, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Kalika Devi Mandir Road,Vijapur Galli</p>
          <p>Pandharpur, Solapur,413304</p>
          <p>Email: shubhammali1563@gmail.com</p>
          <p>Phone: (+91)8805601826</p>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className="mb-2">
              <a href="" className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        
        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/shubham-mali-6874242a2" className="text-white  hover:text-gray-300">
                <FontAwesomeIcon className='w-6 h-6 '  icon={faLinkedin} />
              </a>  
              <a href="https://www.instagram.com/its_shubham.23_?igsh=MTNjNm9qcmNxNmJ1Nw==" className="text-white hover:text-gray-300">
                <FontAwesomeIcon className='w-6 h-6' icon={faInstagram} />
              </a>
              <a href="https://www.snapchat.com/add/shubhya.0723?share_id=P_cqSxzReM4&locale=en-US" className="text-white hover:text-gray-300">
                <FontAwesomeIcon className='w-6 h-6' icon={faSnapchat} />
              </a>
              <a href="https://github.com/shubham1563" className="text-white hover:text-gray-300">
                <FontAwesomeIcon className='w-6 h-6' icon={faGithub} />
              </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Shubhzz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
