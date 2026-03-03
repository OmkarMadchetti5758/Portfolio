import {motion} from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import avatar from "/avatar.png";
import about from '/profile4.png'

const container = (delay) => ({
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8, delay: delay
    }
  }
})

export default function Navbar() {
  return (
    <motion.nav 
     whileInView={{opacity: 1, x:0}}
      className="pb-12 text-3xl mb-20 flex items-center justify-between ">
      <motion.div
        variants={container(0)}
        initial="hidden"
        animate="visible" 
        className=" flex flex-row font-bold text-2xl">
        <img src={about} className="mt-[1.5rem] lg:mt-4 mx-4 w-12" alt="logo"/>
        <h1 className="mt-[2.2rem] lg:mt-[1.7rem] text-sm text-stone-300">@omkar</h1>
      </motion.div>
      <div
        className="m-8 mt-12 flex items-center justify-center gap-5">
        <motion.a
          initial={{x: 500, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{ delay: 0.6, x: 0 }}
          href="https://www.linkedin.com/in/omkar-madchetti-25a195259"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-2xl"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          initial={{x: 500, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{ delay: 0.8, x: 0 }}
          href="https://github.com/OmkarMadchetti5758"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-2xl"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          initial={{x: 500, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{ delay: 1, x: 0 }}
          href="https://x.com/OmkarMadchetti"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-2xl"
        >
          <FaSquareXTwitter />
        </motion.a>
        <motion.a
          initial={{x: 500, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{ delay: 1.2, x: 0 }}
          href="https://www.instagram.com/omkar__5758/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-2xl"
        >
          <FaInstagram />
        </motion.a>
      </div>
    </motion.nav>
  );
}
