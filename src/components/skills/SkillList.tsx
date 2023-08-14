'use client'

import React, { ReactNode } from 'react'
import { Skill, Skills } from '@/components/skills/data'
import SkillItem from '@/components/skills/SkillItem'

export default function SkillList({ data }: { data: Skills }) {
  const [selected, setSelected] = React.useState()
  const onMouseOver = () => {}

  return (
    <div className='grid grid-cols-4 gap-2 w-3/4 m-auto justify-items'>
      {Object.keys(data).map((category, idx): ReactNode => {
        return (
          <div
            key={category}
            className={`flex flex-col col-start-${
              idx + 1
            } col-span-1 items-center space-y-3`}
          >
            {data[category].map(
              ({ id, filename, altText }: Skill): ReactNode => (
                <SkillItem
                  key={id}
                  imgSrc={`/${filename}`}
                  imgAlt={altText}
                  width={40}
                  height={40}
                />
              )
            )}
          </div>
        )
      })}
    </div>
  )
}
