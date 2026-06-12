import { GrGallery } from "react-icons/gr";

type ExperienceCardProps = {
    position: string,
    title: string,
}

const ExperienceCard = ({ position, title }: ExperienceCardProps) => {
  return (
    <div className="bg-white/5 p-6 rounded-xl flex items-center justify-between
    hover:scale-101 transition duration-300 ease-in-out" data-aos='fade-up'>
      <div>
        <h3 className="font-semibold text-lg">{position}</h3>
        <p className="text-sm text-white/70">
          {title}
        </p>
      </div>

      <button>
        <GrGallery className="text-2xl"/>
      </button>
    </div>
  )
}

export default ExperienceCard