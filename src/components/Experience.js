import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center jusitfy-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
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
            time="Jan 2023 - Current"
            address="Los Angeles, CA"
            work="At Noria Water Technologies, I currently spearhead the optimization of cloud infrastructure, utilizing AWS services like Lambda and RDS to achieve substantial cost savings and improved application uptime. In tandem, I'm tackling data processing bottlenecks by leveraging Kubernetes for container orchestration, enhancing both scalability and efficiency. I'm responsible for deploying machine learning algorithms to automate water quality assessments, which has significantly increased the accuracy of our readings. Furthermore, I actively collaborate across teams to integrate API services for IoT devices, thereby empowering real-time monitoring and data collection from various water treatment plants. My role is instrumental in not only improving the performance of our cloud-based applications but also in driving innovation in water treatment solutions."
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
            position="Frontend Web Developer"
            company="Riverside Community College"
            companyLink="https://www.rcc.edu/index.html"
            time="Jan 2023 - July 2023"
            address="Riverside City, CA"
            work="In the digital domain of higher education, I positioned myself at the nexus of design and functionality. Utilizing the prowess of Bootstrap, SASS/SCSS, and LESS, I crafted web layouts that were a harmonious blend of aesthetic appeal and consistency, resonating perfectly with the college's branding vision. My expertise with tools like Webpack and Vite streamlined the bundling and delivery of assets, ensuring that our website always performed at its peak. Collaborating closely with the backend team, our joint efforts saw frontend designs seamlessly integrated with server-side logic, employing the strengths of Node.js, Express.js, and GraphQL. Together, we journeyed through the intricate layers of web development, turning hurdles into opportunities and fostering an environment that championed innovation and knowledge sharing."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
