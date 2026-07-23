import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import DashboardPage from './pages/Dashboard'
import CandidatesPage from './pages/Candidates'
import BrowserPage from './pages/Browser'
import JobsPage from './pages/Jobs'
import LogsPage from './pages/Logs'
import SettingsPage from './pages/Settings'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/browser" element={<BrowserPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
