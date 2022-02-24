import Link from 'next/link'
import config from 'config'

export function Navbar() {
  return (
    <nav
      className={[
        /** Font & Text */
        `font-display text-2xl font-semibold`,
        /** Flex */
        `flex items-center justify-between w-full h-16`,
        /** Padding */
        `px-2 md:px-4 lg:px-10 xl:px-20`,
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
                /** Spacing */
                `mx-2 p-2`,
                /** Hover Animation */
                `transition-transform hover:-translate-y-0.5 hover:scale-110`,
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
