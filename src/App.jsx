import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreatePage from "./pages/CreatePage"
import Quiz from "./pages/Quiz"
import News from "./pages/News"
import Profile from "./pages/Profile"
import User from "./pages/User"
import Playing from "./pages/Playing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/quiz/:title" element={<CreatePage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<User />} />
        <Route path="/quiz/playing/:id" element={<Playing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
