import ExperienceCard from "../../../components/ExperienceCard"
import { experiences } from "../../../constants/experiences"

const Experiences = () => {
  return (
    <section id="experiences" className="min-h-screen mt-10 lg:mt-0 pt-15 lg:pt-20 mx-5 lg:mx-25">
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#CBACF9]" data-aos='fade-up'>
          Development Journey
        </h2>
        <p className="mt-2 text-neutral-400" data-aos='fade-up'>
          A timeline of my experiences, projects, and growth as a developer,
          showcasing the skills and knowledge I've gained throughout my journey.
        </p>

        <div className="mt-6 h-px w-full bg-white/10" />
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => <ExperienceCard
          key={index}
          position={experience.position}
          title={experience.title}
        />)}
      </div>
    </section>
  )
}

export default Experiences