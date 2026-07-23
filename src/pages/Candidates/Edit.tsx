import { useNavigate, useParams } from 'react-router-dom'
import PageCard from '../../components/ui/PageCard'
import CandidateForm from '../../components/ui/CandidateForm'
import { candidateSeedData, type Candidate } from '../../data/candidates'

const EditCandidatePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const candidate = candidateSeedData.find((item) => item.id === Number(id))

  const handleSubmit = (values: Candidate) => {
    console.info('Edit candidate', values)
    navigate('/candidates')
  }

  if (!candidate) {
    return <PageCard title="Edit Candidate" description="Candidate not found." />
  }

  return (
    <PageCard title="Edit Candidate" description="Update an existing candidate profile.">
      <CandidateForm defaultValues={candidate} onSubmit={handleSubmit} />
    </PageCard>
  )
}

export default EditCandidatePage
