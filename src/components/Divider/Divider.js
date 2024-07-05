import { motion } from "framer-motion";
import style from "./Divider.module.css";

const Divider =()=>((<motion.hr initial={{opacity:0}} animate={{opacity:1}}  className={style.divider}/>))
export default Divider