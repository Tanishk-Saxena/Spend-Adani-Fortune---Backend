
# Spend Adani Money - Server

Built a full stack application to demonstrate state management using Redux Toolkit. Modeled after websites like spendelon-
fortune , this is a simple website that deploys its frontend on react.js and backend on express.js. MongoDB is used
to fetch stored items on MongoDB Atlas and the state of each item is managed through Redux Toolkit. There is a
receipt maintained and the user can choose to print it or save it as a PDF.

This is its backend which is responsible for fetching the database and all its items.

## Demo

https://spend-adani-fortune-backend.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/Tanishk-Saxena/Spend-Adani-Fortune---Backend
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ATLAS_URI_PUBLIC` = URI to your MongoDB Atlas Database with appropriate permissions so that no one can damage the database.