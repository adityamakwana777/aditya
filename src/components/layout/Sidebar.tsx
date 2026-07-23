import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from './navigation'

type SidebarProps = {
  collapsed: boolean
  onToggle: () => void
}

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar__top">
        <div className="sidebar__brand">
          <div className="sidebar__brand-mark">G</div>
          {!collapsed && <div>
            <p className="sidebar__brand-name">GovFlow AI</p>
            <p className="sidebar__brand-subtitle">Operations Hub</p>
          </div>}
        </div>
        <button type="button" className="sidebar__toggle" onClick={onToggle} aria-label="Toggle sidebar">
          <Menu size={18} />
        </button>
      </div>

      <nav className="sidebar__nav" aria-label="Primary navigation">
        {navigationItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `sidebar__link ${isActive ? 'active' : ''}`}>
            <Icon size={18} />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
