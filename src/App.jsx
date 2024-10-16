import AdminLogin from './Pages/Login/AdminLogin'
import ModeratorLogin from './Pages/Login/ModeratorLogin'
import ViewerLogin from './Pages/Login/ViewerLogin'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<AdminLogin/>} />
          <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/moderator" element={<ModeratorLogin/>} />
          <Route path="/viewer" element={<ViewerLogin/>} />
      </Routes>
    </Router>
  )
}

export default App
