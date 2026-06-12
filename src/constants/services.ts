import { FaCode } from "react-icons/fa6"; // Clean Code
import { IoRocketOutline } from "react-icons/io5"; // Performance
import { FaSearchengin } from "react-icons/fa"; // SEO
import { LuLayoutDashboard } from "react-icons/lu"; // UI / UX
import { GrGroup } from "react-icons/gr"; // Collaboration
import { FaRegLightbulb } from "react-icons/fa"; // Innovation

export const services = [
  {
    icon: FaCode,
    title: "Clean Code",
    color: "bg-emerald-500/15",
    description:
      "Writing maintainable and scalable code by following clean architecture, reusable patterns, and best practices.",
  },
  {
    icon: IoRocketOutline,
    title: "Performance",
    color: "bg-red-500/15",
    description:
      "Boosting performance through efficient code optimization, lazy loading, caching, and strategies.",
  },
  {
    icon: FaSearchengin,
    title: "SEO Friendly",
    color: 'bg-yellow-500/15',
    description:
      "Creating SEO-friendly websites through semantic HTML, proper metadata structure, and accessibility.",
  },
  {
    icon: LuLayoutDashboard,
    title: "UI / UX Design",
    color: "bg-purple-400/15",
    description:
      "Designing responsive and intuitive interfaces with usability and smooth user experience in mind.",
  },
  {
    icon: GrGroup,
    title: "Collaboration",
    color: "bg-blue-400/15",
    description:
      "Working efficiently with teams using Git version control, communication, and proper documentation.",
  },
  {
    icon: FaRegLightbulb,
    title: "Innovation",
    color: "bg-cyan-300/15",
    description:
      "Building efficient solutions by leveraging AI, and exploring modern technologies.",
  },
];