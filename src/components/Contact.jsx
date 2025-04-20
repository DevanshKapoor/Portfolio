import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiLinkSimple } from "react-icons/pi";

const Contact = () => {
  const profileLinks = [
    { name: "Kaggle", url: "https://www.kaggle.com/kapoordevansh" },
    { name: "LinkTree", url: "https://linktr.ee/kapoordevansh" },
    { name: "GitHub", url: "https://github.com/DevanshKapoor" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/devansh-kapoor-819b29256/" },
    { name: "LeetCode", url: "https://leetcode.com/u/kapoor_devansh/" },
  ];

  return (
    <footer className="bg-[#121212]">
      <div className="py-16 max-w-3xl mx-auto">
        <h2 id="links" className="text-center text-3xl md:text-4xl font-bold">GET IN TOUCH</h2>
        <p className="text-center text-lg md:text-xl py-4 text-gray-400">
          Have a question or want to work together?
        </p>
        
        <div className="flex flex-col gap-8 py-8 px-5">
          {/* Email */}
          <div className="flex gap-5 items-center">
            <MdEmail className="text-4xl text-gray-300" />
            <div className="flex flex-col">
              <p className="font-medium">Email</p>
              <p className="text-gray-400">kapoordevansh15@gmail.com</p>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex gap-5 items-center">
            <IoLocationSharp className="text-4xl text-gray-300" />
            <div className="flex flex-col">
              <p className="font-medium">Location</p>
              <p className="text-gray-400">Patiala, Punjab, India</p>
            </div>
          </div>

          {/* Profile Links */}
          <div className="flex gap-5 items-start">
            <PiLinkSimple className="text-4xl text-gray-300" />
            <div className="flex flex-col">
              <p className="font-medium">Profile Links</p>
              <div className="text-gray-400 flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8 mt-1">
                {profileLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url} 
                    className="hover:text-yellow-500 transition-colors duration-300" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-700"></div>
      <p className="text-center text-gray-400 py-4 px-4 text-sm">
        © {new Date().getFullYear()} Devansh Kapoor
      </p>
    </footer>
  );
};

export default Contact;