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
  const handleSelectClick = () => {
    onSelectClick(id)
    onOpenClick()
  }

  return (
    <div
      onClick={handleSelectClick}
      className='flex items-center justify-center hover:cursor-pointer'
    >
      <img src={img} alt='' />
      {/* <Image fill src={img} quality={100} alt='HikeIt application' /> */}
    </div>
  )
}
