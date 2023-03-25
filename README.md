
![responsive img]()

Full responsive site [here]()

### [Full website here](https://aurorastorm-sw.github.io/Portfolio-project-1/index.html)

# Table of contents

- [UX](#ux)
    - [User goals](#user-goals)
        - [First-time visitor goals](#first-time-visitor-goals)
        - [Returning visitor goals](#returning-visitor-goals)
    - [User stories](#user-stories)
        - [As a website owner](#as-a-website-owner)
        - [As a new user](#as-a-new-user)
        - [As a returning user](#as-a-returning-user)
- [Wireframes](#wireframes)
- [Designs](#designs)
    - [Colors](#colors)
    - [Fonts](#fonts)
    - [Images](#images)
- [Features](#features)
    - [Home](#home)
        - [Features left to implement](#features-left-to-implement)
- [Testing](#testing)
    - [Validator testing](#validator-testing)
    - [Manual testing](#manual-testing)
    - [Lighthouse testing](#lighthouse-testing)
    - [Wave testing](#wave-testing)
    - [Bugs](#bugs)
- [Deployment](#deployment)
- [Tools](#tools)
- [Credits](#credits)


# UX

## User goals
- I want it to be clear what type of game it is
- I want to have clear rules layed out as to how to play the game
- I want to easily pick out which are the buttons to play the game
- I want the option to quit or restart the game whenever I like
- I want the game to be interactive and fun

## Returning visitor goals:


## As a website owner:
- I want to continuously update the game and ensure that all features are working as intended.

# Wireframes

All wireframes are made with Balsamiq Wireframes.

Intro screen

![intro-wireframe](assets/img/intro-wireframe.PNG)

Playfield
![playfield-wireframe](assets/img/playfield-wireframe.PNG)

Outro screen
![outro-wireframe](assets/img/outro-wireframe.PNG)

## Home


# Designs

## Colors

## Fonts
When picking fonts for this project, I wanted something that feels 'viking-esque' without making it cartoonish. 
The fonts I ended up chosing are; 
Lora for H1 headings
Tangerine for H2
Palanquin for list items and paragraphs

These were all picked out from generating font via https://fontjoy.com/
The fonts were then imported from https://fonts.google.com

## Images




# Features


# Features Left To Implement


# Testing

## Validator testing
 [See full HTML validation here]()


![HTML validation]()
 
 [See full CSS validation here]()

![CSS validation]()

[Contrast check]()

![Color image link]()


## Lighthouse testing

[Full test here]()

![Lighthouse test]()


## Wave testing

![Wave test](documentation/WAVE-report.png)

[Full test here]()


## Manual Testing

The website has been manually tested for responsiveness across Firefox, Google Chrome, and Edge on PC and on mobile on Samsung Galaxy S20.

| Action | Expected Behavior | Actual Behavior |
| :——-| :-—- | :-—- |
| test | test | test |

# Bugs

## Fixed bugs

- The computer choice didn't pick images according to console.log, and made me worried that something was wrong with the array.
Solved: Got adviced by a Slack member that the console.log was placed above the initialized function, and the computer was picking out the correct option.

- The score didn't reset when pressing the reset button but only when a new game was started and a move had been made. Asked for help from fellow students and got guided on how to call the correct function at the correct time in the script in order for the score to properly update.

- After adding two additional buttons to the playfield, one for resetting the game and one for quitting, the buttons on the outro screen with the same function stopped working. After a lot of back and forth, got guided by a Slack member on how to properly loop through buttons so they initialize the same function over and over again on different parts of the webpage.

- The logics of the rules didn't apply as planned, turned out I had entered the incorrect order into the 'if else' statement deciding which weapon wins over the other.


## Deployment

This project was deployed via GitHub Pages and the Gitpod browser, used as a development environment. From here I could commit and push my changes throughout the project.

Steps I took to deploy my website;

- Go to the repository for  Portfolio-project-2
- Click the Settings tab and locate the Pages tab
- Select to deploy from main branch
- A few minutes later, upon refreshing the page, my site was live

## Tools
- https://balsamiq.com/ - Balsamiq Wireframes
- https://tinypng.com/ - Image compression
- https://ui.dev/amiresponsive - Responsiveness testing
- https://jigsaw.w3.org/css-validator/validator - CSS validation
- https://validator.w3.org/ - HTML validator
- https://contrast-grid.eightshapes.com/ - Contrast checker
- https://developer.chrome.com/docs/devtools/ - Responsiveness testing/bug searching throughout the process
- https://www.w3schools.com/ & https://developer.mozilla.org/en-US/ - Visited several times during the projet to help get codes written correctly.

# Credits

- ReadMe layout taken from my previous project, Portfolio-Project-1, and adjusted for this project. Inspiration for that was picked from various projects from other Code Institute students from the #peer-code-review forum and https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md#deployment

- Code institute's template: https://github.com/Code-Institute-Org/gitpod-full-template

- I followed along tutorials from [developedbyed](https://www.youtube.com/watch?v=qWPtKtYEsN4&t=2811s) and [Code with Ania Kubów](https://www.youtube.com/watch?v=RwFeg0cEZvQ&t=764s) on [YouTube](https://www.youtube.com/) to better understand the process of creating a rock, paper, scissors type game and what functions are needed to get it to work.

Flavicon:
- Image converted with https://favicon.io/favicon-converter/

Fonts:
https://fonts.google.com

Images:

Shield: https://www.vecteezy.com/vector-art/425257-vector-shield-icon
Bow: https://www.vecteezy.com/vector-art/423523-bow-icon-vector-illustration
Sword: https://www.vecteezy.com/vector-art/420638-weapons-icon-vector-illustration


Sources:

