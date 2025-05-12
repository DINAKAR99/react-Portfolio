import React, { useContext } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ThemeContext } from "../context/ThemeContext";

const ServiceCard = ({ index, title, icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[var(--bg-card)] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-[var(--text-primary)] text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[var(--text-secondary)]`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-[var(--text-primary)]`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[var(--text-secondary)] text-[17px] max-w-3xl leading-[30px]"
      >
        <p className="text-[17px] leading-[30px] text-[var(--text-secondary)]">
          Hi! I'm a Full-Stack Developer who loves building websites and web
          apps. I work with Java, React, Spring Boot, and PostgreSQL to create
          fast and reliable software.
          <br />
          <br />
          I enjoy solving problems with code and learning new technologies.
          Whether it’s building user-friendly frontends or strong backends, I
          like making things that work well and look good.
          <br />
          <br />
          In my free time, I enjoy learning about new tools, working on side
          projects, and sharing ideas with other developers.
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
