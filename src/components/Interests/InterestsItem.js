
import { motion } from "framer-motion";
import styles from "./Interests.module.css";
import Image from "next/image";

const InterestsItem = ({ title,img,category }) => {
  return (
    <motion.div className={styles.interestsItem} initial={{opacity:0}} animate={{opacity:1}} >  
    <Image width={800} height={800} src={`${img}/${category}.png`} alt={`${category} image`}/>
     <h1>{title}</h1>
    </motion.div>
  );
};

export default InterestsItem;
