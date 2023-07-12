import iconAvator from "../../assets/Icons/icon-avator-64.png";

const Footer = () => {
    return (
        <div className="text-center bg-gray-900 mt-10 py-4">
            <div className="flex gap-2 items-center justify-center">
                <p className="text-white">Made By</p>
                <img className="w-6" src={iconAvator} alt="" />
                <p className="text-white">Dabarshi Roy</p>
            </div>
        </div>
    );
};

export default Footer;