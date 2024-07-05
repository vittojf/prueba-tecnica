
import { motion } from "framer-motion";
import styles from "./Interests.module.css";
import InterestsItem from "./InterestsItem";

const Interests = ({ interests }) => {
  return (
    <motion.section style={{width:'100%'}} initial={{opacity:0}} animate={{opacity:1}} >  
      <h3>Intereses</h3>
      <article className={styles.interests}>
        {interests.map((i, index) => (
         <InterestsItem title={i.title} category={i.category} img={i.img} key={index}/>
        ))}
      </article>
    </motion.section>
  );
};

export default Interests;
