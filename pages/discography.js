import Image from 'next/image'
import bgImage from '../components/bgImage'
import Link from 'next/link';

export default function discography() {

  const data = bgImage();
  return (
    <div className='content-center mx-auto max-w-screen-lg max-h-full'>
        <div>
            {data}
        </div>
        <div className="text-4xl text-center p-6 ">
            <h1>- Discography -</h1>
        </div>
        <p className='p-6'></p>

        <div className="max-w-screen-xl text-gray-100 bg-gray-900  md:float-none rounded-xl relative">
          <p className=" text-gray-100 text-2xl p-6 text-center">3rd Single 「蜃気楼」</p>
          <div className="hidden md:inline-block float-left mx-auto p-2 ">
            <Image src="/3rdSingle.jpg" width={450} height={450} objectFit="fill"  />
          </div>
          <div className="md:hidden p-2 w-full text-center">
            <Image src="/3rdSingle.jpg" width={450} height={450} objectFit="contain" />
          </div>
          <div className=" text-gray-100 text-2xl text-center">
            <h1 className='mx-auto my-6'>2022.06.18 Digital Release</h1>
            <iframe className="mx-auto mb-6" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="200" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/%E8%9C%83%E6%B0%97%E6%A5%BC-single/1627149890"></iframe>
            <Link href="https://www.youtube.com/watch?v=chcRVUBGB4M">
              <button className="p-4  rounded-md bg-orange-600 hover:bg-orange-200 duration-300 ...">
                @YouTube MV</button>
            </Link>

            <p className='p-6'></p>

            <Link href="https://linkcloud.mu/646ea6e0">
              <button className="p-4  rounded-md bg-orange-600 hover:bg-orange-200 duration-300 ...">@Subscriptions</button>
            </Link>
            <p className='p-6'></p>
          </div>
        </div>

          <p className='p-12'></p>

        <div className="max-w-screen-xl text-gray-100 bg-gray-900  md:float-none rounded-xl">
          <p className=" text-gray-100 text-2xl p-4 text-center">2nd Single 「イデアの夏」</p>
          <div className="hidden md:inline-block float-left mx-auto p-2 ">
          <Image src="/2ndSingle.jpg" width={450} height={450} objectFit="fill"/>
          </div>
          <div className="md:hidden p-2 w-full text-center">
            <Image src="/2ndSingle.jpg" width={450} height={450} layout="" objectFit="cover" />
          </div>
          <div className=" text-gray-100 text-2xl text-center">
            <p className='mx-auto my-6' >2022.05.14 Digital Release</p>
            <iframe className="mx-auto mb-6" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="200" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/%E3%82%A4%E3%83%87%E3%82%A2%E3%81%AE%E5%A4%8F-single/1621975769"></iframe>
            <Link href="https://www.youtube.com/watch?v=cmRMkgMDDkA">
              <button className="p-4  rounded-md bg-orange-600 hover:bg-orange-200 duration-300 ...">
                @YouTube</button>
            </Link>
            
            <p className='p-6'></p>

            <Link href="https://linkcloud.mu/ecebea93">
              <button className="p-4  rounded-md bg-orange-600 hover:bg-orange-200 duration-300 ...">@Subscriptions</button>
            </Link>
            <p className='p-6'></p>
          </div>
        </div>

        <p className='p-6'></p>


        <div className="max-w-screen-xl text-gray-100 bg-gray-900  md:float-none rounded-xl">
          <p className=" text-gray-100 text-2xl p-4 text-center">1st Single 「frail」</p>
          <div className="hidden md:inline-block float-left mx-auto p-2 ">
            <Image src="/1stSingle.jpg" width={450} height={450} objectFit="fill" />
          </div>
          <div className="md:hidden p-2 w-full text-center">
            <Image src="/1stSingle.jpg" width={450} height={450} layout="" objectFit="cover" />
          </div>
          <div className=" text-gray-100 text-2xl text-center">
            <p className='mx-auto my-6'>2021.01.09 Digital Release</p>
            <iframe className="mx-auto mb-6" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="200" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/jp/album/frail-single/1547394876"></iframe>
            <Link href="https://www.youtube.com/watch?v=bLgcQ-oJbu8">
            <button className="p-4  rounded-md bg-orange-600 hover:bg-orange-200 duration-300 ...">
              @YouTube MV</button>
            </Link>

            <p className='p-4'></p>

            <Link href="https://open.spotify.com/track/0gfmNtvx684lbSgMeV1Lr8?si=-UdNXUZqSTuUxrKBVXvdeQ&nd=1">
              <button className="p-4  rounded-md bg-orange-600 hover:bg-orange-200 duration-300 ...">@Spotify</button>
            </Link>

            <p className='p-6'></p>

          </div>              
        </div>  

        <p className='p-6'></p>

    </div>        

  )
}