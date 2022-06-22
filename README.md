# Fun with AI 🤖

Whether you’re looking for a friendly chat, studying for an exam, or learning a new language, [Fun with AI](https://fun-with-ai-gjax78.netlify.app/) is a simple-to-use application that will help you unlock intellectual potential and may even strengthen your cognitive abilities.

There are a few friends to collaborate with, each a little unique:

1. Davinci - The most capable AI. He will help you reach your highest potential.
2. Curie - Faster than Davinci, but not quite as capable. She's still learning!
3. Babbage - Very straightforward and very fast.
4. Ada - A simple gal, but very speedy!

*If you're having trouble deciding, give Curie a try. 
    
After choosing your friend, put their knowledge to the test by typing a phrase of your choice in the text area (suggested prompts will be loaded for you after you choose your AI, but feel free to create your own as well). Have fun!

![gif](https://user-images.githubusercontent.com/88151743/168497487-f710d064-cea4-4e8b-a893-cb8c11ddb089.gif)

## Documentation
- GitHub Project Board can be found [here](https://github.com/gjax78/fun-with-ai/projects/1)
- Figma Wireframe can be found [here](https://www.figma.com/file/k2eSKiDGoleYgaNMvT83GS/FUN-WITH-AI?node-id=0%3A1)

## Table of Contents
- [Overview](#fun-with-ai-🤖)  
- [Documentation](#documentation)
- [Technologies](#technologies)
- [Code Architecture](#code-architecture)
- [Installation](#installation)
- [Stretch Goals (Extras)](#stretch-goals-extras)
- [Features](#features)
- [Future Additions](#future-additions)
- [Author](#author)

## Technologies
- React.js
- CSS
- HTML
- Cypress
- OpenAI API
- Figma

## Code Architecture
  - __cypress__
    - __fixtures__
      - [response.json](cypress/fixtures/response.json)
    - __integration__
      - [dashboard_spec.js](cypress/integration/dashboard_spec.js)
  - __src__
    - __components__
      - __App__
        - [App.css](src/App/App.css)
        - [App.js](src/App/App.js)
      - __Form__
        - [Form.css](src/components/Form/Form.css)
        - [Form.js](src/components/Form/Form.js)
      - __ResponseCard__
        - [ResponseCard.css](src/components/ResponseCard/ResponseCard.css)
        - [ResponseCard.js](src/components/ResponseCard/ResponseCard.js)
      - __Responses__
        - [Responses.css](src/components/Responses/Responses.css)
        - [Responses.js](src/components/Responses/Responses.js)
    - __util__
        - [apiCalls.js](src/apiCalls.js)
        - [questions](src/questions.js)
    - [index.css](src/index.css)
    - [index.js](src/index.js)

## Installation
- Deployed site [here](https://fun-with-ai-gjax78.netlify.app/)
- To view the code locally:
  1. Run `git clone git@github.com:gjax78/fun-with-ai.git` in your command line
  2. Run `cd fun-with-ai` to navigate into the repository
  3. Run `npm install`
  4. Sign up for an API key from [OpenAI](https://beta.openai.com/signup)
  5. Open the root directory of your cloned repo
  6. Create a .env.local file and store your API key as REACT_APP_API_KEY
  7. Run `npm start`
  8. The webpage will open in separate browser

## Features
- Form to submit a prompt and receive a response from an AI engine
- Ability to select the AI engine from a dropdown menu
- Randomized prompt presets that populate as placeholders after the user selects an AI engine
- 100% Lighthouse Accessibility score
- Loading symbol shows as site is POSTing data
- Responsive Design
- Error handling
- A hidden Easter egg in the Cypress testing file - see if you can find it!

## Future Additions
- Incorporate TypeScript
- Save responses if the user leaves or reloads the page
- Delete functionality for option to delete a response

## Author
- [Geena Jackson](https://github.com/gjax78)