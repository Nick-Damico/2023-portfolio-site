import Timeline from '@/components/timeline'

export default function Home() {
  return (
    <main className='flex flex-wrap mt-28 px-4'>
      <h1 className='mt-20 text-4xl text-slate-100 text-700 fontMont font-bold'>
        Nicholas D&apos;Amico
      </h1>
      <section className='flex flex-col w-100 mb-20'>
        <span className='self-end text-sm text-emerald-400 uppercase font-mont'>
          Ruby on Rails &bull; TypeScript &bull; Programmer
        </span>
        <h2 className='ml-32 text-lg text-black'></h2>
        <p className='mt-8 uppercase'>
          I&apos;m a software developer from East Tennessee with{' '}
          <em>
            4 years of professional
            <span className='text-rose-600'> Ruby on Rails</span> &amp;{' '}
            <span className='text-amber-400'>JavaScript</span> experience
          </em>
          . In 2016 I decided that I wanted to change my life and do something
          for a living that I&apos;m passionate about and love.
        </p>
      </section>

      <Timeline />

      <section className='w-100 md:w-1/2 px-4 mt-8'>
        <h2>Portfolio</h2>
      </section>

      <div className='w-100 md:w-1/2 px-4 mt-8'>
        <div className='w-100'>
          <section>
            <h2>Blog</h2>
          </section>

          <section>
            <h2 className='text-black'>Current Work</h2>
          </section>
        </div>
      </div>
    </main>
  )
}
