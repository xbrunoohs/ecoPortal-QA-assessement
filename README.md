# ecoPortal-QA-assessement

This document was written for the QA assessement of ecoPortal. The challenge consist of planning, executing and automating tests to verify the functionality of a [website](https://arstechnica.com).

# Pre-requisites

* Download Node.js on the official [website](https://nodejs.org/en/download).
* Cypress is a front-end test automation framework, you can install it via:  

```
npm install cypress --save-dev
```
For further troubleshooting, visit the official [guide](https://docs.cypress.io/guides/getting-started/installing-cypress).

# Running

Clone the repository using:

```
git clone https://github.com/xbrunoohs/ecoPortal-QA-assessement.git
```

Open the terminal inside the project folder and execute:
```
npx cypress open
```

A Cypress window will show up with two options of testing type:
* E2E
* Component Testing

Make sure to select the E2E option.

Choosing the E2E option, it leads to a window to choose a browser to proceed. Google Chrome is highly recommended because it was the browser used to write and run the test. It will open a window on the browser with the specs (test files) listed. Select the test file `post-search.cy.js` and it will run the test.

# Documentation

In planning and executing challenges that you can find on the `doc` folder, was used Gherkin language to write the user stories in the planning part, and common quality metrics to verify the results after executing tests.
