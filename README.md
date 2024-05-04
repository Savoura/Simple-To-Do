# Simple To-Do Project

This project showcases the development of a simple React Native & Node.js  application.

## Project Overview

The Simple To-Do project is a reactnative application that provides a basic login and registration functionality along with a Todo list feature. It allows users to register, login, and manage their tasks by adding new todos.

## Project Setup

To run this project locally, please follow the steps below:

1. Clone the repository:
```
git clone https://github.com/Savoura/Simple-To-Do.git
```
2. Navigate to the project directory:
```
cd Simple-To-Do
```
3. Install dependencies for account service and frontend as well:
```
npm install
```
Create a `.env` file in the Account service directory and provide the necessary environment variables. Which will have the following.
```
DATABASE_URL="mongodb+srv://<username>:<password>@services.2qujmjq.mongodb.net/<collectionName>"
```
replace `username`, `password` and `collectionName` with the actual data.

4. Run the account service
```
npm run dev
```

5. Run the frontend:
```
npm start
```



