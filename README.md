# Playwright vs Cypress

This is a PoC for [Playwright](https://playwright.dev/docs/why-playwright) vs [Cypress](https://www.cypress.io/) a simple React TS app.

## Table of contents
  - [Setup](#setup)
  - [Playwright](#playwright)
  - [Cypress](#cypress)
  - [CI Test results](#ci-test-results)

<br></br>

## [Setup](#Setup)

After cloning this repo install the project dependencies at the project directory:

```bash
npm i
```

Start the app

```bash
npm start
```

<details><summary>Work around the Playwright MacOS permission issue</summary>

<br></br>

[This workaround will prevent](https://github.com/puppeteer/puppeteer/issues/4752#issuecomment-524086077) the dialog "*Do you want the application “Chromium.app” to accept incoming network connection?*"

Alternatively you can turn off the firewall.

</details>

<br></br>

## [Playwright](#Playwright)

The tests are under `./playwright`.

In a new tab inside your terminal, run the tests with the following command:

```bash
npm run playwright
```

There are two ways to view the UI while executing Playwright tests:

1. To execute tests with debugger, use [Playwright Inspector](https://playwright.dev/docs/inspector/).

    ```bash
    PWDEBUG=1 npm run playwright
    ```

2. Add `{ headless: false }` to [chromium launch function](https://playwright.dev/docs/debug#run-in-headed-mode) in the spec file.

<br></br>

## [Cypress](#Cypress)

The tests are under `./cypress/integration`.

To start the test runner:

```bash
npm run cypress:open
```

To run headlessly:

```bash
npm run cypress:run
```

<br></br>

## [CI Test results](#CI-Test-results)

[Cypress Dashboard](https://dashboard.cypress.io/projects/mwqojo) - uses 2 parallel machines.

[Github Actions](https://github.com/muratkeremozcan/playwright-vs-cypress/actions)

[yml file](.github/workflows/main.yml)
