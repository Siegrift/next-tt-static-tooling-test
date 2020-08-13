# next-tt-static-tooling-test

Aim of this project is to compare open source static tooling for finding and refactoring
incompatible code paths when project uses [trusted types](https://web.dev/trusted-types/).

## Setup

1. `yarn`
2. `cd tsec && npm i && npm build` - will build tsec to `tsec/bin/tsec`
3. Look into `package.json` for available scripts to run

Project was bootstrapped with `npx create-next-app --example with-typescript next-tt-static-tooling-test`
