import Image from 'next/image'
import xIcon from 'public/xmark-solid.svg'

export default function CloseBtn({ onClick }: { onClick: Function }) {
  const handleClick = () => {
    onClick()
  }

  return (
    <div className='flex justify-end mb-4'>
      <button
        onClick={handleClick}
        type='button'
        className='flex w-6 h-6 rounded-full justify-center items-center bg-white font-bold text-xl'
      >
        <Image
          className='p-1 rounded'
          src={xIcon}
          width={28}
          height={28}
          alt=''
        />
      </button>
    </div>
  )
}
