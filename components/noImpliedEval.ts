// have a look at https://eslint.org/docs/rules/no-implied-eval
// respective rule in tsec is:
// https://github.com/googleinterns/tsec/blob/master/src/conformance_rules/ban_window_stringfunctiondef.ts
export const _eval = (payload: string) => {
  const constantStr = 'constant' as const
  const trustedScript = window.trustedTypes!.emptyScript
  const indirect = setTimeout

  // safe
  setTimeout("alert('Hi!');", 0)
  setTimeout("alert('Hi!');")
  setInterval("alert('Hi!');", 0)
  setInterval(constantStr, 0)
  indirect(constantStr, 0)
  ;(setTimeout as any)(constantStr)
  setTimeout(trustedScript) // trusted types

  // unsafe
  setTimeout(payload, 0)
  setInterval(payload, 0)
  setTimeout(payload)
  window.setTimeout(payload)
  window['setTimeout'](payload)
}
