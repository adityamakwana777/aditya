import PageCard from '../../components/ui/PageCard'

const JobProfilesPage = () => {
  return (
    <PageCard
      title="Job Profiles"
      description="Create reusable automation profiles so the same workflow can be reused across applications."
    >
      <div className="job-profile-card">
        <div className="job-profile-card__header">
          <div>
            <p className="job-profile-card__eyebrow">Reusable Template</p>
            <h3>OJAS Police SI</h3>
          </div>
          <span className="job-profile-card__badge">Plugin: OJAS</span>
        </div>

        <div className="job-profile-form">
          <label>
            <span>Profile Name</span>
            <input type="text" defaultValue="OJAS Police SI" />
          </label>

          <label>
            <span>Plugin</span>
            <input type="text" defaultValue="OJAS" />
          </label>

          <label>
            <span>URL</span>
            <input type="text" defaultValue="https://ojas.gov.in/apply" />
          </label>

          <label>
            <span>Required Documents</span>
            <textarea defaultValue="Photo, Signature, 10th, 12th, Degree, Caste, Income, EWS, PWD" />
          </label>

          <label>
            <span>Required Fields</span>
            <textarea defaultValue="Full Name, Email, Mobile, Date of Birth, Address, Education" />
          </label>

          <button type="button" className="action-button">Save</button>
        </div>
      </div>
    </PageCard>
  )
}

export default JobProfilesPage
