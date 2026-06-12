import { contacts } from '../../../constants/contacts'
import ContactCard from '../../../components/ContactCard'
import ContactForm from '../../../components/ContactForm'

const Contact = () => {

  return (
    <section id="contact" className="min-h-screen mt-10 lg:mt-0 pt-15 lg:pt-20 mx-5 lg:mx-25 
      flex flex-col md:flex-row md:justify-between items-center">
      <div className='lg:h-130 lg:w-150 p-3 space-y-3' data-aos='fade-right'>
        <h2 className='text-sm md:text-5xl font-medium text-[#CBACF9]'>Let's Build Something Great Together</h2>
        <p className='text-[8px] md:text-lg tracking-wider text-white/80'>
        I'm available for freelance projects, web development job opportunities, and collaborations.
        </p>

        <p className='text-[8px] md:text-lg tracking-wider text-white/80'>
        Whether you need a modern website, a business system, or help bringing an idea to life, I'd love to hear about it.
        </p>

        <div className='lg:h-20 flex items-center gap-3 md:gap-5'>
        {contacts.map((contact, index) => <ContactCard key={index}
            icon={<contact.icon className='text-sm lg:text-3xl'/>}
            link={contact.link}
            title={contact.title}         
        />)}
        </div>
      </div>
      <ContactForm/>
    </section>
  )
}

export default Contact