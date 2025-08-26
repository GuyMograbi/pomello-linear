import React from 'react'

export type Phase = 'FOCUS' | 'SHORT_BREAK' | 'LONG_BREAK'

const PhaseBadge: React.FC<{ phase: Phase }> = ({ phase }) => {
  const label =
    phase === 'FOCUS' ? 'Focus' : phase === 'SHORT_BREAK' ? 'Short Break' : 'Long Break'
  return <span className={`phase-badge phase-${phase.toLowerCase()}`}>{label}</span>
}

export default PhaseBadge

