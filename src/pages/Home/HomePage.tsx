import About from './components/About';
import Experiences from './components/Experiences';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SEO from '@/components/SEO';


const HomePage = () => {

  return (
    <>
      <SEO
       title='Samuel Vincent Alac | Portfolio'
       description='Full-stack software developer specializing TypeScript, React, Next.js and Node.js. Building modern web applications.'
       image='https://samuel-vincent-alac.vercel.app/thumbnail.png'
      />

      <main className="text-white min-h-screen">
        <Hero/>
        <About/>
        <Projects/>
        <Experiences/>
        <Contact/>
      </main>
    </>
  )
}

export default HomePage