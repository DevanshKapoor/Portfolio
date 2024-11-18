import IntroButton from "./IntroButton";
import SkillComponent from "./SkillComponent"
import { HiOutlineCodeBracket } from "react-icons/hi2";
const Skills = () => {
    const handleClick = () => {
        window.open("https://drive.google.com/file/d/1IPeCL9xDMYrbDAIbcaH-h89XoVsiEACk/view?usp=sharing", "_blank", "noopener,noreferrer");
      };

    return (
    <>
        <div className="h-[110vh] f">
            <h2 id="skills" className="text-3xl md:text-4xl lg:5xl pt-[2.5%] roboto-bold text-center ">My Skills </h2>
            <p className="text-center text-xl md:text-xl  p-[3vh] text-gray-400 ">Turning ideas into reality with these tools and technologies</p>
            <div className="flex justify-around flex-wrap p-[5vh] ">
                <SkillComponent skill="Machine Learning" info="With hands-on experience in developing and deploying machine learning models, I specialize in computer vision and natural language processing. I've successfully implemented deep learning solutions using TensorFlow and PyTorch, created recommendation systems, and developed automated data pipelines. My expertise includes feature engineering, model optimization, and translating complex ML solutions into business value."/>
                <SkillComponent skill="Web Development" info="As a full-stack developer, I craft responsive and intuitive web applications using modern frameworks like React and Node.js. I focus on building scalable architectures. My expertise lies in Front End Web Development. I have made and deployed several websites."/>
            </div>

            <button onClick={handleClick} className=" block mx-auto text-yellow-400 border border-yellow-500 text-xl rounded-full h-[8vh] w-[24vh] hover:bg-amber-400 hover:text-black hover:border-black m-10">View Resume</button>

        </div>
    </>
    
  )
}

export default Skills