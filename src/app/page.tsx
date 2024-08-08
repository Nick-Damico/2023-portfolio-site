import Header from '@/components/Header'
import Home from '@/components/Home'
import Footer from '@/components/Footer'

export default function Landing() {
  return (
    <div className='box-border flex min-h-screen flex-col items-center justify-between bg-gradient-to-r to-zinc-800 from-stone-950'>
      <div className='flex flex-col max-w-screen-xl w-full h-100 grow dot-pattern'>
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  )
}
