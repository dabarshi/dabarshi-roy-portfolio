import { Link } from "react-router-dom";
import toyPoint from "../../../assets/ProjectsImg/toyPoint.png";
import helloSummer from "../../../assets/ProjectsImg/helloSummer.png";
import japaneseKitchen from "../../../assets/ProjectsImg/japaneseKitchen.png";


const RecentProjects = () => {
    return (
        <div className="mt-10">

            {/* section title */}
            <div className="text-center text-white">
                <h3 className="text-white font-medium tracking-wide md:text-2xl">Projects</h3>
                <p className="font-bold">- <span className="text-[#e0c135] font-normal">My Recent Projects</span> -</p>
            </div>
            {/* card */}
            <div className="mt-12 max-w-7xl mx-2 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* Toy point Site Card */}
                <div className="max-w-sm bg-gray-900 rounded-lg p-5 shadow">
                    {/* Site img */}
                    <Link to="https://toy-point-37b23.web.app/">
                        <img className="rounded-lg" src={toyPoint} alt="" />
                    </Link>
                    <div className="mt-4">
                        {/* card title */}
                        <h5 className="text-2xl text-white font-bold tracking-tight">Toy Point</h5>
                        <p className="mb-3 font-thin text-white">An online toy market place website</p>
                        {/* technology */}
                        <h6 className="font-bold text-blue-500">Technologies : </h6>
                        <p className="text-white font-thin my-1 mx-3"> React Js | Tailwind | Daisy UI | Node Js | Express Js | MongoDB | Firebase</p>
                        {/* Features */}
                        <h6 className="font-bold text-blue-500">Features : </h6>
                        <ul style={{ listStyleType: 'circle' }} className="text-white font-thin mt-1 mb-3 mx-3 pl-6">
                            <li>Implement user Authentication with firebase</li>
                            <li>Private Route for detail information based on login</li>
                            <li>Add new toys on database from client side</li>
                        </ul>
                        {/* Links */}
                        <div className="space-x-2 text-blue-300">
                            <Link to='https://toy-point-37b23.web.app/' className="font-light hover:text-blue-700">Live Site</Link>
                            <Link to='https://github.com/dabarshi/toy-point-client' className="font-light border-l-2 pl-1 hover:text-blue-700">Client Side Code</Link>
                            <Link to='https://github.com/dabarshi/toy-point-server' className="font-light border-l-2 pl-1  hover:text-blue-700">Server Side Code</Link>
                        </div>
                    </div>
                </div>
                {/* Hello Summer*/}
                <div className="max-w-sm bg-gray-900 rounded-lg p-5 shadow">
                    {/* Site img */}
                    <Link to="https://hello-summer-561fc.web.app/">
                        <img className="rounded-lg" src={helloSummer} alt="" />
                    </Link>
                    <div className="mt-4">
                        {/* card title */}
                        <h5 className="text-2xl text-white font-bold tracking-tight">Hello Summer</h5>
                        <p className="mb-3 font-thin text-white">A summer school website for drawing</p>
                        {/* technology */}
                        <h6 className="font-bold text-blue-500">Technologies : </h6>
                        <p className="text-white font-thin my-1 mx-3"> React Js | Tailwind | Daisy UI | Node Js | Express Js | MongoDB | Firebase |JWT(json web token) | Axios | TanStack Query | React Hook Form
                        </p>
                        {/* Features */}
                        <h6 className="font-bold text-blue-500">Features : </h6>
                        <ul style={{ listStyleType: 'circle' }} className="text-white font-thin mt-1 mb-3 mx-3 pl-6">
                            <li>Role-based Dashboard Access and Admin Panel</li>
                            <li>Used Authorization with JWT </li>
                            <li>Secure Payment Method with Stripe</li>
                        </ul>
                        {/* Links */}
                        <div className="space-x-2 text-blue-300">
                            <Link to='https://hello-summer-561fc.web.app/' className="font-light hover:text-blue-700">Live Site</Link>
                            <Link to='https://github.com/dabarshi/hello-summer-client' className="font-light border-l-2 pl-1 hover:text-blue-700">Client Side Code</Link>
                            <Link to='https://github.com/dabarshi/hello-summer-server' className="font-light border-l-2 pl-1  hover:text-blue-700">Server Side Code</Link>
                        </div>
                    </div>
                </div>
                {/* card three */}
                <div className="max-w-sm bg-gray-900 rounded-lg p-5 shadow">
                    {/* Site img */}
                    <Link to="https://japanese-kitchen-872e1.web.app/">
                        <img className="rounded-lg" src={japaneseKitchen} alt="" />
                    </Link>
                    <div className="mt-4">
                        {/* card title */}
                        <h5 className="text-2xl text-white font-bold tracking-tight">Japanese Kitchen</h5>
                        <p className="mb-3 font-thin text-white">A website for japanese chef and cuisines</p>
                        {/* technology */}
                        <h6 className="font-bold text-blue-500">Technologies : </h6>
                        <p className="text-white font-thin my-1 mx-3"> React Js | Tailwind | Daisy UI | Node Js | Express Js | MongoDB | Firebase</p>
                        {/* Features */}
                        <h6 className="font-bold text-blue-500">Features : </h6>
                        <ul style={{ listStyleType: 'circle' }} className="text-white font-thin mt-1 mb-3 mx-3 pl-6">
                            <li>Used social login system (google and github)</li>
                            <li>Find and display particular data from Database</li>
                            <li>Private Routes for chefs details</li>
                        </ul>
                        {/* Links */}
                        <div className="space-x-2 text-blue-300">
                            <Link to='https://japanese-kitchen-872e1.web.app/' className="font-light hover:text-blue-700">Live Site</Link>
                            <Link to='https://github.com/dabarshi/japanese-kitchen-client' className="font-light border-l-2 pl-1 hover:text-blue-700">Client Side Code</Link>
                            <Link to='https://github.com/dabarshi/japanese-kitchen-server' className="font-light border-l-2 pl-1  hover:text-blue-700">Server Side Code</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center my-4">
                <Link to='/projects'>
                    <div className="md:border-2 inline-block md:px-2 md:py-2 cursor-pointer rounded">
                        <div className="bg-gray-900 px-3 py-1 rounded">
                            <p className="text-white">More...</p>
                        </div>
                    </div>
                </Link>

            </div>


        </div>
    );
};

export default RecentProjects;