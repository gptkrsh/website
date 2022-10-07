import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import HeroIllustration from 'public/assets/images/hero.png'
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiBook
} from 'react-icons/fi'

function Hero () {
  return (
    <header
      className={[
        /** Font & Text */
        'font-display w-full text-gray-300 text-center md:text-left md:justify-evenly',
        /** Flex */
        'flex flex-col md:flex-row w-full items-center justify-center',
        /** Spacing */
        'my-8 md:py-20 lg:[height:calc(100vh_-_8rem)] px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24'
      ].join(' ')}
    >
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 0
          },
          animate: {
            x: 0,
            opacity: 1
          },
          exit: {
            opacity: 0
          }
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="w-full"
      >
        <h1
          className={[
            /** Font & Text */
            'text-3xl lg:text-4xl 2xl:text-6xl font-black leading-[1.2em]',
            /** Spacing */
            'mb-6',
            'block'
          ].join(' ')}
        >
          Professionalism is a Passion.
        </h1>
        <p
          className={[
            /** Spacing */
            'mb-6',
            /** Font & Text */
            'lg:text-lg 2xl:text-xl',
            'block mx-auto md:mx-0 max-w-prose md:max-w-none'
          ].join(' ')}
        >
          Helping organisations build unforgettable seamless application. I
          focus on the frontend, and build exceptionally performant and
          accessible sites.
        </p>
        <div className="flex items-center justify-center mb-6 md:block md:space-x-4">
          <Link prefetch={false} href="mailto:hi@krshkodes.co">
            <a className="w-full mb-8 max-w-max">
              <button
                className={[
                  'lg:text-lg 2xl:text-xl hover:text-white',
                  'block w-max px-4 py-2',
                  'bg-gray-900 hover:bg-brand-500 hover:bg-opacity-25',
                  'border-2 border-brand-500',
                  'transition-colors'
                ].join(' ')}
              >
                Let&#39;s connect!
              </button>
            </a>
          </Link>
        </div>
        <div
          className={[
            'flex items-center justify-center md:justify-start',
            'text-gray-200 lg:text-lg 2xl:text-xl',
            'mb-6 space-x-3 md:space-x-6'
          ].join(' ')}
        >
          <Link prefetch={false} href="https://twitter.com/krshkodes">
            <a
              target="_blank"
              className="hover:text-[#1DA1F2] hover:rotate-12 transition-all p-4 pl-0"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
          </Link>
          <Link prefetch={false} href="https://github.com/krshkun">
            <a
              target="_blank"
              className="hover:text-[#fff] hover:rotate-12 transition-all p-4 pl-0"
              aria-label="Github"
            >
              <FiGithub />
            </a>
          </Link>
          <Link prefetch={false} href="https://linkedin.com/in/krshkodes">
            <a
              target="_blank"
              className="hover:text-[#0A66C2] hover:rotate-12 transition-all p-4 pl-0"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </Link>
          <Link prefetch={false} href="https://instagram.com/krshkodes">
            <a
              target="_blank"
              className="hover:text-[#C13584] hover:rotate-12 transition-all p-4 pl-0"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
          </Link>
          <Link prefetch={false} href="https://blog.krshkodes.co">
            <a
              target="_blank"
              className="hover:text-[#fff] hover:rotate-12 transition-all p-4 pl-0"
              aria-label="Blog"
            >
              <FiBook />
            </a>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            scale: 1.2,
            opacity: 0
          },
          animate: {
            scale: 1,
            opacity: 1
          },
          exit: {
            scale: 0.75,
            opacity: 0
          }
        }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeInOut' }}
        className="flex w-full items-center justify-center relative overflow-hidden"
      >
        <div>
          <Image
            layout="raw"
            width="371"
            height="409"
            sizes="(max-width: 1024px) 315, 347px,
            (max-width: 768px) 185px, 204.5px"
            src={HeroIllustration}
            alt=""
            placeholder="blur"
            loading="lazy"
            className="scale-75 lg:scale-100 overflow-hidden"
          />
        </div>
      </motion.div>
    </header>
  )
}

export default Hero
