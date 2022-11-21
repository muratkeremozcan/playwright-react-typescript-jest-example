# Playwright vs Cypress

This is a PoC for [Playwright](https://playwright.dev/docs/why-playwright) vs [Cypress](https://www.cypress.io/) a simple React TS app.

## Table of contents
  - [Setup](#setup)
  - [Playwright](#playwright)
  - [Cypress](#cypress)
  - [CI Test results](#ci-test-results)
  - [Comparison](#comparison)

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

<br></br>

## [Comparison](#comparison)

What matters as of the end of 2022:

- Cypress runs in the browser vs PW runs in  Node
  - running in the browser has huge advantages
    - control browser apis directly (ex: fetch)
    - control window events (ex: win.addEventListener)
    - control application code directly (ex: app actions, spy/stub problematic application methods)
- Developer experience / feedback: cy-time-travel-debug vs pw-watch-mode 
- syntax: declarative, flow right, terse, fp-like VS imperative, left-hand-side-assignments, jest-like
- component testing: Cy has full support (4 UI frameworks), in browser vs PW has experimental support, in node (React)

|                                              | Cypress Studio                                               | Playwright                                                   |
| -------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| multi-domain, multi-tab scenarios            | experimental                                                 | supported                                                    |
| WebKit support                               | [on the road map](https://docs.cypress.io/guides/references/roadmap) | supported                                                    |
| API testing                                  | [Great](https://docs.cypress.io/api/commands/request)        | supported                                                    |
| component testing                            | [supported](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/,#header) </br> | supported                                                    |
| network handling capabilities                | [Great](https://docs.cypress.io/api/commands/intercept)<br>Network can be fully stubbed, effectively enabling ui-component-integration testing | [supported](https://playwright.dev/docs/network/)            |
| point & click test recording (for beginners) | supported                                                    | supported                                                    |
| local failure diagnosis                      | [Debugging workflow](https://docs.cypress.io/guides/core-concepts/test-runner) that Cypress provides is still unmatched.<br>The time-traveling and inspecting alongside the command log is an unignorable productivity boost | [supported](https://playwright.dev/docs/debug/#run-in-headed-mode) PW is considering watch-mode which would give a more immediate and visual feedback, vs the VScode plugin or the html report after the test run. |
| access & debug at app source-code level      | can use Cypress as dev environment instead of the browser[<br>](https://www.cypress.io/blog/2019/10/29/split-a-very-long-cypress-test-into-shorter-ones-using-app-actions/)[Application action](https://www.cypress.io/blog/2019/10/29/split-a-very-long-cypress-test-into-shorter-ones-using-app-actions/) | n/a                                                          |
| community                                    | [Vast](https://www.npmtrends.com/cypress-vs-playwright)      | growing                                                      |
| training & learning resources                | Some of the best documentation online[<br>](https://docs.cypress.io/examples/examples/recipes)[Recipies](https://docs.cypress.io/examples/examples/recipes)  / patterns with code samples for most known challenges<br>Vast amount of training | documentation is getting better (some Puppeteer StackOverflow info still applies) |
| target audience                              | Open source and made for profit, monetized by Cypress Dashboard | made by Microsoft for Microsoft                              |
| reporting                                    | (At this point the paid feature Cypress Dashboard begins to show enterprise perks)<br />[Cypress Dashboard](https://www.cypress.io/dashboard/) | [built-in, Jest-like, and some 3rd party](https://playwright.dev/docs/test-reporters) |
| parallelization                              | [CI Load Balancing & Parallelization](https://docs.cypress.io/guides/guides/parallelization#Overview) | local to the machine using workers                           |
| CI failure diagnosis                         | artifacts (screenshot, video), CLI<br>code snippets of failure<br>past execution data (failures, flake, commit correlation) | artifacts (screenshot, video) and CLI <br> [Trace viewer](https://playwright.dev/docs/trace-viewer/) |
| CI test flake                                | [Flakey test management<br><br>](https://docs.cypress.io/guides/dashboard/flaky-test-management)Test Muting (ignore test flake you will not address)<br>Test Burn-in (run new tests x times to ensure flake-freeness)<br> | n/a                                                          |
| CI efficiency                                | [Smart orchestration (run failed spec first, cancel run on failure)](https://docs.cypress.io/guides/dashboard/smart-orchestration) | n/a                                                          |
| analytics                                    | [run status & duration<br>test suite size<br>slowest tests<br>top failures](https://docs.cypress.io/guides/dashboard/analytics#Run-status) | n/a                                                          |
| SSO                                          | [Jira](https://docs.cypress.io/guides/dashboard/jira-integration)<br>[Okta<br>](https://docs.cypress.io/guides/testing-strategies/okta-authentication)[Github Enterprise](https://docs.cypress.io/guides/dashboard/github-integration) | n/a                                                          |
| tech support                                 | included with Cypress Dashboard sub                          | n/a                                                          |
| automatic waiting                            | both                                                         |                                                              |
| video capture, mobile emulation              | both                                                         |                                                              |
| supports Chrome dev protocol                 | both                                                         |                                                              |
