import Link from 'next/link'
import Image from 'next/image'
import config from 'config'
import svg from 'public/assets/images/hero.svg'

const css = {
  height: 'calc(100vh - 4rem)',
}

function Hero() {
  return (
    <header
      className="flex w-full items-center justify-evenly px-2 font-display md:px-4 lg:px-10 xl:px-16 2xl:px-20"
      style={css}
    >
      <div className="flex w-full flex-col items-center text-center lg:block lg:text-left">
        <h4 className="mb-3 hidden text-lg lg:block">
          Hey, I'm {config.name.split(' ')[0]}
        </h4>
        <div className="mb-5 space-y-2 text-4xl font-black">
          <h1>{config.headline[0]}</h1>
          <h1 className="text-brand-500">{config.headline[1]}</h1>
        </div>
        <p className="mb-5 max-w-prose p-4 text-lg text-opacity-70 lg:p-0">
          {config.meta.description}
        </p>
        <div className="flex flex-row space-x-5 text-lg">
          <Link href="/projects">
            <a className="max-w-max rounded-sm border-4 border-brand-500 bg-brand-500 px-4 py-1 text-white transition-colors hover:bg-opacity-0 hover:text-black">
              <span className="hidden md:inline">View</span> Projects
            </a>
          </Link>
          <Link href="/go/resume">
            <a className="max-w-max rounded-sm border-4 border-brand-500 bg-brand-500 bg-opacity-0 px-4 py-1 text-black transition-colors hover:bg-opacity-100 hover:text-white">
              Resume
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden w-full lg:flex items-center flex-col">
        <Image src={svg} />
      </div>
    </header>
  )
}

export default Hero