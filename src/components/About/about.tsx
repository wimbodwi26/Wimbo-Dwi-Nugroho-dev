import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import '../../styles/infiniteScroll.css';
import { FaArrowRight } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

//import { Link } from 'react-router-dom';

import * as THREE from 'three';
import Globe, { type GlobeMethods } from 'react-globe.gl';

// Import semua logo
import CssLogo from '../../assets/css-3-svgrepo-com.svg';
import goLogo from '../../assets/golang-svgrepo-com.svg';
import HtmlLogo from '../../assets/html-5-svgrepo-com.svg';
import jsLogo from '../../assets/js-svgrepo-com.svg';
import sqlLogo from '../../assets/mysql-logo-svgrepo-com.svg';
import mongoLogo from '../../assets/mongodb-svgrepo-com.svg';
import expLogo from '../../assets/express-svgrepo-com.svg';
import nodeLogo from '../../assets/node-js-svgrepo-com.svg';
import pyLogo from '../../assets/python-svgrepo-com.svg';
import rtLogo from '../../assets/react-svgrepo-com.svg';
import nextLogo from '../../assets/nextjs-svgrepo-com.svg';
import typLogo from '../../assets/typescript-official-svgrepo-com.svg';
import tlwcssLogo from '../../assets/tailwindcss-icon-svgrepo-com.svg';
import figLogo from '../../assets/figma-svgrepo-com.svg';
import wimbopng from '../../assets/wimbo.png';
import bg from '../../assets/Background.png';
import img from '../../assets/Image.png';
import section from '../../assets/section input.png';
import bg2 from '../../assets/backgroundblobservicepng.png'

const set1 = [CssLogo, goLogo, HtmlLogo, jsLogo, pyLogo, typLogo];
const set2 = [sqlLogo, mongoLogo, expLogo, nodeLogo, rtLogo, nextLogo, tlwcssLogo, figLogo];

