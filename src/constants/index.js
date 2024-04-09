import { meta, shopify, starbucks, tesla } from "../assets/images";
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
        title: "Full Stack Developer",
        company_name: "InfoDat Inc",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "May 2022 - Present",
        points: [
            `Spearheaded a 7 member team, facilitating sprint planning, code reviews, brainstorming sessions in automating user
            rating process by developing end-to-end web application contributing to a 25% increase in projected sales growth`,
            `Engineered responsive taskpane user interface (UI) of SaaS based industrial sales CRM serving 5000+ active users,
            lowered average login time from 30 to 10 sec integrating Single sign-on (SSO) with MSAL for seamless access to
            Microsoft Graph API significantly improving user experience (UX) across the platform`,
            `Transformed project styling by seamlessly integrating Tailwind CSS, Sass, yielding a 30% increase in development
            eﬀiciency through custom themes for unique design expressions`,
            `Orchestrated Microservice architecture to construct independent components utilizing Spring Framework, Java 17`,
            `Streamlined CRUD operations within a React-based application by optimizing bulk data insertions through
            GraphQL mutations ensuring 33% increase in API response time for data manipulation of admin dashboard`,
            `Leveraged Azure Devops and Git for version control to optimize collaboration and eﬀiciency, resulting in a 20%
            increase in team productivity.`,
            `Collaborated with cross-functional teams including UX designers, Product Managers, QA Tester’s, to craft innovative
            system design and development solutions catering diverse business needs following Agile Methodology`
        ],
    },
    {
        title: "Associate Software Engineer",
        company_name: "C3 Solutions",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2020 - Dec 2021",
        points: [
            `Elevated page loading speed by 15% upgrading a cross-browser compatible Angular solution from version 12 to 14`,
            `Translated MVC architected web codebase to layered architecture leveraging Spring Boot creating 50+ robust
            RESTful API’s for payment processing improving scalability & security`,
            `Engineered Dockerfile configurations to streamline the containerization process, slashing build time by 50%`,
            `Managed a complex bug fix initiative, successfully identifying and resolving intermittent crashes in a critical appli-
            cation, resulting in an 80% reduction in crash occurrences within the first week after implementation,
            `,
            `Embraced Test-Driven Deployment(TDD) methodology, crafting unit test cases using Junit, Jest`

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