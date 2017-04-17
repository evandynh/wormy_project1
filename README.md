# Project 1: Wormy

Wormy is a spinoff of the classic arcade game Snake. The goal is to collect food for wormy to eat will avoiding his ever growing tail.

Rules are simple:
- You can move Wormy is any direction.
- Each piece of food you eat adds to Wormy's tail.
- If you run into Wormy's tail or the boundary's of the board, you lose.
- Your time will display as a personal best once you have completed the level.

Aside from that, enjoy!

## Install Instructions
- Clone the Repo
- Click on GitHub link to open the game in your browser.

<br></br>

[TRELLO:  User Stories](https://trello.com/b/OAbeld43/project-1-wormy)

## Start Menu
![Start Menu](assets/Wormy_Start Menu.png)
## Gameboard
![Gameboard](assets/Wormy_Gameboard.png)

## Approach
  The only way to complete my game was to first appoarch HTML5 canvas. It was a new language, based on a grid system that can create animation based on re-drawing objects every frame per second. Like drawing a cartoon by hand. The tricky part was creating a moving snake that updates it's x and y coordinates while also checking for collisions with the walls and food pieces.
<br></br> My struggle through a more complicated game made my understanding of the draw/update cycle for movement easier to apply to my one object. Collision for the walls are based on the width and height of the gameboard while collisions with the food piece are based on a for loop with the snake length. If you check for the x and y coordinates of each box in the worm, you can map out an outline of the whole snake to check against the x and y of the food piece.
<br></br> After the MVP was accomplished, I moved into creating some modals for the start and end messages. I also applied a global variable to store both the current score and personal best score of the player. Each time the player loses, both scores are displayed as a comparison on the end modal. They also carry over into the game when a reset ('Try again') is invoked.
<br></br> After completing the core functions, I dove striaght into styling and stretch goals. That involved sound effects, background music, images, logos, etc. I've had a lot of fun working on the game. Their was a lot of struggling and despair the first couple days, but once canvas started to click, the process became really rewarding and fun. I also enjoyed helping out my peers with their games as they all had different obstacles to overcome.  

## MVP
- Create a Start menu that shows the rules of the game and displays a start button.
- Create a working Wormy in which the player can change directions with the keypad. 
- Create a running score that adds +1 point everytime a piece of food is collected.
- Create a randomly generated piece of food once the old one is collected.
- Create a winning display message that displays the time taken to complete the level as well as the personal best.
- Create a reset button that repositions Wormy back to his original spot and resets the score counter.

## Stretch Goals
- Create a pop up window (modul for custom pop up window) for the winning message. 
- Have the winning message show you the difference between your personal best and current score.
- Displayed Wormy with a stuffed belly upon losing the game.
- Create a yummy sound everytime Wormy eats a piece of food.
- Create a pause function, it which the player can pause the game with the spacebar.
- Display an image of the controls to be displayed left of the game board while playing.


## Technologies Used
- HTML
- CSS 
- Javascript / jQuery
- Canvas

## Unsolved Problems
- I was able to work around many of my intial challenges with the functionality of the game. Any further problems involved adding more features and stretch goals.
- Due to time constrants, I was unable to animate the modal transitions as well as animation wormy to get fatter as the player eats pieces.
