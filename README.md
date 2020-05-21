# Automatic React Project Boilerplate Maker :boom:

## This tool should allow you to run the program and make a react project for you. 

### In the project folder, simply run ```npm i``` and it will install all necessary items and create the folder structure for you.
- #### This allows for a more compact react.js boilerplate with less manual work involved.
### Everything you won't need for basic React-App functionality has already been removed, but you can add them back at your discretion.

## Checklist:
- [x] Remove unused modules in create-react-app framework such as webhooks, the react logo, etc.
- [x] Add an auto install script for NPM packages in a npm.json skeleton. Will need to add ``npm i && cd client && npm i && cd src && npm i``.
- [x] Upload package.json and clone repo in separate dir to test install scripts, the above may need to be reversed with ``cd src`` before ``cd client``.
- [x] Get local server working so that we can test the base application. 
- [x] Add logic to check what server environment you are operating in.
- [x] Create generic routes for defiined schema.
- [x] Add a mongoose/mongo db model ensure easiest possible setup.
- [x] Run CMD prompts on install to run ```mongodb``` and ```mongo``` commmands in order to start and install the mongo instance ad DB.
### TODO: 
- [ ] Get Mongo config to install the generic DB on ```npm start```
- [ ] Add generic sign in page in views/components in order to test and utilize generic mongo db (appDatabase.db) and its routes.
- [ ] Add comments to instruct app users on how to get started and how to customize their projects.
- [ ] ? Maybe add general stylesheet for styling overrides if using a styling library (overrides.css) or simply for general styling with or without styling library (styles.css).
- [ ] ? Maybe add one sample of each components, views, etc. to help beginners get started.
- [ ] !! ANYTHING ELSE THE PROJECT MAY DESIRE !! 