import {motion} from 'framer-motion'
import about from '/profile4.png'
import omkar from '/omkar.jpg'
export default function About(){
    return(
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About Me
            </h1>
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={omkar} alt="about" className='rounded-full w-52 lg:mt-4'/>
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-left">
                        <p className="my-2 max-w-xl py-6 text-center lg:text-left">
                            I am <span className='text-orange-300 font-bold'>Omkar Madchetti</span> a passionate MERN stack developer with a knack for turning ideas into seamless, user-friendly digital experiences. With expertise in MongoDB, Express.js, React, and Node.js, I thrive on building robust, scalable web applications that not only meet but exceed client expectations. I enjoy the challenge of solving complex problems and turning them into elegant solutions, whether it's crafting dynamic front-end interfaces with React or developing reliable server-side applications with Node.js and Express.I’m excited about collaborating with innovative teams and tackling new challenges. If you’re looking for a dedicated developer who can bring your vision to life with the MERN stack, let’s connect and build something great together!
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}