import dabarshiRoyResume from "../../../../public/dabarshiRoyResume.pdf";
import { motion } from "framer-motion"

const NameAndDesignation = () => {
    return (
        <div className="space-y-2 md:space-y-6">
            <div>
                <motion.h1
                    className="font-bold text-white md:text-6xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .5, duration: 1, ease: 'easeIn' }}
                >Hi. I&apos;m <br /> Dabarshi Roy</motion.h1>
            </div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.6, ease: 'easeIn'}}
            >
                <p className="text-white md:font-medium md:text-2xl md:border-l-4 md:pl-2">A Web Developer</p>
            </motion.div>
            <motion.div
                className="md:border-2 inline-block md:px-2 md:py-2 cursor-pointer"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.9, ease: 'easeIn'}}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 0px 2px rgb(255, 255, 255)'
                }}
            >
                <a href={dabarshiRoyResume} download>
                    <div className="bg-[#36e4ff] bg-opacity-20 px-2 backdrop-blur-sm">
                        <p className="text-white">Resume</p>
                    </div>
                </a>
            </motion.div>
        </div>
    );
};

export default NameAndDesignation;