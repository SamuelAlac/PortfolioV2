import { services } from "../../../constants/services";
import ServiceCard from "../../../components/ServiceCard";

const Services = () => {
  return services.map((service, index) => <ServiceCard
    key={index}
    icon={<service.icon className="text-xl md:text-2xl text-[#CBACF9]" />}
    title={service.title}
    color={service.color}
    description={service.description}
  />)
}

export default Services