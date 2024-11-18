import AboutContent from "./MeContent"
import me from "../assets/MyImage.png"
const Me = () => {
  return (
    <>
    <div className="flex justify-between p-10">
        <AboutContent/>
        <image className="roboto-bold">
            <img src={me} alt="my image" className=" lg:h-[80vh] drop-shadow-[0_0_3px_white]"/>
        </image>
        
    </div>
    </>
  )
}

export default Me