// NOTE: omitting tests for document.writeln

export const documentWrite = (payload: string) => {
  const constantStr = 'constant payload' as const
  const trustedHTML = window.trustedTypes!.emptyHTML
  // try indirect reference
  const doc = document
  const ref = document.write

  // safe
  document.write('<script>console.log("string literal script")</script>')
  document.write(`constant`)
  document.write(constantStr)
  ref('constant') // impossible to report, we don't know if's a DOM fn
  ref(constantStr) // impossible to report, we don't know if's a DOM fn
  doc.write(constantStr)
  document.write(trustedHTML) // trusted types

  // unsafe
  document.write(payload)
  document.write(`decorated ${payload}`)
  ref(payload) // impossible to report, we don't know if's a DOM fn
  ;(document as any).write(payload)
  doc.write(payload)
}
