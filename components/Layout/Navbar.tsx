import Link from 'next/link'
import config from 'config'

export function Navbar() {
  return (
    <nav
      className={[
        /** Font & Text */
        `font-display text-lg font-semibold`,
        /** Flex */
        `flex items-center justify-between w-full max-h-14`,
        /** Padding */
        `py-3 px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20`,
      ].join(' ')}
    >
      <Link href={'/'}>
        <a
          className={
            'm-0 transition-transform hover:-translate-y-0.5 hover:scale-110'
          }
        >
          {config.siteName}
        </a>
      </Link>
      <div className="inline-flex items-center justify-evenly">
        {config.socials.map((item, index) => (
          <Link href={item.url} key={index}>
            <a
              className={[
                /** Font */
                `text-base`,
                /** Spacing */
                `mx-2 p-2`,
                /** Hover Animation */
                `transition-colors text-gray-800 hover:text-opacity-70`,
              ].join(' ')}
              target="_blank"
            >
              {<item.icon />}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}
