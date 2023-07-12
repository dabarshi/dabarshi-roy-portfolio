import Container from "../../../components/Container/Container";
import displayImg from "../../../assets/DeveloperImg/displayImg.gif";
import { motion } from "framer-motion"


const About = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:my-24">
          <div>
            <div className="my-12">
              <motion.h1
                className="font-bold text-white md:text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .5, duration: 1, ease: 'easeIn' }}
              >Hi. I&apos;m <br /> Dabarshi Roy</motion.h1>
            </div>
            <div>
              <motion.div
                className="w-52 p-4 border-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img className="w-full shadow-2xl" src={displayImg} alt="Dabarshi" />
              </motion.div>
            </div>
          </div>

          <div>
            <div className="p-8 text-white md:border-l-2">
              <p className="indent-8">
                I am a passionate web developer from Sylhet, Bangladesh. I am specialized in building dynamic web applications. I am comfortable with React.js, JavaScript, HTML, and CSS. With expertise in Node.js, Express.js, and MongoDB, I develop robust back-end solutions.
              </p>
              <p className="indent-8">I enjoy transforming ideas into functional and visually appealing websites. My goal is to create seamless user experiences through responsive designs and intuitive interfaces. I&apos;m experienced in front-end frameworks like Tailwind CSS and Bootstrap, ensuring polished and modern designs.</p>
              <p className="indent-8">I enjoy working in collaborative environments, where I can closely collaborate with clients and fellow developers. I&apos;m excited to take on new projects and contribute to the world of web development. If you have a project in mind or need assistance with your website, feel free to reach out. Let&apos;s work together to create remarkable digital experiences!</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;