export const iframeSrcDoc = (payload: string) => {
  const constantStr = 'constant payload' as const
  const trustedHTML = window.trustedTypes!.emptyHTML
  const elem = document.createElement('iframe')
  const customObj = { srcdoc: 'asdasd' }

  // safe
  elem.srcdoc = '<script>console.log("string literal script")</script>'
  elem.srcdoc = `constant`
  elem.srcdoc = constantStr
  ;(elem as any).srcdoc = constantStr
  customObj.srcdoc = payload
  elem.srcdoc = trustedHTML // trusted types

  // unsafe
  elem.srcdoc = payload
  elem.srcdoc = `decorated ${payload}`
  elem.srcdoc += `decorated ${payload}`
  ;(elem as any).srcdoc = payload
}
