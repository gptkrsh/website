import Image from 'next/image'

import ProfilePicture from 'assets/images/krshkodes.png'

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
      <div className={[`w-full`].join(' ')}>
        <h1
          className={[
            /** Font & Text */
            `text-3xl lg:text-4xl xl:text-6xl font-black leading-[1.2em] max-w-4xl`,
            /** Spacing */
            `mb-6`,
          ].join(' ')}
        >
          Professionalism is a Passion.
        </h1>
        <p
          className={[
            /** Container */
            `max-w-4xl`,
            /** Spacing */
            `mb-6`,
            /** Font & Text */
            `text-lg`,
          ].join(' ')}
        >
          Helping organisations build unforgettable seamless application. I
          focus on the frontend, and build exceptionally performant and
          accessible sites.
        </p>
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
      </div>
      <div
        className={[
          `bg-gray-800 opacity-30`,
          `p-4`,
          `rounded-lg`,
          `h-full`,
          `absolute -z-10 right-24 top-24 overflow-hidden`,
        ].join(' ')}
        style={{ animation: 'flying-pulse 8s linear infinite' }}
      >
        <Image src={ProfilePicture}></Image>
      </div>
    </header>
  )
}

export default Hero
