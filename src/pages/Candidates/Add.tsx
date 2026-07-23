import { useNavigate } from 'react-router-dom'
import PageCard from '../../components/ui/PageCard'
import CandidateForm from '../../components/ui/CandidateForm'
import type { Candidate } from '../../data/candidates'

const AddCandidatePage = () => {
  const navigate = useNavigate()

  const handleSubmit = (values: Candidate) => {
    console.info('Add candidate', values)
    navigate('/candidates')
  }

  return (
    <PageCard title="Add Candidate" description="Create a new candidate entry with the standard profile form.">
      <CandidateForm onSubmit={handleSubmit} />
    </PageCard>
  )
}

export default AddCandidatePage
