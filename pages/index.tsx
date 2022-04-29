import Hero from 'components/Home/Hero'
import Projects from 'components/Home/Projects'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='space-y-12 lg:space-y-40'>
      <Hero />
      {/* <Projects /> */}
    </div>
  )
}

export default Home
