'use client'

import { useState } from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import Modal from '@/components/modal/Modal'
import projects, { Project } from './data'
import ProjectShow from './ProjectShow'

export default function ProjectList({
  onMouseOver,
  onMouseOut
}: {
  onMouseOver: Function
  onMouseOut: Function
}) {
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
    <div className='flex flex-wrap box-border w-full space-y-4 sm:space-y-0 sm:max-w-md md:max-w-full mx-auto'>
      {projects.map(({ id, name, imgSrc, techList }) => (
        <ProjectThumbnail
          key={id}
          id={id}
          name={name}
          img={imgSrc}
          techList={techList}
          onSelectClick={handleSelect}
          onOpenClick={open}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
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
