import Header from '@/components/header'
import Home from '@/components/home'
import Footer from '@/components/footer'

export default function Landing() {
  return (
    <div className='box-border flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-zinc-800 to-stone-950'>
      <div className='flex flex-col max-w-screen-xl w-full h-100 grow'>
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  )
}
