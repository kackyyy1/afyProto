import Image from 'next/image'
import bgImage from '../components/bgImage'

export default function home() {

const data = bgImage();

  return (
    <>
      <div>
        <main className="flex flex-col justify-center h-screen items-center">
          <div className="pt-32 z-10 ">
            <Image src="/bandlogo2.png" width="600" height="300" objectFit="contain" />
          </div>
          <div className="text-black text-4xl p-6 font-serif hidden md:inline-block" >
            Official Web Site
          </div>
          <div className="mx-auto hidden md:inline-block justify-center items-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bLgcQ-oJbu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="mx-auto md:hidden mt-8 z-20">
            <iframe width="300" height="200" src="https://www.youtube.com/embed/bLgcQ-oJbu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </main>
      </div>
      <div>
        {data}
      </div>
    </>
  )
}
