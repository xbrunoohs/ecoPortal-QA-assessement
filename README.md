# ecoPortal-QA-assessement

This document was written for the QA assessement of ecoPortal. The challenge consist of planning, executing and automating tests to verify the functionality of a [website](https://arstechnica.com).

# Pre-requisites

* Download Node.js on the official [website](https://nodejs.org/en/download).

* After some trouble with the current `npm` version, the solution was to downgrade it, following the command:
```
npm install -g npm@6
```

* Download GIT on the official [website](https://git-scm.com/downloads).
* Cypress is a front-end test automation framework, you can install it via:  

```
npm install cypress --save-dev
```
For further troubleshooting, visit the official [guide](https://docs.cypress.io/guides/getting-started/installing-cypress).

Make sure not to install the framework directly in your user folder to avoid known [issues](https://github.com/cypress-io/cypress/issues/22052).

# Running

Clone the repository using:

```
git clone https://github.com/xbrunoohs/ecoPortal-QA-assessement.git
```

Open the terminal inside the project folder `3-automation` and execute:
```
npx cypress open
```

A Cypress window will show up with two options of testing type:
* E2E
* Component Testing

Make sure to select the E2E option.

Choosing the E2E option, it leads to a window to choose a browser to proceed. Google Chrome is highly recommended because it was the browser used to write and run the test. It will open a window on the browser with the specs (test files) listed. Select the test file `post-search.cy.js` and it will run the test.

# Documentation

Details of the planning and execution of each challenge can be found in the [doc](doc/) folder. The Gherkin language was used to write the user stories in the planning part, and the results were verified using common quality parameters.
