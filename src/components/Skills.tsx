import Image from 'next/image'
import { ReactNode } from 'react'
import Skill from '@/components/skills/Skill'

export default function Skills({ title }: { title: string }) {
  type Skill = {
    filename: string
    altText: string
  }
  type Skills = {
    /*
      NOTE: Skills is using an index signature,
            which means you can use any string
            as a key to access an array of skills */
    [category: string]: Skill[]
  }

  const skills: Skills = {
    languages: [
      {
        filename: 'html5-original.svg',
        altText: 'Hyper Text Markup lanugage 5'
      },
      {
        filename: 'ruby-plain.svg',
        altText: 'Ruby programming language'
      },
      {
        filename: 'javascript-original.svg',
        altText: 'Javascript programming language'
      },
      {
        filename: 'typescript-plain.svg',
        altText: 'Typescript programming language'
      }
    ],
    frameworks: [
      {
        filename: 'rails-plain.svg',
        altText: 'Ruby on Rails'
      },
      {
        filename: 'nextjs-original.svg',
        altText: 'Next js'
      },
      {
        filename: 'react-original.svg',
        altText: 'React js'
      }
    ],
    styling: [
      {
        filename: 'css3-original.svg',
        altText: 'Cascading Style Sheets 3'
      },
      {
        filename: 'bootstrap-plain.svg',
        altText: 'Bootstrap'
      },
      {
        filename: 'tailwindcss-plain.svg',
        altText: 'Tailwindcss'
      }
    ],
    misc: [
      {
        filename: 'rspec-original.svg',
        altText: 'RSpec testing framework'
      },
      {
        filename: 'docker-original.svg',
        altText: 'Docker'
      },
      {
        filename: 'github-original.svg',
        altText: 'Github'
      },
      {
        filename: 'gitlab-original.svg',
        altText: 'Gitlab'
      }
    ]
  }

  return (
    <section className='flex flex-col'>
      <h2 className='section-title'>{title}</h2>
      <div className='grid grid-cols-4 gap-2 w-3/4 m-auto justify-items'>
        {Object.keys(skills).map((category, idx): ReactNode => {
          return (
            <div
              key={`${category}-${idx}`}
              className={`flex flex-col col-start-${
                idx + 1
              } col-span-1 items-center`}
            >
              {skills[category].map(
                (
                  { filename, altText }: { filename: string; altText: string },
                  idx: number
                ): ReactNode => (
                  <Skill
                    key={idx}
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
    </section>
  )
}
