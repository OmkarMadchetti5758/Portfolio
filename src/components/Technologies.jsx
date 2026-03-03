import { motion } from "framer-motion";
import css from "/css.png";
import expressjs from "/expressjs.png";
import fullstack from "/fullStack.png";
import mongoose from "/mongoose.png";
import git from "/git.png";
import github from "/github.png";
import html from "/html.png";
import javascript from "/javascript.png";
import materialui from "/material-ui.png";
import mongodb from "/mongodb.png";
import mongodbCompass from "/mongodbCompass.png";
import nodejs from "/nodejs.png";
import postman from "/postman.png";
import reactjs from "/reactjs.png";
import tailwind from "/tailwind.png";
import vscode from "/vscode.png";
import chrome from "/chrome.png";
import docker from "/docker.png";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";

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

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-8"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={html} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-orange-500">
            HTML
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={css} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-cyan-400">
            CSS
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={javascript} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-yellow-400">
            Js
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <DiJqueryLogo className="text-7xl mt-[-0.5rem] text-cyan-400" />
          <h1 className="text-center text-xs mt-2 font-semibold text-cyan-400">
            JQuery
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={tailwind} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-cyan-400">
            Tailwind
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={materialui} alt="html" className="w-16 h-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-cyan-400">
            MaterialUI
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={reactjs} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-cyan-300">
            ReactJs
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={nodejs} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-green-400">
            NodeJs
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={expressjs} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-stone-400">
            ExpressJs
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={mongodb} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold bg-gradient-to-r from-green-400 to-yellow-800 bg-clip-text text-transparent">
            MongoDB
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={mongoose} alt="html" className="w-16 mt-2" />
          <h1 className="text-center text-xs mt-2 font-bold text-red-600">
            Mongoose
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiMysql className="text-6xl mt-[0.7rem] text-blue-600" />
          <h1 className="text-center text-xs mt-2 font-semibold text-blue-600">
            My<span className="text-orange-400">SQL</span>
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaJava className="text-7xl text-red-800" />
          <h1 className="text-center text-xs mt-2 font-bold text-red-600">
            Core JAVA
          </h1>
        </motion.div>
      </motion.div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tool's & Software
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={vscode} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-cyan-400">
            VS Code
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={chrome} alt="html" className="w-16" />
          <h1 className="text-center text-sm mt-2 font-semibold bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            Chrome
          </h1>
          {/* <h1 className="text-center text-sm mt-2 font-semibold"><span className="text-red-500">Ch</span><span className="text-yellow-400">ro</span><span className="text-green-500">me</span></h1> */}
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={mongodbCompass} alt="html" className="w-16 mt-4" />
          <h1 className="text-center text-xs mt-2 font-semibold text-green-400">
            MongoDB
            <br />
            Compass
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={postman} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-orange-400">
            Postman
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={git} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-orange-500">
            Git
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={github} alt="html" className="w-16" />
          <h1 className="text-center text-xs mt-2 font-semibold text-white">
            GitHub
          </h1>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <img src={docker} alt="html" className="w-16" />
          <h1 className="text-center text-sm mt-2 font-semibold text-cyan-500">
            Docker
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
}
