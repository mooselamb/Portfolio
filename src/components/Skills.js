import React from "react";
import { motion } from "framer-motion";
import {
  SqlIcon,
  PythonIcon,
  PhpIcon,
  NextjsIcon,
  MongodbIcon,
  JqueryIcon,
  JavascriptIcon,
  HtmlIcon,
  GitIcon,
  CssIcon,
  AwsIcon,
  TailwindIcon,
  ReactjsIcon,
  InternetIcon,
} from "./Icons";

const skillIcons = {
  HTML: HtmlIcon,
  Javascript: JavascriptIcon,
  ReactJS: ReactjsIcon,
  NextJS: NextjsIcon,
  TailwindCSS: TailwindIcon,
  GIT: GitIcon,
  jQuery: JqueryIcon,
  Python: PythonIcon,
  SQL: SqlIcon,
  MongoDB: MongodbIcon,
  PHP: PhpIcon,
  CSS: CssIcon,
  AWS: AwsIcon,
};

const Skill = ({ name, x, y }) => {
  const IconComponent = skillIcons[name];
  
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold text-light shadow-dark cursor-pointer absolute h-[5%] w-[5%]
        "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {IconComponent ? <IconComponent /> : name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold text-light shadow-dark cursor-pointer h-[5%] w-[5%]"
          whileHover={{ scale: 1.05 }}
        >
          <InternetIcon />
         
        </motion.div>

        <Skill name="HTML" x="-15vw" y="2vw" />
        <Skill name="Javascript" x="5vw" y="-5.5vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-23vw" y="-19vw" />
        <Skill name="TailwindCSS" x="-15vw" y="-12vw" />
        <Skill name="GIT" x="-35vw" y="-5vw" />
        <Skill name="jQuery" x="0" y="-20vw" />
        <Skill name="Python" x="-25vw" y="18vw" />
        <Skill name="SQL" x="24vw" y="-6vw" />
        <Skill name="MongoDB" x="20vw" y="-13vw" />
        <Skill name="PHP" x="20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-11vw" />
        <Skill name="AWS" x="30vw" y="11vw" />
      </div>
    </>
  );
};

export default Skills;
