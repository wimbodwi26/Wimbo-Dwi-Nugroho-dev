import tuhmb from '../../assets/landing_page CFE S.png';
import tail from '../../assets/tailwindcss-icon-svgrepo-com.svg';
import reactlog from '../../assets/react-svgrepo-com.svg';
import { FiArrowUpRight } from "react-icons/fi";
import jsLogo from '../../assets/js-svgrepo-com.svg';
import alqurandigital from '../../assets/alquran-digital.png';
import typescript from '../../assets/typescript-official-svgrepo-com.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import LMS from '../../assets/LMS.png';
import html from '../../assets/html-5-svgrepo-com.svg';
import css from '../../assets/css-3-svgrepo-com.svg';
import appdasbord from '../../assets/App Dashboard Sederhana.png';
import golangLog from '../../assets/golang-svgrepo-com.svg';



function ProjectList() {

useEffect (() => {
  AOS.init({ duration: 800 })
}, [])

      return (
    <div className='relative flex max-w-screen-x overflow-hidden flex-col min-h-screen w-full p-3 bg-[#02010A]'>
      
      {/* JUDUL UTAMA */}
      <div className='flex lg:flex-row flex-col justify-center gap-2 items-center mt-10 p-3 text-center'>
        <h1 className='font-serif font-bold text-white text-[24px] md:text-[28px] lg:text-[32px]'>
          A small selection of
        </h1>
        <span className='text-[#CBACF9] font-serif font-bold text-[24px] md:text-[28px] lg:text-[32px]'>
          recent projects
        </span>
      </div>

      {/* CARD CONTAINER 1 */}
      <div className='gap-6 md:gap-9 p-4 flex flex-col lg:flex-row justify-center items-center'>
        
        {/* CARD 1 */}
        <div data-aos="fade-right" className='lg:w-[600px] lg:h-[618px] w-full gap-4 rounded-xl border border-white/10 flex flex-col bg-gradient-to-br from-[#04071D] via-[#0C0E23] to-slate-900 p-3 md:p-5'>
          <div className='flex-grow flex items-start mt-2 justify-center'>
            <img 
              src={tuhmb} 
              alt='LPCE' 
              className='w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover rounded-lg shadow-2xl' 
            />
          </div>
          
          <div className='w-full mt-4'>
            <h1 className='text-[20px] md:text-[24px] lg:text-[27px] font-sans font-bold text-white leading-tight'>
              Coffee shop landing page. <span className='text-white/50 font-normal text-sm md:text-base'>Personal Project</span>
            </h1>
            <p className='text-gray-400 text-sm md:text-base mt-2 line-clamp-2 md:line-clamp-none'>
              Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.
            </p>
          </div>

          <div className='flex justify-between items-center p-2 mt-4'>
            <div className='flex -space-x-3'>
                {[reactlog, tail, jsLogo].map((img, i) => (
                    <span key={i} className='bg-gradient-to-t items-center flex justify-center from-[#04071D] via-[#0C0E23] rounded-full border w-[40px] h-[40px] md:w-[50px] md:h-[50px] border-white/10 backdrop-blur-sm'>
                        <img src={img} alt="tech" className="w-5 md:w-6" />
                    </span>
                ))}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <a href="https://coffee-shop-landing-page-zeta.vercel.app/" className='text-[#CBACF9] font-medium text-[14px] md:text-[16px] lg:text-[20px] hover:underline transition-all'>Check Live Site</a>
                <FiArrowUpRight className='text-[#CBACF9]' />
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div data-aos="fade-left" className='lg:w-[600px] lg:h-[618px] w-full gap-4 rounded-xl border border-white/10 flex flex-col bg-gradient-to-br from-[#04071D] via-[#0C0E23] to-slate-900 p-3 md:p-5'>
          <div className='flex-grow flex items-start mt-2 justify-center'>
            <img 
              src={alqurandigital} 
              alt='Al-quran digital' 
              className='w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover rounded-lg shadow-2xl' 
            />
          </div>
          
          <div className='w-full mt-4'>
            <h1 className='text-[20px] md:text-[24px] lg:text-[27px] font-sans font-bold text-white leading-tight'>
              Al-Qur'an Digital. <span className='text-white/50 font-normal text-sm md:text-base'>Personal Project</span>
            </h1>
            <p className='text-gray-400 text-sm md:text-base mt-2 line-clamp-2 md:line-clamp-none'>
              Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.
            </p>
          </div>

          <div className='flex justify-between items-center p-2 mt-4'>
            <div className='flex -space-x-3'>
                {[reactlog, tail, typescript].map((img, i) => (
                    <span key={i} className='bg-gradient-to-t items-center flex justify-center from-[#04071D] via-[#0C0E23] rounded-full border w-[40px] h-[40px] md:w-[50px] md:h-[50px] border-white/10 backdrop-blur-sm'>
                        <img src={img} alt="tech" className="w-5 md:w-6" />
                    </span>
                ))}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <a href="https://al-qur-an-digital.vercel.app/" className='text-[#CBACF9] font-medium text-[14px] md:text-[16px] lg:text-[20px] hover:underline transition-all'>Check Live Site</a>
                <FiArrowUpRight className='text-[#CBACF9]' />
            </div>
          </div>
        </div>
      </div>

      {/* CARD CONTAINER 2 */}
      <div className='gap-6 md:gap-9 p-4 flex flex-col lg:flex-row justify-center items-center mb-10'>
        
        {/* CARD 3 */}
        <div data-aos="fade-right" className='lg:w-[600px] lg:h-[618px] w-full gap-4 rounded-xl border border-white/10 flex flex-col bg-gradient-to-br from-[#04071D] via-[#0C0E23] to-slate-900 p-3 md:p-5'>
          <div className='flex-grow flex items-start mt-2 justify-center'>
            <img 
              src={LMS} 
              alt='LMS' 
              className='w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover rounded-lg shadow-2xl' 
            />
          </div>
          
          <div className='w-full mt-4'>
            <h1 className='text-[20px] md:text-[24px] lg:text-[27px] font-sans font-bold text-white leading-tight'>
              LMS Platform. <span className='text-white/50 font-normal text-sm md:text-base'>Personal Project</span>
            </h1>
            <p className='text-gray-400 text-sm md:text-base mt-2 line-clamp-2 md:line-clamp-none'>
              Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.
            </p>
          </div>

          <div className='flex justify-between items-center p-2 mt-4'>
            <div className='flex -space-x-3'>
                {[html, css, jsLogo].map((img, i) => (
                    <span key={i} className='bg-gradient-to-t items-center flex justify-center from-[#04071D] via-[#0C0E23] rounded-full border w-[40px] h-[40px] md:w-[50px] md:h-[50px] border-white/10 backdrop-blur-sm'>
                        <img src={img} alt="tech" className="w-5 md:w-6" />
                    </span>
                ))}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <a href="https://..." className='text-[#CBACF9] font-medium text-[14px] md:text-[16px] lg:text-[20px] hover:underline transition-all'>Check Live Site</a>
                <FiArrowUpRight className='text-[#CBACF9]' />
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div data-aos="fade-left" className='lg:w-[600px] lg:h-[618px] w-full gap-4 rounded-xl border border-white/10 flex flex-col bg-gradient-to-br from-[#04071D] via-[#0C0E23] to-slate-900 p-3 md:p-5'>
          <div className='flex-grow flex items-start mt-2 justify-center'>
            <img 
              src={appdasbord} 
              alt='appdashboard' 
              className='w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover rounded-lg shadow-2xl' 
            />
          </div>
          
          <div className='w-full mt-4'>
            <h1 className='text-[20px] md:text-[24px] lg:text-[27px] font-sans font-bold text-white leading-tight'>
              Admin Dashboard. <span className='text-white/50 font-normal text-sm md:text-base'>Personal Project</span>
            </h1>
            <p className='text-gray-400 text-sm md:text-base mt-2 line-clamp-2 md:line-clamp-none'>
              Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.
            </p>
          </div>

          <div className='flex justify-between items-center p-2 mt-4'>
            <div className='flex -space-x-3'>
                {[reactlog, tail, golangLog, typescript].map((img, i) => (
                    <span key={i} className='bg-gradient-to-t items-center flex justify-center from-[#04071D] via-[#0C0E23] rounded-full border w-[40px] h-[40px] md:w-[50px] md:h-[50px] border-white/10 backdrop-blur-sm'>
                        <img src={img} alt="tech" className="w-5 md:w-6" />
                    </span>
                ))}
            </div>
            <div className='flex justify-center items-center gap-2'>
                <a href="https://frontend-crud-wine.vercel.app/" className='text-[#CBACF9] font-medium text-[14px] md:text-[16px] lg:text-[20px] hover:underline transition-all'>Check Live Site</a>
                <FiArrowUpRight className='text-[#CBACF9]' />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectList