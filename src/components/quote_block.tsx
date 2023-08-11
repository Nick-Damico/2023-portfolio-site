export default function QuouteBlock() {
  return (
    <blockquote className='col-span-2 md:col-start-1 md:col-span-1 z-50 font-amatic text-4xl font-bold mb-6'>
      <div className='border-l-4 border-emerald-400'>
        <div className='pl-3'>
          <p className='max-w-lg md:max-w-md'>
            &ldquo;All the effort in the world won&apos;t matter if you&apos;re
            not inspired.&rdquo;
          </p>
          <footer className='text-2xl'>-Chuck Palahniuk</footer>
        </div>
      </div>
    </blockquote>
  )
}
