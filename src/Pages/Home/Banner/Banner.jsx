import NameAndDesignation from "./NameAndDesignation";
import SocialLinks from "./SocialLinks";
import displayImg from "../../../assets/DeveloperImg/displayImg.gif";
import { motion } from "framer-motion"


const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
            {/* Social Links Section*/}
            <div className="border-t-2 pt-2 md:p-2 md:border-r-2 md:border-t-0">
                <SocialLinks></SocialLinks>
            </div>
            {/* Name and Designations section*/}
            <div>
                <NameAndDesignation></NameAndDesignation>
            </div>
            {/* Image or Animation Section */}
            <motion.div
                className="w-36 p-4 border-2"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <img className="w-full shadow-2xl" src={displayImg} alt="Dabarshi" />
            </motion.div>
        </div>
    );
};

export default Banner;