export default function Footer() {
  return (
    <header className='z-50'>
      <svg
        className='w-72 absolute -left-[143px]'
        viewBox='0 0 401 187'
        xmlns='http://www.w3.org/2000/svg'
        strokeLinejoin='round'
        strokeMiterlimit='1.414'
      >
        <path
          d='M200.058 186.517L0 0h400.116L200.058 186.517z'
          className='fill-zinc-900'
        />
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
      <nav className='flex justify-end text-black pt-3 px-4 space-x-1'>
        <a
          href='https://github.com/Nick-Damico'
          target='_blank'
          className='p-1 text-gray-500 hover:text-white'
        >
          <svg
            className='w-8 h-8'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
              clipRule='evenodd'
            />
          </svg>
          <span className='sr-only'>GitHub account</span>
        </a>

        <a
          href='https://www.linkedin.com/in/nick-damico/'
          target='_blank'
          className='p-1 text-gray-500 hover:text-sky-500'
        >
          <svg
            className='w-8 h-8'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 128 128'
          >
            <path
              fillRule='evenodd'
              fill='currentColor'
              d='M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z'
            ></path>
            <path
              fill='#fff'
              d='M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z'
            ></path>
          </svg>
          <span className='sr-only'>LinkedIn Page</span>
        </a>
        <a href='p-1'>
          <svg
            className='w-8 mt-1 h-8 fill-gray-500 hover:fill-emerald-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z' />
          </svg>
          <span className='sr-only'>Contact Form</span>
        </a>
      </nav>
    </header>
  )
}
