import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({
  index,
  title,
  level,
  rank,
  competition,
  date,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px] font-bold mb-3">
        {title}
      </p>

      <p className="text-white tracking-wider text-[14px] mb-1">
        Level: {level}
      </p>
      <p className="text-white tracking-wider text-[14px] mb-1">
        Rank: {rank}
      </p>
      <p className="text-white tracking-wider text-[14px] mb-2">
        {competition}
      </p>
      <p className="text-secondary tracking-wider text-[12px]">
        Date: {date}
      </p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>MY ACHIEVEMENTS</p>
          <h2 className={styles.sectionHeadText}>Achievements & Competitions</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.title} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "");