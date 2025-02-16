import { starbucks} from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
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
        imageUrl: nextjs,
        name: "Next.js",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        link: '',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/diya-shah-5a09a9255/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        iconBg: '#ff0000', // Add missing iconBg
        date: '2023', // Add missing date
        theme: 'btn-back-red',
        name: 'Mudberry Studio',
        description: [
            'Website for a local business for Google Winter of Code - Winner among 40 participating teams.',
            'Currently being used by the client.',
            'Built using HTML, CSS, and JavaScript.',
        ],
        link: 'https://mudberrystudios.vercel.app/',
    },
    {
        iconUrl: threads,
        iconBg: '#00ff00',
        date: '2022',
        theme: 'btn-back-green',
        name: 'Nomads Quest',
        description: [
            'Travel and adventure website for NEXUS competition.',
            'Built using HTML, Tailwind CSS, and JavaScript.',
        ],
    },
    {
        iconUrl: car,
        iconBg: '#0000ff',
        date: '2021',
        theme: 'btn-back-blue',
        name: 'Food Delivery System',
        description: [
            'As part of the Database Management Course.',
            'Built using SQL, integrating restaurants, delivery, and users.',
        ],
    },
    {
        iconUrl: snapgram,
        iconBg: '#ff00ff',
        date: '2020',
        theme: 'btn-back-pink',
        name: 'Social Media Management System',
        description: [
            'As part of the OOP Course.',
            'Developed in C++ with user authentication and backend for posts, likes, and followers.',
        ],
    },
];
