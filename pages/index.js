import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <div>
        <main className="m-6 flex flex-col justify-center items-center">
          <div className="mt-16">
            <Image src="/bandlogo2.png" width="600" height="300" objectFit="contain" />
          </div>
          <div className="mx-auto hidden md:inline-block mt-6 justify-center items-center">
            <iframe width="550" height="315"src="https://www.youtube.com/embed/bLgcQ-oJbu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="mx-auto md:hidden m-12">
            <iframe width="300" height="200" src="https://www.youtube.com/embed/bLgcQ-oJbu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </main>
      </div>
      <div className="hidden md:inline-block justify-center items-center">
        <Image src='/topImage2.png' className="z-[-1]"  layout="fill" objectFit="cover" />
      </div>
      
      <div className="md:hidden justify-center flex-col items-center">
        <Image src='/topImage2.png' className="z-[-1] mb-20" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}
