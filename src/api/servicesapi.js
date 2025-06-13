import {
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaProjectDiagram,
  FaRobot,
  FaMobileAlt,
} from "react-icons/fa";

export const services = [
  {
    slug: "custom-software-development",
    icon: <FaCode className="text-blue-500 text-3xl" />,
    title: "Custom Software Development",
    desc: "Tailored software solutions built for your business workflows and logic.",
    content: `
We design and develop custom software that fits your specific business needs—whether it's internal tools, enterprise apps, or complex systems. Our team works closely with stakeholders to automate processes, reduce manual tasks, and increase productivity with scalable, robust solutions.
    `,
  },
  {
    slug: "business-website-development",
    icon: <FaLaptopCode className="text-green-500 text-3xl" />,
    title: "Business Website Development",
    desc: "SEO-optimized and mobile-friendly websites that boost brand trust and visibility.",
    content: `
Your website is often your first impression—make it count. We create sleek, fast, and mobile-responsive websites that rank well on search engines and convert visitors into customers. Whether you're a startup or an enterprise, we align design with business goals.
    `,
  },
  {
    slug: "saas-tools-dashboards",
    icon: <FaProjectDiagram className="text-purple-500 text-3xl" />,
    title: "SaaS Tools & Dashboards",
    desc: "Scalable SaaS platforms and analytics dashboards with real-time insights.",
    content: `
We build custom SaaS platforms, internal tools, and performance dashboards tailored for real-time reporting and user control. Whether it’s subscription billing, user management, or analytics — we’ve got the architecture, security, and UX covered.
    `,
  },
  {
    slug: "automation-and-integration",
    icon: <FaCogs className="text-yellow-500 text-3xl" />,
    title: "Automation & System Integration",
    desc: "Automate workflows with APIs and integrate third-party tools seamlessly.",
    content: `
Manual tasks are expensive. We help automate your workflows by integrating APIs, CRMs, payment gateways, and cloud services. Reduce errors, improve efficiency, and scale your systems with smart automation and backend orchestration.
    `,
  },
  {
    slug: "ai-tools-and-solutions",
    icon: <FaRobot className="text-red-500 text-3xl" />,
    title: "AI-Powered Tools & Solutions",
    desc: "Smart AI solutions including chatbots, automation, and recommendation engines.",
    content: `
From AI chatbots to intelligent search and custom machine learning models, we provide AI solutions that help businesses streamline tasks, personalize experiences, and unlock new capabilities. We use NLP, vision, and LLMs to solve real-world problems.
    `,
  },
  {
    slug: "mobile-app-development",
    icon: <FaMobileAlt className="text-indigo-500 text-3xl" />,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps built for performance and user experience.",
    content: `
We create modern mobile apps using React Native and Flutter that run smoothly on both iOS and Android. With intuitive UX/UI, offline support, and performance optimization, we help launch apps that users love to download—and keep using.
    `,
  },
];
