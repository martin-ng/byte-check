# byte-check

## Introduction

Byte Check is a web application that allows user to check the insertions and deletions between two text inputs. This app is primarily used to check text files with planned implementations for text files and images.

This app is extension of Diff Check! with plans to extend its functionality such as implementing a user management database that stores the user's comparisons. Please see the following link to see Byte Check's current implementation.

https://github.com/martin-ng/Diff-Check


## Technologies

- React: Frontend framework that syncs the UI and state through its virtual DOM.

- GraphQL: Query language to efficiently pull user data and allow the user to retain its session.

- Django: Python MVT (Model-View-Template) web framework to rapidly develop Byte Check's data access layer and business logic that communicates with its React-based frontend interface.

- Postgres: Relational database to store the user's account information and saved text inputs.

- Typescript: A superset of Javascript to create typed components and functions.

## MVP Requirements 

1. User will see a frontend interface that allows the users to input an original and changed text inputs.

2. The algorithm performance should not exceed 100 milliseconds to display insertions and deletions between the two inputs.

3. Implement a back-end that will allow the user the store its text comparison for future review.

## Currently implementing

1. Implementing Django, GraphQL, and Postgres to created a user database with the user's saved comparisons.

2. Improve the frontend user interface.