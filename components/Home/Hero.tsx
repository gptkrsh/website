import Image from 'next/image'
import ProfilePicture from 'assets/images/krshkodes.png'
import Link from 'next/link'
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiBook,
} from 'react-icons/fi'

function Hero() {
  return (
    <header
      className={[
        /** Font & Text */
        `font-display text-gray-300`,
        /** Flex */
        `flex w-full items-center justify-evenly`,
        /** Spacing */
        `my-8 px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20`,
        /** Overflow */
        `relative overflow-hidden`,
      ].join(' ')}
      style={{ height: 'calc(100vh - 6rem)' }}
    >
      <div className="w-full">
        <div
          className={[
            `max-w-full md:max-w-max`,
            `relative`,
            `visibility-assist`,
            `text-center md:text-left`,
            `flex flex-col items-center justify-center md:block`,
            `lg:max-w-[66vw]`
          ].join(' ')}
        >
          <h1
            className={[
              /** Font & Text */
              `text-6xl xl:text-8xl font-black leading-[1.2em] max-w-6xl`,
              /** Spacing */
              `mb-6`,
              `block`,
            ].join(' ')}
          >
            Professionalism is a Passion.
          </h1>
          <p
            className={[
              /** Spacing */
              `mb-6`,
              /** Font & Text */
              `text-lg md:text-2xl`,
              `block mx-auto md:mx-0`,
            ].join(' ')}
          >
            Helping organisations build unforgettable seamless application. I
            focus on the frontend, and build exceptionally performant and
            accessible sites.
          </p>
          <Link href="mailto:hi@krshkodes.co">
            <a className="flex items-center justify-center w-full mb-8 md:block max-w-max">
              <button
                className={[
                  `text-lg md:text-2xl`,
                  `block w-max px-4 py-2`,
                  `bg-gray-900`,
                  /** Custom Classes */
                  'gradient-border',
                ].join(' ')}
              >
                hi@krshkodes.co
              </button>
            </a>
          </Link>
          <div
            className={[
              `flex items-center justify-center md:justify-start`,
              `text-gray-200 text-xl lg:text-2xl`,
              `mb-6 space-x-3 md:space-x-6`,
            ].join(' ')}
          >
            <Link href="https://twitter.com/krshkodes">
              <a
                target="_blank"
                className="hover:text-[#1DA1F2] hover:rotate-12 transition-all p-4"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
            </Link>
            <Link href="https://github.com/krshkodes">
              <a
                target="_blank"
                className="hover:text-[#fff] hover:rotate-12 transition-all p-4"
                aria-label="Github"
              >
                <FiGithub />
              </a>
            </Link>
            <Link href="https://linkedin.com/in/krshkodes">
              <a
                target="_blank"
                className="hover:text-[#0A66C2] hover:rotate-12 transition-all p-4"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </Link>
            <Link href="https://instagram.com/krshkodes">
              <a
                target="_blank"
                className="hover:text-[#C13584] hover:rotate-12 transition-all p-4"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
            </Link>
            <Link href="https://blog.krshkodes.co">
              <a
                target="_blank"
                className="hover:text-[#fff] hover:rotate-12 transition-all p-4"
                aria-label="Blog"
              >
                <FiBook />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={[
          `bg-gray-800 opacity-10 lg:opacity-30`,
          `p-4`,
          `rounded-lg`,
          `absolute -z-10 -right-20 -bottom-80 md:right-12 md:top-0 overflow-hidden`,
          `hover:opacity-100 transition-opacity`,
        ].join(' ')}
        style={{
          animation: 'flying-pulse 8s linear infinite',
          transform: 'scale(70%)',
          willChange: 'opacity',
        }}
      >
        <Image
          alt=""
          src={ProfilePicture}
          className="block m-auto"
          layout="fixed"
          width="483"
          sizes="338.1"
        ></Image>
      </div>
    </header>
  )
}

export default Hero
