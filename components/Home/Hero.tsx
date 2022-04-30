import Image from 'next/image'

import ProfilePicture from 'assets/images/krshkodes.png'
import Link from 'next/link'

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
        <div className={[`max-w-full md:max-w-max`, `relative`, `md:py-4 md:pr-2`, `visibility-assist`, `text-center md:text-left`].join(' ')}>
          <h1
            className={[
              /** Font & Text */
              `text-4xl xl:text-6xl font-black leading-[1.2em] max-w-4xl`,
              /** Spacing */
              `mb-6`,
              `block`
            ].join(' ')}
          >
            Professionalism is a Passion.
          </h1>
          <p
            className={[
              /** Container */
              `lg:max-w-lg xl:max-w-4xl`,
              /** Spacing */
              `mb-6`,
              /** Font & Text */
              `md:  text-lg`,
              `block mx-auto md:mx-0`
            ].join(' ')}
          >
            Helping organisations build unforgettable seamless application. I
            focus on the frontend, and build exceptionally performant and
            accessible sites.
          </p>
          <Link href='mailto:hi@krshkodes.co'>
            <a className='flex items-center justify-center w-full md:block'>
          <button
            className={[
              `text-lg`,
              `block w-max px-4 py-2`,
              `bg-gray-900`,
              /** Spacing */
              `mb-6`,
              /** Custom Classes */
              'gradient-border',
            ].join(' ')}
          >
            hi@krshkodes.co
          </button>
          </a>
          </Link>
        </div>
      </div>
      <div
        className={[
          `bg-gray-800 opacity-10 lg:opacity-30`,
          `p-4`,
          `rounded-lg`,
          `max-w-xs lg:max-w-sm xl:max-h-md`,
          `absolute -z-10 -right-20 -bottom-80 md:right-12 md:top-0 overflow-hidden`,
          `animate-none`,
        ].join(' ')}
        style={{
          animation: 'flying-pulse 8s linear infinite',
          transform: 'scale(70%)',
        }}
      >
        <Image src={ProfilePicture} layout="intrinsic"></Image>
      </div>
    </header>
  )
}

export default Hero
