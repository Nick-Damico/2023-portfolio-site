import { ReactNode } from 'react'
import Image from 'next/image'

export default function ProjectItem({
  id,
  img,
  onOpenClick,
  onSelectClick
}: {
  id: string
  name: string
  img: string
  onOpenClick: Function
  onSelectClick: Function
}): ReactNode {
  const handleSelectClick = (selected: string) => {
    onSelectClick(selected)
    onOpenClick()
  }

  return (
    <div
      onClick={() => handleSelectClick(id)}
      className='relative flex items-center justify-center hover:cursor-pointer'
    >
      <Image fill src={img} quality={100} alt='HikeIt application' />
    </div>
  )
}
