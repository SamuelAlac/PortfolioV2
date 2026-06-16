import { Carousel, CarouselContent, CarouselItem } from "../../../components/ui/carousel"
import AutoScroll from 'embla-carousel-auto-scroll';
import { technologies } from "../../../constants/technologies";
import { useMobile } from "@/hooks/useMobile";
import { proofs } from "@/constants/proofs";
import ProofsCard from "@/components/ProofsCard";
import { useState } from "react";
const PROFILE_PIC = '/SAMUEL_ALAC.png'

const Hero = () => {
  const isMobile = useMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const autoScroll = AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })

  return (
    <section id="#" className="flex flex-col min-h-screen pt-20">
      <div className="flex flex-col-reverse md:flex-row items-center lg:justify-around justify-center gap-10 md:gap-0 h-full">
        <div className="lg:h-120 lg:w-150 md:h-100 md:w-100 text-center md:text-start flex flex-col justify-center space-y-2"
        data-aos={isMobile ? 'fade-up' : 'fade-right'}>
          <p className="text-xl md:text-3xl lg:text-4xl font-normal">Hello World, I'm</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#CBACF9]">Samuel Vincent Alac</h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">Software Developer</h2>

          <ul className='lg:h-20 flex items-center gap-3 md:gap-5'>
            {proofs.map((proof, index) => (
              <li key={index}>
                <ProofsCard text={proof.text} anchor={proof.anchor} link={proof.link}
                isActive={hoveredIndex === null ? index === 0 : hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)} 
                />
              </li>
            ))}
          </ul>
        </div>
        
        <figure className="h-55 w-55 md:h-75 md:w-75 lg:h-100 lg:w-100 rounded-full overflow-hidden border-2 border-white/30"
        data-aos={isMobile ? 'fade-up' : 'fade-left'}>
          <img src={PROFILE_PIC} alt="Samuel Vincent Alac" className="w-full h-full object-cover" />
        </figure>
      </div>

      <div className="mt-35 md:mt-20 lg:mt-0 md:mx-10 lg:mx-25" data-aos='fade-up'>
        <h2 className="text-white text-center">Technologies I Work With</h2>
        <hr className="border-white/15" />
        <ul>
          <Carousel opts={{ loop: true }} plugins={[autoScroll]}>
            <CarouselContent className="w-full mt-2 py-2">
              {technologies.map((tech: string, index: number) =>(
                <CarouselItem key={index} className="text-center basis-1/3 md:basis-1/4 lg:basis-1/8">
                    <li className="text-sm md:text-xl text-white hover:text-[#CBACF9] hover:scale-110">
                      {tech}
                    </li>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ul>
      </div>
    </section>
  )
}

export default Hero