import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup'
import Navigation from "./navigation";
import './App.css'

export default function App() {
  
  return (
    <BrowserRouter>
      <div className="flex">
        <Navigation />
        <main className="h-screen flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/login" element={< Login />} />
            <Route path="/signup" element={< Sign up />} />
            <Route path="/chat/:id" element={< Chat />} />
          </Routes>
        </main>
      </div>
    <BrowserRouter>
  );
}
