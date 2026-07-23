import PageCard from '../../components/ui/PageCard'

const CandidatesPage = () => {
  return (
    <PageCard
      title="Candidates"
      description="Review applicant activity and current pipeline status."
    >
      <div className="placeholder-grid">
        <div className="placeholder-panel" />
        <div className="placeholder-panel" />
      </div>
    </PageCard>
  )
}

export default CandidatesPage
