import React from 'react'

const formatMMSS = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

const TimerDisplay: React.FC<{ remainingSeconds: number }> = ({ remainingSeconds }) => {
  return (
    <div className="timer-display" aria-live="polite" aria-atomic>
      {formatMMSS(remainingSeconds)}
    </div>
  )
}

export default TimerDisplay

