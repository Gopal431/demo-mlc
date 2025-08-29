"use client"

import React, { useState } from 'react';
import ButtonReuse from '../componentsForReuse/ButtonReuse';
import ContactModal from '../contactModal/ContactModal';
// import { AppContext } from '../App';

const Section12Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const [email, setEmail] = useState('');

     const handleWhatsAppRedirect = () => {
  window.open("https://wa.me/9874344994?text=Hello", "_blank");
  };
  return (
    <section className='pb-10'>
      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="container">
        <div className=" md:text-center text-left bg-gradient-to-r to-[#EFECFF] from-[#FFE8EE] via-[#E4F8FF] py-8 px-4 md:px-7 rounded-[20px] shadow-md">
          <h3 className='font-[Helvetica] font-bold text-[20px] text-[#141414] md:text-[34px]  md:text-center text-left w-[80%] block m-auto'>
            Get in Touch & Let's Transform Your School Together!
          </h3>
          <p className='text-center mt-2 text-[16px] md:text-[20px] font-normal text-[#141414] w-[100%] md:w-[73%] block m-auto'>
            Have questions, need a demo, or simply want to chat about your school's needs? We're here to help.
          </p>
          <form  onClick={handleWhatsAppRedirect}  className='relative flex flex-col md:flex-row items-center mt-8 justify-center ml-auto md:ml-[15%]'>
            <input
              type="text"
              value={email}
              readOnly
              
              placeholder="Connect with us on WhatsApp"
              className="bg-white order-none rounded-[25px] py-[10px] md:py-[14px] pl-[5px] md:pl-[25px] text-[14px] md:text-[16px] shadow-md w-full md:w-[50%] mb-4 md:mb-0 text-center md:text-start placeholder-gray-700"
            />
            <ButtonReuse
             
              title="Request a Demo"
              className='w-full ml-[0] md:ml-[-102%] md:w-auto px-[15px] md:px-[35px] py-[10px] md:py-[12px] text-[14px] md:text-[16px] rounded-[25px] shadow-md'
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Section12Home;
