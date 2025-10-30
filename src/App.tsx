function App() {
  const iframeSrc = import.meta.env.VITE_IFRAME_URL as string | undefined

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
      <header style={{ padding: '12px 16px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '18px' }}>Wrapper App</h1>
      </header>
      <div style={{ flex: 1, minHeight: 0 }}>
        <iframe
          src={iframeSrc}
          title="Embedded App"
          style={{ display: 'block', border: 'none', width: '100vw', height: '100vh', justifySelf: 'center' }}
        />
      </div>
    </div>
  )
}

export default App
