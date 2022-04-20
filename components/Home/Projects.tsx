import Image from 'next/image'
import Link from 'next/link'
import Project1Image from 'assets/images/project1.png'
import Project2Image from 'assets/images/project2.png'

function Projects() {
  return (
    <article id="projects" className="my-8 flex w-full flex-col items-center justify-evenly px-2 font-display md:my-0 md:px-4 lg:px-10 xl:px-16 2xl:px-20">
      <h1 className="mb-8 space-y-2 text-4xl font-black md:text-5xl">
        Projects
      </h1>
      <div className="space-y-20 py-8">
        <section className="flex w-full flex-col items-center justify-evenly lg:flex-row">
          <div className="mb-6 h-full w-full lg:m-0">
            <Image src={Project1Image} className="h-full rounded" />
          </div>
          <div className="w-full text-center lg:ml-16 lg:text-left">
            <h1 className="mb-2 space-y-2 text-2xl font-black md:text-4xl">
              DevNFT
            </h1>
            <p className="max-w-prose py-4 text-opacity-70 md:text-lg">
              We see mostly the influencers or artists taking the NFT space.
              Every day we use FOSS without giving much gratitude to the
              developers behind it. Nowadays, Streamers and Gamers earn more
              than such developers. To solve all such hurdles and bring
              recognition to OS developers. We have created the DevNFT.
            </p>
            <div className="flex flex-row justify-evenly space-x-5 text-lg md:text-xl lg:justify-start">
              <Link href="https://devnft.xyz/">
                <a className="max-w-max rounded-sm border-4 border-brand-500 bg-brand-500 px-4 py-1 text-white transition-colors hover:bg-opacity-0 hover:text-black">
                  <span className="hidden md:inline">View</span> Live Version
                </a>
              </Link>
              <Link href="https://github.com/WebXDAO/DEV-NFT">
                <a className="max-w-max rounded-sm border-4 border-brand-500 bg-brand-500 bg-opacity-0 px-4 py-1 text-black transition-colors hover:bg-opacity-100 hover:text-white">
                  Source Code
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="flex w-full flex-col items-center justify-evenly lg:flex-row-reverse">
          <div className="mb-6 h-full w-full lg:m-0">
            <Image src={Project2Image} className="h-full rounded" />
          </div>
          <div className="w-full text-center lg:mr-16 lg:text-left">
            <h1 className="mb-2 space-y-2 text-2xl font-black md:text-4xl">
              PomPom
            </h1>
            <p className="max-w-prose py-4 text-opacity-70 md:text-lg">
              Great ideas are created when curious minds meet. Such meetings are
              worth remembering. Posting a picture on twitter, instagram or
              cloud drive service is cool but, they might be taken down someday.
              Creating a POM will create your meeting records which are
              immutable and store them for forever on the blockchain.{' '}
            </p>
            <div className="flex flex-row justify-evenly space-x-5 text-lg md:text-xl lg:justify-start">
              <Link href="https://soft-snow-3708.on.fleek.co/">
                <a className="max-w-max rounded-sm border-4 border-brand-500 bg-brand-500 px-4 py-1 text-white transition-colors hover:bg-opacity-0 hover:text-black">
                  <span className="hidden md:inline">View</span> Live Version
                </a>
              </Link>
              <Link href="https://github.com/WebXDAO/POMPOM">
                <a className="max-w-max rounded-sm border-4 border-brand-500 bg-brand-500 bg-opacity-0 px-4 py-1 text-black transition-colors hover:bg-opacity-100 hover:text-white">
                  Source Code
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

export default Projects
