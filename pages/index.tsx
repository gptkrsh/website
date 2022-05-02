import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('components/Home/Hero'))
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='space-y-12 lg:space-y-40'>
      <Hero />
    </div>
  )
}

export default Home
