import { motion, AnimatePresence } from 'framer-motion'

export default function BackDrop({ onCloseClick }: { onCloseClick: Function }) {
  const handleCloseClick = () => {
    onCloseClick()
  }

  return (
    <AnimatePresence>
      <motion.div
        onClick={handleCloseClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'linear', duration: 0.25 }}
        exit={{ opacity: 0 }}
        id='backDrop'
        className='absolute top-0 left-0 bottom-0 right-0 bg-zinc-950/75'
      ></motion.div>
    </AnimatePresence>
  )
}
