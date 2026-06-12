import About from './components/About';
import Experiences from './components/Experiences';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';


const HomePage = () => {

  return (
    <main className="text-white min-h-screen">
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Contact/>
    </main>
  )
}

export default HomePage