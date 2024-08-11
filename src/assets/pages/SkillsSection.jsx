import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-black  ">
      <h2 className="text-center md:text-4xl underline font-semibold text-blue-500  mb-5">Skills</h2>
      <div className="container mx-auto md:mt-16 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-white">
            <h2 className="text-3xl font-semibold mb-4">
              A Creative Front-end Developer and Skilled Back-end Developer, Overall a Complete Full Stack Web Developer
            </h2>
            <p className="text-yellow-300 text-sm mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestiae magni eveniet ratione? Voluptatibus quaerat nam dolorem nulla doloribus voluptate laudantium eum suscipit?
            </p>
            {/* Uncomment to add a download button for CV */}
            {/* <a href="Shubham-Resume.pdf" className="p-3 bg-blue-500 text-white rounded-md mt-5">
              Download CV
            </a> */}
          </div>
          <div className="text-white mt-10 md:mt-0 space-y-3">
            <SkillProgress label="HTML / CSS" value={70} />
            <SkillProgress label="C++" value={60} />
            <SkillProgress label="JavaScript" value={50} />
            <SkillProgress label="React" value={50} />
            <SkillProgress label="PHP" value={50} />
          </div>
        </div>
      </div>
      <hr  className='mt-10'/>
    </section>
  );
};

// SkillProgress component to render each progress bar
const SkillProgress = ({ label, value }) => {
  return (
    <div>
      <label htmlFor={label} className="text-sm">{label}</label>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <span className="text-xs font-semibold inline-block text-white">
            {value}%
          </span>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
          <div style={{ width: `${value}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
