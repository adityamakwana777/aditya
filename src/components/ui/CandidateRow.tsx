type Candidate = {
  id: number
  name: string
  email: string
  mobile: string
  status: string
  photo: string
}

type CandidateRowProps = {
  candidate: Candidate
  active?: boolean
  onSelect: (candidate: Candidate) => void
}

const CandidateRow = ({ candidate, active = false, onSelect }: CandidateRowProps) => {
  return (
    <button type="button" className={`candidate-row ${active ? 'active' : ''}`} onClick={() => onSelect(candidate)}>
      <div className="candidate-row__photo">{candidate.photo}</div>
      <div className="candidate-row__info">
        <strong>{candidate.name}</strong>
        <span>{candidate.email}</span>
      </div>
      <div className="candidate-row__meta">
        <span>{candidate.mobile}</span>
        <em>{candidate.status}</em>
      </div>
    </button>
  )
}

export default CandidateRow
