# Into the Woods - Testing

-----

## Contents

* [Automated Testing](#automated-testing)
    * [W3C Validator](#w3c-validator)
    * [Lighthouse](#lighthouse)
    * [JSHint](#jshint)
* [Manual Testing](#manual-testing)
    * [Testing User Stories](#testing-user-stories)
    * [Full Testing](#full-testing)
* [Bugs](#bugs)
    * [Solved Bugs](#solved-bugs)
    * [Known Bugs](#known-bugs)

-----

## Automated Testing

This automated testing section contains all testing that has been run through a program to produce validation and performance insights.

### W3C Validator

[W3C](https://validator.w3.org/#validate_by_input) was used to validate all HTML and CSS for the site via direct input. Each individual page was tested and final reconfiguration was carried out to ensure all results produced no errors.

<details><summary>Game Page</summary>
<img src="assets/images/intothewoods-w3htmlvalidation.png" alt="Main game HTML Validation">
</details>
<img width="889" alt="No errors" src="https://github.com/Melody-Lisa/Folded-Fairy/assets/137832068/174478a9-9d01-4e3a-9a87-03ad93a14dea">


<details><summary>404 Page</summary>
<img src="assets/images/intothewoods-w3404validation.png" alt="404 page HTML Validation">
</details>
<img width="889" alt="No errors" src="https://github.com/Melody-Lisa/Folded-Fairy/assets/137832068/174478a9-9d01-4e3a-9a87-03ad93a14dea">

<details><summary>CSS Stylesheets</summary>
<img src="assets/images/intothewoods-w3cssvalidation.png" alt="CSS Validation">
</details>
<img width="889" alt="No errors" src="https://github.com/Melody-Lisa/Folded-Fairy/assets/137832068/174478a9-9d01-4e3a-9a87-03ad93a14dea">

All HTML and CSS tested through the validator returned no errors or warnings.

### Lighthouse

The lighthouse tool within the chrome developer tools has been used to test performance, best practices, accessibility, and SEO. Desktop and mobile tests have been run for each page.

<details><summary>Game Page</summary>
<img src="assets/images/intothewoods-desktoplighthouse.png" alt="Lighthouse desktop test results for home page">
<img src="assets/images/intothewoods-mobilelighthouse.png" alt="Lighthouse mobile test results for home page">
</details>

| | Performance | Accessibility | Best Practice | SEO |
| :---: | :---: | :---: | :---: | :---: |
| Desktop | 98 | 100 | 100 | 100 |
| Mobile | 94 | 100 | 100 | 100 |

### JSHint

[JSHint](https://jshint.com/) was used to test all JavaScript files.

<details><summary>Game Page</summary>
<img src="assets/images/intothewoods-jshint.png" alt="JSHint results for game page">
</details>

All JavaScript files tested through JSHint returned no errors or warnings when the 'ES6' option was selected and all files were tested together.

<sup><sub>[*Back to top*](#contents)</sup></sub>

------

## Manual Testing

### Testing User Stories

> * I want to be able to easily navigate through the game.

<details><summary>Simple navigation</summary>
<img src="assets/images/intothewoods-wholepage.png" alt="The whole page including navigation and game container">
</details>

The game is designed to be simple to navigate. The navigation bar is always visible at the top of the page to access any extra features and the game is designed to be played with a single click of the mouse. The game is also designed to be played on mobile devices with a single tap of the screen. The about section is available at the start of the game with credits available at the end of the game.

> * I want to be able to see the different endings I have discovered.

<details><summary>Achievements</summary>
<img src="assets/images/intothewoods-achievements.png" alt="Achievements">
</details>

The achievements modal is designed to show the user which endings they have discovered. The achievements modal is also designed to be simple to navigate with a single click of the mouse or tap of the screen and is always available in the navigation bar.

> * I want to be able to see which items I have in my inventory.

<details><summary>Inventory</summary>
<img src="assets/images/intothewoods-inventory.png" alt="Inventory">
</details>

The inventory modal is designed to show the user which items they have in their inventory. The inventory modal is also designed to be simple to navigate with a single click of the mouse or tap of the screen and is always available in the navigation bar.