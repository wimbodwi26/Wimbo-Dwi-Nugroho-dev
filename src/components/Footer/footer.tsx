import { FiArrowUpRight } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";



function Footer() {

    const socialLinks = [
  { icon: <GrInstagram size={22} />, url: "https://instagram.com/username" },
  { icon: <FaXTwitter size={22} />, url: "https://twitter.com/username" },
  { icon: <SiGithub size={22} />, url: "https://github.com/wimbodwi26" },
  { icon: <FaWhatsapp size={22} />, url: "https://wa.me/+6287721716160" },
  { icon: <IoLogoLinkedin size={22} />, url: "https://linkedin.com/in/wimbo-dwi-nugroho" },
];

    return(
        <>
  <div className="relative flex justify-center items-center max-w-screen-x overflow-hidden flex-col min-h-screen w-full p-3 bg-[#02010A]">
    {/* container 1 */}
    <div className="flex flex-col justify-center items-center text-white font-sans text-center">
      {/* text-3xl untuk HP, md:text-[46px] untuk Desktop */}
      <div className="gap-1 flex flex-col items-center leading-[1.1]">
        <span className="text-3xl md:text-[46px] font-sans font-extrabold">
          Ready to take <span className="text-[#CBACF9]">your</span> digital
        </span>
        <span className="text-3xl md:text-[48px] font-sans font-extrabold">
          presence to the next level?
        </span>
      </div>
      
      {/* Tambah w-full dan max-w agar teks tidak melebar di HP */}
      <span className="text-sm md:text-[16px] font-sans relative top-4 max-w-[300px] md:max-w-none">
        Reach out to me today and let's discuss how I can help you achieve your goals.
      </span>

      <div className="relative top-12 md:top-7 w-[200px] md:w-[239px] gap-3 bg-gradient-to-br from-[#04071D] via-[#0C0E23] to-slate-900 h-[56px] md:h-[66px] rounded-lg border border-white/10 flex justify-center items-center">
        <a href="mailto:wimbodwinugroho111@gmail.com" className="text-sm md:text-base">Contact Me Now</a>
        <FiArrowUpRight />
      </div>
    </div>
  </div>

  {/* Footer Section: flex-col di HP, md:flex-row di Desktop */}
  <div className="flex flex-col md:flex-row justify-between items-center bg-[#02010A] px-10 pb-10 md:pb-0">
    
    <div className="text-white flex p-4 items-center order-2 md:order-1">
      <span className="flex gap-2 items-center font-semibold text-sm md:text-base">
        Copyright 
        <span className="flex justify-center items-center gap-1">
          <FaRegCopyright />2025
        </span> 
        Wimbo Dwi Nugroho
      </span>
    </div>

    <div className="text-white flex p-8 order-1 md:order-2">
      <ul className="flex gap-4 items-center justify-center">
        {socialLinks.map((item, index) => (
          <li key={index}>
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] flex items-center justify-center 
                         rounded-2xl border border-white/10 
                         bg-white/5 backdrop-blur-md 
                         hover:bg-white/20 hover:border-white/30 
                         transition-all duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</>
    )
}

export default Footer