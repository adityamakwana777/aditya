import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageCard from '../../components/ui/PageCard'
import CandidateTable from '../../components/ui/CandidateTable'
import SearchBar from '../../components/ui/SearchBar'
import { candidateSeedData } from '../../data/candidates'

const CandidateListPage = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [page, setPage] = useState(1)
  const pageSize = 3

  const filteredCandidates = useMemo(() => {
    return candidateSeedData.filter((candidate) => {
      const matchesSearch = `${candidate.firstName} ${candidate.lastName}`.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = status === 'All' || candidate.applicationStatus === status
      return matchesSearch && matchesStatus
    })
  }, [search, status])

  const totalPages = Math.max(1, Math.ceil(filteredCandidates.length / pageSize))
  const pagedCandidates = filteredCandidates.slice((page - 1) * pageSize, page * pageSize)

  return (
    <PageCard title="Candidate List" description="Browse candidates with local dummy data and manage their records.">
      <div className="candidate-toolbar">
        <button type="button" className="action-button">Import Excel</button>
        <button type="button" className="action-button">Export Excel</button>
        <button type="button" className="action-button" onClick={() => navigate('/candidates/add')}>Add Candidate</button>
      </div>

      <div className="candidate-controls">
        <SearchBar value={search} onChange={setSearch} />
        <select value={status} onChange={(event) => setStatus(event.target.value)} className="filter-select">
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Review">Review</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <CandidateTable
        candidates={pagedCandidates}
        onView={(candidate) => navigate(`/candidates/${candidate.id}`)}
        onEdit={(candidate) => navigate(`/candidates/${candidate.id}/edit`)}
        onDelete={() => undefined}
      />

      <div className="pagination">
        <button type="button" disabled={page === 1} onClick={() => setPage((value) => value - 1)}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button type="button" disabled={page === totalPages} onClick={() => setPage((value) => value + 1)}>
          Next
        </button>
      </div>
    </PageCard>
  )
}

export default CandidateListPage
