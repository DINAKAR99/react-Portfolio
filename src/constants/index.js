import {
  developer,
  logo,
  engineer,
  design,
  content,
  web,
  github,
  menu,
  close,
  vic,
  cloudview,
  cosider,
  portfolio,
  ecommerce,
  bicyx,
  cominox,
  facereco,
  thisportfolio,
  magnimarket,
  recoded,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Development",
    icon: web, // Represents front-end + back-end work
  },
  {
    title: "API Development with Spring Boot",
    icon: design, // Use an appropriate icon for back-end/API
  },
  {
    title: "Frontend Development (React)",
    icon: engineer, // A React or code icon
  },
  {
    title: "Database Management (PostgreSQL)",
    icon: content, // Use a database icon
  },
];


const experiences = [
  {
    title: "Frontend Web Developer (BootCamp)",
    company_name: "RE:CODED",
    icon: recoded,
    iconBg: "#ffff",
    date: "June 2023 - December 2023",
    points: [
      "Completed RE:CODED Frontend Web Development Bootcamp, acquiring expertise in HTML, CSS, JavaScript, React, and Next.js.",
      "Proficient in building responsive web designs and interactive web applications, with real-world project experience in Next.js.",
      "Committed to continuous learning and ready to create exceptional user experiences while contributing effectively to web development projects.",
    ],
  },

];

const Certifications = [
  {
    Certificate: "Green Digital SKills",
    name: "Inco Academy",
    date: "May 2023",
    link: "https://drive.google.com/file/d/1GaR-CJ8OXFe4sPWjxGUg1Ztr0RzlCxDN/view",
    image:
      "https://media.licdn.com/dms/image/C4D0BAQFMt84PE2XTZQ/company-logo_100_100/0/1632400265497?e=1691625600&v=beta&t=5t55NYl8pmI7gr-o6GZS1R5uSGJcBcTTWjM-0au9kOQ",
  },
  {
    Certificate: "MongoDB CRUD Operations in Node.js",
    name: "MongoDB",
    date: "Feb 2023",
    link: "https://learn.mongodb.com/c/WqJcVWwYR6myENF1Ldjwlw",
    image:
      "https://media.licdn.com/dms/image/C4D0BAQFKe8PwqzyHyA/company-logo_100_100/0/1635171226731?e=1691625600&v=beta&t=-fzlqJNxC9xq3APXdGZiU6WBu3A8UGckNWFTh8jQy-8",
  },
  {
    Certificate: "Engineer Data in Google Cloud",
    name: "Google",
    date: "Nov 2021",
    link: "https://www.cloudskillsboost.google/public_profiles/97bd06de-1b77-4092-bca1-761de2051cef/badges/1547971",
    image:
      "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1691625600&v=beta&t=ojOlRYJ5Vr9-mUwtTZESChd4QFw4Mu6EkTNPkfCvSXg",
  },
  {
    Certificate: "Neural Networks and Deep Learning",
    name: "Coursera",
    date: "Oct 2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/AW3VG2GBU3AV",
    image:
      "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1691625600&v=beta&t=wn0qr7AHO97oXKDx-DyyNcdnUJHzGcOgQtR6qU9f55Q",
  },
  {
    Certificate: "Initiating and Planning Projects",
    name: "Coursera",
    date: "Aug 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/5EKE5VQY88MC",
    image:
      "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1691625600&v=beta&t=wn0qr7AHO97oXKDx-DyyNcdnUJHzGcOgQtR6qU9f55Q",
  },
  {
    Certificate: "Short Term Mine Planning",
    name: "Afrimine",
    date: "Aug 2020",
    link: "https://drive.google.com/file/d/1l04_q8Jtj6XJDlzlNCgJmy1ldr_9EFZG/view",
    image:
      "https://media.licdn.com/dms/image/C4E0BAQGLsnVD_VQqcw/company-logo_100_100/0/1638391643154?e=1691625600&v=beta&t=5OiVrzQP_bpPXnMlyf94fiEEWuzwwS9mUCbfTAaCyo8",
  },
];

const projects = [
    {
    name: "Dynamic Ticketing System",
    description:
      "Developed a scalable and reusable ticketing system using Spring Boot and PostgreSQL, designed as a plug-and-play solution for multiple projects within our company. The system enables efficient issue tracking, assignment, and resolution, and can be seamlessly integrated into any project by simply configuring database credentials. Built with a focus on modularity and maintainability, it functions as an internal product to streamline project-level support and operations.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: bicyx,
    source_code_link: "",
    project: "https://ticketingsystem.cgg.gov.in/DynamicTicketingSystem/projectSwitch?project=tgmiv",
  },
  {
    name: "React.js, Firebase and Axios-Powered Trading Journal platform ",
    description:
      "Designed and developed a Trading Journal platform using React.js, Firebase, and Axios, emphasizing responsive design, real-time functionality, and effective teamwork via GitHub.",
    tags: [
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      // {
      //   name: "tailwind",
      //   color: "blue-text-gradient",
      // },
    ],
    image: magnimarket,
    source_code_link:
      "https://github.com/DINAKAR99/tradejournal",
    project:
      "https://journalx.pages.dev/",
  },
  {
    name: "Internal Quiz & Assessment Platform Developed Using React.js and Firebase",
    description:
      " Developed the project for the internal assement of employees for the latest technologies  showcasing my front-end development skills.",
    tags: [
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/0m3ga13/Ecommerce-Website",
    project: "https://brainybits.pages.dev/",
  },


];

export { services, experiences, Certifications, projects };
