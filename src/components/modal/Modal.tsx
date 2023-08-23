'use client'

import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackDrop from '@/components/modal/BackDrop'
import CloseBtn from './CloseBtn'
import { Project } from '@/components/portfolio/data'
import Image from 'next/image'

export default function Modal({
  children,
  open,
  onCloseClick
}: {
  children: ReactNode
  open: boolean
  onCloseClick: Function
  // selected: Project | null
}): ReactNode {
  const handleCloseClick = () => {
    onCloseClick()
  }

  return (
    <>
      <AnimatePresence initial={false} mode='wait'>
        {open && (
          <BackDrop key='backDrop' onCloseClick={handleCloseClick}>
            <motion.div
              key='modal'
              className='p-6 w-11/12 max-w-2xl h-1/2 rounded-md bg-emerald-600 z-50'
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{
                ease: 'linear',
                damping: 25,
                duration: 0.3,
                type: 'spring'
              }}
            >
              <CloseBtn onClick={onCloseClick} />
              {children}
            </motion.div>
          </BackDrop>
        )}
      </AnimatePresence>
    </>
  )
}
