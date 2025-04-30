import React from "react";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiCanva } from "react-icons/si";
import { FaNode, FaFigma, FaNpm } from "react-icons/fa";
import { MdPhp } from "react-icons/md";
import { BiLogoDevTo } from "react-icons/bi";
import { BsBootstrap, BsGithub } from "react-icons/bs";
import { TbBrandNextjs, TbBrandFirebase, TbBrandVscode, TbBrandVercel } from "react-icons/tb";
import { CircuitBoard } from "lucide-react";

const Skills = () => {
  const skillsData = [
    { icon: <RiJavascriptFill className="text-yellow-400" />, name: "JavaScript", animate: true },
    { icon: <SiMongodb className="text-green-500" />, name: "Mongodb", animate: false },
    { icon: <SiExpress className="text-gray-100" />, name: "Express.js", animate: false },
    { icon: <RiReactjsLine className="text-blue-400" />, name: "ReactJS", animate: false },
    { icon: <FaNode className="text-green-600" />, name: "Node.js", animate: false },
    { icon: <TbBrandNextjs className="text-white" />, name: "Next.js", animate: false },
    { icon: <TbBrandFirebase className="text-yellow-500" />, name: "Firebase", animate: false },
    { icon: <MdPhp className="text-purple-500" />, name: "PHP", animate: false },
    { icon: <SiMysql className="text-blue-500" />, name: "MySQL", animate: false },
    { icon: <BsBootstrap className="text-purple-600" />, name: "Bootstrap", animate: false },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind", animate: false },
    { icon: <CircuitBoard className="text-cyan-400" />, name: "UI Libraries", animate: false }
  ];

  const toolsData = [
    { icon: <BsGithub className="text-white" />, name: "Git", animate: false },
    { icon: <BiLogoDevTo className="text-gray-300" />, name: "Dev Tools", animate: false },
    { icon: <TbBrandVscode className="text-blue-500" />, name: "Vs code", animate: false },
    { icon: <TbBrandVercel className="text-white" />, name: "Vercel", animate: false },
    { icon: <FaFigma className="text-purple-400" />, name: "Figma", animate: false },
    { icon: <SiCanva className="text-pink-500" />, name: "Canva", animate: false },
    { icon: <FaNpm className="text-red-500" />, name: "npm", animate: false }
  ];

  const SkillCard = ({ icon, name, animate = false }: { icon: React.ReactNode; name: string; animate?: boolean }) => {
    return animate ? (
      <div className="rounded p-[1px] bg-gradient-to-r from-[#1A9ED4] via-blue-500 to-purple-500 bg-[length:400%_400%] animate-gradient-border">
        <div className="bg-[#131a2b] rounded p-3 h-full">
          <h1 className="font-bold flex items-center gap-2">
            {icon} {name}
          </h1>
        </div>
      </div>
    ) : (
      <div className="bg-[#131a2b] rounded border border-[#1A9ED4] p-3 h-full">
        <h1 className="font-bold flex items-center gap-2">
          {icon} {name}
        </h1>
      </div>
    );
  };

  return (
    <div className="bg-[#0F1729] py-16 lg:px-36 p-5" id="skill">
      {/* Title Section */}
      <div className="flex items-center justify-center w-full">
        <div className="flex-grow border-t border-[#1A9ED4]"></div>
        <span className="mx-4 text-[#1A9ED4] font-bold text-2xl">Skills</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      
      {/* Tools Divider */}
      <div className="divider">Tools</div>
      
      {/* Tools Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {toolsData.map((tool, index) => (
          <SkillCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Skills;