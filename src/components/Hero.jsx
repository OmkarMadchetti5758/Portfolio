import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "/profile3.png";

const container = (delay) => ({
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay,
    },
  },
});

const roles = [
  "Backend Developer",
  "Node.js Developer",
  "API Architect",
  "Full-Stack Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      // Still typing
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 90);
    } else if (!isDeleting && charIndex === current.length) {
      // Fully typed — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && charIndex > 0) {
      // Still deleting
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      // Fully deleted — switch to next role, reset index
      setIsDeleting(false);
      setCharIndex(0);
      setDisplayed("");
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);


  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-3xl font-thin tracking-tight mt-[-6rem] lg:mt-16 lg:text-6xl"
            >
              Omkar Madchetti
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="h-10 flex items-center mb-2"
            >
              <span className="bg-gradient-to-r from-pink-500 via-slate-400 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                {displayed}
              </span>
              <span className="ml-0.5 inline-block w-0.5 h-6 bg-purple-400 animate-pulse" />
            </motion.div>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              Backend-focused developer with{" "}
              <span className="text-purple-400 font-medium">10+ months</span> of
              hands-on experience building scalable SaaS applications using{" "}
              <span className="text-cyan-400 font-medium">
                Node.js, Express.js, PostgreSQL
              </span>{" "}
              and <span className="text-cyan-400 font-medium">MongoDB</span>.
              Strong in REST API design, JWT &amp; RBAC authentication,
              multi-tenant architectures, and database optimization. Experienced
              in Agile teams, production deployments, and delivering secure,
              performance-optimized backend services.
            </motion.p>

          </div>
        </div>

        <div className="w-full lg:w-1/3 lg:p-[-8rem] lg:ml-20">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, -15, 0],
              }}
              transition={{
                x: { duration: 1, delay: 1.2 },
                opacity: { duration: 1, delay: 1.2 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.2,
                },
              }}
              src={profile}
              alt="Omkar Madchetti"
              className="drop-shadow-2xl hover:grayscale-0 transition-all duration-500 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
