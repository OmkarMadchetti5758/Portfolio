import { IMAGES } from '../assets/image'

export const PROJECTS = [
    {
        title: "Book Store Application",
        image: IMAGES.BOOKSTORE,
        description: "A full-featured web-based bookstore with authentication, role-based access, order management, admin operations, and MongoDB schemas with Mongoose validations and indexing.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Sendgrid"],
        visit: "https://bookstore-ta4r.onrender.com/",
        github: "https://github.com/OmkarMadchetti5758/BookStore",
        duration: "Oct 2024 – Dec 2024",
    },
    {
        title: "Travel Destination Platform",
        image: IMAGES.TRAVEL_DEST,
        description: "A fully functional travel destination website with JWT-secured REST APIs, full CRUD functionality, user authentication flows. Backend deployed on Render, frontend on Netlify.",
        technologies: ["React.js", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        visit: "https://traveldest.netlify.app/",
        github: "https://github.com/OmkarMadchetti5758/MERN-Travel-Destination",
        duration: "Jun 2024 – Aug 2024",
    },
    {
        title: "Mental Health Platform (Students)",
        image: IMAGES.MENTAL_HEALTH,
        description: "JWT-secured backend REST APIs with role-based access control for students and counselors. Real-time anonymous peer support chat using Socket.IO with scalable MongoDB schemas.",
        technologies: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
        github: "https://github.com/OmkarMadchetti5758/Mental-Health-Platform",
        duration: "Nov 2025 - Dec 2025",
    },
    {
        title: "E-Village through Digital-Connectivity",
        image: IMAGES.EVILLAGE,
        description: "A website where Village panchayat can share/display information of village to the outer world",
        technologies: ["HTML", "CSS", "Js", "JQuery", "PHP", "PostgreSQL"],
        github: 'https://github.com/OmkarMadchetti5758/E-village',
        duration: "Jan 2024 - Feb 2024"
    },
    {
        title: "Tic-Tac-Toe Game",
        image: IMAGES.TIC_TAC_TOE,
        description: "A ReactJs website to play tic tac toe game",
        technologies: ["ReactJs", "TailwindCSS"],
        visit: "https://xandoplayground.netlify.app/",
        duration: "June 2024"
    },
    {
        title: "Project Management System",
        image: IMAGES.HOME_PAGE,
        description: "A user-friendly project management system. Build entirely using React",
        technologies: ["ReactJs", "Tailwind"],
        visit: "https://projectmngtsys.netlify.app/",
        github: 'https://github.com/OmkarMadchetti5758/Project-management',
        duration: "April 2024"
    },
    {
        title: "CGPA to Percentage Calculator",
        image: IMAGES.CGPA,
        description: "A ReactJs website to convert CGPA to Percentage",
        technologies: ["ReactJs", "TailwindCSS"],
        github: 'https://github.com/OmkarMadchetti5758/CGPA-to-Percentage',
        duration: "April 2024"
    },
    {
        title: "Personal Portfolio",
        image: IMAGES.PROFILE,
        description: "A Personal Portfolio website",
        technologies: ["ReactJs", "TailwindCSS", "Framer Motion"],
        visit: "https://omkarmadchetti.netlify.app/",
        github: "https://github.com/OmkarMadchetti5758/Portfolio",
        duration: 'Dec 2024 - Present'
    },
]