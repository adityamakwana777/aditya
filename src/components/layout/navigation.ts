import {
  Activity,
  BriefcaseBusiness,
  FileText,
  Globe2,
  LayoutDashboard,
  Settings,
  Sparkles,
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
  { to: '/documents', label: 'Documents', icon: FileText },
  { to: '/job-profiles', label: 'Job Profiles', icon: BriefcaseBusiness },
  { to: '/browser', label: 'Browser', icon: Globe2 },
  { to: '/automation', label: 'Automation', icon: Sparkles },
  { to: '/activity', label: 'Activity', icon: Activity },
  { to: '/settings', label: 'Settings', icon: Settings },
]
