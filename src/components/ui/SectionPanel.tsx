import type { ReactNode } from 'react'

type SectionPanelProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

const SectionPanel = ({ title, subtitle, children }: SectionPanelProps) => {
  return (
    <section className="section-panel">
      <div className="section-panel__header">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </section>
  )
}

export default SectionPanel
