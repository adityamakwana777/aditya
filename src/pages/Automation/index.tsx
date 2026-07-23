import PageCard from '../../components/ui/PageCard'

const statusCards = [
  { label: 'Waiting', value: '3', tone: 'waiting' },
  { label: 'Running', value: '1', tone: 'running' },
  { label: 'Paused', value: '1', tone: 'paused' },
  { label: 'Completed', value: '18', tone: 'completed' },
  { label: 'Failed', value: '2', tone: 'failed' },
]

const queueItems = [
  { title: 'OJAS Police SI', detail: 'Candidate review and form filling', status: 'Running' },
  { title: 'Rajasthan SI Batch', detail: 'Browser session ready', status: 'Waiting' },
  { title: 'Document Validation', detail: 'Awaiting upload confirmation', status: 'Paused' },
]

const AutomationPage = () => {
  return (
    <PageCard
      title="Automation"
      description="Control the automation queue and monitor execution state."
    >
      <div className="automation-page">
        <div className="automation-actions">
          <button type="button" className="action-button">Start</button>
          <button type="button" className="action-button">Pause</button>
          <button type="button" className="action-button">Resume</button>
          <button type="button" className="action-button">Stop</button>
        </div>

        <div className="automation-status-grid">
          {statusCards.map((card) => (
            <div key={card.label} className={`automation-status-card ${card.tone}`}>
              <p>{card.label}</p>
              <h3>{card.value}</h3>
            </div>
          ))}
        </div>

        <div className="automation-queue">
          <h3>Automation Queue</h3>
          <div className="automation-queue__list">
            {queueItems.map((item) => (
              <div key={item.title} className="automation-queue__item">
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
                <span className={`automation-pill ${item.status.toLowerCase()}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageCard>
  )
}

export default AutomationPage
