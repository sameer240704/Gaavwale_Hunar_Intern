import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminPanel, Authentication, Dashboard } from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
