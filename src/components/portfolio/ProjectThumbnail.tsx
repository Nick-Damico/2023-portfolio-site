import { ReactNode } from 'react'
import Image from 'next/image'

export default function ProjectItem({
  id,
  img,
  name,
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
      className='p-2 border-box border-2 border-emerald-800'
      onMouseOver={handleHover}
      onMouseOut={handleOnMouseOut}
    >
      <div className='relative min-h-[180px]'>
        <Image
          src={img}
          height='520'
          width='300'
          alt=''
          className='w-full object-cover'
        />
      </div>
      <h3>{name}</h3>
      <p></p>
    </div>
  )
}
