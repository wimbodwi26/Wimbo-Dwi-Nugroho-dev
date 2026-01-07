import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdDownload } from "react-icons/io";
import wimbopng from '../../../assets/wimbo.png';
import DownloadCVButton from '../../buttonunduh';

function AboutDetail() {
  return (
    <section id='detail'>
      <div className="w-full min-h-screen overflow-hidden bg-[#02010A] pb-10">
        {/* Tombol Back */}
        <div className="flex justify-start items-center p-4 text-white text-[24px] font-semibold">
          <Link to="/" className="flex items-center gap-1">
            <IoIosArrowBack size={24} />
            <span className="text-lg">Back</span>
          </Link>
        </div>

        <div className='flex justify-center lg:flex-row items-center flex-col gap-10 px-4'>
          {/* Frame Foto Profile */}
          <div className="w-full max-w-[400px] lg:max-w-[500px] aspect-square lg:h-[400px] 
                bg-blue-400 p-3 md:p-5 rounded-lg border-[8px] md:border-[12px] border-blue-600 
                shadow-[inset_0_4px_10px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.2)] 
                flex relative overflow-hidden">
            <div className="w-full h-full bg-blue-200 overflow-hidden rounded-sm shadow-inner border border-blue-700/20">
              <img src={wimbopng} alt="wimbo" className="w-full h-full object-cover md:object-contain" />
            </div>
          </div>

          {/* Konten Teks */}
          <div className="lg:w-[500px] w-full flex flex-col gap-4 text-white font-sans">
            <p className="text-sm md:text-base leading-relaxed opacity-90 text-justify">
              A Mechanical Engineering graduate highly focused on detail and accuracy. 
              Determined to pursue a remote career in technology and data, and open to freelance opportunities.
            </p>

            <div className="font-bold text-base md:text-lg border-b border-white/10 pb-2">
              Core Value & Technical Skills
            </div>

            <ul className="flex flex-col gap-5 list-none">
              {[
                {
                  title: "Validated Data Analysis Proficiency",
                  desc: "Holds a certificate from the Virtual Experience Program Data Analyst (Deloitte Australia via Forage). Capable of processing, analyzing, and presenting data with high accuracy."
                },
                {
                  title: "Prior UI/UX Development Experience",
                  desc: "Involved in past open-source development on GitHub (Goodfrestissue), contributing to the UI features. Demonstrates technical understanding and team collaboration."
                },
                {
                  title: "Remote Readiness & Support",
                  desc: "Equipped with a Verified Virtual Assistant (VA) Certification from Alison. Prepared to efficiently support remote administrative and operational needs."
                }
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start group">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#CBACF9] shrink-0"></span>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-[#CBACF9] text-sm md:text-base leading-tight">
                      {item.title}
                    </span>
                    <p className="text-xs md:text-sm text-gray-300 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Button Download */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 px-4'>
          <DownloadCVButton
            file='/Wimbo-Dwi-Nugroho-(ID).pdf'
            label={<span className='flex font-sans font-bold text-white items-center gap-2'>Download CV (ID) <IoMdDownload /></span>} 
          />
          <DownloadCVButton
            file='/cv-fane-id.pdf'
            label={<span className='flex font-sans font-bold text-white items-center gap-2'>Download CV (EN) <IoMdDownload /></span>} 
          />
        </div>
      </div>
    </section>
  );
}

export default AboutDetail;