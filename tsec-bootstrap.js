module.exports = {
  fixers: [
    {
      name: 'ban-element-innerhtml-assignments',
      fixer: {
        getFixForFlaggedNode: (n) => ({
          changes: [{
            sourceFile: n.getSourceFile(),
            start: n.getStart(),
            end: n.getEnd(),
            replacement: n.getText() + 'replaced',
          }],
        })
      }
    }
  ]
}
