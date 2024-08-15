import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminPanel, Authentication, Dashboard } from "./pages";
import { Notes } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/notes" element={<Notes />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
