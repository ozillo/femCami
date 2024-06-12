import React from 'react'
import "./BannerTitulo.css"
import DividerMain from '../DividerMain/DividerMain'

const BannerTitulo = ({titulo, image, option}) => {
  return (
    <div className='div-CRAPG'>
    <section className='section-banner-titulo'>
        <div className="div-background-img-banner"></div>
        <img 
        src="https://res.cloudinary.com/dtfugozix/image/upload/v1702028834/Fem%20Cami/Logo/logoFemCami_eqfgop.png" 
        alt="" 
        className="imgDescription-banner"
        />
        <DividerMain/>
    </section></div>
  )
}

export default BannerTitulo