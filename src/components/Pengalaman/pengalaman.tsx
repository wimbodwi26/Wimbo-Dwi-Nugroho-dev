import gr from '../../assets/_Group_.svg';
import mobile from '../../assets/Frame 5.svg';


function Pengalaman() {
    return(
        <div className="relative flex max-w-screen-x lg:flex lg:flex-col overflow-hidden flex-col min-h-screen w-full p-3 bg-[#02010A]">
            <div className='flex justify-center items-center mt-4 p-3'>
            <h1 className='text-white font-sans font-bold text-[28px] justify-center items-center flex gap-2'>My<span className='text-[#CBACF9]'>work experince</span></h1>
            </div>

            <div className='flex justify-center md:flex-row lg:flex flex-col  items-center gap-5'>
            <div className='mt-[100px] bg-gradient-to-br from-[#04071D] via-[#0C0E23] to-slate-900 flex lg:w-[600px] lg:h-[190px] w-full  border p-3 border-white/10 rounded-lg items-center'>
                <img src={gr} alt="g" />
                <div className='flex flex-col'>
                <h1 className='text-white font-semibold text-[20px]'>Front End Developer Intern</h1>
                <p></p>
                </div>
            </div>

            <div className='mt-[100px] bg-gradient-to-br from-[#04071D] via-[#0C0E23] to-slate-900 flex lg:w-[600px] lg:h-[190px] w-full border p-3 border-white/10 rounded-lg items-center'>
                <img src={mobile} alt="mobile" />
                <div className='flex flex-col'>
                <h1 className='text-white font-semibold text-[20px]'>Front End Mobile Developer Intern</h1>
                <p></p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Pengalaman