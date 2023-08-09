import Header from '@/components/header'
import Home from '@/components/home'
import Footer from '@/components/footer'

export default function Landing() {
  return (
    <div className='box-border flex min-h-screen flex-col items-center justify-between bg-gradient-to-r to-zinc-800 from-stone-950'>
      <div className='absolute top-0 -bottom-40 md:bottom-0 right-0 left-0 dot-pattern'></div>
      <div className='flex flex-col max-w-screen-xl w-full h-100 grow'>
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  )
}
