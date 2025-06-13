// api/homepageApi.js
import {
  FaCode,
  FaClock,
  FaUserCheck,
  FaUsers,
  FaMoneyBillWave,
  FaHeartbeat,
  FaGraduationCap,
  FaShoppingCart,
  FaTruckMoving,
  FaRocket,
  FaGlobeAsia,
  FaClipboardList,
  FaDraftingCompass,
  FaVial,
  FaHandshake,
} from "react-icons/fa";



export const reasons = [
  {
    icon: <FaUserCheck className="text-blue-500 text-3xl" />,
    title: "Personalized Development",
    desc: "We deliver custom solutions aligned with your goals and processes.",
  },
  {
    icon: <FaUsers className="text-green-500 text-3xl" />,
    title: "India-Based Trusted Team",
    desc: "Skilled professionals delivering reliable communication and development.",
  },
  {
    icon: <FaMoneyBillWave className="text-yellow-500 text-3xl" />,
    title: "Cost-effective & Scalable",
    desc: "Affordable pricing with a focus on scalability and long-term value.",
  },
  {
    icon: <FaClock className="text-red-500 text-3xl" />,
    title: "Timely Delivery & Satisfaction",
    desc: "We deliver on time and ensure complete satisfaction throughout the journey.",
  },
];

export const industries = [
  {
    icon: <FaHeartbeat className="text-pink-500 text-3xl" />,
    title: "Healthcare",
    desc: "Custom healthtech solutions for clinics, hospitals, and wellness centers.",
  },
  {
    icon: <FaGraduationCap className="text-indigo-500 text-3xl" />,
    title: "Education",
    desc: "Learning management systems and e-learning platforms for institutions.",
  },
  {
    icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
    title: "Retail",
    desc: "E-commerce sites, POS systems, and inventory solutions.",
  },
  {
    icon: <FaTruckMoving className="text-green-500 text-3xl" />,
    title: "Logistics",
    desc: "Real-time tracking, automation, and fleet management systems.",
  },
  {
    icon: <FaRocket className="text-red-500 text-3xl" />,
    title: "Startups",
    desc: "MVP development and scalable architectures for rapid growth.",
  },
  {
    icon: <FaGlobeAsia className="text-blue-500 text-3xl" />,
    title: "Other Industries",
    desc: "Custom digital solutions tailored to global industry needs.",
  },
];

export const steps = [
  {
    icon: <FaClipboardList className="text-blue-500 text-3xl" />,
    title: "1. Requirement Gathering",
    desc: "Understanding your goals, needs, and project expectations.",
  },
  {
    icon: <FaDraftingCompass className="text-yellow-400 text-3xl" />,
    title: "2. Planning & Design",
    desc: "Creating wireframes, UI/UX design, and system architecture.",
  },
  {
    icon: <FaCode className="text-green-500 text-3xl" />,
    title: "3. Development",
    desc: "Developing scalable code for frontend and backend systems.",
  },
  {
    icon: <FaVial className="text-red-500 text-3xl" />,
    title: "4. Testing & Delivery",
    desc: "Comprehensive QA testing and timely project delivery.",
  },
  {
    icon: <FaHandshake className="text-purple-500 text-3xl" />,
    title: "5. Ongoing Support",
    desc: "Post-launch support, maintenance, and future upgrades.",
  },
];
