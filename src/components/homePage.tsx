import NavBar from "./navbar";
import { Canvas } from "@react-three/fiber";
//import Typed from "react-typed";
//import { Typed } from "react-typed";
//import { ReactTyped } from "react-typed";
import { Typewriter } from 'react-simple-typewriter';
import { OrbitControls, Environment, Stars, } from "@react-three/drei";
import Earth from "./ModelBun";
//import '../styles/text.css'
import AboutPage from "./About/about";
import ProjectList from "./Project-List/projectList";
import Pengalaman from "./Pengalaman/pengalaman";
import Footer from "./Footer/footer";

function HomePage() {
 return (
  <div className="w-full min-h-screen relative bg-[#02010A]"> {/* Ubah h-[711px] jadi min-h-screen agar fleksibel */}
    {/* NAVBAR – tetap di atas dan bisa diklik */}
    <div className="pointer-events-auto">
      <NavBar />
    </div>

    {/* CANVAS BUMI */}
    <section id="home" className="relative w-full h-screen">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [3, 2, 3], fov: 46 }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight intensity={2} position={[4, 4, 4]} />
        <Environment preset="sunset" />

        <OrbitControls
          enableRotate={true}
          enablePan={false}
          enableZoom={false}
          target={[0, 0, 0]}
          minDistance={3}
          maxDistance={3}
        />

        <Stars radius={200} depth={50} count={5000} factor={4} fade />
        <Earth scale={3} />
      </Canvas>

      {/* OVERLAY TEKS & BUTTON */}
      {/* Tambahkan px-4 agar teks tidak mepet layar di HP */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center pointer-events-none items-center text-center space-y-6 px-4">

        {/* TEXT — Pointer off agar bisa drag canvas di sela-sela teks */}
        <div className="pointer-events-none flex flex-col space-y-2 bg-[#02010A]/45 px-4 md:px-6 py-4 rounded-xl backdrop-blur-sm w-full max-w-4xl mx-auto">
          {/* Teks kecil di atas: text-lg di HP, text-2xl di Desktop */}
          <h1 className="text-lg md:text-2xl text-[#E4ECFF]">Dynamic Web Magic with Next.js</h1>
          
          {/* Teks Utama: text-3xl di HP, md:text-6xl di Desktop */}
          <h1 className="text-3xl md:text-6xl text-white font-bold neon-flicker text-outline drop-shadow-[0_0_24px_#a855f7] neon-blue-flicker leading-tight">
            Transforming Concepts into
          </h1>
          
          <h1 className="text-3xl md:text-6xl text-white font-bold text-outline drop-shadow-[0_0_8px_#a855f7] leading-tight">
            Seamless <span className="text-[#CBACF9]">User Experiences</span>
          </h1>

          <h1 className="text-lg md:text-2xl text-[#E4ECFF] mt-4">
            Hi! I'm Wimbo Dwi Nugroho, Full Stack{" "}
            <span className="text-[#CBACF9] font-semibold block md:inline-block typewriter">
              <Typewriter
                words={['Developer Based In Indonesia']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>

        {/* BUTTON — pointer aktif */}
        <a href="#project"
          className="w-[180px] md:w-[207px] rounded-md cursor-pointer justify-center items-center flex h-[56px] md:h-[66px] bg-[#06091F] font-bold text-white pointer-events-auto hover:scale-105 duration-200 shadow-lg shadow-purple-500/20"
        >
          <p className="text-base flex justify-center items-center md:text-[18px]">See my work</p>
        </a>
      </div>
    </section>

    {/* Section-section selanjutnya tetap menggunakan struktur aslimu */}
    <div className="bg-[#02010A]">
      <section id="about" className="scroll-behavior: smooth;">
        <AboutPage />
      </section>
    </div>

    <div className="bg-[#02010A]">
      <section id="project">
        <ProjectList />
      </section>
    </div>

    <div className="bg-[#02010A]">
      <section id="project">
        <Pengalaman />
      </section>
    </div>

    <div className="bg-[#02010A]">
      <section id="contact">
        <Footer />
      </section>
    </div>
  </div>
);
}

export default HomePage;
