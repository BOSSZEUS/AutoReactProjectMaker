echo MONGODB_URI=mongodb://localhost:27017 > .env && echo off && cd client && echo MONGODB_URI=mongodb://localhost:27017 > .env && echo off && npm i && cd src && if not exist "views" mkdir "views" && if not exist "components" mkdir "components" && if not exist "utils" mkdir "utils" && cd ../../ && call npm install