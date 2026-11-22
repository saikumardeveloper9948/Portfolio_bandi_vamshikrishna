import { motion } from 'motion/react';

export function AgentTest() {
  return (
    <motion.div
      className="agent-test"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      Agent Mode Working
    </motion.div>
  );
}