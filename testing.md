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

### Testing User Goals

> * Play a simple adventure game that is fun and engaging.

The game is designed to be simple to play with a single click of the mouse or tap of the screen. The game is also designed to be played on mobile devices with a single tap of the screen. The game is designed to be fun and engaging with multiple endings and a variety of choices to make with the option to add ambient sound effects to enhance the experience.

> * Be able to collect multiple endings by replaying the game.

At this time the game is designed only as a demo, however, it has been created with replayability in mind with multiple short paths to explore and multiple endings to discover. These endings are tracked in the achievements modal and can be viewed at any time while the user is on the site.


### Testing Site Owner Goals

> * Create a game that is fun and engaging.

<details><summary>Inventory Features</summary>
<img src="assets/images/idonthavetheamulet.png" alt="Game screenshot without necessary items. You don't have the amulet">
<img src="assets/images/ihavetheamulet.png" alt="Game screenshot with necessary items. You have the amulet">
<img src="assets/images/itsdarkoutside.png" alt="Game screenshot with necessary items. It's dark outside">
</details>

The game is designed to be fun and engaging with ten different endings and a variety of choices to make with the game to add ambient music and small implementation of inventory functionality to enhance the experience with users needing certain items for specific sections of the game, starting with the flashlight in order to look around outside.

> * Design the game to be visually appealing.

<details><summary>Responsive Design</summary>
<img src="assets/images/intothewoods-responsive.png" alt="Responsive design of the page">
</details>

The game is designed to be visually appealing with a simple design and responsive layout that is easy to navigate and play on all devices.

> * Provide a responsive and accessible website.

The game is designed to be responsive and accessible with a simple design and responsive layout that is easy to navigate and play on all devices. The game has been tested on mobile devices using accessibility tools including talkback feature for screen readers.

> * Create seamless interactivity that can't be accidentally broken by the user.

<details><summary>404</summary>
<img src="assets/images/intothewoods-404.png" alt="404 page">
</details>

Javascript funtions have been implemented within the game container so that only options that take the user to the next part of the game are clickable. The navigation bar is always visible at the top of the page to access any extra features. The 404 page is designed to navigate the user back to the game page if an incorrect url is entered.

### Testing User Stories

> * I want to be able to easily navigate through the game.

<details><summary>Simple navigation</summary>
<img src="assets/images/intothewoods-wholepage.png" alt="The whole page including navigation and game container">
</details>

The game is designed to be simple to navigate. The navigation bar is always visible at the top of the page to access any extra features and the game is designed to be played with a single click of the mouse. The game is also designed to be played on mobile devices with a single tap of the screen. The about section is available at the start of the game with credits available at the end of the game.

> * I want to be able to see the different endings I have discovered.

<details><summary>Achievements</summary>
<img src="assets/images/intothewoods-allachievements.png" alt="Achievements">
</details>

The achievements modal is designed to show the user which endings they have discovered. The achievements modal is also designed to be simple to navigate with a single click of the mouse or tap of the screen and is always available in the navigation bar.

> * I want to be able to see which items I have in my inventory.

<details><summary>Inventory</summary>
<img src="assets/images/intothewoods-inventory.png" alt="Inventory">
</details>

The inventory modal is designed to show the user which items they have in their inventory. The inventory modal is also designed to be simple to navigate with a single click of the mouse or tap of the screen and is always available in the navigation bar.