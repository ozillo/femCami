import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import QuiSom from './pages/QuiSom.jsx'
import AutismoIntervencion from './pages/AutismoIntervencion.jsx'
import AutismoPrograma from './pages/AutismoPrograma.jsx'
import AutismoCentroCrapg from './pages/AutismoCentroCrapg.jsx'
import Autismo from './pages/Autismo.jsx'
import AutismoQueEs from './pages/AutismoQueEs.jsx'
import Serveis from './pages/Serveis.jsx'
import ServeisIntervencion from './pages/ServeisIntervencion.jsx'
import ServeisLogopedia from './pages/ServeisLogopedia.jsx'
import ServeisReeducacion from './pages/ServeisReeducacion.jsx'
import ServeisTerapiaOcupacional from './pages/ServeisTerapiaOcupacional.jsx'
import Contacto from './pages/Contacto.jsx'
import { Home } from './components/index.js'
import PrintAutismo from './components/PrintAutismo/PrintAutismo.jsx'
import PrintServeis from './components/PrintServeis/PrintServeis.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home/>}/>

        <Route path="/qui-som" element={<QuiSom/>}/>

        <Route path="/autisme" element={<Autismo/>}>
          <Route index element={<PrintAutismo/>}/>
          <Route path="/autisme/que-es-el-autisme" element={<AutismoQueEs/>}/>
          <Route path="/autisme/intervencio-psicoeducativa" element={<AutismoIntervencion/>}/>
          <Route path="/autisme/programa-habilitats-socials" element={<AutismoPrograma/>}/>
          <Route path="/autisme/centre-recursos-CRAPG" element={<AutismoCentroCrapg/>}/>
        </Route>

        <Route path="/serveis" element={<Serveis/>}>
          <Route index element={<PrintServeis/>}/>
          <Route path="/serveis/intervencio-educativa" element={<ServeisIntervencion/>}/>
          <Route path="/serveis/logopedia" element={<ServeisLogopedia/>}/>
          <Route path="/serveis/reeducacio-pedagogica" element={<ServeisReeducacion/>}/>
          <Route path="/serveis/terapia-ocupacional" element={<ServeisTerapiaOcupacional/>}/>
        </Route>

        <Route path="/contacte"element={<Contacto/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
