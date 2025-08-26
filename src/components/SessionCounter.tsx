import React from 'react'

type Props = {
  completedInCycle: number
  longBreakEvery: number
}

const SessionCounter: React.FC<Props> = ({ completedInCycle, longBreakEvery }) => {
  const remaining = Math.max(longBreakEvery - (completedInCycle % longBreakEvery), 1)
  return (
    <div className="session-counter" aria-label="Session counter">
      Session {completedInCycle % longBreakEvery || longBreakEvery}/{longBreakEvery} before long break
      <span className="muted"> · {remaining} to go</span>
    </div>
  )
}

export default SessionCounter

