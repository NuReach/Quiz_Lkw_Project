import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Playing from "./pages/Playing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Exam from "./pages/Exam"
import Result from "./pages/Result"
import TeacherDashboard from "./pages/Teacher/TeacherDashboard"
import TeachProfile from "./pages/Teacher/TeachProfile"
import TeacherCourse from "./pages/Teacher/TeacherCourse"
import TeacherExam from "./pages/Teacher/TeacherExam"
import TeacherQuestionBank from "./pages/Teacher/TeacherQuestionBank"
import TeacherResult from "./pages/Teacher/TeacherResult"
import { Toaster } from "sonner"
import TeacherCourseCreateForm from "./pages/Teacher/TeacherCourseCreateForm"
import TeacherCourseEdit from "./pages/Teacher/TeacherCourseEdit"
import TeacherExamCreatePage from "./pages/Teacher/TeacherExamCreatePage"
import TeacherQuestionCreatePage from "./pages/Teacher/TeacherQuestionCreatePage"
import TeacherQuestionUpdatePage from "./pages/Teacher/TeacherQuestionUpdatePage"
import { AnimatePresence } from "framer-motion"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import TeacherExamUpdatePage from "./pages/Teacher/TeacherExamUpdatePage"
import SuccessfulPage from "./pages/SuccessfulPage"
import AnswerPreview from "./pages/AnswerPreview"
import TeacherAnswerPreview from "./pages/TeacherAnswerPreview"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  const queryClient = new QueryClient();
  
  return (
    <>  
    <QueryClientProvider client={queryClient}>
      <Toaster richColors  position="bottom-right" expand={false} />
      <BrowserRouter>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
  )
}

export default App

function LocationProvider({children}) {
  return <AnimatePresence  >{children}</AnimatePresence>;
}



function RoutesWithAnimation() {
    const location = useLocation();
    return (
      <Routes location={location} key={location.key}>
          <Route path="/login" element={<Login />} />

            <Route element={<StudentRouter />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/exam" element={<Exam />} />
              <Route path="/result" element={<Result />} />
              <Route path="/quiz/playing/:id" element={<Playing />} />
              <Route path="/submite/exam/page" element={<SuccessfulPage />} />
              <Route path="/exam/answer/preview" element={<AnswerPreview />} />
            </Route>

            <Route element={<TeacherRouter />}>
              <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
              <Route path="/teacher/profile" element={<TeachProfile />} />
              <Route path="/teacher/course" element={<TeacherCourse />} />
              <Route path="/teacher/course/create" element={<TeacherCourseCreateForm />} />
              <Route path="/teacher/course/update/:id" element={<TeacherCourseEdit />} />
              <Route path="/teacher/exam" element={<TeacherExam />} />
              <Route path="/teacher/exam/create" element={<TeacherExamCreatePage />} />
              <Route path="/teacher/exam/update/:id" element={<TeacherExamUpdatePage />} />
              <Route path="/teacher/questionbank" element={<TeacherQuestionBank />} />
              <Route path="/teacher/questionbank/create" element={<TeacherQuestionCreatePage />} />
              <Route path="/teacher/questionbank/update/:id" element={<TeacherQuestionUpdatePage />} />
              <Route path="/teacher/result" element={<TeacherResult />} />
              <Route path="/teacher/exam/answer/preview" element={<TeacherAnswerPreview />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />

      </Routes>
    );
  }

  const TeacherRouter = ()=>{
    const user = JSON.parse(localStorage.getItem('userData'))  ;
    return user && user.expirationTime > Date.now() && user.role == "teacher" ? <Outlet /> : <Navigate to={"/teacher/dashboard"} />
  }

  const StudentRouter = ()=>{
    const user = JSON.parse(localStorage.getItem('userData'))  ;
    return user && user.expirationTime > Date.now() && user.role == "user" ? <Outlet /> : <Navigate to={"/"} />
  }

  const AdminRouter = ()=>{
    const user = JSON.parse(localStorage.getItem('userData'))  ;
    return user && user.expirationTime > Date.now() && user.role == "admin" ? <Outlet /> : <Navigate to={"/admin/dashboard"} />
  }

