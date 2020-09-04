// NOTE: omitting tests for element.outerHTML

class TrustedHTMLType {
  private constructor() {} // To prevent instantiting with 'new'.
  private brand = true; // To prevent structural typing.

  toString(){ return 'str'}
}

export const elementInnerHTML = (payload: string) => {
  const constantStr = 'constant payload' as const
  const trustedHTML = window.trustedTypes!.emptyHTML
  // try indirect reference
  const ref = document.body
  const customObj = { innerHTML: 'asdasd' }
  const fakeTrustedHTML = 'str' as any as TrustedHTMLType

  class TrustedHTML {
    private brand = true;
  }

  const nameClash = 'str' as any as TrustedHTML
  document.body.innerHTML = nameClash as unknown as string // trusted types

  // safe
  document.body.innerHTML =
    '<script>console.log("string literal script")</script>'
  document.body.innerHTML = `constant`
  document.body.innerHTML = constantStr
  ref.innerHTML = 'constant'
  ref.innerHTML = constantStr
  customObj.innerHTML = payload
  customObj.innerHTML = 'constant'
  ;(ref as any).innerHTML = 'const'
  document.body.innerHTML = trustedHTML as unknown as string // trusted types
  document.body.innerHTML = fakeTrustedHTML as unknown as string // trusted types

  // unsafe
  document.body.innerHTML = payload
  document.body.innerHTML = `decorated ${payload}`
  document.body.innerHTML += `decorated ${payload}`
  ref.innerHTML = payload
  ;(ref as any).innerHTML = payload
  document.body['innerHTML'] = payload
}
