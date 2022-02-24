import Link from 'next/link'
import config from 'config'

const css = {
  height: 'calc(100vh - 4rem)',
}

function Hero() {
  return (
    <header className='flex items-center justify-evenly w-full px-2 md:px-4 lg:px-10 xl:px-20' style={css}>
      <div className='w-full'>
        <h1 className='my-5 font-bold text-7xl'>{config.headline}</h1>
        <p className='my-5 text-lg text-gray-200'>{config.meta.description}</p>
        <Link href='mailto:hey@krshdev.co'>
          <a className='block max-w-max my-5 py-4 px-6 text-2xl bg-secondary-500 rounded-sm'>hey@krshdev.co</a>
        </Link>
      </div>
      <div className="w-full"></div>
    </header>
  )
}

export default Hero
