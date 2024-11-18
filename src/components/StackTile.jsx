const AboutTile = ({name="nan",link}) => {

  return (
    <div className="h-20 w-20 flex flex-col justify-between">
        <img src={link} alt="C++" draggable="false" />
         <p className="text-center">{name}</p>
    </div>
  )
}

export default AboutTile