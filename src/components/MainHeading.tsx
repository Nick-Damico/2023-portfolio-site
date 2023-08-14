import Image from 'next/image'
import ProfileImg from 'public/profile.jpg'

export default function MainHeading() {
  return (
    <div className='relative max-w-sm sm:max-w-md md:max-w-md'>
      <div className='flex flex-col'>
        <h1 className='mt-10 text-6xl sm:text-slate-100 text-700 font-mont font-medium z-50'>
          Nick D&apos;Amico
        </h1>
        <span className='self-end text-sm text-emerald-400 uppercase font-mont z-50'>
          Developer &bull; Ruby on Rails &bull; JavaScript
        </span>
      </div>
      <Image
        className='absolute rounded-full z-10 -scale-x-100 -top-12 sm:-top-20 md:-top-20 right-0 sm:-right-32 md:-right-32 border-4 border-emerald-400'
        src={ProfileImg}
        alt='Profile picture of Nick Damico'
        width={180}
        height={180}
      />
    </div>
  )
}
