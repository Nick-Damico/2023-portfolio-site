import MainHeading from '@/components/MainHeading'
import About from '@/components/About'
import Timeline from '@/components/timeline'
import QuouteBlock from './quote_block'
import Skills from '@/components/skills'
import Portfolio from '@/components/portfolio'
import Blog from '@/components/blog'

export default function Home() {
  return (
    <main className='flex flex-col mt-28 mb-auto px-4'>
      <div className='grid grid-cols-2 z-50'>
        <div className='col-span-2'>
          <MainHeading />
        </div>

        {/* TODO: add lg:-mb-12 back after skills section is complete */}
        <div className='col-span-2 md:col-span-1'>
          <About />
        </div>

        <div className='col-span-2 md:col-start-2 md:col-span-1 mb-6 z-50'>
          <Timeline title='Timeline' />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <div className='col-span-2 md:col-start-1 md:col-span-1 z-50 '>
          <QuouteBlock />
        </div>

        <div className='col-span-2 md:col-start-2 md:col-span-1 z-50'>
          <Skills title='Skills' />
        </div>

        <div className='col-span-2 md:col-span-1 z-50'>
          <Portfolio title='Portfolio' />
        </div>

        <div className='col-span-2 md:col-span-1 '>
          <Blog title='Blog' />
        </div>
      </div>
    </main>
  )
}
