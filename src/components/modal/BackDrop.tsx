import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function BackDrop({
  children,
  onCloseClick
}: {
  children: ReactNode
  onCloseClick: Function
}) {
  const handleCloseClick = () => {
    onCloseClick()
  }

  return (
    <motion.div
      id='backDrop'
      className='flex fixed items-center justify-center left-0 top-0 bottom-0 h-screen w-full bg-zinc-950/75 z-10'
      onClick={handleCloseClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'linear', duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
