import Header from '@/components/Header'
import Home from '@/components/Home'
import Footer from '@/components/Footer'

export default function Landing() {
  return (
    <div className='bg-gradient-to-r to-zinc-800 from-stone-950'>
      <div className='flex w-full min-h-screen justify-center dot-pattern'>
        <div className='flex flex-col w-full max-w-screen-xl'>
          <Header />
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  )
}
