export default function Blog({ title }: { title: string }) {
  return (
    <section className='w-100'>
      <h2 className='uppercase text-2xl font-thin'>{title}</h2>
    </section>
  )
}
