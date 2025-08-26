import React from 'react'

type Props = {
  isRunning: boolean
  onStartPause?: () => void
  onSkip?: () => void
  autoStartNext: boolean
  onToggleAutoStart?: (v: boolean) => void
  disabled?: boolean
}

const Controls: React.FC<Props> = ({
  isRunning,
  onStartPause,
  onSkip,
  autoStartNext,
  onToggleAutoStart,
  disabled,
}) => {
  return (
    <div className="controls">
      <button
        className="btn"
        aria-label={isRunning ? 'Pause timer' : 'Start timer'}
        onClick={onStartPause}
        disabled={disabled}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button className="btn" aria-label="Skip phase" onClick={onSkip} disabled={disabled}>
        Skip
      </button>
      <label className="toggle">
        <input
          type="checkbox"
          checked={autoStartNext}
          onChange={(e) => onToggleAutoStart?.(e.target.checked)}
          disabled={disabled}
        />
        <span>Auto-start next phase</span>
      </label>
    </div>
  )
}

export default Controls

