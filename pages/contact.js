import Image from 'next/image'
import bgImage from '../components/bgImage'

export default function home() {

const data = bgImage();

  return (
    <div className='content-center mx-auto max-w-screen-md max-h-full'>
      <div>
        {data}
      </div>
      <div className="pt-12 pb-4 h-screen overflow-hidden">
        <iframe src=
        "https://docs.google.com/forms/d/e/1FAIpQLSeo1KRj90vbm05Lw526K0-kSHAJAW7xdji4We1Vss6uEALutg/viewform?embedded=true"
          className="mx-auto top-0 left-0 rounded-2xl w-full h-full">
          読み込んでいます…</iframe>  
      </div>
    </div>
  )
}