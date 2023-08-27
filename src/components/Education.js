import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center jusitfy-between">

        <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Immersive Software Engineering Residency"
            time="2022 - 2023"
            place="Codesmith, Los Angeles, CA"
            info="At Codesmith, Los Angeles, CA, I immersed myself in an intensive fullstack software engineering residency from 2022 to 2023. This comprehensive program provided hands-on experience with a diverse technology stack, allowing me to master frontend technologies such as React, Redux, Next.js, Typescript, and Tailwind CSS, as well as backend technologies including JavaScript, Python, Node.js, and both SQL and NoSQL databases. Through rigorous project-based learning, I developed robust applications, implemented scalable architectures, and integrated APIs, honing my skills to become a versatile and effective developer. Collaborative teamwork, paired programming, and continuous feedback from industry experts further refined my problem-solving abilities, communication skills, and agile development practices. This residency not only equipped me with the technical proficiency required in modern web development but also fostered a growth mindset and adaptability, essential traits for thriving in the ever-evolving tech landscape."
          />
          <Details
            type="Associates in Computer Science and Mathematics"
            time="2019 - 2022"
            place="Riverside Community College, Riverside, CA"
            info="At Riverside Community College, I earned an Associate's degree in Computer Science and Mathematics, focusing on essential subjects such as programming, data structures, algorithms, calculus, and linear algebra. This program provided a balanced blend of theoretical knowledge and practical skills, laying the foundation for my career in fullstack web development. The hands-on experience with various programming languages and collaborative projects enhanced my problem-solving abilities and teamwork skills."
          />
          <Details
            type="Bachelors in Medical Science"
            time="2014 - 2018"
            place="Aureus University School of Medicine, Oranjestad, Aruba"
            info="At Aureus University, I completed a Bachelor's in Medical Science, where I developed a range of transferable skills that have proven valuable in my transition to the tech field. The rigorous curriculum required critical thinking, problem-solving, and data analysis, all of which are essential in fullstack web development. Collaborative projects and research fostered my ability to work effectively within a team, communicate complex ideas, and adapt to rapidly changing scenarios. My medical science education not only provided a deep understanding of human biology and healthcare but also cultivated a methodical approach to troubleshooting and innovation, skills that I have applied directly to my work in software development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
