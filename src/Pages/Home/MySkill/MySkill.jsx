import { FaCss3Alt, FaFigma, FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa';
import { motion } from "framer-motion"

const MySkill = () => {
    return (
        <div className="mt-10">
            {/* section title */}
            <div className="text-center text-white">
                <h3 className="text-white font-medium tracking-wide md:text-2xl">My Skills</h3>
                <p className="font-bold">- <span className="text-[#e0c135] font-normal">What I Know</span> -</p>
            </div>
            {/* section Content */}
            <div className="mt-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
                {/* details */}
                <div className='md:w-1/2 text-[#e0c135] p-8 md:border-r-2'>
                    <ul className="space-y-4">
                        <motion.li
                            className="bg-white bg-opacity-10 text-white pl-4 p-2"
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 8px rgb( 0, 0, 0, .5)'
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: '110',
                                ease: 'easeIn'
                            }}
                        >
                            proficient in HTML, CSS, and JavaScript, creating interactive and aesthetically pleasing web pages.
                        </motion.li>

                        <motion.li
                            className="bg-white bg-opacity-10 text-white pl-4 p-2"
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 8px rgb(0,0,0, .5)'
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: '110',
                                ease: 'easeIn'
                            }}
                        >
                            Create strong, responsive user interfaces with React expertise for seamless web experiences.
                        </motion.li>

                        <motion.li
                            className="bg-white bg-opacity-10 text-white pl-4 p-2"
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 8px rgb(0,0,0, .5)'
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: '110',
                                ease: 'easeIn'
                            }}
                        >
                            Experienced in Node.js, developing server-side applications for efficient and scalable web solutions.
                        </motion.li>

                        <motion.li
                            className="bg-white bg-opacity-10 text-white pl-4 p-2"
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 8px rgb(0,0,0, .5)'
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: '110',
                                ease: 'easeIn'
                            }}
                        >
                            Knowledgeable in MongoDB, designing and managing robust databases for data-driven applications.
                        </motion.li>

                        <motion.li
                            className="bg-white bg-opacity-10 text-white pl-4 p-2"
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 8px rgb(0,0,0, .5)'
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: '110',
                                ease: 'easeIn'
                            }}
                        >
                            Proficient in Express, building RESTful APIs and handling server-side routing for streamlined communication.
                        </motion.li>

                        <motion.li
                            className="bg-white bg-opacity-10 text-white pl-4 p-2"
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 8px rgb( 0, 0, 0, .5)'
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: '110',
                                ease: 'easeIn'
                            }}

                        >
                            Well-versed in full-stack development, combining front-end and back-end technologies for end-to-end web solutions.
                        </motion.li>
                    </ul>
                </div>
                {/* with icons */}
                <motion.div
                    className='md:p-8 border-t-2 p-4 mx-4 md:border-t-0 md:mx-0 grid grid-cols-2 gap-5 items-center'
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 40, duration: 1 }}
                >
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <div className='bg-slate-900 p-4 rounded'>
                            <FaJs className='w-8 h-8 text-white bg-slate-900' />
                        </div>
                        <span className='font-medium text-white'>JavaScript</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <div className='bg-slate-900 p-4 rounded'>
                            <FaHtml5 className='w-8 h-8 text-white bg-slate-900' />
                        </div>
                        <span className='font-medium text-white'>Html5</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <div className='bg-slate-900 p-4 rounded'>
                            <FaCss3Alt className='w-8 h-8 text-white bg-slate-900' />
                        </div>
                        <span className='font-medium text-white'>CSS3</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <div className='bg-slate-900 p-4 rounded'>
                            <FaReact className='w-8 h-8 text-white bg-slate-900' />
                        </div>
                        <span className='font-medium text-white'>ReactJs</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <div className='bg-slate-900 p-4 rounded'>
                            <FaNode className='w-8 h-8 text-[#79ff3b] bg-slate-900' />
                        </div>
                        <span className='font-medium text-white'>NodeJs</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <div className='bg-slate-900 p-4 rounded'>
                            <FaFigma className='w-8 h-8 text-[#ffffff] bg-slate-900' />
                        </div>
                        <span className='font-medium text-white'>Figma</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MySkill;