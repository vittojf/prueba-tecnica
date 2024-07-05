
import Image from "next/image";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

const Header = ({ name, profileImage,loading }) => {
  return (
    <motion.header initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1,ease:"easeInOut"}} className={styles.header}>
    {loading?<></>:  <motion.section initial={{opacity:0}} animate={{opacity:1}} className={styles.infoHeader}>
        
        <Image
          width={500}
          height={500}
          src={profileImage}
          alt={`${name}'s profile`}
          className={styles.profileImage}
        />
        <motion.h1>{name}</motion.h1>
      </motion.section>}
    </motion.header>
  );
};

export default Header;
