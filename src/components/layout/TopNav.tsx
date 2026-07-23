import { Bell, Search, Sparkles } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { navigationItems } from './navigation'

type TopNavProps = {
  onToggle: () => void
}

const TopNav = ({ onToggle }: TopNavProps) => {
  const location = useLocation()
  const activePage = navigationItems.find((item) => item.to === location.pathname) ?? navigationItems[0]

  return (
    <header className="topbar">
      <div className="topbar__left">
        <button type="button" className="topbar__menu" onClick={onToggle} aria-label="Open sidebar">
          <Sparkles size={18} />
        </button>
        <div>
          <p className="topbar__title">{activePage.label}</p>
          <p className="topbar__subtitle">Monitor and coordinate workflows</p>
        </div>
      </div>

      <div className="topbar__right">
        <label className="topbar__search" aria-label="Search">
          <Search size={16} />
          <input type="text" placeholder="Search" />
        </label>
        <button type="button" className="topbar__icon" aria-label="Notifications">
          <Bell size={18} />
        </button>
      </div>
    </header>
  )
}

export default TopNav
