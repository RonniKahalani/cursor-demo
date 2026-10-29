import { useEffect, useRef, useState } from 'react'

export default function App() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return

    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <main className="page">
      <h1>Hello</h1>
      <p>A tiny one-page React app.</p>
      <button type="button" onClick={() => setOpen(true)}>
        Click me
      </button>

      {open && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="modal-title">hello world</h2>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
