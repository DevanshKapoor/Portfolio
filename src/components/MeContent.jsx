import IntroButton from "./IntroButton"

const AboutContent = () => {

  return (
    <div  className="flex flex-col justify-center gap-3 lg:gap-9 p-[2%]">
        <div className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl roboto-bold">HELLO!</div>
        
        <div className="text-4xl md:text-5xl lg:text-7xl roboto-bold ">I'm <span className="text-yellow-500 ">Devansh <br/>Kapoor</span></div>
        <div className="hidden text-base md:text-lg lg:text-xl md:flex flex-row flex-wrap md:gap-4 lg:gap-5"> <div>Machine Learning</div> <div>|</div><div>Web Development</div> </div>
        <div className="flex gap-6 md:gap-8 lg:gap-10 ">
            <IntroButton link="mailto:piotr@mailtrap.io" name="Mail"/>
            <IntroButton link="https://www.linkedin.com/in/devansh-kapoor-819b29256/" name="LinkedIn"/>
        </div>
    </div>
    
  )
}

export default AboutContent