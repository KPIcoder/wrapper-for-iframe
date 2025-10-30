function App() {
  const iframeSrc = import.meta.env.VITE_IFRAME_SRC as string | undefined

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ padding: '12px 16px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '18px' }}>Wrapper App</h1>
      </header>
      <div style={{ flex: 1, minHeight: 0 }}>
        <iframe
          src={iframeSrc}
          title="Embedded App"
          style={{ border: 'none', width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}

export default App
