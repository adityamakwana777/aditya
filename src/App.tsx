import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import DashboardPage from './pages/Dashboard'
import BrowserPage from './pages/Browser'
import LogsPage from './pages/Logs'
import SettingsPage from './pages/Settings'
import DocumentsPage from './pages/Documents'
import JobProfilesPage from './pages/JobProfiles'
import AutomationPage from './pages/Automation'
import CandidateListPage from './pages/Candidates/List'
import AddCandidatePage from './pages/Candidates/Add'
import EditCandidatePage from './pages/Candidates/Edit'
import CandidateDetailsPage from './pages/Candidates/Details'

const ActivityPage = () => <div className="page-card"><h1>Activity</h1></div>
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/candidates" element={<CandidateListPage />} />
          <Route path="/candidates/add" element={<AddCandidatePage />} />
          <Route path="/candidates/:id/edit" element={<EditCandidatePage />} />
          <Route path="/candidates/:id" element={<CandidateDetailsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/job-profiles" element={<JobProfilesPage />} />
          <Route path="/browser" element={<BrowserPage />} />
          <Route path="/automation" element={<AutomationPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
