import ExperienceCard from "../../../components/ExperienceCard"
import { experiences } from "../../../constants/experiences"

const Experiences = () => {
  return (
    <section id="experiences" className="min-h-screen mt-10 lg:mt-0 pt-15 lg:pt-20 mx-5 lg:mx-25">
      <div className="mb-10 text-center" data-aos='fade-up'>
        <h2 className="md:text-5xl font-bold text-[#CBACF9]">
          Professional Development Journey
        </h2>
        <p className="text-sm mt-2 text-neutral-400">
          A timeline of my experiences, projects, and growth as a developer,
          showcasing the skills and knowledge I've gained throughout my journey.
        </p>

        <div className="mt-6 h-px w-full bg-white/10" />
      </div>

      <ol className="space-y-6">
        {experiences.map((experience, index) => (
          <li key={index}>
            <ExperienceCard
              key={index}
              position={experience.position}
              company={experience.company}
              duration={experience.duration}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experiences