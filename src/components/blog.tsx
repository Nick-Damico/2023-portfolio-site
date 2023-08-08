export default function Blog({ title }: { title: string }) {
  return (
    <section className='w-100 mb-6'>
      <h2 className='section-title'>{title}</h2>
      <div className="flex justify-center items-center text-white text-1xl line-pattern h-56 bg-image bg-[url('/design-image01.jpg')] bg-cover bg-center mix-blend-luminosity">
        Coming Soon&hellip;
      </div>
    </section>
  )
}
