import { ReactNode } from 'react'

export default function Timeline({ title }: { title: string }) {
  const events = [
    {
      startDate: 'Apr 2019',
      endDate: 'June 2023',
      company: 'Tiltworks, Inc',
      title: 'Software Engineer'
    },
    {
      startDate: 'Mar 2017',
      endDate: 'Jan 2018',
      company: 'Flatiron Bootcamp',
      title: 'Software Engineering'
    },
    {
      startDate: 'Sept 2016',
      endDate: 'Apr 2017',
      company: 'Teamtreehouse.com',
      title: 'Front-End Techdegree'
    },
    {
      startDate: 'Jan 2008',
      endDate: 'Mar 2019',
      company: 'Damicoauctions.com',
      title: 'Licensed Auctioneer'
    },
    {
      startDate: 'Sept 2006',
      endDate: 'May 2007',
      company: 'Walters State CC',
      title: 'Technical Certification EMT-IV'
    }
  ]

  return (
    <section className='col-span-2 md:col-start-2 md:col-span-1 mb-6'>
      <h2 className='section-title'>{title}</h2>
      <ol className='space-y-2 border-l-2 border-emerald-400'>
        {events.map(
          ({ startDate, endDate, company, title }, i): ReactNode => (
            <li
              key={i}
              className='relative ml-3 before:absolute before:content-[""] before:w-3 before:h-3 before:rounded-full before:top-4 before:-left-[19px] before:bg-emerald-400'
            >
              <span className='block font-bold text-rose-600 -mb-1'>
                {startDate} - {endDate}
              </span>
              <p className='ml-1'>
                {company} - <i>{title}</i>
              </p>
            </li>
          )
        )}
      </ol>
    </section>
  )
}
