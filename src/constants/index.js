import { meta, shopify, cardinal, tesla } from "../assets/images";
import {
  angular,
  aws,
  car,
  contact,
  css,
  docker,
  estate,
  express,
  git,
  github,
  html,
  java,
  javascript,
  kafka,
  kubernetes,
  linkedin,
  mongodb,
  motion,
  mui,
  nodejs,
  numpy,
  pandas,
  pricewise,
  python,
  react,
  redux,
  sass,
  snapgram,
  spring,
  sql,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: spring,
    name: "Spring",
    type: "Backend",
  },
  {
    imageUrl: kafka,
    name: "Kafka",
    type: "Backend",
  },
  {
    imageUrl: kubernetes,
    name: "Kubernetes",
    type: "DevOps",
  },
  {
    imageUrl: aws,
    name: "Aws",
    type: "Cloud",
  },
  {
    imageUrl: numpy,
    name: "Numpy",
    type: "Backend",
  },
  {
    imageUrl: pandas,
    name: "Pandas",
    type: "Backend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: sql,
    name: "Sql",
    type: "Database",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Cardinal Health",
    icon: cardinal,
    iconBg: "white",
    date: "May 2022 - Present",
    points: [
      ` Architected and enhanced 3 critical features (Invoice, Order Tracking, and Account Management) using a layered
architecture, enabling improved scalability and maintainability of Sonexus™ Access and Patient Support`,
      `Enhanced accessibility by writing semantic HTML and developing an admin dashboard with Angular 16, Material UI,
and Sass, following WCAG 2.1 guidelines, achieving AA conformance and increasing user engagement by 40%`,
      `Collaborated with a backend developer to design and integrate GraphQL queries and mutations optimizing patient
filtering and pagination for User service, reducing Time to Interactive (TTI) by 6 points`,
      `Developed Node.js GCP function triggering automated overdue medication delivery notifications every 4 hours`,
      `Agile development: Championed user needs in Agile ceremonies (standups, sprint planning) by collaborating
            with cross-functional teams to translate wireframes/mockups into user stories`,
    ],
  },
  {
    title: "Software Developer",
    company_name: "Infodat Inc",
    icon: meta,
    iconBg: "white",
    date: "Jan 2020 - Dec 2021",
    points: [
      `Co-developed a single-page application(SPA) using React & Redux, reducing manual forecasting by 40 hours/month`,
      `Created Typescript interfaces, wrote unit tests using Jest for User Rating component achieving 90% code coverage`,
      `Integrated a high-volume Flask API serving over 1000 requests/day with Spring Boot application using Feign client`,
      `Automated 20 GB daily transfer data to S3 with AWS Lambda, achieving 5x data storage scalability improvement`,
      `Formulated and executed a seamless database migration solution for the application, facilitating effortless data
transfer from various sources to Microsoft SQL Server`,
      ` Azure DevOps & Git: Utilized Azure DevOps for managing user stories, facilitating code reviews with Git integration, and streamlining CI/CD pipeline`,
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a full stack application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://find-a-house.onrender.com",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "To-DO App",
    description:
      "Developed a Todo app which enables users to create Todo list and perform crud operations on them.",
    link: "https://github.com/koushi1906/mean_crud",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Meme Generator",
    description:
      "Designed a Meme generator which randomly generates a meme image and its description",
    link: "https://github.com/koushi1906/Meme_Generator",
  },
  // {
  //     iconUrl: car,
  //     theme: 'btn-back-blue',
  //     name: 'Car Finding App',
  //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
  //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  // },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Social-Media Clone",
    description:
      "Built a complete clone of social media app, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/koushi1906/social",
  },
  // {
  //     iconUrl: summiz,
  //     theme: 'btn-back-yellow',
  //     name: 'AI Summarizer Application',
  //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
  //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  // }
];
