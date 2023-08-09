export default function Portfolio({ title }: { title: string }) {
  return (
    <section className='col-span-2 md:col-span-1 mb-6 z-50'>
      <h2 className='section-title'>{title}</h2>
      <div className='grid gap-1 grid-cols-2 grid-rows-2 box-border h-80'>
        <div className='flex items-center justify-center bg-emerald-500'>
          Front-End
        </div>
        <div className='flex items-center justify-center bg-emerald-500'>
          Ruby on Rails
        </div>
        <div className='flex items-center justify-center bg-emerald-500'>
          Ruby
        </div>
        <div className='flex items-center justify-center bg-emerald-500'>
          TypeScript
        </div>
      </div>
    </section>
  )
}
