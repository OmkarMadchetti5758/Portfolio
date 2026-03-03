import { PROJECTS } from "../utils/projects.js";
import { motion } from "framer-motion";
import { FaLocationArrow, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        My <span className="text-neutral-500">Projects</span>
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            className="mb-12 flex flex-wrap lg:justify-center p-4 rounded-2xl transition-shadow hover:shadow-xl hover:bg-neutral-900/50 backdrop-blur-sm border border-transparent hover:border-neutral-800"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full lg:w-1/4"
            >
              {project.image ? (
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded-2xl shadow-lg"
                />
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-6 w-[150px] h-[150px] rounded-2xl border border-neutral-700 bg-neutral-900 flex items-center justify-center shadow-lg"
                >
                  <span className="text-4xl">💻</span>
                </motion.div>
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <motion.h5
                  whileHover={{ x: 5 }}
                  className="font-semibold text-xl text-neutral-100"
                >
                  {project.title}
                </motion.h5>
                {project.duration && (
                  <span className="text-xs text-neutral-500 font-medium">
                    {project.duration}
                  </span>
                )}
              </div>
              <p className="mb-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                {project.visit && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    href={project.visit}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-1.5 text-sm font-medium text-green-400 hover:bg-slate-700 transition-colors border border-green-900/30"
                  >
                    Live Preview
                    <FaLocationArrow className="text-xs" />
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    href={project.github}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-1.5 text-sm font-medium text-white hover:bg-slate-700 transition-colors border border-neutral-700/30"
                  >
                    Source Code
                    <FaGithub className="text-xs" />
                  </motion.a>
                )}
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-wrap gap-2"
              >
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="rounded bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-purple-400 border border-purple-900/20 shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
