import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

  const data = [
    {name:"twitter", route:"/twitter.png", url:"https://twitter.com/aifuyou_band"},
    {name:"instagram", route:"/instagram.png", url:"https://www.instagram.com/aifuyou_official/"},
    {name:"youtube", route:"/youtube.png", url:"https://www.youtube.com/channel/UCk1KR3zNDfcmNO8bACgi5fQ"},
    {name:"apple", route:"/apple-music.png", url:"https://music.apple.com/jp/artist/aifuyou/1547394877"},
    {name:"spotify", route:"/spotify.png", url:"https://open.spotify.com/artist/4vgtX7t6sWR7xym4onhLBg"},
  ]
  
    return (
      <footer className="sticky bottom-0 text-gray-200 border-b　z-10 bg-black">
        <div className="max-w-4xl w-full mx-auto h-24 flex items-center justify-center">
          {data.map((value, index) => (
            <div key={index} className='p-2 block'>
              <Link href={`${value.url}`}>
                <Image src={value.route} width={35} height={35} objectFit="cover" />
              </Link>
            </div>
          ))}
          <p1 className="text-lg ml-4 text-center">© aifuyou</p1>
        </div>
      </footer>
    );
  };
  