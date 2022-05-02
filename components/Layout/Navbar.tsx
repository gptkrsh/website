import Link from 'next/link'

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
    </nav>
  )
}
