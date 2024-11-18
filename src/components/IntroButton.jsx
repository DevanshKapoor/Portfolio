const IntroButton = ({link,name}) => {
    const handleClick = () => {
        window.open(link, "_blank", "noopener,noreferrer");
      };
  return (
    <button onClick={handleClick} className="hidden md:block text-yellow-400 border border-yellow-500 rounded-full h-[5vw] w-[10vw] hover:bg-amber-400 hover:text-black hover:border-black">{name}</button>
  )
}

export default IntroButton