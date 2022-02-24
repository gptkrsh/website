import { FaTwitter, FaGithub } from 'react-icons/fa/index'

import { IconType } from 'react-icons/lib'

const config: Config = {
  name: 'Krish Gupta',
  siteName: 'krshdev',
  role: 'Full Stack Developer',
  headline: 'Developing experiences through code',
  socials: [
    {
      name: 'Twitter',
      url: 'https://twitter.com/krshdev',
      icon: FaTwitter,
    },
    {
      name: 'Github',
      url: 'https://github.com/krshdev',
      icon: FaGithub,
    },
  ],
  meta: {
    title: (name, siteName, role, headline) => `${headline} | ${role} - ${name} | ${siteName}`,
    description: `I’m a full stack developer, who helps organisations to build seamless unforggetable experiences. I focus on the frontend, and build exceptionally performant sites, using the latest technologies.`,
    keywords: ['webdev', 'developer', 'open source', 'javascript'],
    opengraph: {
      siteName: 'krshdev',
      url: 'https://krshdev.co',
      banner: ''
    }
  }
}

export default config

interface Config {
  name: string
  siteName: string
  role: string
  headline: string
  socials: Array<NavigationLink>
  meta: {
    title: (name: string, siteName: string, role: string, headline: string) => string
    description: string
    keywords: Array<string>
    canonical?: string
    opengraph?: {
      siteName: string
      url: string
      banner: string
    }
  }
}

interface NavigationLink {
  name: string
  icon: IconType
  url: string
}
