import AboutTile from "./StackTile"
import CPP from "../assets/c-plusplus.svg";
import Python from "../assets/python.svg";
import JS from "../assets/javascript.svg";
import pytorch from "../assets/pytorch-icon.svg";
import tensorflow from "../assets/tensorflow.svg";
import react from "../assets/react.svg";
import tw from "../assets/tailwindcss-icon.svg";
import sql from "../assets/postgresql.svg";
import R from "../assets/R.png";
import node from "../assets/nodejs.svg";

const About = () => {
  return (
    <>
     <div className="">
        <div id="stack" className="text-center text-3xl md:text-4xl font-bold p-[2vw]">TECH STACK</div>
        <div className="flex flex-col gap-20 p-4 justify-center items-center">
            <div className="flex flex-col gap-5 justify-center items-center">
                <div className="text-lg md:text-xl text-yellow-500 font-semibold ">Programming Languages</div>
                <div className="flex flex-row gap-[7vw] h-25 p-2">
                    <AboutTile name="C++" link={CPP}/>
                    <AboutTile name="Python" link={Python}/>
                    <AboutTile name="Javascript" link={JS}/>
                    <AboutTile name="R" link={R}/>
                </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center">
                <div className="text-lg md:text-xl text-yellow-500 font-semibold ">Machine Learning Frameworks And Libraries</div>
                <div className="flex flex-row gap-[7vw] h-25 p-2">
                    <AboutTile name="Pytorch" link={pytorch}/>
                    <AboutTile name="tensorflow" link={tensorflow}/>
                    
                </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center">
                <div className="text-lg md:text-xl text-yellow-500 font-semibold ">Web Development Frameworks And Libraries</div>
                <div className="flex flex-row gap-[7vw] h-25 p-2">
                    <AboutTile name="react" link={react}/>
                    <AboutTile name="Tailwind" link={tw}/>
                    <AboutTile name="Postgres SQL" link={sql}/>
                    <AboutTile name="Node.js" link={node}/>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default About