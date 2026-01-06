import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdDownload } from "react-icons/io";
import wimbopng from '../../../assets/wimbo.png';
import DownloadCVButton from '../../buttonunduh';



function AboutDetail() {
   return (
    <section id='detail'>
    <div className="w-full min-h-screen overflow-hidden bg-[#02010A]">
        <span className="flex justify-start items-center p-4 text-white text-[24px] font-semibold">
            <Link to="/" className="flex items-center gap-[0.2px] justify-center"><IoIosArrowBack size={24} />Back</Link>
        </span>
        <div className='flex justify-center lg:flex-row flex-col gap-6 p-3'>
            <div className='bg-blue-400 flex items-center'>
           <img src={wimbopng} alt="wimbo"  />
           </div>

           <div className='lg:w-[500px] w-full flex flex-col gap-4 text-white font-sans'>
           <p>A Mechanical Engineering graduate highly focused on detail and accuracy. Determined to pursue a remote career in technology and data, and open to freelance opportunities.</p>
           <span className='font-sans font-bold'>Core Value & Technical Skills</span>
           <span className='relative left-7 gap-3 flex flex-col'>
           <li>Validated Data Analysis Proficiency: Holds a certificate from the Virtual Experience Program Data Analyst (Deloitte Australia via Forage). Capable of processing, analyzing, and presenting data with high accuracy standards.
</li>
           <li>​Prior UI/UX Development Experience: Involved in past open-source development on GitHub (Goodfrestissue), contributing to the About Page Navigation (UI) feature. Demonstrates a technical understanding of user interfaces and team collaboration.</li>
           <li>Remote Readiness & Support: Equipped with a Verified Virtual Assistant (VA) Certification from Alison. Prepared to efficiently support remote administrative and operational needs, leveraging strong organizational skills and attention to detail.</li>
           </span>
           </div>
        </div>
        <div className='flex flex-col gap-3 lg:justify-center justify-start lg:items-center items-start p-3'>
            <DownloadCVButton
            file='/Wimbo-Dwi-Nugroho-(ID).pdf'
            label={<span className='flex font-sans font-bold text-white items-center justify-center'>Download CV (ID) <IoMdDownload /></span>} />
            <DownloadCVButton
            file='/cv-fane-id.pdf'
            label={<span className='flex font-sans font-bold text-white items-center justify-center'>Download CV (EN) <IoMdDownload /></span>} />
        </div>
    </div>
    </section>
   )   
}


export default AboutDetail