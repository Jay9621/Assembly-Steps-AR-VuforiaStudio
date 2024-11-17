# Assembly Steps in AR

This project demonstrates an Augmented Reality (AR) experience that guides users through an assembly process. It allows adding dynamic elements like 3D images, labels, pingers, and other visual aids between steps to enhance the experience.

## Features
- **Step-by-Step Instructions**: Guides users through each step of the assembly process.
- **Dynamic 3D Content**: Displays relevant 3D images, labels, or other elements based on the current step.
- **Interactivity**: Utilizes AngularJS scope and Ionic services like `$ionicPopup` and `$ionicPopover` for interactive overlays.
- **Customizable Elements**: Add 3D models, text labels, pingers, and more between steps to provide detailed guidance.

## Code Overview

- **setSequence()**: Initializes the assembly sequence.
- **resetSequence()**: Resets the sequence and displays the default text for Assembly Steps.
- **playSequence()**: Tracks the current step, updates labels, and controls the visibility of 3D images, labels, and other elements dynamically.


## Note: 
This project also includes simple code(steps.js) that displays assembly step descriptions directly linked to metadata from steps defined in Creo Illustrate. These steps are seamlessly integrated and shown in Vuforia Studio for an interactive AR experience.
