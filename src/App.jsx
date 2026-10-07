import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup'
import './App.css'

export default function App() {
  
  return (
    <BrowserRouter>
      
          <Routes>
      
            <Route path="/signup" element={< Signup />} />
          </Routes>
        
    </BrowserRouter>
  );
}
