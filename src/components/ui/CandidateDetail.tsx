type Candidate = {
  id: number
  name: string
  email: string
  mobile: string
  status: string
  photo: string
}

type CandidateDetailProps = {
  candidate: Candidate | null
}

const CandidateDetail = ({ candidate }: CandidateDetailProps) => {
  if (!candidate) {
    return <div className="candidate-detail empty">Select a candidate to view details.</div>
  }

  return (
    <div className="candidate-detail">
      <div className="candidate-detail__header">
        <div className="candidate-detail__avatar">{candidate.photo}</div>
        <div>
          <h3>{candidate.name}</h3>
          <p>{candidate.email}</p>
          <p>{candidate.mobile}</p>
        </div>
      </div>

      <div className="candidate-detail__tabs">
        <div className="candidate-detail__tab active">Personal Details</div>
        <div className="candidate-detail__tab">Education</div>
        <div className="candidate-detail__tab">Documents</div>
        <div className="candidate-detail__tab">Preview</div>
        <div className="candidate-detail__tab">Application History</div>
      </div>

      <div className="candidate-detail__body">
        <div className="candidate-detail__card">
          <h4>Profile Snapshot</h4>
          <p>Status: {candidate.status}</p>
          <p>Ready for review and automation handoff.</p>
        </div>
        <div className="candidate-detail__card">
          <h4>Current Stage</h4>
          <p>Document verification pending</p>
        </div>
      </div>
    </div>
  )
}

export default CandidateDetail
