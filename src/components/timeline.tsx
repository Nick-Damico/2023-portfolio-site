export default function Timeline({ title }: { title: string }) {
  return (
    <section className='w-100'>
      <h2 className='section-title'>{title}</h2>
      <ol className='space-y-2 border-l-2 border-emerald-400'>
        <li className='relative ml-3 before:absolute before:content-[""] before:w-3 before:h-3 before:rounded-full before:top-4 before:-left-[1.2rem] before:bg-emerald-400'>
          <span className='block font-bold text-rose-600'>
            Apr 2019 - June 2023
          </span>
          Tiltworks, Inc - <i>Software Engineer</i>
        </li>
        <li className='relative ml-3 before:absolute before:content-[""] before:w-3 before:h-3 before:rounded-full before:top-4 before:-left-[1.2rem] before:bg-emerald-400'>
          <span className='block font-bold text-rose-600'>
            Mar 2018 - Dec 2018
          </span>
          Flatiron Bootcamp - <i>Software Engineering</i>
        </li>
        <li className='relative ml-3 before:absolute before:content-[""] before:w-3 before:h-3 before:rounded-full before:top-4 before:-left-[1.2rem] before:bg-emerald-400'>
          <span className='block font-bold text-rose-600'>
            Mar 2017 - Sept 2017
          </span>
          Teamtreehouse.com - <i>Front-End Techdegree</i>
        </li>
        <li className='relative ml-3 before:absolute before:content-[""] before:w-3 before:h-3 before:rounded-full before:top-4 before:-left-[1.2rem] before:bg-emerald-400'>
          <span className='block font-bold text-rose-600'>2007 - 2019</span>
          DamicoAuctions.com - <i>Licensed Auctioneer</i>
        </li>
      </ol>
    </section>
  )
}
