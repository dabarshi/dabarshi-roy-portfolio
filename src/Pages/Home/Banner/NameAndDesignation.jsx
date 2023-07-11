import dabarshiRoyResume from "../../../../public/dabarshiRoyResume.pdf";

const NameAndDesignation = () => {
    return (
        <div className="space-y-2 md:space-y-6">
            <div>
                <h1 className="font-bold text-white md:text-6xl">Hi. I&apos;m <br /> Dabarshi Roy</h1>
            </div>
            <div>
                <p className="text-white md:font-medium md:text-2xl">A Web Developer</p>
            </div>
            <div className="border-2 inline-block px-2 py-2 cursor-pointer">
                <a href={dabarshiRoyResume} download>
                    <div className="bg-[#36e4ff] bg-opacity-20 px-2 backdrop-blur-sm">
                        <p className="text-white">Resume</p>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default NameAndDesignation;