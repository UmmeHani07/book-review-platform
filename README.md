# book-review-platform
Deploying the Book Review Platform
This guide will walk you through deploying the Book Review Platform, which includes a Node.js backend (using Express) and a React frontend. The backend will be deployed using Render, and the frontend will be deployed using Netlify.

🚀 Backend Deployment (Node.js + Express)
Step 1:
Push the Backend Code to GitHub
Run the following commands to push your backend code:

git add .
git commit -m "Deploy backend"
git push origin main

Step 2:
Deploy on Render : https://render.com/
Go to Render.
-Click "New Web Service" and connect your GitHub repository.
-Choose your backend repo, and configure as follows:
-Runtime: Node.js
-Build Command: npm install
-Start Command: npm start
-Environment Variables:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
-Click "Deploy."
-Copy the Render URL (e.g., https://your-api.onrender.com) once deployed.

🚀 Frontend Deployment (React)
Push the Frontend Code to GitHub
Step 1:
Run the following commands to push your frontend code:

git add .
git commit -m "Deploy frontend"
git push origin main

Step 2:
Build the React App
Run this command inside your frontend folder:

npm run build

Step 3: 

Deploy on Netlify : https://www.netlify.com/
-Go to Netlify.
-Click "New Site from Git" and connect your GitHub repository.
-Select the frontend repo, and configure as follows:
Build Command: npm run build
Publish Directory: frontend/build
Environment Variable: REACT_APP_API_URL=https://your-api.onrender.com
-Click "Deploy."
-Copy the Netlify URL (e.g., https://your-app.netlify.app) once deployed.

Step 4:
Final Step: Update API URLs in Frontend
In frontend/src/api.js, update the API base URL:

const API_BASE_URL = "https://your-api.onrender.com";

Push the changes:

git add .
git commit -m "Update API URL"
git push origin main

Book Review Platform is Live!
Frontend: https://your-app.netlify.app
Backend: https://your-api.onrender.com
