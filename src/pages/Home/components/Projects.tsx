import ProjectCard from "../../../components/ProjectCard";
import { projects } from "../../../constants/projects";

const Projects = () => {
  return (
      <section id="projects" className="min-h-screen mt-10 lg:mt-0 lg:pt-20 mx-5 lg:mx-20 rounded-4xl space-y-10 pt-15">
        <h2 className='md:text-5xl font-bold text-[#CBACF9] text-center pt-3 lg:pt-0' data-aos='fade-up'>My Projects</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-0 lg:gap-y-10 place-items-center px-3'>
          {projects.map((project, index) => <ProjectCard
          key={index}
          photo={project.photo}
          title={project.title}     
          description={project.description}     
          technologies={project.technologies}
          link={project.link}
          github={project.github}
          />)}
        </div>
      </section>
  )
}

export default Projects