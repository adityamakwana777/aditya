import { useState } from 'react'
import PageCard from '../../components/ui/PageCard'
import CandidateDetail from '../../components/ui/CandidateDetail'
import CandidateRow from '../../components/ui/CandidateRow'

const initialCandidates = [
  { id: 1, name: 'Riya Sharma', email: 'riya@example.com', mobile: '+91 98765 43210', status: 'Ready', photo: 'RS' },
  { id: 2, name: 'Aman Verma', email: 'aman@example.com', mobile: '+91 99876 54321', status: 'Review', photo: 'AV' },
  { id: 3, name: 'Nisha Rao', email: 'nisha@example.com', mobile: '+91 91234 56789', status: 'Pending', photo: 'NR' },
]

const CandidatesPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(initialCandidates[0])

  return (
    <PageCard
      title="Candidates"
      description="Review applicant records and prepare them for automation workflows."
    >
      <div className="candidates-toolbar">
        <button type="button" className="action-button">+ Import Excel</button>
        <button type="button" className="action-button">+ Add Candidate</button>
      </div>

      <div className="candidates-layout">
        <div className="candidates-list-panel">
          <div className="candidates-list-panel__header">
            <h3>Candidate List</h3>
            <span>{initialCandidates.length} records</span>
          </div>
          <div className="candidate-list">
            {initialCandidates.map((candidate) => (
              <CandidateRow
                key={candidate.id}
                candidate={candidate}
                active={selectedCandidate.id === candidate.id}
                onSelect={setSelectedCandidate}
              />
            ))}
          </div>
        </div>

        <CandidateDetail candidate={selectedCandidate} />
      </div>
    </PageCard>
  )
}

export default CandidatesPage
