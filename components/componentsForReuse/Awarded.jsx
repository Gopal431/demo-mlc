import React from 'react'
import Logo from "../Assts/logo/lower.png"
import SIL from "../Assts/logo/DPIIT-header.png"
const Awarded = () => {
  return (
    <div className=''>
        <section className="flex flex-col mt-1">

  <div
    className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
 
    <div className="flex flex-col justify-center items-center bg-white shadow-lg px-4 h-[126px] w-full md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
  <img 
    src={SIL} 
    alt="award" 
    className="w-full h-full object-contain" 
  />
</div>
<div className="flex flex-col relative justify-center items-center bg-white shadow-lg px-4 h-[126px] w-[100%] md:w-[320px] md:h-[192px] rounded-lg justify-self-center">
     <img  src={Logo} alt='award' className='w-[100%] h-[100%] ' />
     
     <p className="font-bold text-2xl sm:text-4xl lg:text-3xl leading-9 text-primary absolute top-16 right-30 ">SAAS</p>
    </div>
    <div
      className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
      <div className="flex flex-row justify-center items-center">
        <svg className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]" viewBox="0 0 50 50" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#a)" stroke="#FF6D42" strokeWidth="3.473" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M10.811 39.091c-1.775-1.775-.598-5.505-1.5-7.69-.939-2.255-4.377-4.089-4.377-6.5 0-2.413 3.438-4.246 4.376-6.502.903-2.182-.274-5.914 1.501-7.69 1.776-1.775 5.508-.598 7.69-1.5 2.266-.939 4.09-4.377 6.501-4.377 2.412 0 4.246 3.438 6.501 4.376 2.185.903 5.915-.274 7.69 1.501 1.776 1.776.598 5.506 1.502 7.69.937 2.266 4.376 4.09 4.376 6.501 0 2.412-3.439 4.246-4.377 6.501-.903 2.185.274 5.915-1.5 7.69-1.776 1.776-5.506.598-7.69 1.501-2.256.938-4.09 4.377-6.502 4.377s-4.245-3.439-6.5-4.377c-2.183-.903-5.915.275-7.69-1.5Z">
            </path>
            <path d="m17.281 26.444 4.632 4.631L32.718 20.27"></path>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.3.2h49.4v49.4H.3z"></path>
            </clipPath>
          </defs>
        </svg>
        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">8900+</p>
      </div>
      <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">Sessions Completed</p>
    </div>
    <div
      className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
      <div className="flex flex-row justify-center items-center">
        <svg className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]" viewBox="0 0 51 50" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M45.571 12.006 27.046 30.531l-7.719-7.718L5.434 36.706" stroke="#FF6D42" strokeWidth="4.341"
            strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M45.569 24.356v-12.35h-12.35" stroke="#FF6D42" strokeWidth="4.341" strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>
        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">1.5M+</p>
      </div>
      <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">App Downloads</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Awarded