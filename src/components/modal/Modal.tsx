'use client'

import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackDrop from '@/components/modal/BackDrop'
import OpenBtn from '@/components/modal/OpenBtn'
import CloseBtn from './CloseBtn'

export default function Modal({
  open,
  onOpenClick,
  onCloseClick,
  selected
}: {
  open: boolean
  onOpenClick: Function
  onCloseClick: Function
  selected: string | null
}): ReactNode {
  const handleCloseClick = () => {
    onCloseClick()
  }

  return (
    <>
      <AnimatePresence initial={false} mode='wait'>
        {open && (
          <BackDrop
            key='backDrop'
            onCloseClick={handleCloseClick}
            selected={selected}
          >
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
              <h2>SELECTED PROJECT {selected}</h2>
            </motion.div>
          </BackDrop>
        )}
        <OpenBtn onOpenClick={onOpenClick} />
      </AnimatePresence>
    </>
  )
}
