import evillage from '/evillage.jpg'
import tictactoe from '/tic-tac-toe.png'
import travel_dest from '/travel-destination.jpg'
import cgpa_calc from '/cgpa-calculator.webp'
import portfolio from '/profile.jpg'
import home_page from '/home_page.jpg'
import BookStoreImage from '/BookStoreImage.jpg'
export const PROJECTS = [
    {
        title: "E-Village through Digital-Connectivity",
        image: evillage,
        description: "A website where Village panchayat can share/display information of village to the outer world",
        technologies: ["HTML", "CSS", "Js", "JQuery", "PHP", "PostgreSQL"],
    },
    {
        title: "Tic-Tac-Toe Game",
        image: tictactoe,
        description: "A ReactJs website to play tic tac toe game",
        technologies: ["ReactJs", "TailwindCSS"],
        visit: "https://xandoplayground.netlify.app/"
    },
    {
        title: "Travel Destination",
        image: travel_dest,
        description: "A fully functional travel destination website where users can share/suggest their favourite places to travel with features like CRUD operation, and user Authentication",
        technologies: ["ReactJs", "Tailwind", "NodeJs", "ExpressJs", "MongoDB"],
        visit: "https://traveldest.netlify.app/"
    },
    {
        title: "Project Management System",
        image: home_page,
        description: "A user-friendly project management system. Build entirely using React",
        technologies: ["ReactJs", "Tailwind"],
        visit: "https://projectmngtsys.netlify.app/"
    },
    {
        title: "Book Store System",
        image: BookStoreImage,
        description: "A web-based platform to purchase books online with features like shopping cart, checkout page.",
        technologies: ["NodeJs", "ExpressJs", "EJS", "MongoDB", "Sendgrid"],
        visit: "https://bookstore-ta4r.onrender.com/"
    },
    {
        title: "CGPA to Percentage Calculator",
        image: cgpa_calc,
        description: "A ReactJs website to convert CGPA to Percentage",
        technologies: ["ReactJs", "TailwindCSS"]
    },
    {
        title: "Personal Portfolio",
        image: portfolio,
        description: "A Personal Portfolio website",
        technologies: ["ReactJs", "TailwindCSS", "Framer Motion"],
        visit: "https://omkarmadchetti.netlify.app/"
    },
]