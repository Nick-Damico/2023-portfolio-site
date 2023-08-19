'use client'

import React, { DialogHTMLAttributes, ReactNode } from 'react'
import ModalBackDrop from '@/components/modal/BackDrop'
import OpenBtn from '@/components/modal/OpenBtn'

export default function Modal({
  open,
  onOpenClick,
  onCloseClick
}: {
  open: boolean
  onOpenClick: Function
  onCloseClick: Function
}): ReactNode {
  const handleCloseClick = () => {
    onCloseClick()
  }

  return (
    <>
      {open && <ModalBackDrop onCloseClick={handleCloseClick} />}
      <OpenBtn onOpenClick={onOpenClick} />
    </>
  )
}
