export default function Footer() {
  return (
    <header>
      <svg
        className='w-72 absolute -left-[143px]'
        viewBox='0 0 401 187'
        xmlns='http://www.w3.org/2000/svg'
        strokeLinejoin='round'
        strokeMiterlimit='1.414'
      >
        <path d='M200.058 186.517L0 0h400.116L200.058 186.517z' fill='black' />
        <clipPath id='a'>
          <path d='M221.087 20.612h80.037v57.756h-80.037z' />
        </clipPath>
        <g clipPath='url(#a)'>
          <path
            d='M300.987 51.574c-1.73 22.594-19.321 24.565-28.881 26.751 0 0-15.707-.076-15.707 0 0 .135-18.947-25.264-19.59-25.354v25.354h-15.722V51.574h51.183v11.189s11.968-3.036 13.756-11.189h14.961zm-79.9-2.074V20.612h15.722l19.59 27.464V20.612h15.707s29.112 5.495 29.018 27.464c-.003.483-.011.958-.026 1.424h-14.849v-.002c-.009-9.72-13.979-13.291-13.979-13.291V49.5h-51.183z'
            fill='#fff'
          />
        </g>
      </svg>
      <nav className='flex item-starts z-100 text-black'>
        {/* <ul className='flex ml-auto space-x-2'>
          <li>
            <a href='#' className='block px-4 py-3'>
              Home
            </a>
          </li>

          <li>
            <a href='#' className='block px-4 py-3'>
              Projects
            </a>
          </li>

          <li>
            <a href='#' className='block px-4 py-3'>
              Resume
            </a>
          </li>

          <li>
            <a href='#' className='block px-4 py-3'>
              LinkedIn
            </a>
          </li>

          <li>
            <a href='#' className='block px-4 py-3'>
              Blog
            </a>
          </li>
        </ul> */}
      </nav>
    </header>
  )
}