type StatCardProps = {
  label: string
  value: string
  accent?: string
}

const StatCard = ({ label, value, accent = '#4f46e5' }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="stat-card__accent" style={{ backgroundColor: accent }} />
      <div>
        <p className="stat-card__label">{label}</p>
        <h3>{value}</h3>
      </div>
    </div>
  )
}

export default StatCard
