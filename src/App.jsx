import { NavBar } from './components/NavBar'
import { GeneralView } from './pages/GeneralView'
import { DetailView } from './pages/DetailView'
import { GeneralTranslationsView } from './pages/GeneralTranslationsView'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/parentContent' element={<GeneralView />}/> 
          <Route path='/parentContent/:id' element={<DetailView />}/>
          <Route path='/translatedContent' element={<GeneralTranslationsView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
