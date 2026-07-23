type DocumentCardProps = {
  title: string
  status?: string
}

const DocumentCard = ({ title, status = 'Pending' }: DocumentCardProps) => {
  return (
    <div className="document-card">
      <div className="document-card__title">{title}</div>
      <div className="document-card__status">{status}</div>
    </div>
  )
}

export default DocumentCard
