import { ReactNode } from 'react'
import Image from 'next/image'

export default function Event({
  startDate,
  endDate,
  company,
  title,
  imgSrc,
  key
}: {
  startDate: string
  endDate: string
  company: string
  title: string
  imgSrc: string
  key: number
}): ReactNode {
  return (
    <li key={key} className='relative'>
      <div className='absolute p-1 bg-emerald-400 rounded-full top-2.5 -left-[12px]'>
        <Image alt='' src={imgSrc} width={14} height={14} className='' />
      </div>
      <div className='ml-5'>
        <span className='block font-bold text-rose-600 -mb-1'>
          {startDate} - {endDate}
        </span>
        <p className=''>
          {company} - <i className='text-emerald-300'>{title}</i>
        </p>
      </div>
    </li>
  )
}
