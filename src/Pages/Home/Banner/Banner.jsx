import NameAndDesignation from "./NameAndDesignation";
import SocialLinks from "./SocialLinks";
import displayImg from "../../../assets/DeveloperImg/displayImg.png";


const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
            {/* Social Links Section*/}
            <div className="md:p-2 md:border-r-2">
                <SocialLinks></SocialLinks>
            </div>
            {/* Name and Designations section*/}
            <div>
                <NameAndDesignation></NameAndDesignation>
            </div>
            {/* Image or Animation Section */}
            <div className="w-36 p-4 border-2">
                <img className="w-full shadow-2xl" src={displayImg} alt="Dabarshi" />
            </div>
        </div>
    );
};

export default Banner;