import React from 'react'

const Badge = ({children}) => {
  return (
    <div className='absolute top-[0px] left-3 bg-biceBlue px-2 text-xs rounded-full'>{children}</div>
  )
}

export default Badge