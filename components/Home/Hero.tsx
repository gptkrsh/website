import Link from 'next/link'
import Image from 'next/image'
import config from 'config'
import heroImage from 'assets/images/profile.png'

const css = {
  height: 'calc(100vh - 4rem)',
}

function Hero() {
  return (
    <header
      className="flex w-full my-8 items-center justify-evenly px-2 font-display md:px-4 lg:px-10 xl:px-16 2xl:px-20"
      style={css}
    >
      <div className="flex w-full flex-col items-center text-center lg:block lg:text-left">
        <h4 className="mb-3 hidden text-2xl lg:block">
          Hey, I'm <b>{config.name.split(' ')[0]}</b>
        </h4>
        <div className="mb-5 space-y-2 text-4xl md:text-5xl font-black">
          <h1>{config.headline[0]} <span className="text-brand-500">{config.headline[1]}</span></h1>
        </div>
        <p className="mb-5 max-w-prose p-4 text-lg md:text-xl text-opacity-70 lg:p-0">
          {config.meta.description}
        </p>
        <div className="flex flex-row space-x-5 text-lg md:text-xl">
          <Link href="#projects">
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
      <div className="hidden w-max h-[50%] lg:flex items-center flex-col">
        <Image src={heroImage} className="rounded-full" />
      </div>
    </header>
  )
}

export default Hero
