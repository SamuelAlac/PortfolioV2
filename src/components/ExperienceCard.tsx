// import { GrGallery } from "react-icons/gr";

type ExperienceCardProps = {
    position: string,
    company: string,
    duration: string,
};

const ExperienceCard = ({ position, company, duration }: ExperienceCardProps) => {
  return (
    <div className="bg-white/5 p-6 rounded-xl flex items-center justify-between
    hover:scale-101 transition duration-300 ease-in-out" data-aos='fade-up'>
      <div>
        <h3 className="font-semibold text-lg">{position}</h3>
        <p className="text-sm text-white/70">
          {company} • {duration}
        </p>
      </div>

      {/* <button aria-label="Open experience gallery">
        <GrGallery className="text-2xl"/>
      </button> */}
    </div>
  )
}

export default ExperienceCard