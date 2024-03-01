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
import TeacherDashboard from "./pages/Teacher/TeacherDashboard"
import TeacherProfileCard from "./Components/Card/TeacherProfileCard"
import TeachProfile from "./pages/Teacher/TeachProfile"
import TeacherCourse from "./pages/Teacher/TeacherCourse"
import TeacherExam from "./pages/Teacher/TeacherExam"
import TeacherQuestionBank from "./pages/Teacher/TeacherQuestionBank"
import TeacherResult from "./pages/Teacher/TeacherResult"
import Test from "./pages/Test"
import { Toaster } from "sonner"
import TeacherCourseCreateForm from "./pages/Teacher/TeacherCourseCreateForm"
import TeacherCourseEdit from "./pages/Teacher/TeacherCourseEdit"
import TeacherExamCreatePage from "./pages/Teacher/TeacherExamCreatePage"

function App() {
  return (
    <>  
    <Toaster richColors  position="bottom-right" expand={false} />
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/exam" element={<Exam />} />

        <Route path="/result" element={<Result />} />

        <Route path="/quiz/playing/:id" element={<Playing />} />

        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

        <Route path="/teacher/profile" element={<TeachProfile />} />

        <Route path="/teacher/course" element={<TeacherCourse />} />
        <Route path="/teacher/course/create" element={<TeacherCourseCreateForm />} />
        <Route path="/teacher/course/update/:id" element={<TeacherCourseEdit />} />

        <Route path="/teacher/exam" element={<TeacherExam />} />
        <Route path="/teacher/exam/create?" element={<TeacherExamCreatePage />} />

        <Route path="/create/quiz" element={<CreatePage />} />
        <Route path="/teacher/questionbank" element={<TeacherQuestionBank />} />
        <Route path="/teacher/result" element={<TeacherResult />} />
        <Route path="/test" element={<Test />} />
        {/* <Route path="/quiz" element={<Quiz />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/user" element={<User />} /> */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
