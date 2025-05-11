import React, { useContext } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ThemeContext } from "../context/ThemeContext";

const LeetcodeStats = () => {
  const { theme } = useContext(ThemeContext);

  // You can replace these with your actual Leetcode stats
  const leetcodeStats = {
    username: "dinakar",
    totalSolved: 222,
    easySolved: 114,
    mediumSolved: 100,
    hardSolved: 9,
    ranking: "521,395",
    contestRating: "-",
    streak: 100,
  };

  // Leetcode badges/achievements
  const achievements = [
    {
      name: "100 Days Badge",
      description: "Solved problems for 100 consecutive days",
    },
    {
      name: "Monthly Challenge",
      description: "Completed all problems in monthly challenge",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} ${
            theme === "dark" ? "text-secondary-dark" : "text-secondary-light"
          }`}
        >
          MY CODING JOURNEY
        </p>
        <h2
          className={`${styles.sectionHeadText} ${
            theme === "dark" ? "text-white" : "text-secondary-light"
          }`}
        >
          Leetcode Profile.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex flex-col gap-8"
      >
        <div
          className={`p-5 rounded-2xl ${
            theme === "dark" ? "bg-tertiary" : "bg-white shadow-md"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex-1">
              <h3
                className={`text-[24px] font-bold ${
                  theme === "dark" ? "text-white" : "text-tertiary-light"
                }`}
              >
                {leetcodeStats.username}'s Profile
              </h3>
              <p
                className={`mt-2 text-[16px] ${
                  theme === "dark"
                    ? "text-secondary-dark"
                    : "text-secondary-light"
                }`}
              >
                I am passionate about algorithmic problem solving and regularly
                practice on Leetcode to improve my skills. My commitment to
                continuous learning has helped me develop strong problem-solving
                abilities and efficient coding practices.
              </p>
            </div>

            <div
              className={`flex-1 p-4 rounded-xl ${
                theme === "dark" ? "bg-black-100" : "bg-gray-100"
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p
                    className={`text-[14px] ${
                      theme === "dark"
                        ? "text-secondary-dark"
                        : "text-secondary-light"
                    }`}
                  >
                    Total Solved
                  </p>
                  <h4
                    className={`text-[24px] font-bold ${
                      theme === "dark" ? "text-white" : "text-tertiary-light"
                    }`}
                  >
                    {leetcodeStats.totalSolved}
                  </h4>
                </div>
                <div className="text-center">
                  <p
                    className={`text-[14px] ${
                      theme === "dark"
                        ? "text-secondary-dark"
                        : "text-secondary-light"
                    }`}
                  >
                    Ranking
                  </p>
                  <h4
                    className={`text-[24px] font-bold ${
                      theme === "dark" ? "text-white" : "text-tertiary-light"
                    }`}
                  >
                    {leetcodeStats.ranking}
                  </h4>
                </div>
                <div className="text-center">
                  <p
                    className={`text-[14px] ${
                      theme === "dark"
                        ? "text-secondary-dark"
                        : "text-secondary-light"
                    }`}
                  >
                    Contest Rating
                  </p>
                  <h4
                    className={`text-[24px] font-bold ${
                      theme === "dark" ? "text-white" : "text-tertiary-light"
                    }`}
                  >
                    {leetcodeStats.contestRating}
                  </h4>
                </div>
                <div className="text-center">
                  <p
                    className={`text-[14px] ${
                      theme === "dark"
                        ? "text-secondary-dark"
                        : "text-secondary-light"
                    }`}
                  >
                    Day Streak
                  </p>
                  <h4
                    className={`text-[24px] font-bold ${
                      theme === "dark" ? "text-white" : "text-tertiary-light"
                    }`}
                  >
                    {leetcodeStats.streak}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`p-5 rounded-2xl ${
            theme === "dark" ? "bg-tertiary" : "bg-white shadow-md"
          }`}
        >
          <h3
            className={`text-[24px] font-bold ${
              theme === "dark" ? "text-white" : "text-tertiary-light"
            }`}
          >
            Problem Solving Stats
          </h3>

          <div className="mt-5 flex flex-wrap gap-5">
            <div className="w-full md:w-[30%]">
              <div
                className={`w-full h-4 rounded-full ${
                  theme === "dark" ? "bg-black-200" : "bg-gray-200"
                }`}
              >
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{
                    width: `${
                      (leetcodeStats.easySolved / leetcodeStats.totalSolved) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                <span
                  className={`text-[14px] ${
                    theme === "dark"
                      ? "text-secondary-dark"
                      : "text-secondary-light"
                  }`}
                >
                  Easy
                </span>
                <span
                  className={`text-[14px] font-medium ${
                    theme === "dark" ? "text-white" : "text-tertiary-light"
                  }`}
                >
                  {leetcodeStats.easySolved}
                </span>
              </div>
            </div>

            <div className="w-full md:w-[30%]">
              <div
                className={`w-full h-4 rounded-full ${
                  theme === "dark" ? "bg-black-200" : "bg-gray-200"
                }`}
              >
                <div
                  className="h-full rounded-full bg-yellow-500"
                  style={{
                    width: `${
                      (leetcodeStats.mediumSolved / leetcodeStats.totalSolved) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                <span
                  className={`text-[14px] ${
                    theme === "dark"
                      ? "text-secondary-dark"
                      : "text-secondary-light"
                  }`}
                >
                  Medium
                </span>
                <span
                  className={`text-[14px] font-medium ${
                    theme === "dark" ? "text-white" : "text-tertiary-light"
                  }`}
                >
                  {leetcodeStats.mediumSolved}
                </span>
              </div>
            </div>

            <div className="w-full md:w-[30%]">
              <div
                className={`w-full h-4 rounded-full ${
                  theme === "dark" ? "bg-black-200" : "bg-gray-200"
                }`}
              >
                <div
                  className="h-full rounded-full bg-red-500"
                  style={{
                    width: `${
                      (leetcodeStats.hardSolved / leetcodeStats.totalSolved) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                <span
                  className={`text-[14px] ${
                    theme === "dark"
                      ? "text-secondary-dark"
                      : "text-secondary-light"
                  }`}
                >
                  Hard
                </span>
                <span
                  className={`text-[14px] font-medium ${
                    theme === "dark" ? "text-white" : "text-tertiary-light"
                  }`}
                >
                  {leetcodeStats.hardSolved}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`p-5 rounded-2xl ${
            theme === "dark" ? "bg-tertiary" : "bg-white shadow-md"
          }`}
        >
          <h3
            className={`text-[24px] font-bold ${
              theme === "dark" ? "text-white" : "text-tertiary-light"
            }`}
          >
            My Commitment
          </h3>
          <p
            className={`mt-4 text-[16px] ${
              theme === "dark" ? "text-secondary-dark" : "text-secondary-light"
            }`}
          >
            I am committed to solving at least one problem every day to
            continuously improve my algorithmic thinking and coding skills. This
            consistent practice has helped me develop a strong foundation in
            data structures and algorithms, which I apply in my professional
            work as a developer.
          </p>

          <h4
            className={`mt-6 text-[18px] font-semibold ${
              theme === "dark" ? "text-white" : "text-tertiary-light"
            }`}
          >
            Achievements
          </h4>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={`achievement-${index}`}
                className={`p-3 rounded-lg ${
                  theme === "dark" ? "bg-black-100" : "bg-gray-100"
                }`}
              >
                <h5
                  className={`text-[16px] font-medium ${
                    theme === "dark" ? "text-white" : "text-tertiary-light"
                  }`}
                >
                  {achievement.name}
                </h5>
                <p
                  className={`mt-1 text-[14px] ${
                    theme === "dark"
                      ? "text-secondary-dark"
                      : "text-secondary-light"
                  }`}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(LeetcodeStats, "leetcode");
