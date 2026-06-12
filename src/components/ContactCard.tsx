type ContactCardProps = {
    icon: React.ReactNode,
    link: string,
    title: string,
}

const ContactCard = ({ icon, link, title }: ContactCardProps) => {
  return (
    <div className='border border-white/30 rounded-sm h-6 w-6 lg:h-10 lg:w-10 flex justify-center items-center
    hover:border-2 hover:border-[#CBACF9]'>
      <a href={link} target='_blank' title={title} >
        {/* <CiMail className='text-3xl'/> */}
        {icon}
      </a>
    </div>
  )
}

export default ContactCard