import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

type ProjectCardProps = {
    photo: string,
    title: string,
    description: string | undefined,
    technologies: Array<string> | [],
    link: string | undefined,
    github: string | undefined,
};

const ProjectCard = ({ photo, title, description, technologies, link, github }: ProjectCardProps) => {
  return (
    <figure className="bg-black/20 md:w-100 h-100 md:h-115 rounded-lg overflow-hidden
    hover:scale-105 transition duration-300 ease-in-out border border-white/10" data-aos='fade-up'>
      <div className='bg-white/5 w-full h-30 md:h-50'>
        <img src={photo} className="w-full h-full object-cover" alt={`${title} project screenshot`} title={title} />
      </div>
      <div className="p-3 h-70">
        <figcaption className="h-40 md:h-30">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white my-2">{title}</h3>

            <div className="flex gap-2">
              {link && 
                <a className="border border-white/30 rounded-sm h-4 w-4 lg:h-6 lg:w-6 flex justify-center items-center"
                href={link} target="_blank" rel="noopener noreferrer" aria-label="Live project">
                  <FaExternalLinkAlt className="text-sm"/>
                </a>
              }
              {github &&
                <a className="border border-white/30 rounded-sm h-4 w-4 lg:h-6 lg:w-6 flex justify-center items-center"
                href={github} target="_blank" rel="noopener noreferrer" aria-label="Github repository">
                  <FiGithub className="text-sm"/>
                </a>
              }
            </div>
          </div>
          <p className="text-sm text-white/70 text-justify tracking-tighter">{description}</p>
        </figcaption>
        
        <ul className="grid grid-cols-3 gap-3" aria-label="Technologies used">
          {technologies?.map((technology, index) => (
            <li key={index} className="text-[10px] md:text-sm border bg-white/5 border-white/10 text-white/40 text-center">
              {technology}
            </li>
          ))}
        </ul>
      </div>
      
    </figure>
  )
}

export default ProjectCard