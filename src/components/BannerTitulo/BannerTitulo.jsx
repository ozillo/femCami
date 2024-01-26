import React from 'react'
import "./BannerTitulo.css"
import DividerMain from '../DividerMain/DividerMain'

const BannerTitulo = ({titulo, image, option}) => {
  return (
    <section className='section-banner-titulo'>
        <div className="div-background-img"></div>
        <img 
        src="https://res.cloudinary.com/dtfugozix/image/upload/v1702028834/Fem%20Cami/Logo/logoFemCami_eqfgop.png" 
        alt="" 
        className="imgDescription"
        />
        <DividerMain/>

    </section>
  )
}

export default BannerTitulo