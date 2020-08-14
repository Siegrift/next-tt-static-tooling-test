// https://nextjs.org/docs/advanced-features/custom-app

interface TTWindow extends Window {
  trustedTypes: any
}

const defaultPolicyMiddlewareFor = (type: string) => (value: string) => {
  console.warn(`Default policy for ${type}, value is "${value.substr(0, 50)} `)
  return value
}

const CustomApp = ({ Component, pageProps }: any) => {
  if (typeof window !== 'undefined') {
    const win = (window as any) as TTWindow
    if (
      win.trustedTypes !== undefined &&
      win.trustedTypes.defaultPolicy === null
    ) {
      win.trustedTypes.createPolicy('default', {
        createHTML: defaultPolicyMiddlewareFor('HTML'),
        createScript: defaultPolicyMiddlewareFor('Script'),
        createScriptURL: defaultPolicyMiddlewareFor('ScriptURL'),
      })
    }
  }
  return <Component {...pageProps} />
}

export default CustomApp
