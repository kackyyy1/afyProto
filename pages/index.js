import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <div>
        <main className={styles.main}>
          <Image src="/bandlogo2.png" width="680" height="400" />

          <div className="flex">
            <iframe width="550" height="300" src="https://www.youtube.com/embed/bLgcQ-oJbu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </main>
      </div>
      <div>
        <Image src='/topImage.jpg' className="z-[-1]" width="1920" height="1080" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}
