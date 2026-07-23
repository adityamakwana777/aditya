import { useParams } from 'react-router-dom'
import PageCard from '../../components/ui/PageCard'
import { candidateSeedData } from '../../data/candidates'

const CandidateDetailsPage = () => {
  const { id } = useParams()
  const candidate = candidateSeedData.find((item) => item.id === Number(id))

  if (!candidate) {
    return <PageCard title="Candidate Details" description="Candidate not found." />
  }

  return (
    <PageCard title="Candidate Details" description="Detailed candidate profile view.">
      <div className="candidate-details-card">
        <h3>{`${candidate.firstName} ${candidate.middleName ? candidate.middleName + ' ' : ''}${candidate.lastName}`}</h3>
        <p><strong>Gender:</strong> {candidate.gender}</p>
        <p><strong>Date of Birth:</strong> {candidate.dateOfBirth}</p>
        <p><strong>Mobile:</strong> {candidate.mobile}</p>
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Category:</strong> {candidate.category}</p>
        <p><strong>Education:</strong> {candidate.education}</p>
        <p><strong>Application Status:</strong> {candidate.applicationStatus}</p>
      </div>
    </PageCard>
  )
}

export default CandidateDetailsPage
