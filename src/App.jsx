import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup'
import './App.css'

export default function App() {
  
  return (
    <BrowserRouter>
      
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/login" element={< Login />} />
            <Route path="/signup" element={< Signup />} />
            <Route path="/chat/:id" element={< Chat />} />
          </Routes>
        
    </BrowserRouter>
  );
}
