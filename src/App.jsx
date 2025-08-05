import { useState, useEffect } from 'react'
import DataImage, { listTools, listProyek, listPendidikan } from "./data";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)

  const [currentQuote, setCurrentQuote] = useState(0);
  const quotes = [
    "You're What You Think.",
    "Dream Big, Work Hard.",
    "Code Today, Change Tomorrow.",
    "Keep Learning, Keep Growing.",
    "Innovation Starts Here."
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
      offset: 120,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000); // Ganti setiap 3 detik

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="pt-24 max-w-7xl mx-auto px-6 lg:px-8">
    {/* Hero Section */}

      <div className='hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1'>
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className='flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl'>
            <img src={DataImage.HeroImage} alt='Hero Image' className='w-10 rounded-md' loading='lazy'/>
            <q className='transition-all duration-500 ease-in-out'>
              {quotes[currentQuote]}
            </q>
          </div>
          <h1 className='text-5xl/tight font-bold mb-6'>Hi, Saya Nugraha Kautsarrizqi Caksana</h1>
          <p className='text-base/loose mb-6 opacity-50'>Saya lahir pada tahun 2007 dan memiliki passion yang tinggi untuk programming dan design. 
          Saya senang mempelajari data science dan suka mempelajari hal baru. Baik itu membuat website, mengikuti penulisan jurnal ilmiah, dan fotografi.
          </p>
          <div className='flex items-center sm:gap-4 gap-2'>
            <a href='https://drive.google.com/file/d/1nhPtBQECUEB_oUYqnnT-qGGEXfGomVkO/view?usp=sharing' 
            className='bg-violet-700 p-4 rounded-2xl hover:bg-violet-600' target="_blank" rel="noopener noreferrer">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href='#proyek' className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600'>
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
          <img src={DataImage.HeroImage} alt='Hero Image' className='w-[500px] shadow-md rounded-md md:ml-auto animate__animated animate__fadeInUp animate__delay-2s' />
      </div>


      {/* Tentang */}
      <div className='tentang mt-32 py-10' id='tentang'>
        {/* <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
        <img src={DataImage.HeroImage} alt='Image' className='w-12 rounded-md mb-10 sm:hidden' loading='lazy' />
          <p className='text-base/loose mb-10'>
            Hi, perkenalkan saya Nugraha Kautsarrizqi Caksana, seorang mahasiswa baru Ilmu Komputer di Universitas Indonesia 
            yang memiliki ketertarikan di bidang Data Science, Artificial Intelligence dan Software Development.
          </p>
          <div className='flex items-center justify-between'>
            <img src={DataImage.HeroImage} alt='Image' className='w-12 rounded-md sm:block hidden' loading='lazy' />
            <div className='flex items-center gap-6'>
              <div>
                <h1 className='text-4xl mb-1'>
                  2
                </h1>
                <p>Proyek Selesai</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Tools */}
        <div className='tools mt-32'>
          <h1 className='text-4xl/snug font-bold mb-4' data-aos='fade-up' data-aos-duration='1000'>Tools yang dipakai</h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>Berikut ini beberapa tools yang biasa saya gunakan untuk pembuatan website dan bereksperimen terkait data.</p>
          <div className='tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            {listTools.map((tool, index) => (
            <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
              <img src={tool.gambar} alt='Tools Image' className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900' loading='lazy'/>
              <div>
                <h4 className='font-bold'>{tool.nama}</h4>
                <p className='opacity-50'>{tool.ket}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>

        {/* Proyek */}
        <div className='proyek mt-32 py-10' id='proyek'>
          <h1 className='text-center text-4xl font-bold mb-2' data-aos='fade-up' data-aos-duration='1000'>
            Proyek
          </h1>
          <p className='text-base/loose text-center opacity-50' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
            Berikut ini beberapa proyek yang telah saya buat.
          </p>

          <div className='proyek-box mt-14 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 max-w-4xl mx-auto'>
            {listProyek.map((proyek, index) => (
              <div key={proyek.id} className='p-4 bg-zinc-800 rounded-md' data-aos='fade-up' data-aos-duration='1000' data-aos-delay={index * 150}>
                <img src={proyek.gambar} alt="Proyek Image" loading='lazy' />
                <div>
                  <h1 className='text-2xl font-bold my-4'>{proyek.nama}</h1>
                  <p className='text-base/loose mb-4'>{proyek.desk}</p>
                  <div className='flex flex-wrap gap-2'>
                    {proyek.tools.map((tool, toolIndex) => (
                      <p className='py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold' key={toolIndex}>
                        {tool}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        {/* Pendidikan */}
        <div className='pendidikan mt-32 py-10' id='pendidikan'>
          <h1 className='text-center text-4xl font-bold mb-4' data-aos='fade-up' data-aos-duration='1000'>
            Riwayat Pendidikan
          </h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full mx-auto text-base/loose text-center opacity-50' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
            Perjalanan pendidikan yang telah saya tempuh dari tingkat menengah hingga perguruan tinggi.
          </p>
          
          <div className='pendidikan-box mt-14 max-w-4xl mx-auto space-y-6'>
            {listPendidikan.map((pendidikan, index) => (
              <div key={pendidikan.id} className='flex items-center gap-4 p-6 bg-zinc-800 rounded-lg border border-zinc-700 hover:bg-zinc-750 transition-colors' 
                data-aos='fade-up' 
                data-aos-duration='1000' 
                data-aos-delay={index * 150}
              >
                <img src={pendidikan.gambar} alt={`Logo ${pendidikan.nama}`} className='w-16 h-16 object-contain bg-white rounded-lg p-2 flex-shrink-0' loading='lazy'/>
                
                {/* Content */}
                <div className='flex-1 space-y-2'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
                    <div>
                      <h3 className='text-xl font-bold text-white'>
                        {pendidikan.nama}
                      </h3>
                      <p className='text-base text-gray-300'>
                        {pendidikan.desk}
                      </p>
                    </div>
                    <div className='bg-violet-700 px-3 py-1 rounded-full text-sm font-medium w-fit text-white'>
                      {pendidikan.tahun}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Prestasi */}


      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id='kontak'>
        <h1 className='text-4xl mb-2 font-bold text-center' data-aos='fade-up' data-aos-duration='1000'>Kontak</h1>
        <p className='text-base/loose text-center mb-10 opacity-50' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>Mari berhubung dengan saya.</p>
        <form action="https://formsubmit.co/lvnarqq@gmail.com" method="POST" className='bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md' autoComplete='off' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Nama Lengkap</label>
              <input type='text' name='nama' placeholder='Masukkan Nama...' className='border border-zinc-500 p-2 rounded-md' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Email</label>
              <input type='email' name='email' placeholder='Masukkan Email...' className='border border-zinc-500 p-2 rounded-md' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor='pesan'>Pesan</label>
              <textarea name='pesan' id='pesan' cols='45' rows='7' placeholder='Pesan...' className='border border-zinc-500 p-2 rounded-md' required />
            </div>
            <div className='text-center'>
              <button type='submit' className='bg-violet-700 p-3 rounded-lg w-full cursor-pointer'>Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>

    </div>

  )
}

export default App;