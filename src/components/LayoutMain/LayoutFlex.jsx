import React from 'react'
import "./LayoutFlex.css"

const LayoutFlex = ({children}) => {
  return (
    <div className='div-main-layout'>
        {children}
    </div>
  )
}

export default LayoutFlex