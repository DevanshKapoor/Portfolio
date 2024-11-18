import { HiOutlineCodeBracket } from "react-icons/hi2";

const SkillComponent = ({ skill = "nan", info }) => {
  return (
    <div className="container h-[55vh] w-[35vw] border border-yellow-500 rounded-xl hover:bg-gray-900 overflow-auto scrollbar scrollbar-thumb-yellow-500 scrollbar-track-gray-900">
      <div className="mx-auto rounded-xl">
        <div className="bg-slate-900 rounded-xl p-2">
          <HiOutlineCodeBracket
            className="mx-auto text-3xl md:text-4xl lg:text-5xl"
            color="gold"
          />
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center text-yellow-400">
            {skill}
          </h3>
        </div>

        <p className="p-2 md:p-5 font-light">{info}</p>
      </div>
    </div>
  );
};

export default SkillComponent;
