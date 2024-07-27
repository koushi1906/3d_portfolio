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
        type: "Backend"
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend"
    },
    {
        imageUrl: kafka,
        name: "Kafka",
        type: "Backend"
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "DevOps"
    },
    {
        imageUrl: aws,
        name: "Aws",
        type: "Cloud"
    },
    {
        imageUrl: numpy,
        name: "Numpy",
        type: "Backend"
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Backend"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend"
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend"
    },
    {
        imageUrl: sql,
        name: "Sql",
        type: "Database"
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps"
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
            `Spearheaded cross functional teams to architect and integrate Ordering Replacement Portal microservice using
            C# & .Net Core, enhancing 20% scalability of Sonexus™ streamlining medication restocking for providers`,
            `Empowered efficient ordering via reusable UI component library (Atomic Design, Story Book) populated by Strapi
            for Ordering Portal using Service Oriented Architecture (SOA), boosting 25% component reusability`,
            `Architected secure RESTful APIs with Okta authentication. Developed real-time search Lambda function for
            100k+ patient PostgreSQL model, achieving 20% faster data retrieval for efficient, secure patient record access`,
            `Implemented Splunk for log writing and user click monitoring, ingested JSON data and server-side enrichment to
            analyze user behavior patterns. Drove development of accurate patient order filtering with TDD and Jest`,
            `Agile development: Championed user needs in Agile ceremonies (standups, sprint planning) by collaborating
            with cross-functional teams to translate wireframes/mockups into user stories`
        ],
    },
    {
        title: "Software Developer",
        company_name: "Infodat Inc",
        icon: meta,
        iconBg: "white",
        date: "Jan 2020 - Dec 2021",
        points: [
            `Automated user rating process by developing a responsive Single-page Application (SPA) using React & Redux, integrated within an enterprise application. This resulted in driving 25% increase in projected sales growth`,
            `Streamlined user sign-in by implementing Single Sign-On (SSO) using Microsoft Authentication Library ( MSAL) and OAuth, achieving a 66% reduction in average sign-in time (from 30 seconds to 10 seconds)`,
            `Developed a Reusable Data Fetching Pattern with Axios & React Hooks for High-Volume Backend Communication, mastered Docker, Network protocols, design patterns expanding skill set by 50%`,
            `Managed a complex bug fix initiative, successfully identifying and resolving intermittent crashes in a critical appli-
            cation, resulting in an 80% reduction in crash occurrences within the first week after implementation,
            `,
            `Pioneered containerization of Node.js application by configuring Docker images, automated CI/CD pipelines with
            Terraform files and YAML configuration in Azure DevOps reducing deployment time by 20%. Additionally, this
            initiative helped eliminate $10k in unnecessary costs`,
            ` Azure DevOps & Git: Utilized Azure DevOps for managing user stories, facilitating code reviews with Git integration, and streamlining CI/CD pipeline`

        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a full stack application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://find-a-house.onrender.com',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'To-DO App',
        description: 'Developed a Todo app which enables users to create Todo list and perform crud operations on them.',
        link: 'https://github.com/koushi1906/mean_crud',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Meme Generator',
        description: 'Designed a Meme generator which randomly generates a meme image and its description',
        link: 'https://github.com/koushi1906/Meme_Generator',
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
        theme: 'btn-back-pink',
        name: 'Full Stack Social-Media Clone',
        description: 'Built a complete clone of social media app, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/koushi1906/social',
    },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];