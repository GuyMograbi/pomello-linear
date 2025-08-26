# Pomello Linear — Features and Scope (macOS-first)

## Overview
A macOS-first Pomodoro timer inspired by Pomello (which turns Trello cards into focus sessions). This version integrates with Linear to let you pick assigned tickets, run Pomodoro cycles with sounds, show notifications, and optionally enable macOS Focus/Do Not Disturb during work sessions.

## Target platform
- Primary: macOS (Apple Silicon + Intel); minimum macOS Sonoma (14)
- Distribution: local dev builds first; packaging TBD
- UI footprint: main resizable window (Pomello-style). Menu bar status can come later

## Core user journeys (MVP)
1) Authenticate with Linear
- Use Linear personal API key (stored securely in Keychain); OAuth may come later
- Verify connectivity and show the active workspace/team

2) See my Linear tickets
- Show issues assigned to me that are not done (exclude completed/canceled); searchable by title/key
- Default sort: createdAt (newest first); no additional sorting controls in MVP
- Basic issue details: title, identifier (e.g., ABC-123), status, priority, project, cycle, due date

3) Pick a ticket and focus with Pomodoro
- Select a ticket as the “current session”
- Start/pause/resume/skip controls
- Default lengths: Focus 25m, Short break 5m, Long break 15m every 4th session
- Configurable durations and long-break cadence
- Optional: auto-start next phase (focus/break)

4) Sounds
- Play sound at: session start, session end, break start, break end (toggle independently)
- Volume control; ship a small set of built‑in sound options

5) Notifications (macOS Notification Center)
- Show notifications for phase transitions and warnings (e.g., 1 minute remaining — optional)
- Preference to disable certain notification types

6) Focus mode / Do Not Disturb
- Option: enable macOS Focus (Do Not Disturb) while a focus session runs; disable on break/end
- Graceful fallback if permission/automation not available (show instructions)
- User can choose which Focus to enable (default Do Not Disturb, or a custom “Pomello” Focus if configured)

7) Settings & persistence

- Store settings locally; keep Linear token in macOS Keychain
- Preferences: durations, auto-start, sounds/volume, notification toggles, Focus usage


8) Reliability basics
- Resume correctly after sleep; preserve remaining time if the laptop sleeps during a session
- Offline: continue timer; no Linear write-backs in MVP

## Non-goals (for the first release)
- Cross-platform packaging (Windows/Linux)
- Advanced analytics dashboard (beyond basic session counts)
- Rich time tracking and reporting in Linear
- Multiple accounts simultaneously
- Deep calendar integration

## UI requirements (MVP)
- Main resizable window shows: current ticket info, timer controls, next phase indicator, session counter
- Ticket picker: searchable list of assigned not-done issues with key metadata; “refresh” button
- Basic accessibility labels (VoiceOver)
- Menu bar status (time remaining) is out of scope for MVP

## Acceptance criteria
- Linear integration
  - Can add a Linear API key and validate it
  - Shows only my assigned issues that are not done; searchable; default sort createdAt (newest first)
  - Selecting a ticket binds it to the current session
- Timer
  - Defaults: 25/5/15 with long break every 4 sessions; user can change these
  - Start/pause/resume/skip work; auto-start toggle works
  - Sounds play according to per-event toggles and volume
- Notifications
  - macOS notifications show at phase transitions; user can disable any category
- Focus / DND
  - When enabled, Focus turns on at focus start and off at focus end (or on break start)
  - If automation cannot toggle Focus, app surfaces a clear instruction/fallback
- Persistence & reliability
  - Preferences persist across app restarts; Linear token secured in Keychain
  - System sleep/wake does not corrupt running timers; app recovers expected remaining time

## Technical notes (directional; subject to prototyping)
- macOS Focus control can be achieved via:
  - Shortcuts CLI automation (preferred, user-approved). MVP: invoke a user-created Shortcut to toggle Focus/DND
  - AppleScript/automation permissions (with user prompts), or
  - Fallback: instruct user to enable a Focus automation that the app triggers
- Secure secrets storage via macOS Keychain
- Linear API usage: read-only for MVP (issues assigned to me); no mutations in MVP

## Telemetry and privacy
- No external analytics by default; optional local-only session history
- If usage telemetry is added later, make it opt-in

## Future (post-MVP) ideas
- Stats: daily/weekly/monthly breakdown, streaks, export CSV
- Custom sounds; per-ticket sound themes
- Multiple workspaces; project filters and saved views
- Calendar integration (block time during focus sessions)
- Deep-linking (e.g., pomello-linear://start?issue=KEY)
- Integrations (Slack status sync; set status during focus)
- Light write-back to Linear (move to In Progress on start; add short comment on end)
- Global hotkeys (start/pause/skip; quick ticket search)

## Owner decisions (locked for MVP)
- Auth: Linear personal API key stored in macOS Keychain (no OAuth)
- Write-back: none in MVP (no state changes, no comments)
- Focus: use a user-created Shortcut to toggle Focus/DND; app invokes it
- UI: main resizable window (Pomello-style)
- Defaults: 25/5/15 with long break every 4 cycles
- Sounds: bundled only
- Tickets: show only not-done issues; allow search/filter; default sort createdAt (newest first)
- Hotkeys: none in MVP
- macOS: minimum Sonoma (14)

