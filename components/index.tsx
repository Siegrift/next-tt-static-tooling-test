import React, { useState } from 'react'

const Index = () => {
  const [state, setState] = useState({
    iframe: '<img src=. onerror=console.log("frame") />',
    showIframe: false,
  })
  const { iframe, showIframe } = state

  return (
    <>
      <h1>Hi, </h1>

      <div>Set iframe srcDoc content</div>
      <input
        style={{ width: 300 }}
        type="text"
        value={iframe}
        onChange={(e) => setState({ ...state, iframe: e.target.value })}
      />
      <button onClick={() => setState({ ...state, showIframe: !showIframe })}>
        Toggle iframe with custom content
      </button>
      {showIframe && <iframe srcDoc={iframe} />}
    </>
  )
}

export default Index
