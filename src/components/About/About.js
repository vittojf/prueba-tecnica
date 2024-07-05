
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = ({ description }) => {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className={styles.about}>
      <h3>Sobre mí</h3>
      <p>{description}</p>
    </motion.section>
  );
};

export default About;
