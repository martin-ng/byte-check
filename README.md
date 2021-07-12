# byte-check

## Introduction

Byte Check is a web application that allows user to check the insertions and deletions between two text inputs. This app is primarily used to check text files with planned implementations for text files and images.

Please visit the following link to see the frontend implementation of Byte Check.

https://bytecheck.netlify.app/

The app's backend is currently under progress and will utilize user management.


## Download

Step by step guide to download repo and start the app.


Clone the project to your selected directory:

> git clone https://github.com/martin-ng/byte-check.git

Change into the frontend directory:

> cd frontend

Install the NPM modules

> yarn install or npm install

Start the application

> yarn start or npm start

Visit the following URL to use Byte Check.

> http://localhost:8080/


###### Backend

Clone the project to your selected directory if you have not done so yet:

> git clone https://github.com/martin-ng/byte-check.git

Change into the backend directory:

> cd backend

Install the NPM modules

> yarn install or npm install

Start the application

> yarn start or npm start

Visit the following URL to use Byte Check.

> http://localhost:1337/


## Technologies

- React: Frontend framework that syncs the UI and state through its virtual DOM.

- Node: JavaScript runtime built on Chrome's V8 engine.

- Express: Node's web application framework.

- MongoDB: NoSQL docuemnt-oriented database to save the user's profile and saved texts.

- Jest: Testing framework.

- Typescript: A superset of Javascript to create typed components and functions.


## MVP Requirements 

1. User will see a frontend interface that allows the users to input an original and changed text inputs.

2. The algorithm performance should not exceed 100 milliseconds to display insertions and deletions between the two inputs.

3. Implement a back-end that will allow the user the store its text comparison for future review.

## Currently implementing

1. Implementing Node, Express, MongoDB to created a user database with the user's saved comparisons.

2. Improve the frontend user interface.

3. Implement Redis to handle user's JWT to save session.