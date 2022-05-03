import type { NextPage } from 'next'

import * as React from 'react'

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('components/Home/Hero'))

const Home: NextPage = () => {
  return (
    <div className="space-y-12 lg:space-y-40">
      <Hero />
    </div>
  )
}

export default Home
