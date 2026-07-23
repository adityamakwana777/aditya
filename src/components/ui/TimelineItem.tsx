type TimelineItemProps = {
  title: string
  time: string
  status: string
}

const TimelineItem = ({ title, time, status }: TimelineItemProps) => {
  return (
    <li className="timeline-item">
      <div className="timeline-item__dot" />
      <div className="timeline-item__content">
        <div className="timeline-item__row">
          <strong>{title}</strong>
          <span>{time}</span>
        </div>
        <p>{status}</p>
      </div>
    </li>
  )
}

export default TimelineItem
