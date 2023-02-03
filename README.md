# DaddaBase REST API


## About

REST API for our Daddabase app.

- This repo implements the backend REST API (built in Express + MongoDB).
- A repository for the frontend (React App) can be found here: https://github.com/dadda-base/daddabase-client



## Instructions

To run in your computer, follow these steps:
- clone 
- install dependencies: `npm install`
- create a `.env` file with the following environment variables
  - ORIGIN, with the location of your frontend app (example, `ORIGIN=https://daddabase.netlify.app/`)
  - TOKEN_SECRET: used to sign auth tokens (example, `TOKEN_SECRET=ilovepizza`)
  CLOUDINARY_NAME = "cloudinary name"
  CLOUDINARY_KEY = "cloudinary key"
  CLOUDINARY_SECRET = "cloudinary secret"
- run the application: `npm run dev` or `npm start`


## API Endpoints

<br/>

**Auth endpoints**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/auth/signup  | –  | { email: String, password: String }  | Create an account  |
| POST  | /api/auth/login  | –  | { email: String, password: String }  | Login  |
| GET  | /api/auth/verify  | Authorization: Bearer `<jwt>`  | –  | Verify jwt  |


<br/>

**Posts**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/posts  | Authorization: Bearer `<jwt>`  | { title: String, description: String }  | Create new post  |
| GET  | /api/posts  | –  | –  | Get all posts  |



<br/>

**resources**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/resources  | Authorization: Bearer `<jwt>`  | { title: String, description: String, projectId: ObjectId }  | Create new resource  |
| GET  | /api/resources  | –  | –  | Get all resources  |
| GET  | /api/tasks/:resourceId  | –  | – | Get resource details.  |


## Demo

A demo of the REST API can be found here: https://daddabase-server.adaptable.app/
