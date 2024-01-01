import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/shared/Login";
import Registration from "./pages/shared/Registration";
import Dashboard from "./pages/adminPortal/Dashboard";
import AdminVideos from "./pages/adminPortal/AdminVideos";
import AdminAssigments from "./pages/adminPortal/AdminAssigments";
import AdminQuizzes from "./pages/adminPortal/AdminQuizzes";
import AdminAssignmentMarks from "./pages/adminPortal/AdminAssignmentMarks";
import StudentVideos from "./pages/studentPortal/StudentVideos";
import StudentQuizzes from "./pages/studentPortal/StudentQuizzes";
import StudentBoard from "./pages/studentPortal/StudentBoard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/videos" element={<AdminVideos />} />
          <Route path="/admin/assignments" element={<AdminAssigments />} />
          <Route path="/admin/quizzes" element={<AdminQuizzes />} />
          <Route
            path="/admin/assignmentMark"
            element={<AdminAssignmentMarks />}
          />
          <Route path="/student/videos" element={<StudentVideos />} />
          <Route path="/student/quizzes" element={<StudentQuizzes />} />
          <Route path="/student/leaderboard" element={<StudentBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
