import { ReactNode } from 'react'

export default function Project({
  name,
  img
}: {
  name: string
  img: string
}): ReactNode {
  return (
    <div className='flex items-center justify-center bg-emerald-500'>
      {name}
    </div>
  )
}
