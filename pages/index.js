import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          y: [-20, 0],
          opacity: 1,
        }}
      >
        Fabio Alcocer - Dashboard E-Commerce
      </motion.h1>
      <form></form>
    </div>
  )
}
