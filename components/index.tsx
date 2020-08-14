import React, { useState } from 'react'

const Wrapper = ({ children }: any) => {
  return (
    <div style={{ padding: 25, margin: 25, backgroundColor: 'antiquewhite' }}>
      {children}
    </div>
  )
}

const Index = () => {
  const [state, setState] = useState({
    iframe: '<img src=. onerror=console.log("frame") />',
    showIframe: false,
    showStaticIframe: false,
  })
  const { iframe, showIframe, showStaticIframe } = state

  return (
    <>
      <h1>Hi, </h1>

      <Wrapper desc="STRING assignment to srcDoc attribute">
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
      </Wrapper>

      <Wrapper desc="STRING LITERAL assignment to srcDoc attribute">
        <button
          onClick={() =>
            setState({ ...state, showStaticIframe: !showStaticIframe })
          }
        >
          Toggle iframe with static content
        </button>
        {showStaticIframe && (
          <iframe srcDoc="<img src=. onerror=console.log('static-iframe') />" />
        )}
      </Wrapper>
    </>
  )
}

export default Index
