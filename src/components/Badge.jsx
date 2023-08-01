import React from 'react'
import {useSelector} from "react-redux"

const Badge = ({children}) => {
  const {loading} = useSelector(state => state.cartReducer);
  return (
    <div className='absolute top-[0px] left-3 bg-biceBlue px-2 text-xs rounded-full'>{loading ? "..." : children}</div>
  )
}

export default Badge