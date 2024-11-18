import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiLinkSimple } from "react-icons/pi";
const Contact = () => {
  return (
    <>
    <div className="py-[10vh]">
    <div id="links" className="text-center text-3xl md:text-4xl font-bold   ">GET IN TOUCH</div>
    <p className="text-center text-xl md:text-xl  p-[3vh] text-gray-400 ">Have a question or want to work together?</p>
    <div className="flex flex-col gap-9 py-10 px-5">
        <div className="flex gap-5 items-center">
            <MdEmail className="text-5xl"/>
            <div className="flex flex-col">
                <p>Email</p>
                <p className="text-gray-400">kapoordevansh15@gmail.com</p>
            </div>
        </div>
        
        <div className="flex gap-5 items-center">
            <IoLocationSharp className="text-5xl"/>
            <div className="flex flex-col">
                <p>Location</p>
                <p className="text-gray-400">Patiala, Punjab, India</p>
            </div>
        </div>

        <div className="flex gap-5 items-center">
            <PiLinkSimple className="text-5xl"/>
            <div className="flex flex-col">
                <p>Profile Links</p>
                <div className="text-gray-400 flex gap-7 md:gap-10">
                    <a href="https://www.kaggle.com/kapoordevansh" className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">Kaggle</a>
                    <a href="https://linktr.ee/kapoordevansh" className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">LinkTree</a>
                    <a href="https://github.com/DevanshKapoor" className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/devansh-kapoor-819b29256/" className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://leetcode.com/u/kapoor_devansh/" className="hover:text-yellow-500" target="_blank" rel="noopener noreferrer">LeetCode</a>
                </div>
            </div>
        </div>


    </div>
    </div>

    <div className="w-full h-[0.01rem] bg-gray-400"></div>
    <p className="text-center text-gray-400 p-4 font-light">© Devansh Kapoor</p>
    </>
  )
}

export default Contact