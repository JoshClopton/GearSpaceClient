# BrainStation-Capstone

Gear Space

Gear Space is an inventory system that allows you to keep track of your outdoor equipment. You can create new "shelves" by searching for your items using Rapid API and you can then save and update those items as needed. Checkout my YouTube video my GearSpace project here https://youtu.be/ZPxhNqkDcBk

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Front-End
REACT_APP_SERVER_URL=http://localhost:8000

Back-End

# React App

CLIENT_URL=http://localhost:3000

## Installation

Install my-project with npm

Front-End

```bash
  npm install capstone-client
  cd capstone-client

  Back-End
  npm install capstone-client
  cd capstone-client
  Install Knex

```

For Google OAuth
Head to Google API Console and sign in using your email id.
From the project drop-down create a new project by filling in the project name "Gear Space".
In the sidebar under "APIs & Services", select OAuth Consent Screen, choose the appropriate User Type basis requirement (Should be testing). For public-facing app select external.
Fill in the application name(Gear Space), and hit Save.
Switch to Credentials tab from the sidebar and from the Create credentials drop-down list, choose OAuth client ID.
Under Application type, select Web application.
In Authorized redirect URI add http://localhost:8000/auth/google/redirect for dev env, for production env, this will be the server IP address or domain name followed by /auth/google/redirect
Press the Create button and copy the generated client ID and client secret. This will be used later in the Node app

## Tech Stack

**Client:** React, React-Router, Axios, Scss, GoogleOauth2,

**Server:** Node, Express
MySQL, NodeJS, Knex, PassportJS

**Code Snippet**
https://github.com/JoshClopton/BrainStation-Capstone/issues/3#issue-1314935942

## 🔗 Links
Here's a clip demonstrating how my app works https://youtu.be/ZPxhNqkDcBk
