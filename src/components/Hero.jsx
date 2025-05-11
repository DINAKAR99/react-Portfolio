import { motion } from "framer-motion";
import { styles } from "../styles";
import { developer } from "../assets";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`justify-center relative w-full h-screen mx-auto`}>
      <div
        className={`flex relative justify-center items-center inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} ${
              theme === "dark" ? "text-white" : "text-secondary-light"
            }`}
          >
            Hi, I'm{" "}
            <span
              className={`${
                theme === "dark" ? "text-[#BDBEBE]" : "text-tertiary-light"
              }`}
            >
              Dinakar
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 ${
              theme === "dark" ? "text-white-100" : "text-secondary-light"
            }`}
          >
            Full-Stack Developer | Expertise in Java, React, Spring Boot, and
            PostgreSQL
          </p>
        </div>
        <img src={developer} className="sm:flex hidden" />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className={`w-[35px] h-[64px] rounded-3xl border-4 ${
              theme === "dark"
                ? "border-secondary-dark"
                : "border-secondary-light"
            } flex justify-center items-start p-2`}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full ${
                theme === "dark" ? "bg-secondary-dark" : "bg-secondary-light"
              } mb-1`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
