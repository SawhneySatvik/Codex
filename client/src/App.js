import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import AboutUs from './pages/AboutUs'
import Admin from './pages/Admin'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Blogs from './pages/Blogs'
import Donate from './pages/Donate'
import HomePage from './pages/HomePage'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Team from './pages/Admin/Results';
import Header from './components/Layout/Header';
import Sidebar from './components/SideBar';
import Calendar from './pages/Admin/Calendar';
// import FAQ from './pages/Admin/Faq';
import Recommend from './pages/Admin/Recommend';
import Results from './pages/Admin/Results';
import Test from './pages/Admin/Test.js';
import { useSpeechRecognition } from 'react-speech-recognition';

export default function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { resetTranscript } = useSpeechRecognition();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Header setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/test" element={<Test />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* <Route path="/admin" element={<Admin />} /> */}

            <Route path="/results" element={<Results />} />
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            {/* <Route path="/invoices" element={<Invoices />} /> */}
            {/* <Route path="/form" element={<Form />} /> */}
            {/* <Route path="/bar" element={<Bar />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/line" element={<Line />} /> */}
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/calendar" element={<Calendar />} />
            {/* <Route path="/geography" element={<Geography />} /> */}
          </Routes>
          </main>
        </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}