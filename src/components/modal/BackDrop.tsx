import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function BackDrop({
  children,
  onCloseClick,
  selected
}: {
  children: ReactNode
  onCloseClick: Function
  selected: string | null
}) {
  const handleCloseClick = () => {
    onCloseClick()
  }

  return (
    <motion.div
      id='backDrop'
      className='flex items-center justify-center absolute top-0 left-0 h-full w-full bg-zinc-950/75 z-10'
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
