import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary">
            @&nbsp;{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Noria Water Technologies"
            companyLink="https://www.noriawater.com"
            time="Jan 2023 - July 2023"
            address="Los Angeles, CA"
            work="Had the dual responsibility for working on the company website's UI/UX design as well as worked on the RO-Spotlight™ water monitoring software. 
                Used PHP, HTML, CSS, JavaScript, and React.js in conjunction with a custom Wordpress theme to build the website and used Python, NextJS, and Tailwind CSS to work on the RO-Spotlight™ digital dashboard."
          />
          <Details
            position="Software Engineer"
            company="GeSvelte"
            companyLink="https://www.gesvelte.io/"
            time="Feb 2022 - Jan 2023"
            address="Los Angeles, CA"
            work="At GeSvelte, I wore multiple hats, diving into everything from developing and maintaining custom Svelte components in TypeScript to embracing SCSS and atomic CSS. My decision to migrate the codebase from JavaScript to TypeScript paid off in spades, offering benefits of static typing and boosting developer productivity, especially in handling complex form configurations. On the project management side, I led sprint planning, managed the backlog, and facilitated daily stand-up meetings. Lastly, I utilized Svelte Kit’s layout API and parameter-based routing systems to create a modular and cohesive interface, completely bypassing the need for manual server configuration and external libraries for REST API endpoints."
          />
          <Details
            position="Computer Science Instructor"
            company="Riverside Community College"
            companyLink="https://www.rcc.edu/index.html"
            time="Jan 2023 - July 2023"
            address="Riverside City, CA"
            work="In the realm of education, I took on the role of both mentor and collaborator, guiding students through the intricate world of computer science principles, programming languages like JavaScript, Python, and C++, and the essential data structures and algorithms. My hands-on approach included detailed code reviews and constructive feedback, enabling students to refine their coding skills and embrace engineering best practices. Together, we embarked on exciting journeys to build multiple low to mid-level applications using the aforementioned languages, turning abstract concepts into tangible projects and fostering an environment of creativity and growth."

          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
