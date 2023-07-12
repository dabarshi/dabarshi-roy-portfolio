import Banner from "../Banner/Banner";
import MySkill from "../MySkill/MySkill";
import RecentProjects from "../RecentProjects/RecentProjects";


const Home = () => {
    return (
        <div className="md:mt-48">
            <Banner></Banner>
            <div className="h-[1px] bg-black w-1/3 mx-auto my-10"></div>
            <MySkill></MySkill>
            <div className="h-[1px] bg-black w-1/3 mx-auto my-10"></div>
            <RecentProjects></RecentProjects>
        </div>
    );
};

export default Home;