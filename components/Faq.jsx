"use client";
import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';







const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openId, setOpenId] = useState(null);

        const fallbackData = [
          {
            question: "1. What is the PuwaKhola Hydropower Project?",
            answer: "The PuwaKhola Hydropower Project is a 4MW run-of-river hydropower facility located in Okhaldhunga and Solukhumbu districts, Koshi Province. The project harnesses the hydrological potential of Malun Khola to generate reliable, clean, and renewable electricity for integration into Nepal’s national grid.",
            id: 1
          },
          {
            question: "2. Who is the project developer?",
            answer: "The project is being developed by Puwakhola Hydropower Pvt. Ltd., a professionally managed private company with extensive experience in hydropower planning, construction, and project execution. The company is supported by seasoned technical experts, established contractors, and national financial institutions.",
            id: 2
          },
          {
            question: "3. What is the project's primary objective?",
            answer: "The primary objective of the project is to provide reliable and clean electricity to Nepal's national grid, ensuring long-term sustainability and prosperity for the country's people.",
            id: 3
          },
        ];
    
  


  // Function to toggle the open state of an FAQ item
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) {
    return (
      <section data-aos="fade-up" className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="lg:pr-8 flex flex-col items-end text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                Some questions, <br />some answers.
              </h2>
              <div className="flex justify-center lg:justify-start">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-aos="fade-up" className=" py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <h1 className='text-blue-500 mx-auto text-center text-xl md:text-4xl font-bold'>Frequently Asked Questions</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          
          {/* Right Column: Accordion FAQ Items */}
          <div className="w-full">
        {fallbackData?.reverse().map((item) => (
  <div key={item.id} className="border-b border-gray-300 py-6">
    <button
      onClick={() => toggleFAQ(item.id)}
      className="flex justify-between cursor-pointer items-center w-full text-left text-gray-900 focus:outline-none"
      aria-expanded={openId === item.id}
      aria-controls={`faq-answer-${item.id}`}
    >
      <span className="text-xl text-gray-800 md:text-2xl">{item.question}</span>
      <span className="text-gray-500 transition-transform duration-300">
        {openId === item.id ? 
          <FaMinus className="w-5 h-5" /> : 
          <FaPlus className="w-5 h-5" />
        }
      </span>
    </button>

    <div
      id={`faq-answer-${item.id}`}
      role="region"
      aria-labelledby={`faq-question-${item.id}`}
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        openId === item.id ? 'max-h-[200px] opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="text-gray-600 text-lg pr-4">{item.answer}</p>
    </div>
  </div>
))}
          </div>

          {/* Left Column: Heading and Description */}
          <div className="lg:pr-8 flex flex-col items-end text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Some questions, <br />some answers.
            </h2>
            <p className="text-lg text-center text-gray-700 max-w-sm mx-auto lg:mx-0">
              Have a look at my most frequently asked questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;