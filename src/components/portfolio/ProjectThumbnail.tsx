import { ReactNode } from 'react'
import Image from 'next/image'

export default function ProjectItem({
  id,
  img,
  techList,
  onOpenClick,
  onSelectClick,
  onMouseOver,
  onMouseOut
}: {
  id: string
  name: string
  img: string
  techList: string[]
  onOpenClick: Function
  onSelectClick: Function
  onMouseOver: Function
  onMouseOut: Function
}): ReactNode {
  const handleSelectClick = () => {
    onSelectClick(id)
    onOpenClick()
  }

  const handleHover = () => {
    onMouseOver(techList)
  }

  const handleOnMouseOut = () => {
    onMouseOut()
  }

  return (
    <div
      onClick={handleSelectClick}
      className='flex relative w-full md:w-1/2 h-[200px]  items-center justify-center hover:cursor-pointer bg-red-400 overflow-hidden'
      onMouseOver={handleHover}
      onMouseOut={handleOnMouseOut}
    >
      <Image fill src={img} alt='' className='object-cover' />
    </div>
  )
}
