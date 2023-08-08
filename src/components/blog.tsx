export default function Blog({ title }: { title: string }) {
  return (
    <section className='w-100'>
      <h2 className='section-title'>{title}</h2>
    </section>
  )
}
