import { motion } from "framer-motion";
import { IMAGES } from "../assets/image";
import { SiMysql, SiRedis, SiApachekafka, SiPostgresql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const SkillItem = ({ children, duration, delay = 0 }) => (
  <motion.div
    whileInView={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.7 }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.1, rotate: 5, zIndex: 10 }}
    className="p-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800/60 transition-colors cursor-pointer shadow-sm hover:shadow-purple-500/20"
  >
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center"
    >
      {children}
    </motion.div>
  </motion.div>
);

const Label = ({ children, className = "" }) => (
  <p className={`text-center text-xs mt-2 font-semibold ${className}`}>
    {children}
  </p>
);

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills &amp; <span className="text-neutral-500">Technologies</span>
      </motion.h1>

      {/* ── Backend ── */}
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.6 }}
        className="text-center text-xl text-neutral-400 mb-6 tracking-widest uppercase"
      >
        Backend
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-2 mb-12"
      >
        <SkillItem duration={3} delay={0.05}>
          <img src={IMAGES.NODE} alt="nodejs" className="w-16" />
          <Label className="text-green-400">Node.js</Label>
        </SkillItem>
        <SkillItem duration={2.5} delay={0.1}>
          <img src={IMAGES.EXPRESS} alt="expressjs" className="w-16" />
          <Label className="text-stone-400">Express.js</Label>
        </SkillItem>
        <SkillItem duration={2} delay={0.15}>
          <SiRedis className="text-6xl text-red-500" />
          <Label className="text-red-400">Redis</Label>
        </SkillItem>
        <SkillItem duration={3.5} delay={0.2}>
          <SiApachekafka className="text-6xl text-neutral-200" />
          <Label className="text-neutral-300">Kafka</Label>
        </SkillItem>
        <SkillItem duration={4} delay={0.25}>
          <img src={IMAGES.JS} alt="javascript" className="w-16" />
          <Label className="text-yellow-400">JavaScript</Label>
        </SkillItem>
      </motion.div>

      {/* ── Databases ── */}
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 60 }}
        transition={{ duration: 0.6 }}
        className="text-center text-xl text-neutral-400 mb-6 tracking-widest uppercase"
      >
        Databases
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-2 mb-12"
      >
        <SkillItem duration={4} delay={0.05}>
          <img src={IMAGES.MONGODB} alt="mongodb" className="w-16" />
          <Label className="bg-gradient-to-r from-green-400 to-yellow-800 bg-clip-text text-transparent">
            MongoDB
          </Label>
        </SkillItem>
        <SkillItem duration={2.5} delay={0.1}>
          <img src={IMAGES.MONGOOSE} alt="mongoose" className="w-16 mt-0" />
          <Label className="text-red-500">Mongoose</Label>
        </SkillItem>
        <SkillItem duration={3} delay={0.15}>
          <SiPostgresql className="text-6xl text-blue-400" />
          <Label className="text-blue-400">PostgreSQL</Label>
        </SkillItem>
        <SkillItem duration={2} delay={0.2}>
          <SiMysql className="text-6xl mt-[0.7rem] text-blue-600" />
          <Label className="text-blue-600">
            My<span className="text-orange-400">SQL</span>
          </Label>
        </SkillItem>
      </motion.div>

      {/* ── Frontend ── */}
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.6 }}
        className="text-center text-xl text-neutral-400 mb-6 tracking-widest uppercase"
      >
        Frontend
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-2 mb-12"
      >
        <SkillItem duration={2} delay={0.05}>
          <img src={IMAGES.REACT} alt="reactjs" className="w-16" />
          <Label className="text-cyan-300">React.js</Label>
        </SkillItem>
        <SkillItem duration={2.8} delay={0.1}>
          <TbBrandReactNative className="text-6xl text-cyan-400" />
          <Label className="text-cyan-400">React Native</Label>
        </SkillItem>
        <SkillItem duration={5} delay={0.15}>
          <img src={IMAGES.TAILWIND} alt="tailwind" className="w-16" />
          <Label className="text-cyan-400">Tailwind</Label>
        </SkillItem>
        <SkillItem duration={1.8} delay={0.2}>
          <img src={IMAGES.CSS} alt="css" className="w-16" />
          <Label className="text-cyan-400">CSS</Label>
        </SkillItem>
        <SkillItem duration={3} delay={0.25}>
          <img src={IMAGES.HTML} alt="html" className="w-16" />
          <Label className="text-orange-500">HTML</Label>
        </SkillItem>
        <SkillItem duration={3} delay={0.3}>
          <img src={IMAGES.MATIRIALUI} alt="materialui" className="w-16 h-16" />
          <Label className="text-cyan-400">Material UI</Label>
        </SkillItem>
        <SkillItem duration={1.5} delay={0.35}>
          <DiJqueryLogo className="text-7xl mt-[-0.5rem] text-cyan-400" />
          <Label className="text-cyan-400">jQuery</Label>
        </SkillItem>
      </motion.div>

      {/* ── Tools ── */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Tools &amp; <span className="text-neutral-500">Software</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <SkillItem duration={2.5} delay={0.05}>
          <img src={IMAGES.VSCODE} alt="vscode" className="w-16" />
          <Label className="text-cyan-400">VS Code</Label>
        </SkillItem>
        <SkillItem duration={4} delay={0.1}>
          <img src={IMAGES.CHROME} alt="chrome" className="w-16" />
          <Label className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            Chrome
          </Label>
        </SkillItem>
        <SkillItem duration={1.5} delay={0.15}>
          <img src={IMAGES.MONGODB_COMPASS} alt="mongodbCompass" className="w-16" />
          <Label className="text-green-400">
            Compass
          </Label>
        </SkillItem>
        <SkillItem duration={3} delay={0.2}>
          <img src={IMAGES.POSTMAN} alt="postman" className="w-16" />
          <Label className="text-orange-400">Postman</Label>
        </SkillItem>
        <SkillItem duration={5} delay={0.25}>
          <img src={IMAGES.GIT} alt="git" className="w-16" />
          <Label className="text-orange-500">Git</Label>
        </SkillItem>
        <SkillItem duration={2.5} delay={0.3}>
          <img src={IMAGES.GITHUB} alt="github" className="w-16" />
          <Label className="text-white">GitHub</Label>
        </SkillItem>
        <SkillItem duration={4} delay={0.35}>
          <img src={IMAGES.DOCKER} alt="docker" className="w-16" />
          <Label className="text-cyan-500">Docker</Label>
        </SkillItem>
        <SkillItem duration={3.5} delay={0.4}>
          <FaJava className="text-7xl text-red-800" />
          <Label className="text-red-600">Core Java</Label>
        </SkillItem>
      </motion.div>
    </div>
  );
}
