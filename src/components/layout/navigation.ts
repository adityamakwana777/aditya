import {
  BriefcaseBusiness,
  Globe2,
  LayoutDashboard,
  ScrollText,
  Settings,
  Users,
} from 'lucide-react'

export type NavItem = {
  to: string
  label: string
  icon: typeof LayoutDashboard
}

export const navigationItems: NavItem[] = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/candidates', label: 'Candidates', icon: Users },
  { to: '/jobs', label: 'Jobs', icon: BriefcaseBusiness },
  { to: '/browser', label: 'Browser', icon: Globe2 },
  { to: '/logs', label: 'Logs', icon: ScrollText },
  { to: '/settings', label: 'Settings', icon: Settings },
]
