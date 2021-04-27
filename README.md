<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Matt Roth's Portfolio Page
</h1>

# What's in this readme?

Each time I start a new project I usually consult a handful of docs/tutorials to recreate my preferred VScode environment (linting rules, eslint/prettier conflict resolution, etc.). I plan to use this readme to bring all of that information together in one place. This will simplify the setup process, and since this is my first Gatsby project it will have the added benefit of serving as my notes for this technology as well. Let's get going!

## Setting up my local environment

1.  **Create a new Gatsby site using the minimal starter.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

    The relevant configs I used in this project are:

    - CMS? **No**
    - Styling? **Styled-components**
    - Plugins:
      - Google Analytics
      - Responsive images
      - React Helment
      - Offline functionality
      - Manifest file
      - Markdown and MDX support

2.  **Installing packages**

    ```shell
    npm i eslint -D
    npm i prettier -D
    npx eslint --init
    ```

    ESLint init options are as follows:

    - How would you like to use ESLint?
      - To check syntax, find problems, and enforce code style
    - What type of modules does your project use?
      - JavaScript modules (import/export)
    - Which framework does your project use?
      - React
    - Does your project use TypeScript?
      - No
    - Where does your code run?
      - Browser
    - How would you like to define a style for your project?
      - Use a popular style guide
      - Which style guide do you want to follow?
        - Airbnb: https://github.com/airbnb/javascript
    - What format do you want your config file to be in?
      - JSON

3.  **Adding Prettier to ESLint**

    ```shell
    npm i eslint-plugin-prettier -D
    ```

    This will run Prettier as an ESLint rule and reports differences as individual ESLint issues. To use this add the following code to `.eslintrc.json`. (Code contains extra rules and preferences).

    ```json
    "plugins": [
      "react",
      "prettier"
    ],
    "rules": {
      "prettier/prettier": [
        // Report any differences as an error
        "error",
        // Additional rules
        {
          "endOfLine": "lf",
          "semi": true,
          "singleQuote": true,
          "tabWidth": 2,
          "trailingComma": "es5"
        }
      ]
    }
    ```

4.  **Prevent conflict between Prettier and ESLint**

    A Prettier config package exists for ESLint

    ```shell
    npm i eslint-config-prettier -D
    ```

    To use it, add `"prettier"` to the `"extends"` array in `eslintrc.json`:

    ```json
    "extends": [
      "plugin:react/recommended",
      "airbnb",
      "prettier",
      "prettier/react"
    ],
    ```

    _Make sure the Prettier rules are last in the array!_

5.  **VSCode config**

    Keep settings specific to project by using VSCode's "workspaces" settings. This prevents headache if a job requires a different local environment.

    ```json
    "editor.formatOnSave": true,
    "[javascript]": {
      "editor.formatOnSave": false
    },
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.alwaysShowStatus": true,
    ```

    There is also a VSCode extension that can use Prettier's formatting power on other languages. Set Prettier as the **default formatter** (previously done with `"prettier.disableLanguages": [ "js" ]`) and disable the extension for `.js` files, otherwise they will fight and revert corrections and create a generally bad time. A lot of this ESLint config advice comes from [Nicky Meuleman's excellent guide!](https://nickymeuleman.netlify.app/blog/automagically-lint)
