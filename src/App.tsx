import { useState } from 'react'
import './App.css'
import IssueSummary from './components/IssueSummary'
import TimerDisplay from './components/TimerDisplay'
import PhaseBadge, { type Phase } from './components/PhaseBadge'
import Controls from './components/Controls'
import SessionCounter from './components/SessionCounter'

function App() {
  // Mock state for UI skeleton
  const [phase] = useState<Phase>('FOCUS')
  const [remainingSeconds] = useState(25 * 60)
  const [isRunning] = useState(false)
  const [autoStartNext] = useState(false)

  const mockIssue = {
    identifier: 'ABC-123',
    title: 'Placeholder issue',
    status: 'Todo',
  }

  return (
    <div className="container">
      <header className="header">
        <IssueSummary {...mockIssue} />
        <PhaseBadge phase={phase} />
      </header>

      <main className="main">
        <TimerDisplay remainingSeconds={remainingSeconds} />
        <Controls
          isRunning={isRunning}
          autoStartNext={autoStartNext}
          onStartPause={() => {}}
          onSkip={() => {}}
          onToggleAutoStart={() => {}}
          disabled
        />
      </main>

      <footer className="footer">
        <SessionCounter completedInCycle={1} longBreakEvery={4} />
      </footer>
    </div>
  )
}

export default App
