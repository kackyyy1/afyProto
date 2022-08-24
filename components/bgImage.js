import Image from 'next/image'

export default function bgImage() {
  return (
    
    <>
        <div className="hidden md:inline-block fixed top-0 left-0 w-full h-screen z-[-1]">
            <Image src='/topImage2.png' layout="fill" objectFit="cover" />
        </div>
    
        <div className="md:hidden fixed top-0 left-0 w-full h-screen z-[-1]">
            <Image src='/topImage2.png' className="mb-20" layout="fill" objectFit="cover" />
        </div>
    </>
  )
}