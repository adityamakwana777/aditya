import PageCard from '../../components/ui/PageCard'

const BrowserPage = () => {
  return (
    <PageCard
      title="Browser"
      description="Prepare a Playwright-ready browser session for automation workflows."
    >
      <div className="browser-panel">
        <div className="browser-status-card">
          <div>
            <p className="browser-status-card__label">Status</p>
            <h3>Disconnected</h3>
          </div>
          <div className="browser-status-card__actions">
            <button type="button" className="action-button">Launch Chrome</button>
            <button type="button" className="action-button">Attach Existing Browser</button>
          </div>
        </div>

        <div className="browser-info-grid">
          <div className="browser-info-card">
            <h4>Current URL</h4>
            <p>Not connected</p>
          </div>
          <div className="browser-info-card">
            <h4>Cookies</h4>
            <p>0 loaded</p>
          </div>
          <div className="browser-info-card">
            <h4>Profile</h4>
            <p>Default profile</p>
          </div>
        </div>
      </div>
    </PageCard>
  )
}

export default BrowserPage
