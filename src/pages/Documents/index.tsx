import PageCard from '../../components/ui/PageCard'
import DocumentCard from '../../components/ui/DocumentCard'

const documentTypes = [
  'Photo',
  'Signature',
  '10th',
  '12th',
  'Degree',
  'Caste',
  'Income',
  'EWS',
  'PWD',
  'Other',
]

const DocumentsPage = () => {
  return (
    <PageCard
      title="Documents"
      description="Centralize applicant documents once and reuse them across applications."
    >
      <div className="documents-grid">
        {documentTypes.map((type) => (
          <DocumentCard key={type} title={type} />
        ))}
      </div>

      <div className="upload-zone" role="button" tabIndex={0}>
        <h3>Drag & Drop Upload</h3>
        <p>Upload files once and attach them to future applications from this central place.</p>
      </div>
    </PageCard>
  )
}

export default DocumentsPage
