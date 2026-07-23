import type { Candidate } from '../../data/candidates'

type CandidateTableProps = {
  candidates: Candidate[]
  onView: (candidate: Candidate) => void
  onEdit: (candidate: Candidate) => void
  onDelete: (candidate: Candidate) => void
}

const CandidateTable = ({ candidates, onView, onEdit, onDelete }: CandidateTableProps) => {
  return (
    <div className="table-card">
      <table className="candidate-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{`${candidate.firstName} ${candidate.middleName ? candidate.middleName + ' ' : ''}${candidate.lastName}`}</td>
              <td>{candidate.mobile}</td>
              <td>{candidate.email}</td>
              <td><span className="status-pill">{candidate.applicationStatus}</span></td>
              <td>
                <div className="table-actions">
                  <button type="button" onClick={() => onView(candidate)}>View</button>
                  <button type="button" onClick={() => onEdit(candidate)}>Edit</button>
                  <button type="button" onClick={() => onDelete(candidate)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CandidateTable
