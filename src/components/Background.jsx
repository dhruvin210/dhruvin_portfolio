import { motion } from "framer-motion";

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-brand-purple/30 blur-[140px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-brand-cyan/20 blur-[140px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-indigo/25 blur-[140px]"
      />
    </div>
  );
}

export default Background;
