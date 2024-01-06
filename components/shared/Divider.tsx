import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gray-300 my-24 h-16 w-1 rounded-full block relative dark:bg-white/60"
    ></motion.div>
  );
};

export default Divider;
