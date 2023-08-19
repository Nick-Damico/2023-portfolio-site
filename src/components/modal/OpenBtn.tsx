import Image from 'next/image'
import xIcon from 'public/xmark-solid.svg'

export default function OpenBtn({ onOpenClick }: { onOpenClick: Function }) {
  const handleOpenClick = () => {
    onOpenClick()
  }

  return (
    <button onClick={handleOpenClick} type='button'>
      Modal
    </button>
  )
}
