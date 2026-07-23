import type { ReactNode } from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

type AppShellProps = {
  children?: ReactNode
}

const AppShell = ({ children }: AppShellProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="app-shell">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
      <div className="shell-main">
        <TopNav onToggle={() => setCollapsed((value) => !value)} />
        <main className="shell-content">{children}</main>
      </div>
    </div>
  )
}

export default AppShell
