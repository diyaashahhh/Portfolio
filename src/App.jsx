import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'

import {Home,About,Contact} from './pages'
import Navbar from './components/Navbar'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
   <main className="bg-slate-300/20">
    <Analytics/>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
   </main>
  )
}

export default App
