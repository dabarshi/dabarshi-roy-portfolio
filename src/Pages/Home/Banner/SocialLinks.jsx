import { FaCodepen, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const SocialLinks = () => {
    return (
        <motion.div
            className='flex md:flex-col space-x-2 md:space-y-2 md:space-x-0'
            initial={{ x: '-100vh' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 40, duration: 1 }}
        >
            {/* LinkedIn */}
            <div className='border-2 p-2 text-center rounded-full text-white bg-transparent hover:bg-[#4ca1af] hover:bg-opacity-20 hover:backdrop-blur-sm shadow-2xl
            md:-rotate-90 hover:rotate-0 hover:transition hover:ease-in hover:duration-100'>
                <Link to='https://www.linkedin.com/in/dabarshi-roy-802923217'>
                    <FaLinkedin />
                </Link>

            </div>
            {/* GitHub */}
            <div className='border-2 p-2 rounded-full text-white bg-transparent hover:bg-[#4ca1af] hover:bg-opacity-20 hover:backdrop-blur-sm shadow-2xl
            md:-rotate-90 hover:rotate-0 hover:transition hover:ease-in hover:duration-100'>
                <Link to='https://github.com/dabarshi'>
                    <FaGithub />
                </Link>
            </div>
            {/* Code Pen */}
            <div className='border-2 p-2 rounded-full text-white bg-transparent hover:bg-[#4ca1af] hover:bg-opacity-20 hover:backdrop-blur-sm shadow-2xl
            md:-rotate-90 hover:rotate-0 hover:transition hover:ease-in hover:duration-100'>
                <Link to='https://codepen.io/dabarshi'>
                    <FaCodepen />
                </Link>
            </div>
            {/* Twitter */}
            <div className='border-2 p-2 rounded-full text-white bg-transparent hover:bg-[#4ca1af] hover:bg-opacity-20 hover:backdrop-blur-sm shadow-2xl
            md:-rotate-90 hover:rotate-0 hover:transition hover:ease-in hover:duration-100'>
                <Link to='https://twitter.com/DabarshiRoy'>
                    <FaTwitter  />
                </Link>
            </div>
            {/* Facebook */}
            <div className='border-2 p-2 rounded-full text-white bg-transparent hover:bg-[#4ca1af] hover:bg-opacity-20 hover:backdrop-blur-sm shadow-2xl
            md:-rotate-90 hover:rotate-0 hover:transition hover:ease-in hover:duration-100'>
                <Link to='https://www.facebook.com/roy.dabarshi'>
                    <FaFacebook />
                </Link>
            </div>
        </motion.div>
    );
};

export default SocialLinks;