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
import Question from "./pages/Question"
import Exam from "./pages/Exam"
import Result from "./pages/Result"

function App() {
  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/result" element={<Result />} />
        <Route path="/quiz/playing/:id" element={<Playing />} />
        
        {/* <Route path="/quiz" element={<Quiz />} />
        <Route path="/create/quiz" element={<CreatePage />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/user" element={<User />} /> */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
