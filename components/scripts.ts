// showcase of the following tsec rules:
// https://github.com/googleinterns/tsec/blob/master/src/conformance_rules/ban_script_appendchild_calls.ts
// https://github.com/googleinterns/tsec/blob/master/src/conformance_rules/ban_script_content_assignments.ts
// https://github.com/googleinterns/tsec/blob/master/src/conformance_rules/ban_script_src_assignments.ts

export const scriptRules = (payload: string) => {
  const script = document.createElement('script')
  // there is no way to know whether textNode was created from constant or payload
  const textNode = document.createTextNode(payload)
  const constantStr = 'constant' as const
  const trustedScript = window.trustedTypes!.emptyScript
  const customObj = { text: 'aaa', textContent: 'bbb', src: 'ccc' }

  // unsafe appendChild
  script.appendChild(textNode)
  const indirectAppendChild = script.appendChild.bind(script)
  indirectAppendChild(textNode)

  // safe text and textContent
  script.text = 'constant'
  script.text = `constant`
  script.text = constantStr
  customObj.text = payload
  script.textContent = 'constant'
  script.textContent = `constant`
  script.textContent = constantStr
  customObj.textContent = payload
  script.text = trustedScript // trusted types
  script.textContent = trustedScript // trusted types
  // unsafe text and textContent
  script.text = payload
  script.textContent = payload

  // safe src
  script.src = 'consant'
  script.src = constantStr
  customObj.src = payload
  // unsafe src
  script.src = payload
}
