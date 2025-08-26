import React from 'react'

type Props = {
  identifier?: string
  title?: string
  status?: string
}

const IssueSummary: React.FC<Props> = ({ identifier, title, status }) => {
  const hasIssue = Boolean(identifier || title)
  return (
    <div className="issue-summary" aria-label="Current issue">
      <div className="issue-id" aria-label="Issue identifier">
        {hasIssue ? identifier : 'No issue selected'}
      </div>
      <div className="issue-title" aria-label="Issue title">
        {hasIssue ? title : 'Pick an issue to start'}
      </div>
      {status && (
        <div className="issue-status" aria-label="Issue status">
          {status}
        </div>
      )}
    </div>
  )
}

export default IssueSummary

