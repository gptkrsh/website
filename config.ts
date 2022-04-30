import { FaTwitter, FaGithub } from 'react-icons/fa/index'
import { IconType } from 'react-icons/lib'

// The Projects in components/Home/Projects.tsx, should still be edited manually.

const config: Config = {
  name: 'Krish Gupta',
  siteName: 'krshkodes',
  role: 'Full Stack Developer',
  headline: ['I turn your ideas into', 'experiences.'],
  socials: [
    {
      name: 'Twitter',
      url: 'https://twitter.com/krshkodes',
      icon: FaTwitter,
    },
    {
      name: 'Github',
      url: 'https://github.com/krshkodes',
      icon: FaGithub,
    },
  ],
  meta: {
    title: (name, siteName, role, headline) => `${headline} | ${role} - ${name} | ${siteName}`,
    description: `Helping organisations build unforgettable seamless application. I focus on the frontend, and build exceptionally performant & accessible sites.`,
    keywords: ['webdev', 'developer', 'open source', 'javascript'],
    opengraph: {
      siteName: 'krshkodes',
      url: 'https://krshkodes.co',
      banner: ''
    }
  }
}

export default config

interface Config {
  name: string
  siteName: string
  role: string
  headline: Array<string>
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
