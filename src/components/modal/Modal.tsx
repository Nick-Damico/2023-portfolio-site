'use client'

import React, { ReactNode } from 'react'
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

  return (
    <AnimatePresence initial={false} mode='wait'>
      {open && (
        <BackDrop key='backDrop' onCloseClick={handleCloseClick}>
          <motion.div
            key='modal'
            className='p-6 max-h-3/4 h-auto w-11/12 max-w-2xl rounded-md bg-emerald-600 z-50'
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
