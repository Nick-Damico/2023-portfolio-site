import { ReactNode } from 'react'
import { Event } from '@/components/timeline/data'
import TimeLineItem from '@/components/timeline/TimeLineItem'

export default function TimeLineList({ data }: { data: Event[] }): ReactNode {
  return (
    <ol className='space-y-2 ml-3 border-l-2 border-emerald-400'>
      {data.map(
        ({
          id,
          startDate,
          endDate,
          company,
          title,
          imgSrc
        }: Event): ReactNode => (
          <TimeLineItem
            key={id}
            startDate={startDate}
            endDate={endDate}
            company={company}
            title={title}
            imgSrc={imgSrc}
          />
        )
      )}
    </ol>
  )
}
