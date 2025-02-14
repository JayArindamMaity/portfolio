import Backvid from './components/backvid/backvid.tsx'
import Navbar from './components/nav/nav.tsx'
import Home from './components/home/home.tsx'
import './app.css'

function App() {

  return (
    <>        
      <Backvid />
      <Navbar />
      <div className='internals'>
        <Home />
      </div>
      
    </>
  )
}

export default App
