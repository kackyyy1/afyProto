import Image from 'next/image'
import bgImage from '../components/bgImage'
import Link from 'next/link';

export default function schedule() {

  const data = bgImage();

  return (
    <div className='content-center mx-auto max-w-screen-lg max-h-full'>
        <div>
            {data}
        </div>
        <div className="text-4xl text-center p-6 ">
            <h1>- Live Schedule -</h1>
        </div>

        <p className='p-4'></p>

        <div className="max-w-screen-xl text-gray-100 bg-gray-900  md:float-none rounded-2xl">
            <h1 className="text-center text-4xl py-4">
                2022.10.23(Sun)
            </h1>
            <div className="mx-auto p-2 text-center">
                <Image src="/liveImage2.jpg" width={448} height={252} className="z-20" />
            </div>             
            <div className=" text-gray-100 text-2xl text-center">
                <p className="pb-6">please wait for a while ...</p>
            </div>
            <p className='p-4'></p>
        </div>

            <p className='p-4'></p>

            <div className="max-w-screen-xl text-gray-100 bg-gray-900  md:float-none rounded-2xl">
                <h1 className="text-center text-4xl py-4">
                    2022.10.08(Sat)
                </h1>
                <div className="hidden md:inline-block float-left mx-auto p-2">
                    <Image src="/20221008.jpg" width={450} height={550} className="z-20" />
                </div>
                <div className="md:hidden p-2 w-full text-center">
                    <Image src="/20221008.jpg" width={450} height={550} className="z-20" />
                </div>
                <div className=" text-gray-100 text-2xl text-center">
                    <p className="pb-6">@下北沢DaisyBar pre.</p>
                    <p className="pb-10">｢FairWay｣</p>
                    <p className="pb-6">OPEN:16:00</p>
                    <p className="pb-10">START:16:30</p>
                    <p>w/</p>
                    <p>the slow films</p>
                    <p>國</p>
                    <p>ui iwasaki</p>
                    <p>Narco-lepsy</p>
                    <p>ユノハナ</p>
                    <p className="pb-10">AND LORELEI</p>                
                    <p className="pb-10">Ticket：Adv￥2,500+D / Door￥3,000+D</p>
                    <Link href="https://tiget.net/events/197296">
                        <button className="bg-orange-600 hover:bg-orange-200 duration-300 ...">チケット予約</button>
                    </Link>
                </div>
                <p className='p-4'></p>
            </div>
            <p className='p-4'></p>

            <div className="max-w-screen-xl text-gray-100 bg-gray-900  md:float-none rounded-xl">
                <h1 className="text-center text-4xl py-4">
                    2022.8.20(Sat)
                </h1>
                <div className="hidden md:inline-block float-left mx-auto p-2">
                    <Image src="/20220820.jpg" width={450} height={550} className="z-20" />
                </div>
                <div className="md:hidden p-2 w-full text-center">
                    <Image src="/20220820.jpg" width={450} height={550} className="z-20" />
                </div>
                <div className=" text-gray-100 text-2xl text-center">
                    <p className="pb-6">@下北沢MOSAiC pre.</p>
                    <p className="pb-10">｢白を彩れ vol.2｣</p>
                    <p className="pb-6">OPEN 11:30</p>
                    <p className="pb-10">START 11:45</p>
                    <p>w/</p>
                    <p>灰かぶり</p>
                    <p>Millennium Axis</p>
                    <p className="pb-10">高橋 龍</p>                
                    <p className="pb-10">Ticket：￥2,000+D</p>
                        <a className="bg-orange-600 hover:bg-orange-200 duration-300 ...">チケット予約</a>
                    <p className="text-sm pb-12">※TwitterDMも取り置き承ります</p>
                </div>
            </div>
            <p className='p-4'></p>

        </div>
  )
}