export default function Portfolio({ title }: { title: string }) {
  return (
    <section className='w-full mb-6'>
      <h2 className='uppercase text-2xl font-thin'>{title}</h2>
      <div className='box-border flex w-full flex-wrap'>
        <div className='flex justify-center items-center w-1/2 h-[100px] bg-emerald-500'>
          Front-End
        </div>
        <div className='flex justify-center items-center w-1/2 h-[100px] bg-emerald-500'>
          Ruby on Rails
        </div>
        <div className='flex justify-center items-center w-1/2 h-[100px] bg-emerald-500'>
          Ruby
        </div>
        <div className='flex justify-center items-center w-1/2 h-[100px] bg-emerald-500'>
          TypeScript
        </div>
      </div>
    </section>
  )
}
