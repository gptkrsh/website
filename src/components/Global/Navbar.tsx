import Link from "next/link"
import { FiTwitter, FiGithub } from "react-icons/fi"

const Navbar = () => {
  return (
    <nav
      className={[
        /** Font & Text */
        `font-display text-lg font-semibold`,
        /** Flex */
        `flex items-center justify-between w-full h-16`,
        /** Padding */
        `px-2 md:px-4 lg:px-10 xl:px-20`,
      ].join(' ')}
    >
      <Link href={'/'}>
        <a>krshdev</a>
      </Link>
      <div className="inline-flex items-center justify-evenly">
        <Link href={'https://twitter.com/krshdev'}>
          <a target='_blank' className="mx-4"><FiTwitter /></a>
        </Link>
        <Link href={'https://github.com/krshdev'}>
          <a target='_blank' className="mx-4"><FiGithub /></a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
