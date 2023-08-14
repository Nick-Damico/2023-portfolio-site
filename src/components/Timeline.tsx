import TimeLineList from '@/components/timeline/TimeLineList'
import data from '@/components/timeline/data'

export default function Timeline({ title }: { title: string }) {
  return (
    <section className='col-span-2 md:col-start-2 md:col-span-1 mb-6 z-50'>
      <h2 className='section-title'>{title}</h2>
      <TimeLineList data={data} />
    </section>
  )
}
