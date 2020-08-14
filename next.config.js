module.exports = {
  // https://nextjs.org/docs/api-reference/next.config.js/headers
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy-Report-Only',
            value: "require-trusted-types-for 'script'; trusted-types default",
          },
        ],
      },
    ]
  },
}
