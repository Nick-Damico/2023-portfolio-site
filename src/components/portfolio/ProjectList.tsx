'use client'

import { useState } from 'react'
import ProjectItem from './ProjectItem'
import Modal from '@/components/modal/Modal'
import projects, { Project } from './data'

export default function ProjectList() {
  const [modalOpen, setModalOpen] = useState(false)
  const open = () => setModalOpen(true)
  const close = () => setModalOpen(false)

  const [selected, setSelected] = useState<string | null>(null)
  const renderProjectInModal = (name: string) => {
    // console.log(name)
    setSelected(name)
  }

  return (
    <div className='grid gap-1 grid-cols-2 grid-rows-2 box-border h-80'>
      {projects.map(({ id, name, src }) => (
        <ProjectItem
          key={id}
          name={name}
          img={src}
          onClick={renderProjectInModal}
        />
      ))}
      <Modal
        open={modalOpen}
        onOpenClick={open}
        onCloseClick={close}
        selected={selected}
      />
    </div>
  )
}
