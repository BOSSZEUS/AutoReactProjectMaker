# Automatic React Project Boilerplate Maker :boom:

## This tool should allow you to run the program and make a react project for you. 

### In the project folder, simply run ```npm i``` and it will install all necessary items and create the folder structure for you.
- #### This allows for a more compact react.js boilerplate with less manual work involved.
### Everything you won't need for basic React-App functionality has already been removed, but you can add them back at your discretion.

### TODO:
- [x] Remove unused modules in create-react-app framework such as webhooks, the react logo, etc.
- [x] Add an auto install script for NPM packages in a npm.json skeleton. Will need to add ``npm i && cd client && npm i && cd src && npm i``
- [x] Upload package.json and clone repo in separate dir to test install scripts, the above may need to be reversed with ``cd src`` before ``cd client``
- [x] Get local server working so that we can test the base application. 
- [x] Add logic to check what server environment you are operating in.
### TODO: 
- [ ] Maybe add a mongoose/mongo db model ensure easiest possible setup
- [ ] Run CMD prompts on install to run ```mongodb``` and ```mongo``` commmands in order to start and install the mongo instance ad DB
- [x] Create generic routes for defiined schema
