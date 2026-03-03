import { motion } from "framer-motion";
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

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-3xl font-thin tracking-tight mt-[-6rem] lg:mt-16 lg:text-6xl"
            >
              Omkar Madchetti LLP
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 via-slate-400 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              I am an aspiring Web Developer with a strong interest in
              technology and web development innovation, and I work to create
              scalable, reliable web apps. My experience in technology has given
              me a variety of proficiency in both front-end and back-end
              development, allowing me to address problems from several
              perspectives and produce smooth experiences for users. To broaden
              my skill set, I frequently enroll in online courses, keep up with
              the most recent developments in the field, and experiment with new
              technologies.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-[-8rem] lg:ml-16">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile}
              alt="Omkar Madchetti"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
