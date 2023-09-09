import { ReactNode } from 'react'

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

  return (
    <div
      onClick={handleSelectClick}
      className='flex items-center justify-center hover:cursor-pointer'
      onMouseOver={handleHover}
      onMouseOut={() => onMouseOut()}
    >
      <img src={img} alt='' />
      {/* <Image fill src={img} quality={100} alt='HikeIt application' /> */}
    </div>
  )
}
