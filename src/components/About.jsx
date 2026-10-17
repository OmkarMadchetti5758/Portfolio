import { motion } from "framer-motion";
import { IMAGES } from "../assets/image";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 mt-10"
        >
          <div className="flex items-center justify-center">
            <img
              src={IMAGES.OMKAR}
              alt="Omkar Madchetti"
              className="rounded-full w-80 lg:mt-4"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-center lg:text-left leading-relaxed">
              I am{" "}
              <span className="text-orange-300 font-bold">Omkar Madchetti</span>
              , a software engineer passionate about building scalable, secure
              SaaS systems. With{" "}
              <span className="text-purple-400 font-semibold">
                1+ year of professional experience
              </span>
              , I specialize in{" "}
              <span className="text-cyan-400 font-semibold">
                Node.js, Express.js
              </span>
              , and RESTful API design, with deep expertise in{" "}
              <span className="text-cyan-400 font-semibold">
                JWT, RBAC, and multi-tenant architectures
              </span>
              . I'm also proficient in{" "}
              <span className="text-cyan-300 font-semibold">Core Java</span> and
              OOP principles.
              <br />
              <br />
              On the database side, I work with{" "}
              <span className="text-green-400 font-semibold">
                PostgreSQL
              </span>{" "}
              and <span className="text-green-400 font-semibold">MongoDB</span>,
              optimizing queries and schemas for performance. At E-Sutra
              Technologies, I built modular APIs that improved query performance
              by 25%. At NDSoftTech Solutions, I worked on a MERN-based HR
              portal with face-recognition attendance, geo-fencing, and secure
              document workflows. I also bring frontend skills in{" "}
              <span className="text-cyan-300 font-semibold">React.js</span> and
              Tailwind CSS, so I can contribute across the full stack.
              <br />
              <br />I hold an{" "}
              <span className="text-orange-300 font-semibold">
                M.Sc. in Computer Science
              </span>{" "}
              (CGPA 8.82) from Savitribai Phule Pune University. I love Agile
              collaboration, production deployments, and turning complex
              problems into clean, maintainable solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
