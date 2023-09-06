'use client'

import MainHeading from '@/components/MainHeading'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import QuouteBlock from './QuoteBlock'
import Skill from '@/components/Skill'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog'
import { useState } from 'react'

export default function Home() {
  const [skills, setSkills] = useState<string[]>([])
  const handleProjectMouseOver = (techList: string[]) => {
    setSkills(techList)
  }
  const handleProjectMouseOut = () => setSkills([])

  return (
    <main className='flex flex-col mt-28 mb-auto px-4'>
      <div className='grid grid-cols-2 z-50'>
        <div className='col-span-2'>
          <MainHeading />
        </div>

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
          <Skill title='Skills' activeSkills={skills} />
        </div>

        <div className='col-span-2 md:col-span-1 z-50'>
          <Portfolio
            title='Portfolio'
            onMouseOver={handleProjectMouseOver}
            onMouseOut={handleProjectMouseOut}
          />
        </div>

        <div className='col-span-2 md:col-span-1 '>
          <Blog title='Blog' />
        </div>
      </div>
    </main>
  )
}
