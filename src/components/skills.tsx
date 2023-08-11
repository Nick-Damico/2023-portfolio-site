import Image from 'next/image'
import { ReactNode } from 'react'

export default function Skills({ title }: { title: string }) {
  const skills = {
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
    <section className='flex flex-col col-span-2 md:col-start-2 md:col-span-1 z-50'>
      <h2 className='section-title'>{title}</h2>
      <div className='grid grid-cols-4 gap-2 w-3/4'>
        <div className='flex flex-col col-start-1 col-span-1'>
          {skills.languages.map(
            ({ filename, altText }, idx): ReactNode => (
              <Image
                key={idx}
                className='mb-2'
                src={`/${filename}`}
                alt={altText}
                width={40}
                height={40}
              />
            )
          )}
        </div>
        <div className='flex flex-col col-start-2 col-span-1'>
          {skills.styling.map(
            ({ filename, altText }, idx): ReactNode => (
              <Image
                key={idx}
                className='mb-2'
                src={`/${filename}`}
                alt={altText}
                width={40}
                height={40}
              />
            )
          )}
        </div>
        <div className='flex flex-col col-start-3 col-span-1'>
          {skills.frameworks.map(
            ({ filename, altText }, idx): ReactNode => (
              <Image
                key={idx}
                className='mb-2'
                src={`/${filename}`}
                alt={altText}
                width={40}
                height={40}
              />
            )
          )}
        </div>
        <div className='flex flex-col col-start-4 col-span-1'>
          {skills.misc.map(
            ({ filename, altText }, idx): ReactNode => (
              <Image
                key={idx}
                className='mb-2'
                src={`/${filename}`}
                alt={altText}
                width={40}
                height={40}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
