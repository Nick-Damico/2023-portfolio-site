import ProjectItem from './ProjectItem'
import Modal from '@/components/Modal'

export default function ProjectList() {
  return (
    <div className='group grid gap-1 grid-cols-2 grid-rows-2 box-border h-80'>
      <ProjectItem name='Front-End' img='/hikeit-app-full.jpg' />
      <ProjectItem name='Ruby On Rails' img='/shear-madness.jpg' />
      <ProjectItem name='Ruby' img='/damico-auctions.jpg' />
      <Modal />
    </div>
  )
}
