import PageCard from '../../components/ui/PageCard'
import SectionPanel from '../../components/ui/SectionPanel'
import StatCard from '../../components/ui/StatCard'
import TimelineItem from '../../components/ui/TimelineItem'

const stats = [
  { label: 'Total Candidates', value: '248', accent: '#4f46e5' },
  { label: 'Active Job Profile', value: '12', accent: '#0f766e' },
  { label: 'Browser Status', value: 'Online', accent: '#dc2626' },
  { label: 'Automation Status', value: 'Running', accent: '#ca8a04' },
]

const activityItems = [
  { title: 'Candidate import completed', time: '10 min ago', status: 'Imported 24 new records from the latest batch.' },
  { title: 'Browser session resumed', time: '24 min ago', status: 'Connected to the selected portal successfully.' },
  { title: 'Automation checkpoint reached', time: '1 hr ago', status: 'Completed 67% of the current workflow sequence.' },
]

const quickActions = [
  'Import Candidates',
  'Import Documents',
  'Launch Browser',
  'Open OJAS',
  'Start Automation',
]

const DashboardPage = () => {
  return (
    <PageCard
      title="Dashboard"
      description="A modern automation overview for GovFlow AI operations and workflows."
    >
      <div className="dashboard-stack">
        <SectionPanel title="Key Metrics" subtitle="Live dummy overview for the current automation state">
          <div className="stats-grid">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </SectionPanel>

        <SectionPanel title="Current Automation" subtitle="Dummy run details">
          <div className="automation-card">
            <div className="automation-card__meta">
              <div>
                <p className="automation-card__label">Current Job</p>
                <h3>Senior Policy Analyst</h3>
              </div>
              <div>
                <p className="automation-card__label">Current Candidate</p>
                <h3>Riya Sharma</h3>
              </div>
            </div>
            <div className="automation-card__progress">
              <div className="automation-card__progress-bar">
                <span style={{ width: '67%' }} />
              </div>
              <div className="automation-card__footer">
                <span>Progress 67%</span>
                <span className="automation-card__status">In Progress</span>
              </div>
            </div>
          </div>
        </SectionPanel>

        <SectionPanel title="Recent Activity" subtitle="Latest automation updates">
          <ul className="timeline-list">
            {activityItems.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </ul>
        </SectionPanel>

        <SectionPanel title="Quick Actions" subtitle="Start common tasks instantly">
          <div className="actions-grid">
            {quickActions.map((action) => (
              <button key={action} type="button" className="action-button">
                {action}
              </button>
            ))}
          </div>
        </SectionPanel>
      </div>
    </PageCard>
  )
}

export default DashboardPage
