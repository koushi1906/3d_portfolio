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
        date: "July 2023 - Present",
        points: [
            "Optimized Microsoft Outlook CRM UI with Yeoman-generated dashboard, task pane, achieving 100% workflow integration improvement.",
            "Utilized React JS, React Hooks, React Routing, Redux Toolkit for efficient data management, resulting improved website engagement, reduced performance overhead by 15%.",
            "Implemented Maven, Docker for continuous build integration, leading to 25% reduction in deployment errors, significantly improving reliability, stability of development process.",
            "Designed and deployed robust REST APIs using Java, Node Js, Spring Boot, contributing to 30% enhancement in application performance.",
            "Applied agile methodologies to enhance team productivity, leading to 20% reduction in development cycle time, 10% increase in feature quality."
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Infodat Inc",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "May 2022 - July 2023",
        points: [
            "Developed responsive UI components, layouts using React, ensuring optimal performance across diverse range of devices, screen sizes.",
            "Enhanced website loading speed by 40% through code optimization, image compression, resulting 15% decrease in bounce rate.",
            "Configured Spring Security for varied resource access permissions, integrated OAuth 2 Single Sign-On (SSO) for seamless social login via Google and Facebook, leading 25% enhancement in security.",
            "Established RESTful APIs with Spring, leveraging Spring Data REST for seamless component communication, integrated Spring Data MongoDB with Spring Hibernate, yielding 20% improvement in data retrieval, persistence efficiency within NoSQL MongoDB environment.",


        ],
    },
    {
        title: "Software Developer",
        company_name: "C3 Solutions",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2020 - Dec 2021",
        points: [
            "Showcased proficiency in creating, maintaining REST APIs and microservices to streamline data exchange between applications using Java, Spring, Spring Boot.",
            "Optimized database queries and implemented caching mechanisms, resulting 50% decrease in database response time, significantly improved system performance.",
            "Utilized version control systems such as Git, platforms like GitHub, GitLab to track changes, manage code repositories, resulting 25% increase in team productivity.",
            "Proven versatility in diverse work environments, swiftly adjusting to changes, actively pursuing continuous learning, enhancing task efficiency."

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