import Hero from 'components/Home/Hero'
import Projects from 'components/Home/Projects'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Projects />
    </div>
  )
}

export default Home
