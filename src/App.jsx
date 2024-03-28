import { NavBar } from './components/NavBar'
import { GeneralView } from './pages/GeneralView'
import { DetailView } from './pages/DetailView'
import { GeneralTranslationsView } from './pages/GeneralTranslationsView'
import { HomeView } from './pages/HomeView'
import { NewContentView } from './pages/NewContentView'
import { PlanificationView } from './pages/PlanificationView'
import { SignUpView } from './pages/SignUpView'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomeView />}/>
          <Route path='/content' element={<GeneralView />}/>
          <Route path='/content/:id' element={<DetailView />}/>
          <Route path='/newcontent' element={<NewContentView />}/>
          <Route path='/translatedContent' element={<GeneralTranslationsView />} />
          <Route path='/planification' element={<PlanificationView />} />
          <Route path='/signup' element={<SignUpView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
