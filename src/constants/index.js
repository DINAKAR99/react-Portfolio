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
  boiler,
  tgrow,
  miv,
  worklog,
  url,
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
    id: "leetcode",
    title: "Leetcode",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    type: "external",
    url: "resume/resume_new.pdf"
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
    title: "Full-Stack Developer",
    company_name: "CGG",
    icon: recoded, // You can replace this with CGG's logo if available
    iconBg: "#ffffff",
    date: "July 2023 – Present",
    points: [
      "Developed and maintained enterprise-level web applications using React for the frontend and Spring Boot for the backend.",
      "Worked on PostgreSQL for designing and optimizing complex database schemas, ensuring high performance and data integrity.",
      "Played a key role in the development of various projects, integrating secure API development practices.",
      "Collaborated with cross-functional teams to deliver scalable and maintainable features, following Agile and CI/CD methodologies.",
      "Contributed to internal tooling and reusable modules to accelerate development across multiple projects within the organization."
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
  {
    name: "QuickURL",
    description:
      "  Built a full-stack URL Shortener application (similar to Bitly) that allows users to generate compact, trackable short links for long URLs.showcase hands-on skills in frontend development and API integration.Implemented a clean, responsive React.js UI, with validation, toast notifications, and instant link generation. ",
    tags: [
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "pink-text-gradient",
      },
    ],
    image: url,
    source_code_link: "https://github.com/DINAKAR99/shortengine",
    project: "#",
  }


];
const workprojects = [
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
    name: "Worklog Tracker",
    description:
      "Developed a full-stack Worklog Tracker application to help employees log their daily work hours, manage tasks, and generate detailed reports. The frontend was built using React.js for a responsive and interactive user experience, while the backend leveraged Spring Boot with RESTful APIs for efficient task and time data management. Implemented secure JWT-based authentication, role-based access controls, and integrated report generation features (PDF/Excel) for both employees and managers. ",
    tags: [
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Springboot",
        color: "pink-text-gradient",
      },
    ],
    image: worklog,
    source_code_link: "https://github.com/DINAKAR99/Logmanager",
    project: "https://worklog-tracker.pages.dev/",
  },
    {
    name: "TG-Right Of Way",
    description:
      "Contributed to the development and enhancement of the official Right of Way (RoW) portal for the Telangana State Government, facilitating seamless application and approval workflows for telecom infrastructure like fiber lines and towers.",
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
    image:  tgrow,
    source_code_link: "#",
    project: "https://tg-rightofway.cgg.gov.in/",
  },
  {
    name: "Department of Boilers ",
    description:
      "Worked on the Boiler Registration and Inspection Management System for Telangana’s Department of Boilers — streamlining inspection, registration, renewal, and approval processes for industrial boilers across the state.",
    tags: [
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Spring MVC",
        color: "pink-text-gradient",
      },
      // {
      //   name: "tailwind",
      //   color: "blue-text-gradient",
      // },
    ],
    image:  boiler,
    source_code_link:
      "#",
    project:
      "https://tgboilers.cgg.gov.in/home.do",
  },
  {
    name: "MIV(Sand Taxi)",
    description:
      "Worked on  core modules for the TGMIV, a logistics-style platform inspired by the Sand Taxi model, aimed at managing the transportation, allocation, and monitoring of resources for minor irrigation works. The system enables officials to raise requests, track vehicle assignments, monitor delivery statuses, and generate work progress reports in real-time. ",
    tags: [
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "jsp",
        color: "pink-text-gradient",
      },
    ],
    image: miv,
    source_code_link: "#",
    project: "https://tgmiv.cgg.gov.in/",
  },


];

export { services, experiences, Certifications, projects, workprojects };
