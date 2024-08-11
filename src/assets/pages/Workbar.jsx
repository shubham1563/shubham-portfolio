import React, { useState } from 'react';

const WorkBar = () => {
  const [hovered, setHovered] = useState(null);

  const images = [
    { src: "../public/img/cpp.png", alt: "C++" },
    { src: "../public/img/PHP.png", alt: "PHP" },
    { src: "../public/img/java.png", alt: "Java" },
    { src: "../public/img/tail.png", alt: "Tailwind CSS" },
    { src: "../public/img/file.png", alt: "File" },
    // Add more images as needed
  ];

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <section id="work-bar" className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center md:text-4xl underline font-semibold text-blue-500  mb-5">
          Languages I've Worked In
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-20 sm:h-20 md:h-28 lg:h-32 xl:h-36 m-4"
              style={{
                transform: hovered === index ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default WorkBar;
