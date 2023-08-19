import Image from 'next/image'
import xIcon from 'public/xmark-solid.svg'

export default function CloseBtn() {
  const handleClick = () => {
    const dialog = document.getElementById('projectModal') as HTMLDialogElement

    if (dialog) {
      dialog.close()
    }
  }

  return (
    <div className='flex justify-end'>
      <button
        onClick={handleClick}
        type='button'
        className='flex w-8 h-8 rounded-full justify-center items-center bg-white font-bold text-xl'
      >
        <Image className='p-1' src={xIcon} width={28} height={28} alt='' />
      </button>
    </div>
  )
}
