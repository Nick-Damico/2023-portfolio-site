import Event from '@/components/timeline/Event'

export default function Timeline({ title }: { title: string }) {
  const events = [
    {
      startDate: 'Apr 2019',
      endDate: 'June 2023',
      company: 'Tiltworks, Inc',
      title: 'Software Engineer',
      imgSrc: '/briefcase-solid.svg'
    },
    {
      startDate: 'Mar 2017',
      endDate: 'Jan 2018',
      company: 'Flatiron Bootcamp',
      title: 'Software Engineering Graduate',
      imgSrc: '/book-solid.svg'
    },
    {
      startDate: 'Sept 2016',
      endDate: 'Apr 2017',
      company: 'Teamtreehouse.com',
      title: 'Front-End Techdegree',
      imgSrc: '/book-solid.svg'
    },
    {
      startDate: 'Jan 2008',
      endDate: 'Mar 2019',
      company: 'Damicoauctions.com',
      title: 'Licensed Auctioneer',
      imgSrc: '/briefcase-solid.svg'
    },
    {
      startDate: 'Sept 2006',
      endDate: 'May 2007',
      company: 'Walters State CC',
      title: 'Technical Certification EMT-IV',
      imgSrc: '/book-solid.svg'
    }
  ]

  return (
    <section className='col-span-2 md:col-start-2 md:col-span-1 mb-6 z-50'>
      <h2 className='section-title'>{title}</h2>
      <ol className='space-y-2 border-l-2 border-emerald-400'>
        {events.map(({ startDate, endDate, company, title, imgSrc }, idx) => (
          <Event
            key={idx}
            startDate={startDate}
            endDate={endDate}
            company={company}
            title={title}
            imgSrc={imgSrc}
          />
        ))}
      </ol>
    </section>
  )
}
