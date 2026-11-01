---
name: add-simple-modal
description: >-
  Adds a minimal accessible modal dialog to the Vite React one-page app.
  Use when the user asks to add a modal, dialog, popup overlay, or
  hello-world-style confirm panel in this project.
disable-model-invocation: true
---

# Add a simple modal

## When to use

Follow this skill when adding or adjusting a modal in `src/App.jsx` (or a small sibling component).

## Pattern

1. Track open state with `useState(false)`.
2. Open from a button: `onClick={() => setOpen(true)}`.
3. Render the modal only when `open` is true.
4. Include:
   - a full-screen backdrop that closes on click
   - a dialog panel that stops click propagation
   - a clear title (`role="dialog"`, `aria-modal="true"`)
   - a Close button
5. On Escape, set `open` to false.
6. Style with classes in `src/index.css` (`.modal-backdrop`, `.modal`) — keep it minimal.

## Do not

- Do not add a modal library.
- Do not build a generic modal framework for this demo app.
