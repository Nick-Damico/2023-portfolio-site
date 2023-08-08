import Header from '@/components/header'
import Home from '@/components/home'
import Footer from '@/components/footer'

export default function Landing() {
  return (
    <div className='box-border flex min-h-screen flex-col items-center justify-between'>
      <div className='flex flex-col max-w-screen-xl w-full h-100 grow bg-zinc-800'>
        {/* <Image
          className='absolute'
          src='/design-image01.jpg'
          width='500'
          height='1024'
          alt=''
        /> */}
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  )
}
