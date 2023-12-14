# Into the Woods

<img src="assets/images/intothewoods-responsive.png" alt="An image representing how the site looks across different devices of varying size.">

This is the documentation for Into the Woods - interactive javascript game. The site has been built using HTML5, CSS3 and Javascript for the Milestone 2 project for Code Institute's web development diploma.

******

## Contents

* [User Experience (UX)](#user-experience---ux)
  * [Strategy](#strategy)
    * [User Stories](#user-stories)
  * [Scope](#scope)
  * [Structure](#structure)
  * [Skeleton](#skeleton)
* [User Interface (UI) Design](#user-interface---design)
  * [Typography](#typography) 

<sup><sub>[*Back to top*](#contents)</sup></sub>

-----

## User Experience - UX

### Strategy

This project was inspired by my interest in RPG style gaming and storytelling. The goal is to create an interactive and user-friendly choose your own adventure demo.

#### User Goals

- Play a simple adventure game that is fun and engaging.
- Be able to collect multiple endings by replaying the game. 

#### Site Owner Goals

- Create a game that is fun and engaging.
- Design the game to be visually appealing.
- Provide a responsive and accessible website.
- Create seamless interactivity that can't be accidentally broken by the user.

#### User Stories

- I want to be able to easily navigate through the game.
- I want to be able to see the different endings I have discovered.
- I want to be able to see which items I have in my inventory.

<sup><sub>[*Back to top*](#contents)</sup></sub>

-----

### Scope

Taking all of the above into account I decided that there needed to be only one page for the game. This would allow the user to focus on the game and not be distracted by other pages.

* __Game Page:__ This will contain the whole game and will be the only page on the site. The game will be contained within a single container using text nodes to navigate the different parts of the story. The game will have three links above the game container that will allow the user to navigate to the inventory, endings and music. 

As well as the main page there will be a custom 404 page that redirects users to the main page if the link is typed incorrectly.

<sup><sub>[*Back to top*](#contents)</sup></sub>

-----

### Structure

As the site has only one page there will be no navigation route. The links at the top of the page will be used to navigate to the different sections of the game using modals.

<sup><sub>[*Back to top*](#contents)</sup></sub>

-----

### Skeleton

#### Wireframes

All wireframes have been created with [Figma](https://figma.com/).

<details><summary>Into the Woods Desktop Wireframe</summary>
<img src="assets/images/intothewoods-desktopwireframe.png" alt="Desktop wireframe made with figma">
</details>

<details><summary>Into the Woods Tablet Wireframe</summary>
<img src="assets/images/intothewoods-tabletwireframe.png" alt="Tablet wireframe made with figma">
</details>

<details><summary>Into the Woods Mobile Wireframe</summary>
<img src="assets/images/intothewoods-mobilewireframe.png" alt="Mobile wireframe made with figma">
</details>

<details><summary>Into the Woods Modals Wireframe</summary>
<img src="assets/images/intothewoods-inventorywireframe.png" alt="Inventory modal wireframe made with figma">

<img src="assets/images/intothewoods-achievementswireframe.png" alt="Achievements modal wireframe made with figma">
</details>

-------

The wireframes featured here are the final versions of the wireframes. The original wireframes were created with the idea of having multiple game containers for the inventory and achievements sections. After some consideration I decided to use only one container and implement modals for the smaller sections. This would allow for more seamless styling for the game container.

<sup><sub>[*Back to top*](#contents)</sup></sub>

-----

## User Interface - Design

### Surface

#### Typography

Fonts have been imported from [Google Fonts](https://fonts.google.com/).

* The [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans?query=Pixelify+Sans) font has been used for the main title along with the main text used for the game. "Cursive" is the fallback font in case the browser doesn't import the font correctly. I chose this style of font as I believe it fits with the theme of the product. Letter spacing has been added to the game text for better readability. 

* The [Zen Loop](https://fonts.google.com/specimen/Zen+Loop?query=zen+loop) font has been used for the buttons. Sans-serif is the fallback font in case the browser doesn't import the font correctly. I chose this as it is a sleek font that doesn't make the buttons look too busy or bulky when there is more text within the options.

#### Colours

The colour scheme for the site was kept as simple as possible to avoid too much going on with the inclusion of the brown parchment background image. The main game container is black with reduced opacity. Text within the game container, modals and buttons is a silver/grey and text outside of the containers is black. The buttons and nav item hover effects across the game are red to contrast with the rest of the page to make them stand out. The linkedin and github icons have hover effects that change the colour of the icons to match the colours of their respective logos.


<details><summary>Main colour scheme for the site</summary>
<img src="assets/images/intothewoods-colourpallet.png" alt="Colour pallet made with coolors features parchment brown, black for the game container and outer text, red for the buttons, silver/grey for in-game font, and blue and purple for the linkedin and github icon hover effects respectively.">
</details>

--------

Colour scheme images made with [figma](https://figma.com).

<sup><sub>[*Back to top*](#contents)</sup></sub>

-------
