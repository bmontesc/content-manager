import { NavBar } from './components/NavBar'
import { GeneralView } from './pages/GeneralView'
import { DetailView } from './pages/DetailView'
import { GeneralTranslationsView } from './pages/GeneralTranslationsView'
import { DetailTranslationsView } from './pages/DetailTranslationsView'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/content' element={<GeneralView />}/>
          <Route path='/content/:id' element={<DetailView />}/>
          <Route path='/translatedContent' element={<GeneralTranslationsView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
