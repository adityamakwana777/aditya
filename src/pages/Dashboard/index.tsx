import PageCard from '../../components/ui/PageCard'

const DashboardPage = () => {
  return (
    <PageCard
      title="Dashboard"
      description="A polished overview for operations, progress, and key metrics."
    >
      <div className="placeholder-grid">
        <div className="placeholder-panel" />
        <div className="placeholder-panel" />
        <div className="placeholder-panel" />
      </div>
    </PageCard>
  )
}

export default DashboardPage
