'use client'

import { useState } from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import Modal from '@/components/modal/Modal'
import projects, { Project } from './data'
import ProjectShow from './ProjectShow'

export default function ProjectList() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const open = () => setModalOpen(true)
  const close = () => setModalOpen(false)

  const handleSelect = (id: string) => {
    const selectedProject = projects.find((project) => project.id === id)
    if (selectedProject) {
      setSelected(selectedProject)
    }
  }

  return (
    <div className='grid gap-1 grid-cols-2 grid-rows-2 box-border h-80'>
      {projects.map(({ id, name, src }) => (
        <ProjectThumbnail
          key={id}
          id={id}
          name={name}
          img={src}
          onSelectClick={handleSelect}
          onOpenClick={open}
        />
      ))}
      {selected && (
        <Modal open={modalOpen} onCloseClick={close}>
          <ProjectShow project={selected} />
        </Modal>
      )}
    </div>
  )
}
