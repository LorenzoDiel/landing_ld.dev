import { Navigate, Route, Routes } from "react-router-dom"
import Landing from "./layout/Landing"
import PrivacyPolicy from "./pages/PrivacyPolicy"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/politicas-de-privacidad" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
