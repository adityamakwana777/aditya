import type { ReactNode } from 'react'

type PageCardProps = {
  title: string
  description: string
  children?: ReactNode
}

const PageCard = ({ title, description, children }: PageCardProps) => {
  return (
    <section className="page-card">
      <div className="page-card__header">
        <div>
          <p className="page-card__eyebrow">GovFlow AI</p>
          <h1>{title}</h1>
        </div>
        <p className="page-card__description">{description}</p>
      </div>
      {children}
    </section>
  )
}

export default PageCard
