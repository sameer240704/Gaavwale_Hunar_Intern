import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AdminPanel, Authentication, Dashboard } from "./pages";
import { Notes } from "./components";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";


function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<Authentication />} />
          <Route path="/admin/dashboard" element={<AdminPanel />} />
          <Route path={`patient/dashboard`} element={<Dashboard />} />
          <Route path={`doctor/dashboard`} element={<Dashboard />} />
          <Route
            path="/auth"
            element={authUser ? <Navigate to="/admin/dashboard" /> : <Navigate to="/auth" />}
          />
          <Route path="/dashboard/notes/:doctorId/:patientId" element={<Notes />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
