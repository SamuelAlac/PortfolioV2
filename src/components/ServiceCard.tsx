type ServiceCardProps = {
    icon: React.ReactNode,
    title: string,
    color: string,
    description: string,
};

const ServiceCard = ({ icon, title, color, description }: ServiceCardProps) => {
  return (
    <li className={`${color ?? 'bg-white/5'} rounded-xl w-fit h-30 md:w-60 xl:w-70 md:h-40 
    hover:scale-105 z-0 flex flex-col justify-center gap-y-1 md:gap-y-1 xl:gap-y-3 mx-5 md:mx-0 px-3 md:px-3 xl:px-5
    transition duration-300 ease-in-out`}>
      <div className='w-7 h-7 bg-[#CBACF9]/10 rounded-md flex items-center justify-center'>
        {icon}
      </div>

      <div>
        <h2 className='text-sm xl:text-lg font-semibold'>{title}</h2>
        <p className='text-xs xl:text-sm text-white/60'>{description}</p>
      </div>
    </li>
  )
}

export default ServiceCard