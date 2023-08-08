export default function Blog({ title }: { title: string }) {
  return (
    <section className='col-span-2 md:col-span-1 mb-6'>
      <h2 className='section-title'>{title}</h2>
      <div className="flex h-80 justify-center items-center text-white text-1xl bg-image bg-[url('/design-image01.jpg')] bg-cover bg-center mix-blend-luminosity">
        Coming Soon&hellip;
      </div>
    </section>
  )
}
