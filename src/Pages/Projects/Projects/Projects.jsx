import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";
import toyPoint from "../../../assets/ProjectsImg/toyPoint.png";
import helloSummer from "../../../assets/ProjectsImg/helloSummer.png";
import japaneseKitchen from "../../../assets/ProjectsImg/japaneseKitchen.png";


const Projects = () => {
    return (
        <div>
            <Container>
                <div className="md:my-24">
                    <div className="md:w-1/2 mx-auto px-4 md:p-8 text-white text-center md:text-left">
                        <p>Here, I showcase some of the exciting projects I&apos;ve had the privilege to work on as a web developer. Each project represents a unique challenge that allowed me to push the boundaries of my skills and creativity.</p>
                    </div>
                    <div>
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
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Projects;