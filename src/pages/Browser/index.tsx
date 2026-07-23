import PageCard from '../../components/ui/PageCard'

const BrowserPage = () => {
  return (
    <PageCard
      title="Browser"
      description="Inspect browsing automation state and recent runs."
    >
      <div className="placeholder-grid">
        <div className="placeholder-panel" />
      </div>
    </PageCard>
  )
}

export default BrowserPage