function AboutPage() {
    // Perbaikan Type untuk TypeScript
    const globeEl = useRef<GlobeMethods>();
    const [geoJsonData, setGeoJsonData] = useState({ features: [] });

    const markerData = [
        { lat: -6.200000, lng: 106.816666, name: 'Indonesia' },
        { lat: 37.09, lng: -95.71, name: 'USA' },
        { lat: 51.16, lng: 10.45, name: 'Germany' },
        { lat: 61.52, lng: 105.31, name: 'Russia' }
    ];

    useEffect(() => {
        AOS.init({ duration: 800 });

        // Ambil data GeoJSON untuk efek titik-titik daratan
        fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(setGeoJsonData);

        if (globeEl.current) {
            globeEl.current.pointOfView({ altitude: 2.5 });
            globeEl.current.controls().enableZoom = false;
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.7;
        }
    }, []);

    return (
    <div className="w-full max-w-screen-x overflow-hidden bg-[#02010A] z-[999] flex flex-col items-center p-4 md:p-8 relative min-h-screen gap-8">
        
        {/* --- SECTION ATAS --- */}
        {/* Perubahan: flex-col untuk HP, lg:flex-row untuk Desktop */}
        <div className="flex flex-col lg:flex-row gap-8 mt-9 w-full justify-center items-center lg:items-start">
            
            {/* Kotak Putih Besar (Foto Profil) */}
            {/* Perubahan: w-full untuk HP, lg:w-[689px] untuk Desktop */}
            <div data-aos="fade-right" className="w-full max-w-[689px] lg:w-[689px] h-[400px] md:h-[541px] border border-white/10 bg-blue-300 flex relative rounded-lg justify-center overflow-hidden">
                <img src={wimbopng} alt="" width={500} height={500} className='object-cover' />

                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0C0E23] via-[#0C0E23]/40 to-transparent backdrop-blur-sm"></div>

                <div className="absolute flex items-center gap-3 bottom-4 z-10">
                    <a href='' className="group flex items-center gap-3">
                        <p className="text-white text-[18px] md:text-[24px] font-bold">see details about me..</p>
                        <FaArrowRight size={20} className='text-white transition-transform duration-300 group-hover:translate-x-2' />
                    </a>
                </div>
            </div>

            {/* Kolom Kanan (Stack & Globe) */}
            <div className="flex flex-col gap-8 w-full max-w-[521px]">
                {/* Globe Box */}
                <div data-aos="fade-left" className="relative w-full h-[255.5px] overflow-hidden rounded-lg bg-[#0C0E23] border border-white/10">
                    <div className="absolute top-6 left-6 z-10 pointer-events-none">
                        <h2 className="text-white text-xl md:text-2xl font-bold leading-tight">
                            I'm very flexible with time<br/>zone communications
                        </h2>
                    </div>

                    <Globe
                        ref={globeEl}
                        backgroundColor="rgba(0,0,0,0)"
                        width={521} // Untuk globe library, sebaiknya gunakan resize handler atau prop container
                        height={255.5}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                        hexPolygonsData={geoJsonData.features}
                        hexPolygonResolution={3}
                        hexPolygonMargin={0.7}
                        hexPolygonColor={() => 'rgba(255, 255, 255, 0.7)'}
                        htmlElementsData={markerData}
                        htmlElement={(d: any) => {
                            const el = document.createElement('div');
                            el.innerHTML = `<div class="px-3 py-1 bg-black/60 border border-white/20 text-white text-[10px] rounded-md backdrop-blur-md shadow-lg font-semibold whitespace-nowrap">${d.name}</div>`;
                            return el;
                        }}
                    />
                </div>

                {/* Box My Stack */}
                <div data-aos="fade-left" className="w-full cursor-pointer h-[255.5px] flex flex-col md:flex-row rounded-lg bg-[#0C0E23] border border-white/10 overflow-hidden relative">
                    <div className='flex items-center justify-center flex-col p-6 md:p-8 z-10 text-center md:text-left'>
                        <h1 className='text-xs md:text-sm items-center text-white'>I constantly try to improve</h1>
                        <h1 className="text-xl md:text-2xl items-center font-bold text-white">My tech Stack</h1>
                    </div>

                    <div className='sliders flex gap-4 ml-auto pr-4 md:pr-10'>
                        {/* Slider containers tetap sama */}
                        <div className='slider-container' id='slider1'>
                            <div className='slider-track'>
                                {[...set1, ...set1, ...set1].map((logo, index) => (
                                    <div className='slide border border-white/20' key={`s1-${index}`}>
                                        <img src={logo} alt='skill' className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='slider-container' id='slide2'>
                            <div className='slider-track reverse'>
                                {[...set2, ...set2, ...set2].map((logo, index) => (
                                    <div className='slide border border-white/20' key={`s2-${index}`}>
                                        <img src={logo} alt='skill' className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- SECTION BAWAH --- */}
        {/* Perubahan: flex-col di HP, lg:flex-row di Desktop */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8 w-full justify-center items-center lg:items-start">
            <div className="flex flex-col gap-8 w-full max-w-[351px]">
                {/* Tech Enthusiast Box */}
                <div data-aos="fade-right" className="relative overflow-hidden border border-white/10 bg-[#0C0E23] w-full rounded-lg h-[180px]">
                    <div className="relative top-2 z-30 left-4">
                        <h2 className="font-bold text-[20px] md:text-[24px] text-white">Tech enthusiast with a</h2>
                        <span className='font-bold text-[20px] md:text-[24px] text-white'>passion for development.</span>
                    </div>
                    <img src={bg} alt="background" className="absolute inset-0 w-full h-full object-cover z-10" />
                    <img src={section} alt="items" className="absolute w-[150px] md:w-[200px] bottom-0 right-0 z-20 h-[50%] object-contain" />
                </div>

                {/* Email Copy Box */}
                <div data-aos="fade-right" className="relative border border-white/10 bg-[#0C0E23] overflow-hidden w-full rounded-lg h-[180px]">
                    <img src={bg2} alt="" className="absolute inset-0 w-full h-full object-cover z-10" />
                    <div className="relative h-full flex z-20 justify-center items-center p-4">
                        <div className='items-center justify-center flex flex-col text-center'>
                            <h2 className='font-bold text-[20px] md:text-[24px] text-white'>Do you want to start</h2>
                            <span className='font-bold text-[20px] md:text-[24px] text-white'>a project together?</span>
                            <button className='flex items-center gap-2 bg-[#161A31] px-4 py-2 rounded-md mt-4 hover:bg-[#1c213d] transition-colors'>
                               <span className='text-white'><IoCopyOutline /></span>
                               <span className='font-bold text-xs md:text-sm text-white'>Copy my email address</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inside Scoop Box */}
            <div data-aos="fade-left" className="w-full max-w-[859px] h-[300px] md:h-[390px] rounded-lg bg-[#0C0E23] overflow-hidden border border-white/10 relative">
                <img src={bg} alt="background" className="absolute inset-0 w-full h-full object-cover z-10" />
                <img src={img} alt="foreground" className="absolute bottom-0 right-0 z-20 h-[70%] md:h-[90%] object-contain opacity-50 md:opacity-100" />
                <div className="absolute inset-0 z-30 p-6 md:p-8 flex flex-col justify-center">
                    <h2 className="text-white text-xl md:text-3xl font-bold">
                        <span className="font-normal text-sm md:text-lg block mb-2 opacity-70">THE INSIDE SCOOP</span> 
                        Currently building a <br/> JS Animation library
                    </h2>
                </div>
            </div>
        </div>
    </div> 
);
}

export default AboutPage;