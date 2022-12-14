import type { NextPage } from 'next'

import * as React from 'react'

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('components/Home/Hero'))

const Home: NextPage = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Home
