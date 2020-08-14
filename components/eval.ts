// have a look at https://eslint.org/docs/rules/no-eval
export const _eval = (payload: string) => {
  const constantStr = 'constant payload' as const
  const ref = eval
  const win = window
  const custom = { eval: (_x: any) => void 0 }

  // safe
  eval('<script>console.log("string literal script")</script>')
  eval(`constant`)
  eval(constantStr)
  ;(eval as any)(constantStr)
  custom.eval(payload)

  // unsafe
  eval(payload)
  ref(payload)(0, eval)(payload)
  window.eval(payload)
  globalThis.eval(payload)
  win.eval(payload)
}
