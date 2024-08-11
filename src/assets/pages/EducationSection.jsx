import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const educationData = [
    {
      institution: "Punyashlok Ahilyadevi Holkar Solapur University",
      degree: "Bachelor of Science in Computer Science",
      startDate: "September 2021",
      endDate: "June 2023",
      description: "Focused on software development, data structures, and algorithms. Participated in various hackathons and coding competitions.",
    },
    {
      institution: "Vivek Vardhini Vidhyalaya & Junior College",
      degree: "HSC [SCIENCE]",
      startDate: "September 2011",
      endDate: "June 2015",
      description: "Excelled in mathematics and computer science. Member of the school's programming club.",
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl underline font-semibold text-blue-500 text-center mb-10">Education</h2>
        <div className="flex flex-wrap -mx-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5 h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{edu.institution}</h3>
                <p className="text-lg text-gray-700 mb-1">{edu.degree}</p>
                <p className="text-gray-500 mb-4">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="text-gray-600">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className='md:mt-10'/>
    </section>
  );
};

export default EducationSection;
