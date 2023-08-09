import Timeline from '@/components/timeline'
import Portfolio from '@/components/portfolio'
import Blog from '@/components/blog'
import Skills from '@/components/skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col mt-28 mb-auto px-4'>
      <div className='grid grid-cols-2'>
        <div className='relative col-span-2 max-w-sm md:max-w-md'>
          <div className='flex flex-col'>
            <h1 className='mt-10 text-6xl text-slate-100 text-700 font-mont font-medium z-50'>
              Nick D&apos;Amico
            </h1>
            <span className='self-end text-sm text-emerald-400 uppercase font-mont z-50'>
              Developer &bull; Ruby on Rails &bull; JavaScript
            </span>
          </div>
          <Image
            className='absolute rounded-full z-10 -scale-x-100 -top-10 right-0 md:-right-24 md:-top-20 border-4 border-emerald-400'
            src='/profile.jpg'
            alt='Profile picture of Nick Damico'
            width={180}
            height={180}
          />
        </div>

        {/* TODO: add lg:-mb-12 back after skills section is complete */}
        <section className='flex flex-col w-100 max-w-md mb-20 col-span-2 md:col-span-1'>
          <h2 className='ml-32 text-lg text-black'></h2>
          <p className='mt-8 uppercase'>
            I&apos;m a software developer from East Tennessee with{' '}
            <em>
              4+ years of professional{' '}
              <span className='text-rose-600'> Ruby on Rails</span> &amp;{' '}
              <span className='text-amber-400'>JavaScript</span> experience{' '}
            </em>
            working in the fashion / appareal industry at Tiltworks, Inc. and a
            background in the liqudation of new car dealership fixed assets at
            auction.
          </p>
        </section>

        <Skills title='Skills' />
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <Timeline title='Timeline' />
        <Portfolio title='Portfolio' />
        <Blog title='Blog' />
      </div>
    </main>
  )
}
