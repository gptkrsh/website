import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav
      className={[
        /** Font & Text */
        `font-display text-lg font-semibold`,
        /** Flex */
        `flex items-center justify-between w-full max-h-14`,
        /** Spacing */
        `py-3 px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24`,
      ].join(' ')}
    >
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            x: 0,
            opacity: 1,
          },
          exit: {
            opacity: 0,
          },
        }}
        transition={{ delay: 0, duration: 0.3, ease: 'easeInOut' }}
      >
        <Link href="/">
          <a
            className={[
              /** Font & Text */
              `text-gray-300`,
              /** Spacing */
              `m-0`,
              /** Animation */
              `transition-transform hover:-translate-y-0.5 hover:scale-110`,
            ].join(' ')}
          >
            krshkodes
          </a>
        </Link>
      </motion.div>
    </nav>
  )
}
