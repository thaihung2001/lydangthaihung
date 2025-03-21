###  Problem_5 - API Server
1. Project Overview

Problem_5 is an API server built with Node.js, TypeScript, Express, and Sequelize, using SQLite as the database.

2. Project Structure

Problem_5/
|__ 📁 config/              #
│── 📁 database/            # Directory containing SQLite database file
│── 📁 models/              # Sequelize models
│── 📁 controllers/         # API logic handlers
│── 📁 routes/              # API route definitions
│── 📄 server.ts            # Main entry point
│── 📄 package.json         # Dependencies & scripts
│── 📄 tsconfig.json        # TypeScript configuration

3. Installation & Setup

 Requirements:

Node.js (>=16)

npm or yarn

🔹 Install Dependencies
    npm install

4. Run the Project

npm run dev

5. Database Setup

🔹 Initialize Database

If the database does not exist, Sequelize will automatically create the database.sqlite file inside the database/ directory.

6.  API Endpoints

🔹GET

/resources

Get all resources

🔹POST

/resources

Create a resource

🔹PUT

/resources/:id

Update a resource

🔹DELETE

/resources/:id

Delete a resource


