import Timeline from '@/components/timeline'
import Portfolio from '@/components/portfolio'
import Blog from '@/components/blog'

export default function Home() {
  return (
    <main className='flex flex-col mt-28 mb-auto px-4'>
      <div className='flex flex-col max-w-sm'>
        <h1 className='mt-10 text-4xl text-slate-100 text-700 fontMont font-bold'>
          Nicholas D&apos;Amico
        </h1>
        <span className='self-end text-sm text-emerald-400 uppercase font-mont'>
          Developer &bull; Ruby on Rails &bull; JavaScript
        </span>
      </div>

      <section className='flex flex-col w-100 max-w-md mb-20 lg:-mb-12'>
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

      <div className='grid grid-cols-2 gap-2'>
        <Timeline title='Timeline' />
        <Portfolio title='Portfolio' />
        <Blog title='Blog' />
      </div>
    </main>
  )
}
