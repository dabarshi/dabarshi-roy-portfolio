import Banner from "../Banner/Banner";
import MySkill from "../MySkill/MySkill";


const Home = () => {
    return (
        <div className="md:my-48">
            <Banner></Banner>
            <div className="h-[1px] bg-black w-1/3 mx-auto my-10"></div>
            <MySkill></MySkill>
        </div>
    );
};

export default Home;