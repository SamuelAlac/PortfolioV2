import Services from "./Services"

const About = () => {
  return (
    <section id='about' className='min-h-screen flex flex-col lg:flex-row justify-around items-center text-white pt-15 overflow-x-hidden'>
      <div className="md:w-150 md:h-120 space-y-2.5 md:space-y-5 px-5 md:px-0" data-aos='fade-right'>
        <div>
          <h2 className='md:text-5xl font-bold text-[#CBACF9]'>Building the future,</h2>
          <h3 className='md:text-4xl font-medium italic text-white/90'>one component at a time.</h3>
        </div>

        <p className='text-[10px] text-justify md:text-sm tracking-wider text-white/80'>
          I'm a software developer passionate about crafting digital products that
          solve real-world problems. I enjoy turning ideas into real applications through thoughtful design and code.
          My journey started with a curiosity and grew into a passion for building modern and meaningful digital experiences.        
        </p>

        <p className='text-[10px] text-justify md:text-sm tracking-wider text-white/80'>
          I mainly work with TypeScript, React, Next.js, focusing on building modern web applications with clean design,
          scalability, and great user experience in mind. I enjoy creating responsive and interactive interfaces that not only look good
          but also feel smooth and intuitive to use. Beyond frontend development, I also work with backend technologies such as
          Node.js, Express, Django, and databases, allowing me to build full-stack applications with reliable APIs and scalable systems. 
        </p>

        <div className='bg-white/5 w-full h-20 rounded-2xl border-2 border-white/5 flex justify-center items-center my-5 lg:my-0'>
          <h1 className='text-sm italic text-white font-medium'>"I love coding xD" - SVA</h1>
        </div>
      </div>

      <div className="md:w-150 md:h-135 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 place-items-center" data-aos='fade-left'>
        <Services/>
      </div>
    </section>
  )
}

export default About