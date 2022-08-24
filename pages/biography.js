import Image from 'next/image'
import bgImage from '../components/bgImage'
import Link from 'next/link';

export default function biography() {

  const data = bgImage();

  return (
    <div className="content-center">
      <div className="text-4xl text-center p-6">
        <h1>- Biography -</h1>
      </div>
      <div className="pt-6 pb-6 max-w-4xl mx-auto">
        <Image src="/liveImage.jpg" width="900" height="300" layout="responsive" objectFit="contain" />
      </div>

      <div className="mx-auto text-left p-6 text-gray-100 bg-gray-900 shadow-outline max-w-4xl rounded-2xl">
        <p>東京出身の5人組、女性ボーカルバンド。</p>
        <p className="pb-6">アンビエント・シューゲイザー・ポストロックを織り交ぜた、
        独自の音楽性を展開する。</p>
        <p className="pb-6">
          2019年7月 大学の軽音サークルにて集まった5人によりバンドを結成</p>
        <p className="pb-6">2021年1月 1st Single 「frail」発表</p>
        <p className="pb-6">2022年5月 2nd Single 「イデアの夏」発表</p>
        <p className="pb-6">2022年6月 3rd Single 「蜃気楼」発表</p>
        <p className="pb-6">2022年7月 立川BABELでの初LIVEを皮切りに、LIVE活動開始</p>
        <p>現在も、東京都内を中心としたLIVE活動、およびYouTubeや
        各種サブスクリプションサービスへの楽曲リリースなど、精力的に活動中。</p>
      </div>
      
      <div className="text-4xl text-center p-6">
        <h1>― Members ―</h1>
      </div>
      
        <div className="p-6 text-center justify-center items-center ">
          <Image src="/hatamasuImage.jpg" width={500} height={300} objectFit="fill" className='rounded-2xl' />
          <p className=" text-gray-100 text-2xl">Vocal：hatamasu</p>
        </div>

        <div className="p-6 text-center justify-center items-center">
          <Image src="/hanaImage.jpg" width={500} height={300} objectFit="fill" className='rounded-2xl' />
          <p className=" text-gray-100 text-2xl">Guitar：hanaizumi</p>
          <p className=" text-gray-100 text-2xl">Twitter：
            <Link href="https://twitter.com/izumi_aifyu">
              <a className="text-indigo-700">@izumi_aifyu</a>
            </Link>
          </p>
        </div>

        <div className="p-6 text-center justify-center items-center">
          <Image src="/kakiImage.jpg" width={500} height={300} objectFit="fill" className='rounded-2xl' />
          <p className=" text-gray-100 text-2xl">Guitar：kaki</p>
          <p className=" text-gray-100 text-2xl">Twitter：
            <Link href="https://twitter.com/kaki_afy">
              <a className="text-indigo-700">@kaki_afy</a>
            </Link>
          </p>
        </div>

        <div className="p-6 text-center justify-center items-center">
          <Image src="/takaraImage2.jpg" width={500} height={300} objectFit="fill" className='rounded-2xl' />
          <p className=" text-gray-100 text-2xl">Bass：takara</p>
          <p className=" text-gray-100 text-2xl">Twitter：
            <Link href="https://twitter.com/takarabassrain">
              <a className="text-indigo-700">@takarabassrain</a>
            </Link>
          </p>
        </div>

        <div className="p-6 text-center justify-center items-center">
          <Image src="/gayaImage.jpg" width={500} height={300} objectFit="fill" className='rounded-2xl' />
          <p className=" text-gray-100 text-2xl">Drums：gaya</p>
        </div>

      <div>
        {data}
      </div>
    </div>
  )
}