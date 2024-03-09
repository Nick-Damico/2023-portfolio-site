'use client'

import React, { ReactNode, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackDrop from '@/components/modal/BackDrop'
import CloseBtn from './CloseBtn'

export default function Modal({
  children,
  open,
  onCloseClick
}: {
  children: ReactNode
  open: boolean
  onCloseClick: Function
}): ReactNode {
  const handleCloseClick = () => {
    onCloseClick()
  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <BackDrop key='backDrop' onCloseClick={handleCloseClick}>
          <motion.div
            key='modal'
            className='p-4 sm:p-6 h-4/5 sm:h-fit overflow-y-auto w-11/12 max-w-2xl rounded-md bg-emerald-600 z-50'
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ease: 'linear',
                damping: 25,
                duration: 0.3
              }
            }}
            exit={{ opacity: 0, y: -100 }}
          >
            <CloseBtn onClick={onCloseClick} />
            {children}
          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  )
}
